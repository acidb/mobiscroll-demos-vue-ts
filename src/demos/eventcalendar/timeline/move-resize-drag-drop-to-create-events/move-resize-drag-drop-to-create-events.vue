<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myData = ref<MbscCalendarEvent[]>([
  {
    title: 'Fixed event',
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,20)',
    color: '#9e9e9e',
    editable: false,
    resource: 2
  },
  {
    title: 'Fixed event',
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,18)',
    color: '#9e9e9e',
    editable: false,
    resource: 4
  },
  {
    title: 'Fixed event',
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,14)',
    color: '#9e9e9e',
    editable: false,
    resource: 5
  },
  {
    title: 'Drag me',
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    color: '#cc9900',
    resource: 3
  },
  {
    title: 'Drag me',
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,18)',
    color: '#cc9900',
    resource: 2
  },
  {
    title: 'Resize me',
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,12)',
    color: '#ca4747',
    resource: 1
  },
  {
    title: 'Resize me',
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,18)',
    color: '#ca4747',
    resource: 4
  },
  {
    title: 'Move me around',
    start: 'dyndatetime(y,m,d,19)',
    end: 'dyndatetime(y,m,d,23)',
    color: '#339966',
    resource: 5
  },
  {
    title: 'Move me around',
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,11)',
    color: '#339966',
    resource: 2
  }
])

const myResource = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Ryan',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#ff4600'
  },
  {
    id: 3,
    name: 'John',
    color: '#ff0101'
  },
  {
    id: 4,
    name: 'Mark',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Sharon',
    color: '#8f1ed6'
  },
  {
    id: 6,
    name: 'Ashley',
    color: '#01adff'
  }
])

const myView = ref<MbscEventcalendarView>({
  timeline: { type: 'day' }
})
</script>

<template>
  <MbscEventcalendar
    :data="myData"
    :resource="myResource"
    :view="myView"
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :eventDelete="true"
  />
</template>
