<script setup lang="ts">
import {
  getJson,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myView: MbscEventcalendarView = {
  schedule: { type: 'week' }
}

const myEvents = ref<MbscCalendarEvent[]>([])
const myInvalid = [
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'SA,SU'
    }
  },
  {
    start: '12:00',
    end: '13:00',
    title: 'Lunch break',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    }
  },
  {
    start: '00:00',
    end: '08:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    }
  },
  {
    start: '17:00',
    end: '23:59',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    }
  }
]

const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')

function handleEventCreateFailed() {
  toastMessage.value = "Can't create event on this date"
  isToastOpen.value = true
}

function handleEventUpdateFailed() {
  toastMessage.value = "Can't add event on this date"
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/workday-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    invalidateEvent="strict"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :view="myView"
    :data="myEvents"
    :invalid="myInvalid"
    @event-create-failed="handleEventCreateFailed"
    @event-update-failed="handleEventUpdateFailed"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
