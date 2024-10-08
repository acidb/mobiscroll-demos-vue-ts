<script setup lang="ts">
import { googleCalendarSync } from '@mobiscroll/calendar-integration'
import {
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com'

const myEvents = ref<MbscCalendarEvent[]>([])
const isLoading = ref<boolean>(false)
const firstDay = ref<any>(null)
const lastDay = ref<any>(null)
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
const calendarView = ref<string>('week')
const myView = ref<MbscEventcalendarView>({
  schedule: { type: 'week' }
})

function onError(resp: any) {
  toastMessage.value = resp.error ? resp.error : resp.result.error.message
  isToastOpen.value = true
}

function loadEvents() {
  isLoading.value = true
  googleCalendarSync
    .getEvents(CALENDAR_ID, firstDay.value, lastDay.value)
    .then((resp: MbscCalendarEvent[]) => {
      isLoading.value = false
      myEvents.value = resp
    })
    .catch(onError)
}

function handleToastClose() {
  isToastOpen.value = false
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  const start = args.viewStart!
  const end = args.viewEnd!

  // Calculate dates
  // (pre-load events for previous and next pages as well)
  if (calendarView.value === 'month') {
    firstDay.value = start
    lastDay.value = end
  } else {
    firstDay.value = new Date(start.getFullYear(), start.getMonth(), start.getDate() - 7)
    lastDay.value = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 7)
  }

  loadEvents()
}

onMounted(() => {
  // init google client
  googleCalendarSync.init({
    apiKey: '<YOUR_GOOGLE_API_KEY>',
    onInit: loadEvents
  })
})

function handleViewChange() {
  switch (calendarView.value) {
    case 'month':
      myView.value = {
        calendar: { labels: true }
      }
      break
    case 'week':
      myView.value = {
        schedule: { type: 'week' }
      }
      break
    case 'day':
      myView.value = {
        schedule: { type: 'day' }
      }
      break
    case 'agenda':
    default:
      myView.value = {
        calendar: { type: 'week' },
        agenda: { type: 'week' }
      }
      break
  }
}
</script>

<template>
  <MbscEventcalendar
    :className="'md-google-calendar' + (isLoading ? ' md-loading-events' : '')"
    :exclusiveEndDates="true"
    :view="myView"
    :data="myEvents"
    @page-loading="handlePageLoading"
  >
    <template #header>
      <MbscCalendarNav className="google-cal-header-nav" />
      <div class="md-spinner">
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
        <div class="md-spinner-blade"></div>
      </div>
      <div class="google-cal-header-picker">
        <MbscSegmentedGroup v-model="calendarView" @change="handleViewChange">
          <MbscSegmented value="month"> Month </MbscSegmented>
          <MbscSegmented value="week"> Week </MbscSegmented>
          <MbscSegmented value="day"> Day </MbscSegmented>
          <MbscSegmented value="agenda"> Agenda </MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev className="google-cal-header-prev" />
      <MbscCalendarToday className="google-cal-header-today" />
      <MbscCalendarNext className="google-cal-header-next" />
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-google-calendar .mbsc-segmented {
  max-width: 300px;
  margin: 0 auto;
}

.google-cal-header-picker {
  flex: 1 0 auto;
}

/* material header order */

.mbsc-material.google-cal-header-prev {
  order: 1;
}

.mbsc-material.google-cal-header-next {
  order: 2;
}

.mbsc-material.google-cal-header-nav {
  order: 3;
}

.mbsc-material .google-cal-header-picker {
  order: 4;
}

.mbsc-material .google-cal-header-today {
  order: 5;
}

/* windows header order */

.mbsc-windows.google-cal-header-nav {
  order: 1;
}

.mbsc-windows.google-cal-header-prev {
  order: 2;
}

.mbsc-windows.google-cal-header-next {
  order: 3;
}

.mbsc-windows .google-cal-header-picker {
  order: 4;
}

.mbsc-windows .google-cal-header-today {
  order: 5;
}

/* loading spinner and overlay */

.md-loading-events .md-sync-events-overlay {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.md-spinner {
  visibility: hidden;
  position: relative;
  width: 20px;
  height: 20px;
}

.md-loading-events .md-spinner {
  visibility: visible;
}

.md-spinner .md-spinner-blade {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 10%;
  height: 25%;
  border-radius: 50%/20%;
  background-color: #8c8c8c;
  -webkit-animation: md-spinner-fade 1s linear infinite;
  animation: md-spinner-fade 1s linear infinite;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

.md-spinner .md-spinner-blade:nth-child(1) {
  -webkit-animation-delay: -1.66667s;
  animation-delay: -1.66667s;
  -webkit-transform: rotate(30deg) translate(0, -150%);
  transform: rotate(30deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(2) {
  -webkit-animation-delay: -1.58333s;
  animation-delay: -1.58333s;
  -webkit-transform: rotate(60deg) translate(0, -150%);
  transform: rotate(60deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(3) {
  -webkit-animation-delay: -1.5s;
  animation-delay: -1.5s;
  -webkit-transform: rotate(90deg) translate(0, -150%);
  transform: rotate(90deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(4) {
  -webkit-animation-delay: -1.41667s;
  animation-delay: -1.41667s;
  -webkit-transform: rotate(120deg) translate(0, -150%);
  transform: rotate(120deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(5) {
  -webkit-animation-delay: -1.33333s;
  animation-delay: -1.33333s;
  -webkit-transform: rotate(150deg) translate(0, -150%);
  transform: rotate(150deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(6) {
  -webkit-animation-delay: -1.25s;
  animation-delay: -1.25s;
  -webkit-transform: rotate(180deg) translate(0, -150%);
  transform: rotate(180deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(7) {
  -webkit-animation-delay: -1.16667s;
  animation-delay: -1.16667s;
  -webkit-transform: rotate(210deg) translate(0, -150%);
  transform: rotate(210deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(8) {
  -webkit-animation-delay: -1.08333s;
  animation-delay: -1.08333s;
  -webkit-transform: rotate(240deg) translate(0, -150%);
  transform: rotate(240deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(9) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  -webkit-transform: rotate(270deg) translate(0, -150%);
  transform: rotate(270deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(10) {
  -webkit-animation-delay: -0.91667s;
  animation-delay: -0.91667s;
  -webkit-transform: rotate(300deg) translate(0, -150%);
  transform: rotate(300deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(11) {
  -webkit-animation-delay: -0.83333s;
  animation-delay: -0.83333s;
  -webkit-transform: rotate(330deg) translate(0, -150%);
  transform: rotate(330deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(12) {
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
  -webkit-transform: rotate(360deg) translate(0, -150%);
  transform: rotate(360deg) translate(0, -150%);
}

.md-loading-events .md-spinner-blade {
  -webkit-animation-play-state: running;
  animation-play-state: running;
}

@-webkit-keyframes md-spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}

@keyframes md-spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
</style>
