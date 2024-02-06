<script setup lang="ts">
import {
  MbscButton,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents: MbscCalendarEvent[] = [
  {
    title: 'Zumba Class',
    start: '2023-10-20T17:00',
    end: '2023-10-20T19:00'
  },
  {
    title: 'Silent Party',
    start: '2023-10-20T21:00',
    end: '2023-10-20T23:00'
  },
  {
    title: 'Garbage Collection',
    start: '2023-11-03T15:00',
    end: '2023-11-03T17:00'
  },
  {
    title: 'Karaoke Night',
    start: '2023-11-03T20:00',
    end: '2023-11-03T22:00'
  }
]

const isToastOpen = ref(false)

const myView: MbscEventcalendarView = {
  calendar: { type: 'week' },
  agenda: { type: 'week' }
}

function displayToast() {
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents">
    <template #agendaEmpty>
      <div class="mbsc-align-center mbsc-padding">
        <img
          src="https://img.mobiscroll.com/demos/smart-empty-tin-can.png"
          alt="Empty can"
          style="width: 150px; margin: 50px 0"
        />
        <div class="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">
          Looks like this can is empty
        </div>
        <MbscButton color="primary" variant="outline" @click="displayToast()">
          Add something to it
        </MbscButton>
        <div class="mbsc-txt-xs" style="padding-top: 150px">
          Illustration by
          <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a>
          from <a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast message="Add button clicked" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
