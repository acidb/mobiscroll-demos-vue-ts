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

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Green Hall'
  },
  {
    id: 2,
    name: 'White Hall'
  },
  {
    id: 3,
    name: 'Red Hall'
  },
  {
    id: 4,
    name: 'Blue Hall'
  },
  {
    id: 5,
    name: 'Yellow Hall'
  }
]

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    startDay: 1,
    endDay: 5,
    startTime: '08:00',
    endTime: '20:00',
    resolutionHorizontal: 'hour',
    resolutionVertical: 'day'
  }
}

function myDefaultEvent() {
  return {
    title: 'New class',
    prof: 'Stacia Jaden',
    class: 'Junior',
    color: '#ff0000'
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timetable-events/',
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
    className="md-timetable"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :extendDefaultEvent="myDefaultEvent"
  >
    <template #day="day">
      <div class="md-timetable-day">
        <div class="md-timetable-day-name">{{ formatDate('DDDD', day.date) }}</div>
        <div>{{ formatDate('MM/DD/YYY', day.date) }}</div>
      </div>
    </template>
    <template #scheduleEventContent="event">
      <div class="md-timetable-event-title">{{ event.title }}</div>
      <div class="md-timetable-event-prop">Prof. {{ event.original.prof }}</div>
      <div class="md-timetable-event-class">{{ event.original.class }} year</div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-timetable .mbsc-timeline-row-date-col {
  width: 90px;
}

.md-timetable .mbsc-timeline-row-gutter {
  height: 8px;
}

.md-timetable .mbsc-timeline-column,
.md-timetable .mbsc-timeline-header-column {
  width: 130px;
}

.md-timetable .mbsc-schedule-event-range {
  display: none;
}

.md-timetable-day {
  font-size: 14px;
  padding: 7px;
}

.md-timetable-day-name {
  font-weight: 600;
  padding-bottom: 5px;
}

.md-timetable-event-title {
  font-size: 12px;
  line-height: 18px;
}

.md-timetable-event-prop {
  color: #555;
  padding-bottom: 5px;
}

.md-timetable-event-class {
  color: #555;
  font-style: italic;
}
</style>
