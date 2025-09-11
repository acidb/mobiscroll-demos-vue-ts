<script setup lang="ts">
import {
  MbscEventcalendar,
  MbscPage,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscSelect,
  MbscSnackbar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscCellClickEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventDeletedEvent,
  MbscPageLoadingEvent,
  MbscSelectedEventsChangeEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const today: Date = new Date()

const defaultMenuData = [
  { text: 'Copy', value: 'c' },
  { text: 'Cut', value: 'x' },
  { text: 'Paste', value: 'v' },
  { text: 'Delete', value: 'delete' }
]

const disabledMenu = [
  { text: 'Copy', value: 'c', disabled: true },
  { text: 'Cut', value: 'x', disabled: true },
  { text: 'Paste', value: 'v' },
  { text: 'Delete', value: 'delete', disabled: true }
]

const firstEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,2,9)',
    end: 'dyndatetime(y,m,6,18)',
    title: 'Business of Software Conference',
    color: '#ff6d42'
  },
  {
    start: 'dyndatetime(y,m,10,7)',
    end: 'dyndatetime(y,m,10,8)',
    title: 'Green box to post office',
    color: '#6e7f29'
  },
  {
    start: 'dyndatetime(y,m,15,9,30)',
    end: 'dyndatetime(y,m,15,10,30)',
    title: 'Product team mtg.',
    color: '#f67944'
  },
  {
    start: 'dyndatetime(y,m,23,11,0)',
    end: 'dyndatetime(y,m,23,11,45)',
    title: 'Stakeholder mtg.',
    color: '#a144f6'
  },
  {
    start: 'dyndatetime(y,m,28,13,0)',
    end: 'dyndatetime(y,m,28,13,45)',
    title: "Lunch @ Butcher's",
    color: '#00aabb'
  }
])

const secondEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,4,8,45)',
    end: 'dyndatetime(y,m,4,10)',
    title: 'Quick mtg. with Martin',
    color: '#de3d83'
  },
  {
    start: 'dyndatetime(y,m,8,15,0)',
    end: 'dyndatetime(y,m,8,16,0)',
    title: 'General orientation',
    color: '#a71111'
  },
  {
    start: 'dyndatetime(y,m,10,13)',
    end: 'dyndatetime(y,m,14,21)',
    title: 'Friends binge marathon',
    color: '#7bde83'
  },
  {
    start: 'dyndatetime(y,m,23,8)',
    end: 'dyndatetime(y,m,27,9)',
    title: 'Product team mtg.',
    color: '#913aa7'
  }
])

const myView: MbscEventcalendarView = {
  calendar: { labels: 'all' }
}
const menuData = ref(defaultMenuData)
const selectValue = ref<string>('')
const menuAnchor = ref<any>(null)
const activeCalendar = ref<string>('first')
const cutCalendar = ref<string>('first')
const toDate = ref<Date>(today)
const firstToDate = ref<Date>(today)
const secondToDate = ref<Date>(today)
const originDate = ref<Date>(today)
const isMenuOpen = ref<boolean>(false)
const selectedEvents = ref<MbscCalendarEvent[]>([])
const moveEvents = ref<MbscCalendarEvent[]>([])
const pastedEvents = ref<MbscCalendarEvent[]>([])
const deletedEvents = ref<MbscCalendarEvent[]>([])
const action = ref<string>('')
const snackbarMessage = ref<string>('')
const snackbarButton = ref<any>(null)
const isSnackbarOpen = ref<boolean>(false)
const toastMessage = ref<any>(null)
const isToastOpen = ref<boolean>(false)
const dummyElm = ref<any>(null)
const menuElm = ref<any>(null)
const firstSelectedEvents = ref<MbscCalendarEvent[]>([])
const secondSelectedEvents = ref<MbscCalendarEvent[]>([])

function monthDiff(d1: Date, d2: Date) {
  return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear())
}

function pasteEvents() {
  const activeEvents = getActiveEvents()
  const activeSelectedEvents = selectedEvents.value
  let eventsToUpdate = [...activeEvents]
  if (activeSelectedEvents.length > 0) {
    for (const event of activeSelectedEvents) {
      const newEvent = Object.assign({}, event)
      const startDate = new Date(event.start as string)
      const endDate = new Date(event.end as string)
      const diff = Math.abs(endDate.getTime() - startDate.getTime())

      startDate.setMonth(startDate.getMonth() - monthDiff(toDate.value, originDate.value))

      newEvent.start = startDate
      newEvent.end = new Date(startDate.getTime() + diff)

      delete newEvent.id

      eventsToUpdate = [...eventsToUpdate, newEvent]

      pastedEvents.value = [...pastedEvents.value, newEvent]
    }

    if (activeCalendar.value === 'first') {
      firstEvents.value = eventsToUpdate
    } else {
      secondEvents.value = eventsToUpdate
    }

    if (action.value === 'cut') {
      let cutEvs = cutCalendar.value === 'first' ? firstEvents.value : secondEvents.value
      moveEvents.value = [...selectedEvents.value]
      for (const event of selectedEvents.value) {
        cutEvs = cutEvs.filter((ev) => ev.id !== event.id)
      }
      if (cutCalendar.value === 'first') {
        firstEvents.value = cutEvs
      } else {
        secondEvents.value = cutEvs
      }

      snackbarButton.value = {
        action: () => {
          let revertEvs = cutCalendar.value === 'first' ? firstEvents.value : secondEvents.value
          for (const event of moveEvents.value) {
            revertEvs = [...revertEvs, event]
          }
          if (cutCalendar.value === 'first') {
            firstEvents.value = revertEvs
          } else {
            secondEvents.value = revertEvs
          }

          let cutEvs = getActiveEvents()
          for (const event of pastedEvents.value) {
            cutEvs = cutEvs.filter((ev) => ev.id !== event.id)
          }
          if (activeCalendar.value === 'first') {
            firstEvents.value = cutEvs
          } else {
            secondEvents.value = cutEvs
          }

          toastMessage.value =
            'Event' + (selectedEvents.value.length === 1 ? '' : 's') + ' reverted'
          isToastOpen.value = true
        },
        text: 'Undo'
      }
      snackbarMessage.value = 'Event' + (selectedEvents.value.length === 1 ? '' : 's') + ' pasted'
      dummyElm.value.focus()
      isSnackbarOpen.value = true
    } else {
      toastMessage.value = 'Event' + (activeSelectedEvents.length === 1 ? '' : 's') + ' pasted'
      isToastOpen.value = true
    }
    if (action.value !== 'copy') {
      selectedEvents.value = []
    }
  }
}

function getActiveEvents() {
  return activeCalendar.value === 'first' ? firstEvents.value : secondEvents.value
}

function getActiveSelectedEvents() {
  return activeCalendar.value === 'first' ? firstSelectedEvents.value : secondSelectedEvents.value
}

function deleteEvents() {
  const activeEvents = getActiveEvents()
  let eventsToUpdate = [...activeEvents]
  action.value = 'delete'
  const activeSelectedEvents = getActiveSelectedEvents()

  if (activeSelectedEvents.length > 0) {
    deletedEvents.value = activeSelectedEvents

    for (const event of activeSelectedEvents) {
      eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id)
    }

    if (activeCalendar.value === 'first') {
      firstEvents.value = eventsToUpdate
    } else {
      secondEvents.value = eventsToUpdate
    }

    snackbarButton.value = {
      action: () => {
        for (const event of activeSelectedEvents) {
          eventsToUpdate = [...eventsToUpdate, event]
        }
        if (activeCalendar.value === 'first') {
          firstEvents.value = eventsToUpdate
        } else {
          secondEvents.value = eventsToUpdate
        }
        deletedEvents.value = []
      },
      text: 'Undo'
    }
    snackbarMessage.value = 'Event' + (activeSelectedEvents.length === 1 ? '' : 's') + ' deleted'
    dummyElm.value.focus()
    isSnackbarOpen.value = true
  }
}

function activateAction(type: string) {
  if (selectedEvents.value.length > 0) {
    const act = type == 'copy' ? ' copied' : ' cut'
    originDate.value = toDate.value
    toastMessage.value = 'Event' + (selectedEvents.value.length === 1 ? '' : 's') + act
    isToastOpen.value = true
  }
}

function copyEvents() {
  if (activeCalendar.value === 'first') {
    if (firstSelectedEvents.value.length > 0) {
      action.value = 'copy'
      selectedEvents.value = firstSelectedEvents.value
      activateAction('copy')
    }
  } else {
    if (secondSelectedEvents.value.length > 0) {
      action.value = 'copy'
      selectedEvents.value = secondSelectedEvents.value
      activateAction('copy')
    }
  }
}

function cutEvents() {
  if (activeCalendar.value === 'first') {
    if (firstSelectedEvents.value.length > 0) {
      action.value = 'cut'
      selectedEvents.value = firstSelectedEvents.value
      cutCalendar.value = activeCalendar.value
      activateAction('cut')
      deletedEvents.value = []
    }
  } else {
    if (secondSelectedEvents.value.length > 0) {
      action.value = 'cut'
      selectedEvents.value = secondSelectedEvents.value
      cutCalendar.value = activeCalendar.value
      activateAction('cut')
      deletedEvents.value = []
    }
  }
}

function undoEvents() {
  const activeEvents = getActiveEvents()
  let eventsToUpdate = [...activeEvents]
  if (action.value === 'delete') {
    for (const event of deletedEvents.value) {
      eventsToUpdate = [...eventsToUpdate, event]
    }
    if (activeCalendar.value === 'first') {
      firstEvents.value = eventsToUpdate
    } else {
      secondEvents.value = eventsToUpdate
    }
    deletedEvents.value = []
  } else if (action.value === 'cut') {
    let revertEvs = cutCalendar.value === 'first' ? firstEvents.value : secondEvents.value
    for (const event of moveEvents.value) {
      revertEvs = [...revertEvs, event]
    }
    if (cutCalendar.value === 'first') {
      firstEvents.value = revertEvs
    } else {
      secondEvents.value = revertEvs
    }

    let cutEvs = getActiveEvents()
    for (const event of pastedEvents.value) {
      cutEvs = cutEvs.filter((ev) => ev.id !== event.id)
    }
    if (activeCalendar.value === 'first') {
      firstEvents.value = cutEvs
    } else {
      secondEvents.value = cutEvs
    }

    pastedEvents.value = []
  }
}

function detectAction(key: string) {
  switch (key) {
    case 'delete': // Delete
      deleteEvents()
      break
    case 'c': // Copy
      copyEvents()
      break
    case 'x': // Cut
      cutEvents()
      break
    case 'z': // Undo
      undoEvents()
      break
    case 'v': // Paste
      pasteEvents()
      break
  }
}

function switchCalendar(ev: any) {
  if (ev.target.value === 'first') {
    toDate.value = firstToDate.value
    secondSelectedEvents.value = []
  } else {
    toDate.value = secondToDate.value
    firstSelectedEvents.value = []
  }
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  if (activeCalendar.value === 'first') {
    firstToDate.value = args.month!
  } else {
    secondToDate.value = args.month!
  }
  toDate.value = args.month!
}

function handleCellRightClick(args: MbscCellClickEvent) {
  if (!isMenuOpen.value) {
    args.domEvent.preventDefault()
    menuData.value = disabledMenu
    menuAnchor.value = args.domEvent.target
    isMenuOpen.value = true
  }
}

function handleEventRightClick(args: MbscEventClickEvent) {
  const activeEvents = activeCalendar.value === 'first' ? firstEvents.value : secondEvents.value
  if (activeEvents.length <= 1) {
    if (activeCalendar.value === 'first') {
      firstEvents.value = [args.event]
    } else {
      secondEvents.value = [args.event]
    }
  }
  args.domEvent.preventDefault()
  menuData.value = defaultMenuData
  menuAnchor.value = args.domEvent.target
  isMenuOpen.value = true
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  deletedEvents.value = args.events!
  action.value = 'delete'
  snackbarButton.value = {
    action: () => {
      const activeEvents = activeCalendar.value === 'first' ? firstEvents.value : secondEvents.value
      let eventsToUpdate = [...activeEvents]
      for (const event of deletedEvents.value) {
        eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id)
      }

      if (activeCalendar.value === 'first') {
        firstEvents.value = eventsToUpdate
      } else {
        secondEvents.value = eventsToUpdate
      }

      deletedEvents.value = []
    },
    text: 'Undo'
  }
  snackbarMessage.value = 'Event' + (deletedEvents.value.length === 1 ? '' : 's') + ' deleted'
  dummyElm.value.focus()
  isSnackbarOpen.value = true
}

function handleFirstSelectedEventsChange(args: MbscSelectedEventsChangeEvent) {
  firstSelectedEvents.value = args.events
}

function handleSecondSelectedEventsChange(args: MbscSelectedEventsChangeEvent) {
  secondSelectedEvents.value = args.events
}

function handleSelectChange(args: any) {
  detectAction(args.value)
}

function handleSelectClose() {
  isMenuOpen.value = false
  selectValue.value = ''
}

function handleKeyDown(ev: any) {
  if (ev.ctrlKey || ev.metaKey) {
    detectAction(ev.key)
  }
  if (ev.key === 'Delete') {
    detectAction('delete')
  }
}
</script>

<template>
  <MbscPage @keydown="handleKeyDown($event)">
    <div class="mbsc-flex-col md-copy-cut-paste">
      <div class="mbsc-flex-none">
        <MbscSegmentedGroup v-model="activeCalendar" @change="switchCalendar($event)">
          <MbscSegmented value="first">First calendar</MbscSegmented>
          <MbscSegmented value="second">Second calendar</MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <div class="mbsc-flex-col mbsc-flex-1-1">
        <div id="demo-copy-cut-paste-first-cont" class="mbsc-flex-1-1 md-copy-cut-paste-cont">
          <MbscEventcalendar
            :data="firstEvents"
            :selectedEvents="firstSelectedEvents"
            :className="activeCalendar === 'second' ? 'md-hide-calendar' : ''"
            :view="myView"
            :clickToCreate="true"
            :dragToCreate="true"
            :dragToMove="true"
            :dragToResize="true"
            :selectMultipleEvents="true"
            @selected-events-change="handleFirstSelectedEventsChange"
            @page-loading="handlePageLoading"
            @cell-right-click="handleCellRightClick"
            @event-right-click="handleEventRightClick"
            @event-deleted="handleEventDeleted"
          />
        </div>
        <div id="demo-copy-cut-paste-second-cont" class="mbsc-flex-1-1 md-copy-cut-paste-cont">
          <MbscEventcalendar
            :data="secondEvents"
            :selectedEvents="secondSelectedEvents"
            :className="activeCalendar === 'first' ? 'md-hide-calendar' : ''"
            :view="myView"
            :clickToCreate="true"
            :dragToCreate="true"
            :dragToMove="true"
            :dragToResize="true"
            :selectMultipleEvents="true"
            @selected-events-change="handleSecondSelectedEventsChange"
            @page-loading="handlePageLoading"
            @cell-right-click="handleCellRightClick"
            @event-right-click="handleEventRightClick"
            @event-deleted="handleEventDeleted"
          />
        </div>
        <MbscSelect
          ref="menuElm"
          display="anchored"
          v-model="selectValue"
          :touchUi="false"
          :data="menuData"
          :anchor="menuAnchor"
          :buttons="[]"
          :isOpen="isMenuOpen"
          :inputProps="{ type: 'hidden' }"
          @change="handleSelectChange"
          @close="handleSelectClose"
        />
      </div>
    </div>
    <div ref="dummyElm" tabindex="-1"></div>
    <MbscSnackbar
      :message="snackbarMessage"
      :button="snackbarButton"
      :duration="3000"
      :isOpen="isSnackbarOpen"
      @close="isSnackbarOpen = false"
    />
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
  </MbscPage>
</template>

<style>
.md-copy-cut-paste .mbsc-segmented {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.md-copy-cut-paste .md-hide-calendar {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
