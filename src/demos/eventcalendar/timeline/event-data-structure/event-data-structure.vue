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
const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
    end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
    title: 'General orientation',
    resource: 2
  }
])

const myResources = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Resource A',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#ff0101'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#01adff'
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#ff4600'
  }
])

const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
const mySelectedDate = ref<Date>(now)

const myView: MbscEventcalendarView = {
  timeline: { type: 'week' }
}

function addEvent() {
  const newEvent: MbscCalendarEvent = {
    // base properties
    title: 'Product planning',
    start: new Date(2018, 11, 21, 13),
    end: new Date(2018, 11, 21, 14),
    resource: 4,
    // add any property you'd like
    busy: true,
    description: 'Weekly meeting with team',
    location: 'Office'
  }

  mySelectedDate.value = new Date(2018, 11, 21)
  myEvents.value = [...myEvents.value, newEvent]

  toastMessage.value = 'Event added'
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscPage>
    <MbscEventcalendar
      :view="myView"
      :data="myEvents"
      :resources="myResources"
      :selectedDate="mySelectedDate"
    />
    <div class="mbsc-button-group-block">
      <MbscButton @click="addEvent()">Add event to calendar</MbscButton>
    </div>
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  </MbscPage>
</template>
