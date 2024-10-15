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

const currentView = ref<string>('agenda')
const isLoading = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const myEvents = ref<MbscCalendarEvent[]>([])
const myView = ref<MbscEventcalendarView>({
  calendar: { type: 'week' },
  agenda: { type: 'week' }
})
const toastMessage = ref<string>('')

const firstDay = ref<Date>()
const lastDay = ref<Date>()

function handleError(resp: { error: string; result: { error: { message: string } } }) {
  toastMessage.value = resp.error ? resp.error : resp.result.error.message
  isToastOpen.value = true
}

function loadEvents() {
  isLoading.value = true
  googleCalendarSync
    .getEvents(CALENDAR_ID, firstDay.value!, lastDay.value!)
    .then((resp: MbscCalendarEvent[]) => {
      myEvents.value = resp
      isLoading.value = false
    })
    .catch(handleError)
}

function changeView() {
  switch (currentView.value) {
    case 'month':
      myView.value = {
        calendar: { type: 'month' }
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

function handlePageLoading(args: MbscPageLoadingEvent) {
  const start = args.viewStart!
  const end = args.viewEnd!

  // Calculate dates
  // (pre-load events for previous and next pages as well)
  if (currentView.value === 'month') {
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
</script>

<template>
  <MbscEventcalendar
    :data="myEvents"
    :exclusiveEndDates="true"
    :view="myView"
    @page-loading="handlePageLoading"
  >
    <template #header>
      <MbscCalendarNav className="mds-google-cal-nav" />
      <div :class="'mds-loader' + (isLoading ? ' mds-loader-visible' : '')"></div>
      <div class="mds-google-cal-switch mbsc-flex-1-0">
        <MbscSegmentedGroup v-model="currentView" @change="changeView">
          <MbscSegmented value="month"> Month </MbscSegmented>
          <MbscSegmented value="week"> Week </MbscSegmented>
          <MbscSegmented value="day"> Day </MbscSegmented>
          <MbscSegmented value="agenda"> Agenda </MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev className="mds-google-cal-prev" />
      <MbscCalendarToday className="mds-google-cal-today" />
      <MbscCalendarNext className="mds-google-cal-next" />
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-google-cal-switch .mbsc-segmented {
  max-width: 300px;
  margin: 0 auto;
}

.mds-google-cal-nav {
  width: 200px;
}

.mds-loader {
  width: 32px;
  height: 32px;
  border: 4px solid #8c8c8c;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: mds-loader-rotation 1s linear infinite;
  visibility: hidden;
}

.mds-loader-visible {
  visibility: visible;
}

@keyframes mds-loader-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Material header order */

.mbsc-material.mds-google-cal-prev {
  order: 1;
}

.mbsc-material.mds-google-cal-next {
  order: 2;
}

.mbsc-material.mds-google-cal-nav {
  order: 3;
}

.mbsc-material .mds-google-cal-switch {
  order: 4;
}

.mbsc-material .mds-google-cal-today {
  order: 5;
}

/* Windows header order */

.mbsc-windows.mds-google-cal-nav {
  order: 1;
}

.mbsc-windows.mds-google-cal-prev {
  order: 2;
}

.mbsc-windows.mds-google-cal-next {
  order: 3;
}

.mbsc-windows .mds-google-cal-switch {
  order: 4;
}

.mbsc-windows .mds-google-cal-today {
  order: 5;
}
</style>
