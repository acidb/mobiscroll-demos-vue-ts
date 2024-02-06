<script setup lang="ts">
import { googleCalendarSync } from '@mobiscroll/calendar-integration'
import { MbscEventcalendar, MbscToast, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  MbscResource
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calendars: MbscResource[] = [
  {
    id: 'en.french#holiday@group.v.calendar.google.com',
    name: 'Holidays in France',
    color: '#D81B60'
  },
  {
    id: 'en.german#holiday@group.v.calendar.google.com',
    name: 'Holidays in Germany',
    color: '#F4511E'
  },
  {
    id: 'en.hungarian#holiday@group.v.calendar.google.com',
    name: 'Holidays in Hungary',
    color: '#AD1457'
  },
  {
    id: 'en.indian#holiday@group.v.calendar.google.com',
    name: 'Holidays in India',
    color: '#E4C441'
  },
  {
    id: 'en.romanian#holiday@group.v.calendar.google.com',
    name: 'Holidays in Romania',
    color: '#0B8043'
  },
  {
    id: 'en.uk#holiday@group.v.calendar.google.com',
    name: 'Holidays in United Kingdom',
    color: '#3F51B5'
  },
  {
    id: 'en.usa#holiday@group.v.calendar.google.com',
    name: 'Holidays in United States',
    color: '#8E24AA'
  }
]

const calendarIds = calendars.map((cal: MbscResource) => cal.id as string)
const myEvents = ref<MbscCalendarEvent[]>([])
const firstDay = ref<any>(null)
const lastDay = ref<any>(null)
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
const myView = ref<MbscEventcalendarView>({
  timeline: {
    type: 'month',
    eventList: true
  }
})

function onError(resp: any) {
  toastMessage.value = resp.error ? resp.error : resp.result.error.message
  isToastOpen.value = true
}

function loadEvents() {
  googleCalendarSync
    .getEvents(calendarIds, firstDay.value, lastDay.value)
    .then(function (resp: MbscCalendarEvent[]) {
      resp.forEach(function (event: MbscCalendarEvent) {
        event.resource = event.googleCalendarId
      })
      myEvents.value = resp
    })
    .catch(onError)
}

function handleToastClose() {
  isToastOpen.value = false
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  const start = args.firstDay
  const end = args.lastDay

  // Calculate dates
  // (pre-load events for previous and next pages as well)
  firstDay.value = new Date(start.getFullYear(), start.getMonth() - 1, start.getDate())
  lastDay.value = new Date(end.getFullYear(), end.getMonth() + 1, end.getDate())

  loadEvents()
}

onMounted(() => {
  // init google client
  googleCalendarSync.init({
    apiKey: '<YOUR_GOOGLE_API_KEY>',
    onInit: loadEvents
  })
})
</script>

<template>
  <MbscEventcalendar
    className="md-google-calendar "
    :exclusiveEndDates="true"
    :clickToCreate="false"
    :dragToCreate="false"
    :view="myView"
    :data="myEvents"
    :resources="calendars"
    @page-loading="handlePageLoading"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-google-calendar .mbsc-timeline-day {
  min-width: 150px;
}
</style>
