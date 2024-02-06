<script setup lang="ts">
import {
  getJson,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref('')
const isToastOpen = ref(false)
const myView = {
  calendar: { labels: true }
}
const myInvalid = [
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'SA,SU'
    }
  },
  {
    allDay: true,
    start: 'dyndatetime(y,m,19)',
    end: 'dyndatetime(y,m,20)'
  },
  {
    allDay: true,
    start: 'dyndatetime(y,m,26)',
    end: 'dyndatetime(y,m,27)'
  }
]

function handleEventCreateFailed() {
  toastMessage.value = "Can't create event on this date"
  isToastOpen.value = true
}

function handleEventUpdateFailed() {
  toastMessage.value = "Can't add event on this date"
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/work-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    :data="myEvents"
    :view="myView"
    :invalid="myInvalid"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    invalidateEvent="strict"
    @event-create-failed="handleEventCreateFailed"
    @event-update-failed="handleEventUpdateFailed"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
