<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myResources = ref<MbscResource[]>([
  {
    // Base properties
    id: 1,
    name: 'Ryan',
    color: '#ca4747',
    eventCreation: true,
    // Add any property you'd like
    title: 'UX Designer',
    job: 'Apollo Project'
  },
  {
    // Base properties
    id: 2,
    name: 'Kate',
    color: '#cc9900',
    eventCreation: true,
    // Add any property you'd like
    title: 'Product Developer',
    job: 'Yorick Project'
  },
  {
    // Base properties
    id: 3,
    name: 'John',
    color: '#01adff',
    eventCreation: true,
    // Add any property you'd like
    title: 'Network Administrator',
    job: 'Titus Project'
  }
])

const myData = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'General orientation',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,11)',
    text: 'Stakeholder mtg.',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d,13,30)',
    end: 'dyndatetime(y,m,d,15)',
    text: "Lunch @ Butcher's",
    resource: 3
  }
])
const myView: MbscEventcalendarView = {
  schedule: { type: 'month' }
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myData" :resources="myResources">
    <template #resource="resource">
      <div>{{ resource.name }}</div>
      <div class="md-resource-data-structure-title">{{ resource.title }}</div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-resource-data-structure-title {
  font-size: 13px;
  opacity: 0.7;
}
</style>
