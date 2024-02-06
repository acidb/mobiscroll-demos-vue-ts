<script setup lang="ts">
import { MbscEventcalendar, MbscToast, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const y = now.getFullYear()
const m = now.getMonth()
const d = now.getDate()

const toastMessage = 'Make sure not to double book'
const isToastOpen = ref<boolean>(false)

function onEventFailed() {
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

const myView: MbscEventcalendarView = {
  timeline: { type: 'day' }
}

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: new Date(y, m, d, 11),
    end: new Date(y, m, d, 13),
    title: 'Event 1',
    resource: 1
  },
  {
    start: new Date(y, m, d, 16),
    end: new Date(y, m, d, 17),
    title: 'Event 2 (no event overlap)',
    overlap: false,
    resource: 1
  },
  {
    start: new Date(y, m, d, 14),
    end: new Date(y, m, d, 16),
    title: 'Event 3',
    resource: 2
  },
  {
    start: new Date(y, m, d, 8),
    end: new Date(y, m, d, 10),
    title: 'Event 4 (no event overlap)',
    resource: 2,
    overlap: false
  },
  {
    start: new Date(y, m, d, 10),
    end: new Date(y, m, d, 13),
    title: 'Event 5',
    resource: 3
  },
  {
    start: new Date(y, m, d, 11),
    end: new Date(y, m, d, 16),
    title: 'Event 6',
    resource: 4
  }
])

const myResources = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Resource 1'
  },
  {
    id: 2,
    name: 'Resource 2'
  },
  {
    id: 3,
    name: 'Resource 3'
  },
  {
    id: 4,
    name: 'Resource 4 - no event overlap allowed',
    eventOverlap: false
  }
])
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :dragToMove="true"
    :dragToResize="true"
    :dragToCreate="true"
    :clickToCreate="true"
    :eventOverlap="true"
    @event-update-failed="onEventFailed"
    @event-create-failed="onEventFailed"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
