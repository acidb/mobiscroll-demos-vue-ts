<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Ryan',
    color: '#f7c4b4'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#c6f1c9'
  },
  {
    id: 3,
    name: 'John',
    color: '#e8d0ef'
  }
]

const myView: MbscEventcalendarView = {
  schedule: {
    type: 'week',
    allDay: false,
    startDay: 1,
    endDay: 5,
    startTime: '08:00',
    endTime: '17:00'
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/resource-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents" :resources="myResources" />
</template>
