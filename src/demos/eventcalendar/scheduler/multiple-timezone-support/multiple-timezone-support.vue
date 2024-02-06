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
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,9)',
    title: 'Stakeholder mtg.',
    color: '#408cff'
  },
  {
    start: 'dyndatetime(y,m,d-1,18)',
    end: 'dyndatetime(y,m,d-1,19,30)',
    title: 'Wrapup mtg.',
    color: '#ecbc72'
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Business of Software Conference',
    color: '#ff6d42'
  },
  {
    start: 'dyndatetime(y,m,d+1,20)',
    end: 'dyndatetime(y,m,d+1,21,50)',
    title: 'Product Team mtg.',
    color: '#913aa7'
  },
  {
    start: 'dyndatetime(y,m,d+2,13)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Decision Making mtg.',
    color: '#5bb7c5'
  },
  {
    start: 'dyndatetime(y,m,d+3,13)',
    end: 'dyndatetime(y,m,d+3,14)',
    title: 'Quick mtg. with Martin',
    color: '#fd002f'
  },
  {
    start: 'dyndatetime(y,m,d+4,12)',
    end: 'dyndatetime(y,m,d+4,16)',
    title: 'Team-Building'
  }
]

const myView: MbscEventcalendarView = {
  schedule: {
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
