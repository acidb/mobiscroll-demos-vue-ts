<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d,10,30)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Tire change',
    color: '#7a5886',
    taskType: 'material-repeat',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Brake maintenance',
    color: '#9da721',
    taskType: 'cogs',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d,13,30)',
    end: 'dyndatetime(y,m,d,16,30)',
    title: 'Fluid maintenance',
    color: '#cd6957',
    taskType: 'cogs',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Oil change',
    color: '#637e57',
    taskType: 'material-repeat',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Engine inspection',
    color: '#6c5d45',
    taskType: 'material-search',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Car painting',
    color: '#50789d',
    taskType: 'material-format-paint',
    resource: 2
  }
])

const myResources = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Ryan',
    color: '#239a21'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#01adff'
  },
  {
    id: 3,
    name: 'John',
    color: '#ff0101'
  }
])

function myDefaultEvent() {
  return {
    taskType: 'cogs',
    bufferAfter: 60,
    bufferBefore: 30,
    color: '#239a21'
  }
}

const myView: MbscEventcalendarView = {
  timeline: { type: 'day' }
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :extendDefaultEvent="myDefaultEvent"
    className="md-timeline-template"
  >
    <template #scheduleEvent="data">
      <div
        class="md-timeline-template-event"
        :style="{ borderColor: data.color, background: data.color }"
      >
        <div class="md-timeline-template-event-cont">
          <span
            :class="'mbsc-icon mbsc-font-icon mbsc-icon-' + data.original.taskType"
            :style="{ background: data.color }"
          ></span>
          <span class="md-timeline-template-time" :style="{ color: data.color }">{{
            data.start
          }}</span>
          <span class="md-timeline-template-title">{{ data.original.title }}</span>
        </div>
      </div>
    </template>
    <template #bufferAfter="data">
      <div class="md-buffer md-after-buffer" :style="{ background: data.original.color }">
        Inspection
        <span class="md-buffer-time">{{ data.original.bufferAfter }} min</span>
        <div class="md-buffer-tail" :style="{ background: data.original.color }"></div>
      </div>
    </template>
    <template #bufferBefore="data">
      <div class="md-buffer md-after-buffer" :style="{ background: data.original.color }">
        Prep
        <span class="md-buffer-time">{{ data.original.bufferBefore }} min</span>
        <div class="md-buffer-tail" :style="{ background: data.original.color }"></div>
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-timeline-template .mbsc-schedule-event.mbsc-ltr {
  height: auto !important;
}

.md-timeline-template-event {
  border: 1px solid transparent;
  margin: 2px 0;
}

.md-timeline-template-event-cont {
  background: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  height: 32px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.md-timeline-template-event-cont .mbsc-icon {
  padding: 5px;
  box-sizing: content-box;
}

.md-before-buffer,
.mbsc-timeline-event-start .md-timeline-template-event,
.mbsc-timeline-event-start .md-timeline-template-event-cont,
.mbsc-timeline-event-start .md-timeline-template-event-cont .mbsc-icon {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.md-after-buffer,
.mbsc-timeline-event-end .md-timeline-template-event,
.mbsc-timeline-event-end .md-timeline-template-event-cont,
.mbsc-timeline-event-end .md-timeline-template-event-cont .mbsc-icon {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.md-buffer {
  position: absolute;
  display: flex;
  width: 100%;
  font-size: 10px;
  top: 2px;
  bottom: 2px;
  left: 0;
  color: #fff;
  padding: 0 6px;
  line-height: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0.5;
  box-sizing: border-box;
  z-index: -1;
}

.md-buffer-tail {
  position: absolute;
  width: 14px;
  height: 100%;
  top: 0;
}

.md-before-buffer .md-buffer-tail {
  left: 100%;
}

.md-after-buffer .md-buffer-tail {
  right: 100%;
}

.md-buffer-time {
  font-weight: 600;
}

.md-timeline-template-event-cont .mbsc-icon:before {
  color: #fff;
  font-size: 18px;
}

.md-timeline-template-time {
  margin: 0 10px;
}

.md-timeline-template-title {
  color: #666;
}

.md-timeline-template .mbsc-timeline-column,
.md-timeline-template .mbsc-timeline-header-column {
  min-width: 100px;
}

.md-timeline-template .mbsc-timeline-resource,
.md-timeline-template .mbsc-timeline-row {
  min-height: 100px;
}
</style>
