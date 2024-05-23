<script setup lang="ts">
import { getJson, MbscEventcalendar /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

const myEvents = ref<MbscCalendarEvent[]>([])

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    eventHeight: 'variable',
    startTime: '07:00',
    endTime: '21:00'
  }
}

const myResources = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Franklin Hall',
    color: '#e20000'
  },
  {
    id: 2,
    name: 'Jefferson Commons',
    color: '#76e083'
  },
  {
    id: 3,
    name: 'Lincoln Residence',
    color: '#4981d6'
  },
  {
    id: 4,
    name: 'Roosevelt House',
    color: '#e25dd2'
  },
  {
    id: 5,
    name: 'Adams Hall',
    color: '#f7961e'
  },
  {
    id: 6,
    name: 'Washington Tower',
    color: '#d6d145'
  }
])

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events-variable-height/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :dragToCreate="false"
    :clickToCreate="false"
    :dragToMove="true"
    :dragToResize="true"
    :dragInTime="true"
  >
    <template #scheduleEventContent="event">
      <div class="mds-variable-event-height-title">{{ event.title }}</div>
      <div class="mds-variable-event-height-description">{{ event.original.description }}</div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.mds-variable-event-height-title {
  white-space: normal;
  line-height: 16px;
  font-size: 15px;
  font-weight: 600;
}

.mds-variable-event-height-description {
  padding: 8px 0;
  white-space: normal;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
}

.mds-variable-event-height .mbsc-schedule-event-range {
  font-size: 12px;
  font-weight: 600;
}

.mds-variable-event-height .mbsc-schedule-event-inner {
  padding: 1em;
}
</style>
