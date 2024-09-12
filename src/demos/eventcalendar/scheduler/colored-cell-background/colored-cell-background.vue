<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarColor, MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myView: MbscEventcalendarView = {
  schedule: { type: 'week' }
}

const myColors: MbscCalendarColor[] = [
  {
    date: 'dyndatetime(y,m,d-2)',
    background: '#f3c3d480'
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,14)',
    background: '#fde4c880'
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+2, 20)',
    background: '#d5f1ea80'
  },
  {
    start: 'dyndatetime(y,m,d+6,6)',
    end: 'dyndatetime(y,m,d+6,8)',
    background: '#d5eaf780'
  },
  {
    start: 'dyndatetime(y,m,d+10)',
    end: 'dyndatetime(y,m,d+13)',
    allDay: true,
    background: '#e7ffe280'
  },
  {
    start: 'dyndatetime(y,m,d+16,10)',
    end: 'dyndatetime(y,m,d+17,8)',
    background: '#fbedd080'
  },
  {
    start: '12:00',
    end: '13:00',
    background: '#ffdbdb80',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    },
    title: 'Lunch'
  }
]

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents" :colors="myColors" />
</template>
