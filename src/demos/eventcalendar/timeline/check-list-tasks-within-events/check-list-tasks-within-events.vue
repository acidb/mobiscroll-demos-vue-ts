<script setup lang="ts">
import {
  getJson,
  MbscEventcalendar /* localeImport */,
  MbscPrompt,
  MbscToast
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscResource
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

const myEvents = ref<MbscCalendarEvent[]>([])
const isPromptOpen = ref<boolean>(false)
const promptTitle = ref<string>('')
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')
const tempEvent = ref<MbscCalendarEvent>()

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    eventHeight: 'variable',
    eventList: true
  }
}

const myResources = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Site Plumbing Squad',
    description:
      'Elite construction plumbers ensuring flawless pipeline installations on every site.',
    color: '#01adff'
  },
  {
    id: 2,
    name: 'Pipeline Builders',
    description: 'Constructing fluid pathways, one precision connection at a time.',
    color: '#239a21'
  },
  {
    id: 3,
    name: 'Blueprint Plumbers',
    description: 'Turning plans into precise pipelines with expert craftsmanship.',
    color: '#ff4600'
  },
  {
    id: 4,
    name: 'Site Supply Specialists',
    description: 'Delivering essential plumbing materials promptly to construction sites',
    color: '#4981d6'
  },
  {
    id: 5,
    name: 'Infrastructure Installers',
    description: ' Building the backbone of modern plumbing systems efficiently.',
    color: '#f1e920'
  },
  {
    id: 6,
    name: 'Steel Sinks Squad',
    description: 'Installing robust sinks for industrial and commercial settings.',
    color: '#f7961e'
  }
])

function handleDefaultEvent() {
  return {
    title: 'New Event',
    tasks: ['Default task']
  }
}

function handleClosePrompt(value: string | null) {
  if (value) {
    tempEvent.value!.tasks.push(value)
    const index = myEvents.value.findIndex(
      (event: MbscCalendarEvent) => event.id === tempEvent.value!.id
    )
    const newEventList = [...myEvents.value]
    newEventList.splice(index, 1, tempEvent.value!)
    myEvents.value = newEventList
  }
  isPromptOpen.value = false
  toastMessage.value = 'Tasks updated for ' + tempEvent.value!.title
  isToastOpen.value = true
}

function handleCloseToast() {
  isToastOpen.value = false
}

function addTask(event: MbscCalendarEventData) {
  const ev = event.original!
  tempEvent.value = ev
  promptTitle.value = 'Add new task to ' + ev.title
  isPromptOpen.value = true
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events-check-list-tasks/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-tasks-calendar"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :dragToCreate="true"
    :clickToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :extendDefaultEvent="handleDefaultEvent"
  >
    <template #resource="resource">
      <div class="mds-tasks-resource-name">{{ resource.name }}</div>
      <div class="mds-tasks-resource-description">{{ resource.description }}</div>
    </template>
    <template #scheduleEventContent="event">
      <div class="mds-tasks-event-title">{{ event.title }}</div>
      <div class="mds-tasks-event-subtitle">Task list</div>
      <div class="mds-tasks-event-list">
        <div class="mds-tasks-event-list-item" v-for="task in event.original.tasks" :key="task">
          {{ task }}
        </div>
        <div class="mds-tasks-event-list-item mds-tasks-event-add" @click="addTask(event)">
          + Add task
        </div>
      </div>
    </template>
  </MbscEventcalendar>

  <MbscPrompt :title="promptTitle" :isOpen="isPromptOpen" @close="handleClosePrompt" />
  <MbscToast
    :isOpen="isToastOpen"
    :message="toastMessage"
    @close="handleCloseToast"
    :duration="3000"
  />
</template>

<style>
.mds-tasks-resource-name {
  padding: 15px 0 8px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

.mds-tasks-resource-description {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.mds-tasks-event-title {
  padding: 16px 8px 0 8px;
  white-space: normal;
  word-break: normal;
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
}

.mds-tasks-event-subtitle {
  font-weight: 600;
  font-size: 14px;
  padding: 8px 8px 0 8px;
}

.mds-tasks-event-list {
  margin: 8px 8px 16px;
  border-radius: 0.25em;
  background-color: #ffffff69;
}

.mds-tasks-event-list-item {
  padding: 8px;
  white-space: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000;
  border-bottom: 1px solid #00000033;
  font-weight: 400;
}

.mds-tasks-event-add {
  padding-top: 4px;
  border-bottom: none;
  font-weight: 700;
}

.mds-tasks-event-add:hover {
  color: #0000ee;
  text-decoration: underline;
}

.mds-tasks-calendar .mbsc-timeline-row {
  height: 174px;
}

.mds-tasks-calendar .mbsc-schedule-event-inner {
  display: block;
  height: auto;
}
</style>
