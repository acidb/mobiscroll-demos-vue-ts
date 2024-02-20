<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Resource A - Row background with "background" property',
    color: '#e20000',
    background: 'rgba(108, 166, 166, 0.37)',
  },
  {
    id: 2,
    name: 'Resource B - Thicker borders with "cssClass" property',
    color: '#1dab2f',
    cssClass: 'md-tick-border',
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#4981d6',
  },
  {
    id: 4,
    name: 'Resource D - Resource background with "cssClass" property',
    color: '#e25dd2',
    cssClass: 'md-resource-only-bg',
  },
  {
    id: 5,
    name: 'Resource E - Different backgrounds with "cssClass" property',
    color: '#4981d6',
    cssClass: 'md-diff-custom-bg',
  },
  {
    id: 6,
    name: 'Resource F',
    color: '#d6d145',
  },
  {
    id: 7,
    name: 'Resource H - Grid background with "cssClass" property',
    color: '#34c8e0',
    cssClass: 'md-row-only-bg'
  },
]

const myEvents: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,2)',
    end: 'dyndatetime(y,m,5)',
    title: 'Event 1',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,10,9)',
    end: 'dyndatetime(y,m,15,15)',
    title: 'Event 2',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,12)',
    end: 'dyndatetime(y,m,14)',
    title: 'Event 3',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,15,7)',
    end: 'dyndatetime(y,m,20,12)',
    title: 'Event 4',
    resource: 5
  },
  {
    start: 'dyndatetime(y,m,3)',
    end: 'dyndatetime(y,m,10)',
    title: 'Event 5',
    resource: 6
  },
  {
    start: 'dyndatetime(y,m,10,8)',
    end: 'dyndatetime(y,m,11,20)',
    title: 'Event 6',
    resource: 7
  },
  {
    start: 'dyndatetime(y,m,25)',
    end: 'dyndatetime(y,m,27)',
    title: 'Event 9',
    resource: 8
  },
  {
    start: 'dyndatetime(y,m,20)',
    end: 'dyndatetime(y,m,23)',
    title: 'Event 10',
    resource: 9
  }
]

const myView: MbscEventcalendarView = {
  timeline: { type: 'month' }
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents" :resources="myResources">
    <template #sidebar="resource">
      <div class="md-resource-bg-res-cont">
        {{ resource.name }} Sidebar
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-diff-custom-bg.mbsc-timeline-row {
  background-image: radial-gradient(#ae8a8a 20%, transparent 20%);
  background-color: #f9f9f9;
  background-position:
    0 0,
    10px 10px;
  background-size: 20px 20px;
}

.md-diff-custom-bg.mbsc-timeline-resource {
  background: repeating-linear-gradient(-45deg, #fcfffc, #fcfffc 10px, #eefbec 10px, #eefbec 20px);
}

.md-diff-custom-bg.mbsc-timeline-sidebar-resource {
  opacity: 0.8;
  background-image: repeating-linear-gradient(
      45deg,
      #ffd6d6 25%,
      transparent 25%,
      transparent 75%,
      #ffd6d6 75%,
      #ffd6d6
    ),
    repeating-linear-gradient(45deg, #ffd6d6 25%, #ffefef 25%, #ffefef 75%, #ffd6d6 75%, #ffd6d6);
  background-position:
    0 0,
    10px 10px;
  background-size: 20px 20px;
}

.md-tick-border {
  border-top: 2px solid currentColor;
  border-bottom-width: 3px;
}

.md-row-only-bg .mbsc-timeline-day {
  background: rgba(0, 128, 128, 0.8);
}

.md-resource-only-bg.mbsc-timeline-resource {
  background: rgba(255, 166, 0, 0.7);
}
</style>
