<script setup lang="ts">
import {
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscSelect,
  momentTimezone,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  MbscSelectChangeEvent
} from '@mobiscroll/vue'
import * as moment from 'moment-timezone'
import { ref } from 'vue'

momentTimezone.moment = moment

setOptions({
  // locale,
  // theme
})

const timezone = ref('utc')
const timezones = [
  {
    text: 'America/Los Angeles',
    value: 'America/Los_Angeles'
  },
  {
    text: 'America/Chicago',
    value: 'America/Chicago'
  },
  {
    text: 'America/New York',
    value: 'America/New_York'
  },
  {
    text: 'UTC',
    value: 'utc'
  },
  {
    text: 'Europe/London',
    value: 'Europe/London'
  },
  {
    text: 'Europe/Berlin',
    value: 'Europe/Berlin'
  },
  {
    text: 'Europe/Bucharest',
    value: 'Europe/Bucharest'
  },
  {
    text: 'Asia/Shanghai',
    value: 'Asia/Shanghai'
  },
  {
    text: 'Asia/Tokyo',
    value: 'Asia/Tokyo'
  }
]

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
  timeline: {
    type: 'week'
  }
}

function handleChange(ev: MbscSelectChangeEvent) {
  timezone.value = ev.value
}
</script>

<template>
  <MbscEventcalendar
    dataTimezone="utc"
    :displayTimezone="timezone"
    :timezonePlugin="momentTimezone"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
  >
    <template #header>
      <MbscCalendarNav />
      <div class="md-timezone-header">
        <MbscCalendarPrev />
        <MbscCalendarToday />
        <MbscCalendarNext />
        <MbscSelect
          inputStyle="box"
          v-model="timezone"
          :data="timezones"
          :touchUi="false"
          @change="handleChange"
        />
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-timezone-header .mbsc-textfield-wrapper {
  margin: 0.5em;
}

.md-timezone-header {
  display: flex;
  align-items: center;
  margin-left: auto;
}
</style>
