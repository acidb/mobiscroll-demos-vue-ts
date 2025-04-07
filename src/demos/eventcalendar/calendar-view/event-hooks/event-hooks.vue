<script setup lang="ts">
import {
  getJson,
  MbscDraggable,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscCellClickEvent,
  MbscCellHoverEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventCreateEvent,
  MbscEventCreateFailedEvent,
  MbscEventDeletedEvent,
  MbscEventDeleteEvent,
  MbscEventDragEvent,
  MbscEventUpdatedEvent,
  MbscEventUpdateEvent,
  MbscEventUpdateFailedEvent,
  MbscLabelClickEvent,
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
const myView: MbscEventcalendarView = {
  calendar: { labels: true }
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

const dragElm1 = ref<HTMLDivElement>()
const dragElm2 = ref<HTMLDivElement>()

function handleCellClick(args: MbscCellClickEvent) {
  // Logic for event click
  console.log(args)
}
function handleCellDoubleClick(args: MbscCellClickEvent) {
  // Logic for cell double click
  console.log(args)
}
function handleCellRightClick(args: MbscCellClickEvent) {
  // Logic for cell right click
  console.log(args)
}
function handleCellHoverIn(args: MbscCellHoverEvent) {
  // Logic for cell hover in
  console.log(args)
}
function handleCellHoverOut(args: MbscCellHoverEvent) {
  // Logic for cell hover out
  console.log(args)
}
function handleDestroy(args: any) {
  // Logic for destroying the event calendar
  console.log(args)
}
function handleEventClick(args: MbscEventClickEvent) {
  // Logic for event click
  console.log(args)
}
function handleEventCreate(args: MbscEventCreateEvent) {
  // Logic for event create
  console.log(args)
}
function handleEventCreated(args: MbscEventCreatedEvent) {
  // Logic for event created
  console.log(args)
}
function handleEventCreateFailed(args: MbscEventCreateFailedEvent) {
  // Logic for failed event create
  console.log(args)
}
function handleEventDelete(args: MbscEventDeleteEvent) {
  // Logic for event delete
  console.log(args)
}
function handleEventDeleted(args: MbscEventDeletedEvent) {
  // Logic for event deleted
  console.log(args)
}
function handleEventDoubleClick(args: MbscEventClickEvent) {
  // Logic for event double click
  console.log(args)
}
function handleEventDragStart(args: MbscEventDragEvent) {
  // Logic for event drag start
  console.log(args)
}
function handleEventDragEnd(args: MbscEventDragEvent) {
  // Logic for event drag end
  console.log(args)
}
function handleEventDragEnter(args: MbscEventDragEvent) {
  // Logic for event drag enter
  console.log(args)
}
function handleEventDragLeave(args: MbscEventDragEvent) {
  // Logic for event drag leave
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
function handleEventUpdate(args: MbscEventUpdateEvent) {
  // Logic for event update
  console.log(args)
}
function handleEventUpdated(args: MbscEventUpdatedEvent) {
  // Logic for event updated
  console.log(args)
}
function handleEventUpdateFailed(args: MbscEventUpdateFailedEvent) {
  // Logic for failed event update
  console.log(args)
}
function handleInit(args: any) {
  // Logic running on component init
  console.log(args)
}
function handleLabelClick(args: MbscLabelClickEvent) {
  // Logic for label click
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
function handleSelectedDateChange(args: MbscSelectedDateChangeEvent) {
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
    <MbscDraggable :element="dragElm1" :dragData="dragData1" theme="auto" />
  </div>
  <div ref="dragElm2" class="event-hooks-draggable" :style="{ background: '#ddfcf7' }">
    <div class="draggable-title">External drag 2</div>
    <div class="draggable-text">Drag me to calendar</div>
    <MbscDraggable :element="dragElm2" :dragData="dragData2" theme="auto" />
  </div>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :invalid="myInvalids"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :externalDrop="true"
    @cell-click="handleCellClick"
    @cell-double-click="handleCellDoubleClick"
    @cell-right-click="handleCellRightClick"
    @cell-hover-in="handleCellHoverIn"
    @cell-hover-out="handleCellHoverOut"
    @destroy="handleDestroy"
    @event-click="handleEventClick"
    @event-create="handleEventCreate"
    @event-created="handleEventCreated"
    @event-create-failed="handleEventCreateFailed"
    @event-delete="handleEventDelete"
    @event-deleted="handleEventDeleted"
    @event-double-click="handleEventDoubleClick"
    @event-drag-start="handleEventDragStart"
    @event-drag-end="handleEventDragEnd"
    @event-drag-enter="handleEventDragEnter"
    @event-drag-leave="handleEventDragLeave"
    @event-hover-in="handleEventHoverIn"
    @event-hover-out="handleEventHoverOut"
    @event-right-click="handleEventRightClick"
    @event-update="handleEventUpdate"
    @event-updated="handleEventUpdated"
    @event-update-failed="handleEventUpdateFailed"
    @init="handleInit"
    @label-click="handleLabelClick"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-oading="handlePageLoading"
    @selected-date-change="handleSelectedDateChange"
  />
</template>

<style>
.event-hooks-draggable {
  padding: 10px 20px;
  display: inline-block;
  margin: 15px;
  border-radius: 8px;
  width: 210px;
}

.event-hooks-draggable .draggable-title {
  font-size: 16px;
  font-weight: 600;
}

.event-hooks-draggable .draggable-text {
  opacity: 0.7;
  line-height: 25px;
}

.event-hooks-draggable-1 {
  background: #ffdab8;
}

.event-hooks-draggable-2 {
  background: #ddfcf7;
}
</style>
