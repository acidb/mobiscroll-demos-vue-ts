<script setup lang="ts">
import { print } from '@mobiscroll/print'
import {
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const calendarRef = ref<any>()
const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}

function printView() {
  calendarRef.value!.instance.print()
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/work-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage>
    <MbscButton @click="printView()">Print agenda</MbscButton>
    <!-- dragOptions -->
    <MbscEventcalendar ref="calendarRef" :data="myEvents" :view="myView" :modules="[print]" />
  </MbscPage>
</template>
