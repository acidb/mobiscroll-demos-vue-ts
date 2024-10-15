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
  MbscEventUpdateEvent,
  MbscSelectChangeEvent,
  MbscSelectedEventsChangeEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calRef = ref<typeof MbscEventcalendar>()
const confirmMessage = ref('')
const menuAction = ref('')
const menuAnchor = ref<HTMLElement>()
const menuOpen = ref(false)
const myEvents = ref<MbscCalendarEvent[]>([])
const isConfirmOpen = ref(false)
const isToastOpen = ref(false)
const selectedEvent = ref<MbscCalendarEvent>()
const selectedEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref('')

const myView: MbscEventcalendarView = { agenda: { type: 'month' } }

const menuData = [
  { text: 'Update', value: 'update' },
  { text: 'Delete', value: 'delete' }
]

function updateSelectedEvents() {
  const updatedEvents = [...myEvents.value]
  const events =
    selectedEvents.value.length === 0 && selectedEvent.value
      ? [selectedEvent.value]
      : selectedEvents.value
  for (const event of events) {
    const index = updatedEvents.findIndex((x) => x.id === event.id)
    // Handle recurring event occurrence
    if (event.recurring) {
      // Create a new event, with updated color and id
      const newEvent = {
        ...event,
        color: 'orange',
        id: event.id + '_' + formatDate('YYYY-MM-DD', event.start as Date),
        recurring: undefined
      }
      // Update the original event with a recurring exception
      const updatedEvent = event.original!
      const updatedExceptionDates = (updatedEvent.recurringException || []) as Date[]
      updatedExceptionDates.push(event.start as Date)
      updatedEvent.recurringException = updatedExceptionDates
      updatedEvents.splice(index, 1, updatedEvent)
      updatedEvents.push(newEvent)
    } else {
      // Update the event color
      const updatedEvent = { ...event, color: 'orange' }
      updatedEvents.splice(index, 1, updatedEvent)
    }
  }
  myEvents.value = updatedEvents
  selectedEvents.value = []
  toastMessage.value = "All selected event's color changed to orange"
  isToastOpen.value = true
}

function deleteSelectedEvents() {
  const events =
    selectedEvents.value.length === 0 && selectedEvent.value
      ? [selectedEvent.value]
      : selectedEvents.value
  confirmMessage.value = events.map((e) => e.title).join(', ')
  isConfirmOpen.value = true
}

function selectAllEvents() {
  selectedEvents.value = calRef.value!.instance.getEvents()
  toastMessage.value = 'All events selected from view'
  isToastOpen.value = true
}

function resetSelection() {
  selectedEvents.value = []
  toastMessage.value = 'Selection cleared'
  isToastOpen.value = true
}

function handleConfirmClose(result: boolean) {
  if (result) {
    const events =
      selectedEvents.value.length === 0 && selectedEvent.value
        ? [selectedEvent.value]
        : selectedEvents.value
    const updatedEvents = [...myEvents.value]
    for (const event of events) {
      const index = updatedEvents.findIndex((x) => x.id === event.id)
      // Handle recurring event occurrence
      if (event.recurring) {
        // Update the original event with a recurring exception
        const updatedEvent = event.original!
        const updatedExceptionDates = (updatedEvent.recurringException || []) as Date[]
        updatedExceptionDates.push(event.start as Date)
        updatedEvent.recurringException = updatedExceptionDates
        updatedEvents.splice(index, 1, updatedEvent)
      } else {
        // Remove the event
        updatedEvents.splice(index, 1)
      }
    }

    myEvents.value = updatedEvents
    selectedEvents.value = []
    toastMessage.value = 'Deleted'
    isToastOpen.value = true
  }
  isConfirmOpen.value = false
}

function handleEventUpdate(args: MbscEventUpdateEvent) {
  if (args.isDelete) {
    if (!isConfirmOpen.value) {
      deleteSelectedEvents()
    }
    return false
  }
}

function handleEventDelete() {
  if (!isConfirmOpen.value) {
    deleteSelectedEvents()
    return false
  }
}

function handleEventRightClick(args: MbscEventClickEvent) {
  args.domEvent.preventDefault()
  selectedEvent.value = args.event
  menuAnchor.value = args.domEvent.target
  menuOpen.value = true
}

function handleSelectedEventsChange(args: MbscSelectedEventsChangeEvent) {
  selectedEvents.value = args.events
}

function handleMenuChange(args: MbscSelectChangeEvent) {
  menuAction.value = args.value
  if (args.value === 'update') {
    updateSelectedEvents()
  } else if (args.value === 'delete') {
    deleteSelectedEvents()
  }
}

function handleMenuClose() {
  menuAction.value = ''
  menuOpen.value = false
}

function handleDeleteKey(ev: KeyboardEvent) {
  if (
    !isConfirmOpen.value &&
    (ev.code === 'Delete' || ev.code === 'Backspace' || ev.keyCode === 8 || ev.keyCode === 46)
  ) {
    deleteSelectedEvents()
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage cssClass="mds-bulk-actions" @keydown="handleDeleteKey">
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mds-bulk-actions-calendar mbsc-col-sm-9 mbsc-push-sm-3">
          <MbscEventcalendar
            ref="calRef"
            :data="myEvents"
            :view="myView"
            :selectMultipleEvents="true"
            :selectedEvents="selectedEvents"
            @event-delete="handleEventDelete"
            @event-update="handleEventUpdate"
            @event-right-click="handleEventRightClick"
            @selected-events-change="handleSelectedEventsChange"
          />
          <MbscSelect
            display="anchored"
            :anchor="menuAnchor"
            :data="menuData"
            :isOpen="menuOpen"
            :showInput="false"
            :touchUi="false"
            :value="menuAction"
            @change="handleMenuChange"
            @close="handleMenuClose"
          />
        </div>
        <div class="mbsc-col-sm-3 mbsc-pull-sm-9 mbsc-flex-col">
          <div class="mbsc-button-group-block">
            <MbscButton @click="selectAllEvents">Select all from view</MbscButton>
            <MbscButton @click="resetSelection">Reset selection</MbscButton>
            <MbscButton @click="updateSelectedEvents">Update selected</MbscButton>
          </div>
          <div class="mbsc-form-group-title">Currently selected</div>
          <div class="mds-bulk-actions-event-list mbsc-padding mbsc-flex-1-1">
            <ul>
              <li v-for="event in selectedEvents" :key="event.id">{{ event.title }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <MbscConfirm
      okText="Delete"
      title="Are you sure you want to delete the following events?"
      :isOpen="isConfirmOpen"
      :message="confirmMessage"
      @close="handleConfirmClose"
    />
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
  </MbscPage>
</template>

<style>
.mds-bulk-actions,
.mds-bulk-actions .mbsc-grid,
.mds-bulk-actions .mbsc-row,
.mds-bulk-actions .mbsc-col-sm-9,
.mds-bulk-actions .mbsc-col-sm-3 {
  height: 100%;
}

.mds-bulk-actions-calendar {
  border-left: 1px solid #ccc;
}

.mds-bulk-actions-event-list {
  overflow: auto;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
