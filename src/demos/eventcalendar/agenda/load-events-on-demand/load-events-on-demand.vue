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
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  agenda: { type: 'month' }
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  const year = args.month!.getFullYear()
  const month = args.month!.getMonth()

  getJson(
    'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
    (data: MbscCalendarEvent[]) => {
      myEvents.value = data
      isToastOpen.value = true
    },
    'jsonp'
  )
}
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents" @page-loading="handlePageLoading" />
  <MbscToast message="New events loaded" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>
