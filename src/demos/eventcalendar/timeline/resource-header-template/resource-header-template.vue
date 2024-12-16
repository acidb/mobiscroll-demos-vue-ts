<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const myResources = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Flatiron Room',
    seats: 90,
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'The Capital City',
    seats: 250,
    color: '#ff0101'
  },
  {
    id: 3,
    name: 'Heroes Square',
    seats: 400,
    color: '#01adff'
  },
  {
    id: 4,
    name: 'Thunderdome',
    seats: 1200,
    color: '#239a21'
  },
  {
    id: 5,
    name: 'King’s Landing',
    seats: 550,
    color: '#ff4600'
  },
  {
    id: 6,
    name: 'Gathering Field',
    seats: 900,
    color: '#8f1ed6'
  }
])

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    startDay: 1,
    endDay: 5
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/daily-weekly-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    className="md-resource-header-template"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
  >
    <template #resource="resource">
      <div class="md-resource-header-template-cont">
        <div class="md-resource-header-template-name">{{ resource.name }}</div>
        <div class="md-resource-header-template-seats">{{ resource.seats + ' seats' }}</div>
      </div>
    </template>
    <template #resourceHeader>
      <div class="md-resource-header-template-title">
        <div class="md-resource-header-template-name">Room</div>
        <div class="md-resource-header-template-seats">Capacity</div>
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-resource-header-template .mbsc-timeline-resource-col {
  width: 230px;
}

.md-resource-header-template .mbsc-timeline-resource-header,
.md-resource-header-template .mbsc-timeline-resource-title {
  padding: 0;
}

.md-resource-header-template .mbsc-timeline-resource-title {
  height: 100%;
}

.md-resource-header-template-cont {
  line-height: 50px;
  height: 100%;
}

.md-resource-header-template-name {
  height: 100%;
  display: inline-block;
  padding: 0 5px;
}

.md-resource-header-template-seats {
  border-left: 1px solid #ccc;
  width: 90px;
  height: 100%;
  float: right;
  padding: 0 5px;
}

.md-resource-header-template-title {
  font-weight: 600;
  line-height: 56px;
}
</style>
