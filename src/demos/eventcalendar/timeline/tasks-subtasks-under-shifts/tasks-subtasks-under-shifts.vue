<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myResources: MbscResource[] = []

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week'
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
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

<style></style>
