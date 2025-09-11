<script setup lang="ts">
import {
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const calInst = ref<typeof MbscEventcalendar>()
const isToastOpen = ref(false)

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
    end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
    title: 'General orientation',
    resource: 2,
    bufferBefore: 20,
    bufferAfter: 30
  }
])

const myResources = ref<MbscResource[]>([
  { id: 1, name: 'Resource A', color: '#fdf500' },
  { id: 2, name: 'Resource B', color: '#ff0101' },
  { id: 3, name: 'Resource C', color: '#01adff' },
  { id: 4, name: 'Resource D', color: '#239a21' },
  { id: 5, name: 'Resource E', color: '#ff4600' }
])

const myView: MbscEventcalendarView = { timeline: { type: 'week' } }

function addEvent() {
  const newEvent: MbscCalendarEvent = {
    // Base properties
    title: 'Product planning',
    start: new Date(2018, 11, 21, 13),
    end: new Date(2018, 11, 21, 14),
    resource: 4,
    bufferBefore: 20,
    bufferAfter: 30,
    // Add any property you'd like
    busy: true,
    description: 'Weekly meeting with team',
    location: 'Office'
  }

  myEvents.value = [...myEvents.value, newEvent]
  isToastOpen.value = true
  calInst.value?.instance.navigateToEvent(newEvent)
}
</script>

<template>
  <MbscPage cssClass="mds-full-height">
    <div className="mds-full-height mbsc-flex-col">
      <div class="mbsc-flex-none">
        <MbscButton startIcon="plus" @click="addEvent()">Add event to calendar</MbscButton>
      </div>
      <div className="mds-overflow-hidden mbsc-flex-1-1">
        <MbscEventcalendar ref="calInst" :data="myEvents" :resources="myResources" :view="myView" />
      </div>
    </div>
    <MbscToast message="Event added" :isOpen="isToastOpen" @close="isToastOpen = false" />
  </MbscPage>
</template>

<style>
.mds-full-height {
  height: 100%;
}

.mds-overflow-hidden {
  overflow: hidden;
}
</style>
