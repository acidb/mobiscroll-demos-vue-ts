<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents: MbscCalendarEvent[] = [
  {
    bufferAfter: 30,
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,8)',
    title: 'Morning routine',
    resource: 1
  },
  {
    bufferAfter: 120,
    bufferBefore: 30,
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Friends binge marathon',
    resource: 4
  },
  {
    bufferAfter: 120,
    bufferBefore: 30,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Mastering CSS class',
    resource: 2
  },
  {
    bufferAfter: 10,
    bufferBefore: 15,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Product team mtg.',
    resource: 2
  },
  {
    bufferAfter: 20,
    bufferBefore: 30,
    start: 'dyndatetime(y,m,d,16,30)',
    end: 'dyndatetime(y,m,d,19, 30)',
    title: 'Cinema afternoon',
    resource: 3
  },
  {
    bufferAfter: 10,
    bufferBefore: 10,
    start: 'dyndatetime(y,m,d,8,30)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Quick mtg. with Martin',
    resource: 3
  },
  {
    bufferBefore: 45,
    start: 'dyndatetime(y,m,d,9,30)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Product team mtg.',
    resource: 4
  }
]

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Resource 1',
    color: '#e20000'
  },
  {
    id: 2,
    name: 'Resource 2',
    color: '#76e083'
  },
  {
    id: 3,
    name: 'Resource 3',
    color: '#4981d6'
  },
  {
    id: 4,
    name: 'Resource 4',
    color: '#f7961e'
  }
]

const myView: MbscEventcalendarView = {
  timeline: { type: 'week' }
}
</script>

<template>
  <MbscEventcalendar
    :showEventBuffer="true"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
  ></MbscEventcalendar>
</template>
