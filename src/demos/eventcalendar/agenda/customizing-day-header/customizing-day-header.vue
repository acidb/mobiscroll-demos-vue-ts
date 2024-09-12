<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscButton,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscToast
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month',
    showEmptyDays: true
  }
}

function addEvent(date: Date) {
  const newEvent = {
    title: 'Event',
    start: date
  }

  myEvents.value = [...myEvents.value, newEvent]

  toastMessage.value = 'Event added'
  isToastOpen.value = true
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar cssClass="mds-custom-day-header" :view="myView" :data="myEvents">
    <template #day="day">
      <div class="mbsc-flex mbsc-flex-1-1 mbsc-align-items-center">
        <div class="mbsc-flex-1-1">
          <div>{{ formatDate('D MMM YYYY', day.date) }}</div>
        </div>
        <MbscButton
          className="mds-custom-day-header-btn"
          color="primary"
          startIcon="plus"
          variant="outline"
          @click="addEvent(day.date)"
          >Add event</MbscButton
        >
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-custom-day-header .mbsc-event-day.mbsc-windows {
  padding: 8px 24px;
}

.mds-custom-day-header-btn.mbsc-button {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  border-radius: 12px;
  margin: 0;
}
</style>
