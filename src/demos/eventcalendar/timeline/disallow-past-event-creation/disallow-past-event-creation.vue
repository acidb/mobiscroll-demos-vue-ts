<script setup lang="ts">
import {
  getJson,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventCreateFailedEvent,
  MbscEventUpdateEvent,
  MbscEventUpdateFailedEvent,
  MbscResource
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date(new Date().setMinutes(59))
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = { timeline: { type: 'month' } }

const myInvalid = [{ recurring: { repeat: 'daily', until: yesterday } }, { start: today, end: now }]

const myResources: MbscResource[] = [
  { id: 1, name: 'Resource A', color: '#e20000' },
  { id: 2, name: 'Resource B', color: '#76e083' },
  { id: 3, name: 'Resource C', color: '#4981d6' },
  { id: 4, name: 'Resource D', color: '#e25dd2' },
  { id: 5, name: 'Resource E', color: '#1dab2f' },
  { id: 6, name: 'Resource F', color: '#d6d145' }
]
function handleEventCreateFailed(args: MbscEventCreateFailedEvent) {
  if (!args.originEvent) {
    toastMessage.value = "Can't create event in the past"
    isToastOpen.value = true
  }
}

function handleEventUpdateFailed(args: MbscEventUpdateFailedEvent) {
  if (!args.oldEventOccurrence) {
    toastMessage.value = "Can't move event in the past"
    isToastOpen.value = true
  }
}

function handleEventCreate(args: MbscEventCreateEvent) {
  const oldEvent = args.originEvent
  const start = oldEvent && oldEvent.start ? oldEvent.start : null

  // Handle recurring events
  if (start && start < today) {
    toastMessage.value = "Can't move past event"
    isToastOpen.value = true
    return false
  }
}

function handleEventUpdate(args: MbscEventUpdateEvent) {
  const oldEvent = args.oldEvent
  const start = oldEvent && oldEvent.start ? oldEvent.start : null
  const oldEventOccurrence = args.oldEventOccurrence
  const occurrenceStart =
    oldEventOccurrence && oldEventOccurrence.start ? oldEventOccurrence.start : null

  // Handle recurring events
  if ((start && start < today) || (occurrenceStart && occurrenceStart < today)) {
    return false
  }
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/multiday-events/',
    (events) => {
      for (const event of events) {
        // Convert dates to date objects
        event.start = event.start ? new Date(event.start) : event.start
        event.end = event.end ? new Date(event.end) : event.end
        // Mark past events as fixed by setting the event.editable property to false
        event.editable = event.start && today < event.start
      }
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :invalid="myInvalid"
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    @event-create-failed="handleEventCreateFailed"
    @event-update-failed="handleEventUpdateFailed"
    @event-create="handleEventCreate"
    @event-update="handleEventUpdate"
    className="md-disallow-past-event-creation"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-disallow-past-event-creation .mbsc-readonly-event {
  opacity: 0.6;
}
</style>
