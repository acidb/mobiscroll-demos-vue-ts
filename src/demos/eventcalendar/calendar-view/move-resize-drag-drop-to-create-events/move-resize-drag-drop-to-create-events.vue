<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myData = ref<MbscCalendarEvent[]>([
  {
    title: 'Fixed event',
    start: 'dyndatetime(y,m,18)',
    end: 'dyndatetime(y,m,19)',
    color: '#9e9e9e',
    editable: false
  },
  {
    title: 'Drag me',
    start: 'dyndatetime(y,m,3)',
    end: 'dyndatetime(y,m,5)',
    color: '#cc9900'
  },
  {
    title: 'Resize me',
    start: 'dyndatetime(y,m,24)',
    end: 'dyndatetime(y,m,29)',
    color: '#ca4747'
  },
  {
    title: 'Move me around',
    start: 'dyndatetime(y,m,11)',
    end: 'dyndatetime(y,m,14)',
    color: '#339966'
  }
])
</script>

<template>
  <MbscEventcalendar
    :data="myData"
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :eventDelete="true"
  />
</template>
