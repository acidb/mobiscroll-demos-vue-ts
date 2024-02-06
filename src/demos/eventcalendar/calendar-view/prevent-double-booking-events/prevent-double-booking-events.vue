<script setup lang="ts">
import { MbscEventcalendar, MbscToast, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
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
  calendar: { type: 'month', labels: 'all' }
}

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: new Date(y, m, d - 3),
    end: new Date(y, m, d - 1),
    title: 'Event 1'
  },
  {
    start: new Date(y, m, d),
    end: new Date(y, m, d + 2),
    title: 'Event 2 (no event overlap)',
    overlap: false
  },
  {
    start: new Date(y, m, d + 3),
    end: new Date(y, m, d + 5),
    title: 'Event 3'
  },
  {
    start: new Date(y, m, d + 5),
    end: new Date(y, m, d + 7),
    title: 'Event 4 (no event overlap)',
    overlap: false
  }
])
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :dragToMove="true"
    :dragToResize="true"
    :dragToCreate="true"
    :clickToCreate="true"
    :eventOverlap="false"
    :exclusiveEndDates="true"
    @event-update-failed="onEventFailed"
    @event-create-failed="onEventFailed"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
