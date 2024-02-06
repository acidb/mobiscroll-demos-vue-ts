<script setup lang="ts">
import {
  getJson,
  MbscDraggable,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageChangeEvent,
  MbscPageLoadedEvent,
  MbscPageLoadingEvent,
  MbscSelectedEventsChangeEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}
const myInvalids = [
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'SA,SU'
    }
  }
]
const dragData1: MbscCalendarEvent = {
  title: 'External drag 1',
  color: '#ffdab8'
}
const dragData2: MbscCalendarEvent = {
  title: 'External drag 2',
  color: '#ddfcf7'
}

function handleDestroy(args: any) {
  // Logic for destroying the event calendar
  console.log(args)
}
function handleEventClick(args: MbscEventClickEvent) {
  // Logic for event click
  console.log(args)
}
function handleEventDoubleClick(args: MbscEventClickEvent) {
  // Logic for event double click
  console.log(args)
}
function handleEventHoverIn(args: MbscEventClickEvent) {
  // Logic for event hover in
  console.log(args)
}
function handleEventHoverOut(args: MbscEventClickEvent) {
  // Logic for event hover out
  console.log(args)
}
function handleEventRightClick(args: MbscEventClickEvent) {
  // Logic for event right click
  console.log(args)
}
function handleInit(args: any) {
  // Logic running on component init
  console.log(args)
}
function handlePageChange(args: MbscPageChangeEvent) {
  // Your custom event handler goes here
  console.log(args)
}
function handlePageLoaded(args: MbscPageLoadedEvent) {
  // Use it to inject custom markup & attach custom listeners
  console.log(args)
}
function handlePageLoading(args: MbscPageLoadingEvent) {
  // Use it to load data on demand
  console.log(args)
}
function handleSelectedDateChange(args: MbscSelectedEventsChangeEvent) {
  // Use it to keep track of the selected date externally
  console.log(args)
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
  <div ref="dragElm1" class="event-hooks-draggable" :style="{ background: '#ffdab8' }">
    <div class="draggable-title">External drag 1</div>
    <div class="draggable-text">Drag me to calendar</div>
    <MbscDraggable :element="$refs.dragElm1" :dragData="dragData1" />
  </div>
  <div ref="dragElm2" class="event-hooks-draggable" :style="{ background: '#ddfcf7' }">
    <div class="draggable-title">External drag 2</div>
    <div class="draggable-text">Drag me to calendar</div>
    <MbscDraggable :element="$refs.dragElm2" :dragData="dragData2" />
  </div>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :invalid="myInvalids"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :externalDrop="true"
    @destroy="handleDestroy"
    @event-click="handleEventClick"
    @event-double-click="handleEventDoubleClick"
    @event-hover-in="handleEventHoverIn"
    @event-hover-out="handleEventHoverOut"
    @event-right-click="handleEventRightClick"
    @init="handleInit"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-oading="handlePageLoading"
    @selected-date-change="handleSelectedDateChange"
  />
</template>
