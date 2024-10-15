<script setup lang="ts">
import {
  getJson,
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

const dayView: MbscEventcalendarView = { agenda: { type: 'day' } }
const weekView: MbscEventcalendarView = { agenda: { type: 'week' } }
const monthView: MbscEventcalendarView = { agenda: { type: 'month' } }

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
  <MbscPage>
    <div class="mbsc-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Daily agenda</div>
            <MbscEventcalendar :data="myEvents" :view="dayView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Weekly agenda</div>
            <MbscEventcalendar :data="myEvents" :view="weekView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Monthly agenda</div>
            <MbscEventcalendar :data="myEvents" :view="monthView" />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
