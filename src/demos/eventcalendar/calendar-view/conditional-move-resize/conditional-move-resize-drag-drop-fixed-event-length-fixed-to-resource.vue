<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myView: MbscEventcalendarView = {
  calendar: { type: 'month' }
}

const myEvents = ref<MbscCalendarEvent[]>([
  {
    color: 'cyan',
    end: 'dyndatetime(y,m,d-5)',
    start: 'dyndatetime(y,m,d-6)',
    title: 'Event 1'
  },
  {
    color: 'blue',
    dragInTime: false,
    end: 'dyndatetime(y,m,d-1)',
    start: 'dyndatetime(y,m,d-4)',
    title: 'Event 2 (cannot be moved in time)'
  },
  {
    color: 'brown',
    end: 'dyndatetime(y,m,d+3)',
    start: 'dyndatetime(y,m,d)',
    resize: false,
    title: 'Event 3 (cannot be resized)'
  },
  {
    color: 'teal',
    end: 'dyndatetime(y,m,d+4)',
    start: 'dyndatetime(y,m,d+3)',
    title: 'Event 4'
  },
  {
    color: 'yellow',
    end: 'dyndatetime(y,m,d+6)',
    start: 'dyndatetime(y,m,d+5)',
    title: 'Event 5'
  }
])
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents" :dragToMove="true" />
</template>
