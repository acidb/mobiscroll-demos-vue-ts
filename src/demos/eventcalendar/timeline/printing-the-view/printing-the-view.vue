<script setup lang="ts">
import { print } from '@mobiscroll/print'
import {
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const calendarRef = ref<any>(null)

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    startDay: 1,
    endDay: 5,
    eventList: true
  }
}

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Flatiron Room',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'The Capital City',
    color: '#ff0101'
  },
  {
    id: 3,
    name: 'Heroes Square',
    color: '#01adff'
  },
  {
    id: 4,
    name: 'Thunderdome',
    color: '#ff4600'
  },
  {
    id: 5,
    name: 'King’s Landing',
    color: '#239a21'
  },
  {
    id: 6,
    name: 'Gathering Field',
    color: '#8f1ed6'
  }
]

function printView() {
  calendarRef.value!.instance.print()
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/work-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage>
    <MbscButton @click="printView()">Print timeline</MbscButton>
    <!-- dragOptions -->
    <MbscEventcalendar
      ref="calendarRef"
      :data="myEvents"
      :resources="myResources"
      :view="myView"
      :modules="[print]"
    />
  </MbscPage>
</template>
