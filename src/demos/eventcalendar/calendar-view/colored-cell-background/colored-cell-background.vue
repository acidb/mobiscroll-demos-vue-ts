<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarColor, MbscCalendarEvent } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myColors = ref<MbscCalendarColor>([
  {
    start: 'dyndatetime(y,m,0)',
    end: 'dyndatetime(y,m,1)',
    background: '#fde4c880'
  },
  {
    start: 'dyndatetime(y,m,17)',
    end: 'dyndatetime(y,m,20)',
    background: '#d5f1ea80'
  },
  {
    date: 'dyndatetime(y,m,29)',
    background: '#ffdbdb80'
  },
  {
    date: 'dyndatetime(y,m+1,3)',
    background: '#fbedd080'
  },
  {
    date: 'dyndatetime(y,m+1,10)',
    background: '#fbedd080'
  },
  {
    background: '#d6e81e1a',
    recurring: {
      repeat: 'monthly',
      day: -1
    }
  }
])

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
  <MbscEventcalendar :data="myEvents" :colors="myColors" />
</template>
