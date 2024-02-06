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
  MbscPageLoadingEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  schedule: { type: 'day' }
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  const year = args.month!.getFullYear()
  const month = args.month!.getMonth()
  const day = args.month!.getDate()

  getJson(
    'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
    (data: MbscCalendarEvent[]) => {
      myEvents.value = data
      toastMessage.value = 'New events loaded'
      isToastOpen.value = true
    },
    'jsonp'
  )
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents" @page-loading="handlePageLoading" />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
