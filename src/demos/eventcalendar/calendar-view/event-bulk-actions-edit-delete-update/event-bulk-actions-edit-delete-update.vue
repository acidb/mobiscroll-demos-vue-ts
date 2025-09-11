<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscButton,
  MbscConfirm,
  MbscEventcalendar,
  MbscPage,
  MbscSelect,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageLoadingEvent,
  MbscSelectedEventsChangeEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myView: MbscEventcalendarView = {
  calendar: { labels: 'all' }
}

const contextMenu = [
  {
    text: 'Update',
    value: 'update'
  },
  {
    text: 'Delete',
    value: 'delete'
  }
]

const myEvents = ref<MbscCalendarEvent[]>([])
const mySelectedEvents = ref<MbscCalendarEvent[]>([])
const eventTitles = ref<string[]>([])
const firstDay = ref<any>(null)
const lastDay = ref<any>(null)
const menuAnchor = ref<any>(null)
const menuOpen = ref<boolean>(false)
const selected = ref<string>('')
const isConfirmOpen = ref<boolean>(false)
const confirmMessage = ref<string>('')
const confirmCallback = ref<any>()
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
const calElm = ref<any>()

function getSelectedEventTitles(events: MbscCalendarEvent[]) {
  let titles: string[] = []

  for (const event of events) {
    titles = [...titles, event.title!]
  }
  return titles
}

function refreshSelectedEvents(events: MbscCalendarEvent[]) {
  mySelectedEvents.value = events
  eventTitles.value = getSelectedEventTitles(events)
}

function deleteSelectedEvents() {
  isConfirmOpen.value = true
  confirmMessage.value = getSelectedEventTitles(mySelectedEvents.value).join(', ')
  confirmCallback.value = (result: boolean) => {
    if (result) {
      let eventsToUpdate = [...myEvents.value]

      for (const event of mySelectedEvents.value) {
        if (event.recurring) {
          const origEvent = event.original!
          let exc: any = origEvent.recurringException || []
          exc = [...exc, event.start]
          origEvent.recurringException = exc

          // Update the event in the list
          const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id)
          eventsToUpdate.splice(index, 1, origEvent)
        } else {
          eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id)
        }
      }

      myEvents.value = eventsToUpdate
      refreshSelectedEvents([])

      toastMessage.value = 'Deleted'
      isToastOpen.value = true
    }
    isConfirmOpen.value = false
  }
}

function updateSelectedEvents() {
  const events: any =
    mySelectedEvents.value.length === 0 ? [mySelectedEvents.value] : mySelectedEvents.value
  let eventsToUpdate = [...myEvents.value]

  for (const event of events) {
    if (event.recurring) {
      const origEvent = event.original
      let exc = origEvent.recurringException || []
      const newEvent = event

      newEvent.recurring = undefined
      newEvent.color = 'orange'
      newEvent.id += '_' + formatDate('YYYY-MM-DD', event.start)
      eventsToUpdate = [...eventsToUpdate, newEvent]

      exc = [...exc, event.start]
      origEvent.recurringException = exc

      // Update the event in the list
      const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id)
      eventsToUpdate.splice(index, 1, origEvent)
    } else {
      const newEv = event
      newEv.color = 'orange'
      const index = eventsToUpdate.findIndex((x) => x.id === newEv.id)
      eventsToUpdate.splice(index, 1, newEv)
    }
  }

  toastMessage.value = "All selected event's color changed to orange"
  isToastOpen.value = true

  myEvents.value = eventsToUpdate
  refreshSelectedEvents([])
}

function selectAllEvents() {
  const selectedEvents = calElm.value.instance.getEvents(firstDay.value, lastDay.value)
  refreshSelectedEvents(selectedEvents)
  toastMessage.value = 'All events selected from view'
  isToastOpen.value = true
}

function resetSelection() {
  refreshSelectedEvents([])
  toastMessage.value = 'Selection cleared'
  isToastOpen.value = true
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  setTimeout(() => {
    firstDay.value = args.firstDay
    lastDay.value = args.lastDay
  })
}

function handleSelectedEventsChange(args: MbscSelectedEventsChangeEvent) {
  if (args.events) {
    refreshSelectedEvents(args.events)
  }
}

function handleEventRightClick(args: MbscEventClickEvent) {
  args.domEvent.preventDefault()
  menuAnchor.value = args.domEvent.target
  setTimeout(() => {
    menuOpen.value = true
  })
}

function handleEventDelete() {
  if (!isConfirmOpen.value) {
    deleteSelectedEvents()
    return false
  }
}

function handleSelectChange(args: any) {
  selected.value = args.value
  if (args.value === 'update') {
    updateSelectedEvents()
  } else if (args.value === 'delete') {
    deleteSelectedEvents()
  }
}

function handleMenuClose() {
  selected.value = ''
  menuOpen.value = false
}

function handleConfirmClose() {
  isConfirmOpen.value = false
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )

  document.querySelector('.md-bulk-operations')!.addEventListener('keydown', (ev: any) => {
    if (!isConfirmOpen.value && (ev.keyCode === 8 || ev.keyCode === 46)) {
      deleteSelectedEvents()
    }
  })
})
</script>

<template>
  <MbscPage className="md-bulk-operations">
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-9 mbsc-push-sm-3">
          <MbscEventcalendar
            className="md-bulk-operations-border"
            ref="calElm"
            :data="myEvents"
            :view="myView"
            :clickToCreate="true"
            :selectMultipleEvents="true"
            :selectedEvents="mySelectedEvents"
            @event-delete="handleEventDelete"
            @page-loading="handlePageLoading"
            @selected-events-change="handleSelectedEventsChange"
            @event-right-click="handleEventRightClick"
          />
          <MbscSelect
            display="anchored"
            :inputProps="{ type: 'hidden' }"
            :touchUi="false"
            :anchor="menuAnchor"
            :data="contextMenu"
            :value="selected"
            :isOpen="menuOpen"
            @change="handleSelectChange"
            @close="handleMenuClose"
          />
        </div>
        <div class="mbsc-col-sm-3 mbsc-pull-sm-9">
          <div class="mbsc-form-group">
            <div class="mbsc-button-group-block">
              <MbscButton @click="selectAllEvents">Select all this month</MbscButton>
              <MbscButton @click="resetSelection">Reset selection</MbscButton>
              <MbscButton @click="updateSelectedEvents">Update selected</MbscButton>
            </div>
          </div>
          <div class="mbsc-form-group-title">Currently selected</div>
          <div class="mbsc-padding md-selected-event-list">
            <ul>
              <li v-for="title in eventTitles" :key="title">{{ title }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <MbscConfirm
      title="Are you sure you want to delete the following events?"
      okText="Delete"
      :message="confirmMessage"
      :callback="confirmCallback"
      :isOpen="isConfirmOpen"
      @close="handleConfirmClose"
    />
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  </MbscPage>
</template>

<style>
.md-bulk-operations-border {
  border-left: 1px solid #ccc;
}

.md-selected-event-list {
  height: 500px;
  overflow: auto;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
