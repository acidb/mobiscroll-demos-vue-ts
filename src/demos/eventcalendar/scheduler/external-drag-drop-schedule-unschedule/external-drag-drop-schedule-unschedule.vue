<script setup lang="ts">
import {
  getJson,
  MbscDraggable,
  MbscDropcontainer,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventDeleteEvent,
  MbscItemDragEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myView: MbscEventcalendarView = {
  schedule: { type: 'week' }
}

const myTasks = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    title: 'Product team meeting',
    color: '#cf4343',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)'
  },
  {
    id: 2,
    title: 'General orientation',
    color: '#e49516',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)'
  },
  {
    id: 3,
    title: 'Client Training',
    color: '#8c429f',
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,14)'
  },
  {
    id: 4,
    title: 'CEO Conference',
    color: '#63b548',
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,18)'
  }
])

const dragElements = ref([])
const dropCont = ref<HTMLDivElement>()
const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref('')
const isToastOpen = ref(false)

function getHours(event: any) {
  const eventLength =
    Math.abs(new Date(event.end).getTime() - new Date(event.start).getTime()) / (60 * 60 * 1000)
  return eventLength + ' hour' + (eventLength > 1 ? 's' : '')
}

function handleEventCreate(args: MbscEventCreateEvent) {
  myTasks.value = myTasks.value.filter((item) => item.id !== args.event.id)
  toastMessage.value = args.event.title + ' added'
  isToastOpen.value = true
}

function handleEventDelete(args: MbscEventDeleteEvent) {
  toastMessage.value = args.event.title + ' unscheduled'
  isToastOpen.value = true
}

function handleItemDrop(args: MbscItemDragEvent) {
  if (args.data) {
    myTasks.value = [...myTasks.value, args.data]
  }
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/drag-drop-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
      <div class="mbsc-col-sm-9 external-drop-calendar">
        <MbscEventcalendar
          :view="myView"
          :data="myEvents"
          :dragToMove="true"
          :dragToCreate="true"
          :externalDrop="true"
          :externalDrag="true"
          @event-create="handleEventCreate"
          @event-delete="handleEventDelete"
        />
      </div>
      <div ref="dropCont" class="mbsc-col-sm-3 external-drop-cont">
        <MbscDropcontainer :element="dropCont" @item-drop="handleItemDrop($event)">
          <div class="mbsc-form-group-title">Available tasks</div>
          <div v-for="(task, i) in myTasks" :key="task.id">
            <div ref="dragElements" class="external-drop-task" :style="{ background: task.color }">
              <div>{{ task.title }}</div>
              <div>{{ getHours(task) }}</div>
              <MbscDraggable :element="dragElements[i]" :dragData="task" />
            </div>
          </div>
        </MbscDropcontainer>
      </div>
    </div>
  </div>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.external-drop-calendar {
  border-right: 1px solid #ccc;
}

.external-drop-cont {
  height: 100%;
  overflow: auto;
}

.external-drop-task {
  color: #fff;
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  font-family:
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
}

.external-drop-task {
  background: #999;
}

.demo-external-drag-drop-schedule-unschedule.demo-wrapper,
.demo-external-drag-drop-schedule-unschedule .mbsc-grid,
.demo-external-drag-drop-schedule-unschedule .mbsc-row,
.demo-external-drag-drop-schedule-unschedule .external-drop-calendar {
  height: 100%;
}
</style>
