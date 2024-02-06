<script setup lang="ts">
import {
  getJson,
  MbscCheckbox,
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

const myView = ref<MbscEventcalendarView>({
  schedule: {
    type: 'week',
    allDay: false,
    startDay: 1,
    endDay: 5,
    startTime: '08:00',
    endTime: '17:00'
  }
})

const resources: MbscResource[] = [
  {
    id: 1,
    name: 'Ryan',
    color: '#f7c4b4'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#c6f1c9'
  },
  {
    id: 3,
    name: 'John',
    color: '#e8d0ef'
  }
]
const myResources = ref<MbscResource[]>(resources)

const participants: { [key: number]: boolean } = {
  1: true,
  2: true,
  3: true
}

function filter() {
  myResources.value = resources.filter((r) => participants[r.id as number])
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/resource-events-shared/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-9 external-event-calendar">
          <MbscEventcalendar
            :view="myView"
            :data="myEvents"
            :resources="myResources"
            :clickToCreate="true"
            :dragToCreate="true"
            :dragToMove="true"
            :dragToResize="true"
          />
        </div>
        <div class="mbsc-col-sm-3">
          <div class="mbsc-form-group-title">Show available tasks</div>
          <MbscCheckbox label="Ryan" v-model="participants[1]" @change="filter" />
          <MbscCheckbox label="Kate" v-model="participants[2]" @change="filter" />
          <MbscCheckbox label="John" v-model="participants[3]" @change="filter" />
        </div>
      </div>
    </div>
  </MbscPage>
</template>

<style>
.dynamic-resources-calendar {
  border-right: 1px solid #ccc;
}
</style>
