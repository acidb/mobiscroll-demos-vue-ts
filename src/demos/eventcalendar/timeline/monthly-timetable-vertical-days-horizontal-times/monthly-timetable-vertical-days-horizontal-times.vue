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
  timeline: {
    type: 'month',
    resolutionHorizontal: 'hour',
    resolutionVertical: 'day'
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-vertical-events/',
    (events: MbscCalendarEvent[]) => {
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

<style>
.md-vertical-timeline .mbsc-timeline-row-gutter {
  height: 8px;
}
</style>
