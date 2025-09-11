<script setup lang="ts">
import { dayjsTimezone, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjsTimezone.dayjs = dayjs

setOptions({
  // locale,
  // theme
})

const myEvents: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,9)',
    title: 'Stakeholder mtg.',
    resource: [1, 2, 4]
  },
  {
    start: 'dyndatetime(y,m,d+3,18)',
    end: 'dyndatetime(y,m,d+3,19, 30)',
    title: 'Wrapup mtg.',
    resource: [2, 3, 5]
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Business of Software Conference',
    resource: [1, 3]
  },
  {
    start: 'dyndatetime(y,m,d+1,20)',
    end: 'dyndatetime(y,m,d+1,21, 50)',
    title: 'Product Team mtg.',
    resource: [2, 3, 4]
  },
  {
    start: 'dyndatetime(y,m,d-1,13)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Decision Making mtg.',
    resource: [1, 4, 5]
  },
  {
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,14)',
    title: 'Quick mtg. with Martin',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,d+3,12)',
    end: 'dyndatetime(y,m,d+3,16)',
    title: 'Team-Building',
    resource: [1, 2, 3, 4, 5]
  }
]

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Resource A',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#ff0101'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#01adff'
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#ff4600'
  }
]

const myView: MbscEventcalendarView = {
  timeline: { type: 'week' }
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :timezonePlugin="dayjsTimezone"
    dataTimezone="utc"
    displayTimezone="local"
  />
</template>
