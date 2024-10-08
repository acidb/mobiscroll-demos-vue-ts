<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'year',
    eventList: true
  }
}

const resourceNr: number = 200
const eventsNr: number = 10000
const myResources: MbscResource[] = []
const myEventColors: any = ['#ff0101', '#239a21', '#8f1ed6', '#01adff', '#d8ca1a']

for (let i = 1; i <= resourceNr; i++) {
  myResources.push({ name: 'Resource ' + i, id: i })
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  setTimeout(() => {
    const year = args.firstDay.getFullYear()
    const newEvents = []
    // Generate random events
    for (let i = 0; i < eventsNr; i++) {
      const day = getRandomInt(1, 31)
      const length = getRandomInt(2, 5)
      const resource = getRandomInt(1, resourceNr + 1)
      const month = getRandomInt(0, 12)
      const color = getRandomInt(0, 6)
      newEvents.push({
        color: myEventColors[color],
        end: new Date(year, month, day + length),
        resource: resource,
        start: new Date(year, month, day),
        title: 'Event ' + i
      })
    }
    myEvents.value = newEvents
  })
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    @page-loading="handlePageLoading"
  />
</template>

<style>
.demo-loading-big-data-sets {
  height: 100%;
}
</style>
