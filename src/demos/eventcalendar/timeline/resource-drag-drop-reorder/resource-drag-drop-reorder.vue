<script setup lang="ts">
import {
  MbscButton,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventDeleteEvent,
  MbscEventUpdateEvent,
  MbscResource,
  MbscResourceOrderEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const toastMessage = ref('')
const isToastOpen = ref(false)
const myEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    title: 'Event 1',
    start: 'dyndatetime(y,m,1)',
    end: 'dyndatetime(y,m,5)',
    resource: 14,
    color: 'green'
  },
  {
    id: 2,
    title: 'Event 2',
    start: 'dyndatetime(y,m,3)',
    end: 'dyndatetime(y,m,7)',
    resource: 2,
    color: 'blue'
  },
  {
    id: 3,
    title: 'Event 3',
    start: 'dyndatetime(y,m,5)',
    end: 'dyndatetime(y,m,10)',
    resource: 10,
    color: 'red'
  },
  {
    id: 4,
    title: 'Event 4',
    start: 'dyndatetime(y,m,7)',
    end: 'dyndatetime(y,m,11)',
    resource: 9,
    color: 'yellow'
  },
  {
    id: 5,
    title: 'Event 5',
    start: 'dyndatetime(y,m,9)',
    end: 'dyndatetime(y,m,12)',
    resource: 6,
    color: 'purple'
  },
  //<hidden>
  {
    id: 6,
    title: 'Event 6',
    start: 'dyndatetime(y,m,11)',
    end: 'dyndatetime(y,m,15)',
    resource: 1,
    color: 'orange'
  },
  {
    id: 7,
    title: 'Event 7',
    start: 'dyndatetime(y,m,13)',
    end: 'dyndatetime(y,m,17)',
    resource: 4,
    color: 'pink'
  },
  {
    id: 8,
    title: 'Event 8',
    start: 'dyndatetime(y,m,15)',
    end: 'dyndatetime(y,m,19)',
    resource: 3,
    color: 'cyan'
  },
  {
    id: 9,
    title: 'Event 9',
    start: 'dyndatetime(y,m,17)',
    end: 'dyndatetime(y,m,21)',
    resource: 12,
    color: 'magenta'
  },
  {
    id: 10,
    title: 'Event 10',
    start: 'dyndatetime(y,m,19)',
    end: 'dyndatetime(y,m,24)',
    resource: 7,
    color: 'lime'
  },
  {
    id: 11,
    title: 'Event 11',
    start: 'dyndatetime(y,m,21)',
    end: 'dyndatetime(y,m,25)',
    resource: 14,
    color: 'green'
  },
  {
    id: 12,
    title: 'Event 12',
    start: 'dyndatetime(y,m,26)',
    end: 'dyndatetime(y,m,28)',
    resource: 2,
    color: 'blue'
  },
  {
    id: 13,
    title: 'Event 13',
    start: 'dyndatetime(y,m,25)',
    end: 'dyndatetime(y,m,29)',
    resource: 10,
    color: 'red'
  },
  {
    id: 14,
    title: 'Event 14',
    start: 'dyndatetime(y,m,28)',
    end: 'dyndatetime(y,m,31)',
    resource: 9,
    color: 'yellow'
  },
  {
    id: 15,
    title: 'Event 15',
    start: 'dyndatetime(y,m,29)',
    end: 'dyndatetime(y,m,3)',
    resource: 6,
    color: 'purple'
  },
  {
    id: 16,
    title: 'Event 16',
    start: 'dyndatetime(y,m,1)',
    end: 'dyndatetime(y,m,5)',
    resource: 1,
    color: 'orange'
  },
  {
    id: 17,
    title: 'Event 17',
    start: 'dyndatetime(y,m,20)',
    end: 'dyndatetime(y,m,25)',
    resource: 4,
    color: 'pink'
  },
  {
    id: 18,
    title: 'Event 18',
    start: 'dyndatetime(y,m,5)',
    end: 'dyndatetime(y,m,9)',
    resource: 3,
    color: 'cyan'
  },
  {
    id: 19,
    title: 'Event 19',
    start: 'dyndatetime(y,m,7)',
    end: 'dyndatetime(y,m,11)',
    resource: 12,
    color: 'magenta'
  },
  {
    id: 20,
    title: 'Event 20',
    start: 'dyndatetime(y,m,9)',
    end: 'dyndatetime(y,m,13)',
    resource: 7,
    color: 'lime'
  },
  {
    id: 21,
    title: 'Event 21',
    start: 'dyndatetime(y,m,11)',
    end: 'dyndatetime(y,m,15)',
    resource: 14,
    color: 'teal'
  },
  {
    id: 22,
    title: 'Event 22',
    start: 'dyndatetime(y,m,19)',
    end: 'dyndatetime(y,m,27)',
    resource: 6,
    color: 'violet'
  },
  {
    id: 23,
    title: 'Event 23',
    start: 'dyndatetime(y,m,15)',
    end: 'dyndatetime(y,m,19)',
    resource: 10,
    color: 'blue'
  },
  {
    id: 24,
    title: 'Event 24',
    start: 'dyndatetime(y,m,20)',
    end: 'dyndatetime(y,m,21)',
    resource: 3,
    color: 'cyan'
  },
  {
    id: 25,
    title: 'Event 25',
    start: 'dyndatetime(y,m,19)',
    end: 'dyndatetime(y,m,23)',
    resource: 1,
    color: 'orange'
  },
  {
    id: 26,
    title: 'Event 26',
    start: 'dyndatetime(y,m,21)',
    end: 'dyndatetime(y,m,25)',
    resource: 2,
    color: 'green'
  },
  {
    id: 27,
    title: 'Event 27',
    start: 'dyndatetime(y,m,23)',
    end: 'dyndatetime(y,m,27)',
    resource: 9,
    color: 'yellow'
  },
  {
    id: 28,
    title: 'Event 28',
    start: 'dyndatetime(y,m,26)',
    end: 'dyndatetime(y,m,30)',
    resource: 4,
    color: 'pink'
  },
  {
    id: 29,
    title: 'Event 29',
    start: 'dyndatetime(y,m,27)',
    end: 'dyndatetime(y,m,31)',
    resource: 12,
    color: 'magenta'
  },
  {
    id: 30,
    title: 'Event 30',
    start: 'dyndatetime(y,m,12)',
    end: 'dyndatetime(y,m,18)',
    resource: 7,
    color: 'lime'
  },
  {
    id: 31,
    title: 'Event 31',
    start: 'dyndatetime(y,m,8)',
    end: 'dyndatetime(y,m,11)',
    resource: 14,
    color: 'green'
  },
  {
    id: 32,
    title: 'Event 32',
    start: 'dyndatetime(y,m,4)',
    end: 'dyndatetime(y,m,10)',
    resource: 15,
    color: 'blue'
  },
  {
    id: 33,
    title: 'Event 33',
    start: 'dyndatetime(y,m,3)',
    end: 'dyndatetime(y,m,8)',
    resource: 16,
    color: 'red'
  },
  {
    id: 34,
    title: 'Event 34',
    start: 'dyndatetime(y,m,7)',
    end: 'dyndatetime(y,m,13)',
    resource: 17,
    color: 'yellow'
  },
  {
    id: 35,
    title: 'Event 35',
    start: 'dyndatetime(y,m,18)',
    end: 'dyndatetime(y,m,26)',
    resource: 18,
    color: 'purple'
  },
  {
    id: 36,
    title: 'Event 36',
    start: 'dyndatetime(y,m,9)',
    end: 'dyndatetime(y,m,14)',
    resource: 19,
    color: 'orange'
  },
  {
    id: 37,
    title: 'Event 37',
    start: 'dyndatetime(y,m,8)',
    end: 'dyndatetime(y,m,16)',
    resource: 20,
    color: 'pink'
  },
  {
    id: 38,
    title: 'Event 38',
    start: 'dyndatetime(y,m,11)',
    end: 'dyndatetime(y,m,19)',
    resource: 21,
    color: 'cyan'
  },
  {
    id: 39,
    title: 'Event 39',
    start: 'dyndatetime(y,m,7)',
    end: 'dyndatetime(y,m,11)',
    resource: 22,
    color: 'magenta'
  },
  {
    id: 40,
    title: 'Event 40',
    start: 'dyndatetime(y,m,6)',
    end: 'dyndatetime(y,m,15)',
    resource: 23,
    color: 'lime'
  },
  {
    id: 41,
    title: 'Event 41',
    start: 'dyndatetime(y,m,13)',
    end: 'dyndatetime(y,m,21)',
    resource: 24,
    color: 'teal'
  },
  {
    id: 42,
    title: 'Event 42',
    start: 'dyndatetime(y,m,22)',
    end: 'dyndatetime(y,m,29)',
    resource: 25,
    color: 'violet'
  },
  {
    id: 43,
    title: 'Event 43',
    start: 'dyndatetime(y,m,1)',
    end: 'dyndatetime(y,m,9)',
    resource: 26,
    color: 'brown'
  }
  //</hidden>
])
const isReorder = ref(false)
const myResources = ref<MbscResource[]>([
  { id: 1, name: 'Resource 1' },
  { id: 2, name: 'Resource 2 (Reorder disabled)', reorder: false },
  { id: 3, name: 'Resource 3' },
  { id: 4, name: 'Resource 4 (Reorder disabled)', reorder: false },
  {
    id: 5,
    name: 'Group 1',
    children: [
      { id: 6, name: 'Resource 5' },
      { id: 7, name: 'Resource 6' },
      { id: 8, name: 'Resource 7' }
    ]
  },
  { id: 9, name: 'Resource 8' },
  { id: 10, name: 'Resource 9' },
  {
    id: 11,
    name: 'Group 2',
    children: [
      { id: 12, name: 'Resource 10' },
      { id: 13, name: 'Resource 11' },
      { id: 14, name: 'Resource 12' }
    ]
  },
  { id: 15, name: 'Resource 13' },
  { id: 16, name: 'Resource 14' },
  {
    id: 17,
    name: 'Group 3',
    children: [
      { id: 18, name: 'Resource 15' },
      { id: 19, name: 'Resource 16' },
      { id: 20, name: 'Resource 17' }
    ]
  },
  { id: 21, name: 'Resource 18' },
  {
    id: 22,
    name: 'Group 4',
    children: [
      { id: 23, name: 'Resource 19' },
      { id: 24, name: 'Resource 20' },
      { id: 25, name: 'Resource 21' }
    ]
  },
  { id: 26, name: 'Resource 22' }
])
const tempResources = ref<MbscResource[]>([...myResources.value])

const myView = ref<MbscEventcalendarView>({
  timeline: {
    type: 'month',
    resourceReorder: false
  }
})

const enableReorder = () => {
  isReorder.value = true
  myView.value = {
    timeline: {
      type: 'month',
      resourceReorder: true
    }
  }
}

function saveReorder() {
  isReorder.value = false
  myView.value = {
    timeline: {
      type: 'month',
      resourceReorder: false
    }
  }
  myResources.value = tempResources.value
}

function cancelReorder() {
  isReorder.value = false
  myResources.value = [...myResources.value]
  myView.value = {
    timeline: {
      type: 'month',
      resourceReorder: false
    }
  }
  showToast('Resource order canceled')
}

function handleResourceOrder(args: MbscResourceOrderEvent) {
  tempResources.value = args.resources
}

function handleEventCreate(args: MbscEventCreateEvent) {
  myEvents.value = [...myEvents.value, args.event]
}

function handleEventDelete(args: MbscEventDeleteEvent) {
  myEvents.value = myEvents.value.filter((item) => item.id !== args.event.id)
}

function handleEventUpdate(args: MbscEventUpdateEvent) {
  const newEvent = args.event
  const eventIndex = myEvents.value.findIndex((e) => e.id === newEvent.id)
  const newEventList = [...myEvents.value]
  newEventList.splice(eventIndex, 1, newEvent)
  myEvents.value = newEventList
}

function showToast(message: string) {
  toastMessage.value = message
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    :drag-to-create="true"
    :drag-to-move="true"
    :drag-to-resize="true"
    :view="myView"
    :data="myEvents"
    :immutable-data="true"
    :resources="myResources"
    @event-create="handleEventCreate"
    @event-delete="handleEventDelete"
    @event-update="handleEventUpdate"
    @resource-order-update="handleResourceOrder"
  >
    <template #header>
      <MbscCalendarNav className="md-custom-header-nav"></MbscCalendarNav>
      <div className="mds-header-filter mbsc-flex mbsc-flex-1-1">
        <MbscButton
          @click="enableReorder()"
          variant="flat"
          className="mds-reorder-switch mds-enable"
          v-if="!isReorder"
        >
          Reorder resources
        </MbscButton>
        <MbscButton @click="saveReorder()" className="mds-reorder-save mds-update" v-if="isReorder">
          Save
        </MbscButton>
        <MbscButton
          @click="cancelReorder()"
          className="mds-reorder-save mds-update"
          v-if="isReorder"
        >
          Cancel
        </MbscButton>
        <div class="mds-header-filter-separator"></div>
      </div>
      <MbscCalendarPrev />
      <MbscCalendarToday />
      <MbscCalendarNext />
    </template>
  </MbscEventcalendar>
  <MbscToast :isOpen="isToastOpen" :message="toastMessage" @close="handleToastClose" />
</template>

<style>
.mds-resource-drag-drop-reorder .mbsc-timeline-resource-col {
  width: 240px;
}

.mds-header-filter {
  justify-content: end;
  align-items: center;
}

.mds-header-filter-separator {
  display: flex;
  align-self: center;
  height: 25px;
  width: 1px;
  margin: 0 8px 0 12px;
  background: #c0c0c0;
}

.mds-reorder-switch.mds-enable {
  color: #767676;
}

.mbsc-material .mds-reorder-switch {
  margin-right: 10px;
}

.mbsc-windows-dark .mds-reorder-switch,
.mbsc-material-dark .mds-reorder-switch {
  color: #fff;
}

.mbsc-ios-dark .mds-header-filter-separator {
  background: #767676;
}

.mbsc-material-dark .mds-header-filter-separator,
.mbsc-windows-dark .mds-header-filter-separator {
  background: #fff;
}

.mds-reorder-cancel.mbsc-button {
  margin-right: 12px;
}
</style>
