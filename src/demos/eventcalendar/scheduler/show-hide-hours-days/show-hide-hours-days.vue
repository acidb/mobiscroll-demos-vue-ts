<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myView: MbscEventcalendarView = {
  schedule: {
    type: 'week',
    startDay: 1,
    endDay: 5,
    startTime: '09:00',
    endTime: '18:00',
    timeCellStep: 30,
    timeLabelStep: 30
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/workday-events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents" />
</template>
