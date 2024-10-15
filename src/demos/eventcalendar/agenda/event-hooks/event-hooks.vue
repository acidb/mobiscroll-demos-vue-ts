<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageChangeEvent,
  MbscPageLoadedEvent,
  MbscPageLoadingEvent,
  MbscSelectedDateChangeEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const myView: MbscEventcalendarView = { agenda: { type: 'month' } }

function handleDestroy() {
  // Logic running on component destroy
  console.log('onDestroy')
}
function handleEventClick(args: MbscEventClickEvent) {
  // Logic for event click
  console.log('onEventClick', args)
}
function handleEventDoubleClick(args: MbscEventClickEvent) {
  // Logic for event double click
  console.log('onEventDoubleClick', args)
}
function handleEventHoverIn(args: MbscEventClickEvent) {
  // Logic for event hover in
  console.log('onEventHoverIn', args)
}
function handleEventHoverOut(args: MbscEventClickEvent) {
  // Logic for event hover out
  console.log('onEventHoverOut', args)
}
function handleEventRightClick(args: MbscEventClickEvent) {
  // Logic for event right click
  console.log('onEventRightClick', args)
}
function handleInit() {
  // Logic running on component init
  console.log('onInit')
}
function handlePageChange(args: MbscPageChangeEvent) {
  // Logic running on calendar page change
  console.log('onPageChange', args)
}
function handlePageLoaded(args: MbscPageLoadedEvent) {
  // Use it to inject custom markup & attach custom listeners
  console.log('onPageLoaded', args)
}
function handlePageLoading(args: MbscPageLoadingEvent) {
  // Use it to load data on demand
  console.log('onPageLoading', args)
}
function handleSelectedDateChange(args: MbscSelectedDateChangeEvent) {
  // Use it to keep track of the selected date externally
  console.log('onSelectedDateChange', args)
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    :data="myEvents"
    :view="myView"
    @destroy="handleDestroy"
    @event-click="handleEventClick"
    @event-double-click="handleEventDoubleClick"
    @event-hover-in="handleEventHoverIn"
    @event-hover-out="handleEventHoverOut"
    @event-right-click="handleEventRightClick"
    @init="handleInit"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-loading="handlePageLoading"
    @selected-date-change="handleSelectedDateChange"
  />
</template>
