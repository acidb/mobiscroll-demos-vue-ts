<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscButton,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscDatepicker,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadedEvent,
  MbscSelectedDateChangeEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myView = ref<MbscEventcalendarView>({
  schedule: {
    type: 'day',
    size: 14
  }
})

const myEvents = ref<MbscCalendarEvent[]>([])
const mySelectedDate = ref<any>(new Date())
const myRefDate = ref<any>(new Date())
const myRange = ref<any>([])
const startDate = ref<any>(null)
const endDate = ref<any>(null)
const buttonText = ref<string>('')
const pickerElm = ref<any>(null)
const myAnchor = ref<any>(null)

// Returns the number of days between two dates
function getNrDays(start: any, end: any) {
  return Math.round(Math.abs((end.setHours(0) - start.setHours(0)) / (24 * 60 * 60 * 1000))) + 1
}

// Returns the formatted date
function getFormattedRange(start: any, end: any) {
  return (
    formatDate('MMM D, YYYY', new Date(start)) +
    (end && getNrDays(start, end) > 1 ? ' - ' + formatDate('MMM D, YYYY', new Date(end)) : '')
  )
}

function handlePageLoaded(args: MbscPageLoadedEvent) {
  const sDate = args.firstDay
  const end = args.lastDay
  const eDate = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1, 0)
  startDate.value = sDate
  endDate.value = eDate
  setTimeout(() => {
    // Set button text
    buttonText.value = getFormattedRange(sDate, eDate)
    // Set range value
    myRange.value = [sDate, eDate]
    // Navigate the calendar
    mySelectedDate.value = sDate
  })
}

function handleSelectedDateChange(args: MbscSelectedDateChangeEvent) {
  mySelectedDate.value = args.date
}

function handleChange(args: any) {
  const date = args.value
  myRange.value = date
  if (date[0] && date[1]) {
    startDate.value = date[0]
    endDate.value = date[1]
  }
}

function handleOpen(ev: any) {
  pickerElm.value.instance.open()
  myAnchor.value = ev.target
}

function handleClose() {
  if (startDate.value && endDate.value) {
    // Navigate the calendar
    mySelectedDate.value = startDate.value
    // Set calendar view
    myRefDate.value = startDate.value
    myView.value = {
      schedule: {
        type: 'day',
        size: getNrDays(startDate.value, endDate.value)
      }
    }
  }
  myRange.value = [startDate.value, endDate.value]
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :selectedDate="mySelectedDate"
    :refDate="myRefDate"
    @page-loaded="handlePageLoaded"
    @selected-date-change="handleSelectedDateChange"
  >
    <template #header>
      <div>
        <MbscDatepicker
          ref="pickerElm"
          select="range"
          display="anchored"
          :anchor="myAnchor"
          :showOverlay="false"
          :touchUi="true"
          :buttons="[]"
          :inputProps="{ type: 'hidden' }"
          :value="myRange"
          @close="handleClose"
          @change="handleChange"
        />
      </div>
      <MbscButton variant="flat" className="mbsc-calendar-button" @click="handleOpen">
        {{ buttonText }}
      </MbscButton>
      <div class="md-custom-range-view-controls">
        <MbscCalendarPrev />
        <MbscCalendarToday />
        <MbscCalendarNext />
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-custom-range-view-controls {
  display: flex;
  flex: 1 0 auto;
  justify-content: end;
  align-items: center;
}

.mbsc-material .mbsc-calendar-title {
  font-size: 1.428572em;
  font-weight: 400;
  text-transform: none;
  line-height: 1.4em;
}
</style>
