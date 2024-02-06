<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myResources = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Ryan',
    color: '#f7c4b4',
    img: 'https://img.mobiscroll.com/demos/m1.png'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#c6f1c9',
    img: 'https://img.mobiscroll.com/demos/f1.png'
  },
  {
    id: 3,
    name: 'John',
    color: '#e8d0ef',
    img: 'https://img.mobiscroll.com/demos/m2.png'
  }
])

const myView: MbscEventcalendarView = {
  schedule: {
    type: 'week',
    allDay: false,
    startDay: 1,
    endDay: 5,
    startTime: '08:00',
    endTime: '17:00'
  }
}

const milestones = [
  {
    date: 'dyndatetime(y,m,d-2)',
    name: 'Project review',
    color: '#f5da7b'
  },
  {
    date: 'dyndatetime(y,m,d-1)',
    name: 'Product shipping',
    color: '#acf3a3'
  },
  {
    date: 'dyndatetime(y,m,d+1)',
    name: 'Cycle finish',
    color: '#ff84a0'
  }
]

function getTask(date: any): any {
  return milestones.find((obj) => +new Date(obj.date) === +date) || {}
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/resource-events/',
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
    className="md-date-header-template"
    groupBy="date"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
  >
    <template #day="day">
      <div class="header-template-container">
        <div class="header-template-date">
          <div class="header-template-day-name">{{ formatDate('DDDD', day.date) }}</div>
          <div class="header-template-day">{{ formatDate('MMMM DD', day.date) }}</div>
        </div>
        <div class="header-template-task" :style="{ background: getTask(day.date).color }">
          {{ getTask(day.date).name }}
        </div>
      </div>
    </template>
    <template #resource="resource">
      <div class="header-resource-template-content">
        <img class="header-resource-avatar" :src="resource.img" />
        <div class="header-resource-name">{{ resource.name }}</div>
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.header-template-container {
  padding: 10px;
}

.header-template-date {
  text-align: left;
  line-height: 20px;
}

.header-template-day-name {
  font-weight: bold;
}

.header-template-day {
  font-size: 12px;
}

.header-template-task {
  position: absolute;
  top: 14px;
  right: 10px;
  font-size: 12px;
  line-height: 22px;
  padding: 0 10px;
  border-radius: 12px;
  color: #555;
}

.header-resource-template-content {
  position: relative;
}

.header-resource-avatar {
  max-height: 40px;
  max-width: 40px;
}

.header-resource-name {
  font-size: 14px;
}
</style>
