<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myView: MbscEventcalendarView = { agenda: { type: 'month' } }

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/agenda-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents">
    <template #event="data">
      <div class="mbsc-flex mbsc-flex-1-1">
        <img
          class="mds-agenda-event-img"
          :alt="data.title"
          :src="'https://img.mobiscroll.com/demos/' + data.original.img"
        />
        <div class="mbsc-flex-1-1">
          <div class="mds-agenda-event-title">{{ data.title }}</div>
          <div class="mbsc-flex">
            <div class="mds-agenda-event-location mbsc-flex-1-1">
              <div class="mds-agenda-event-label">Location</div>
              <div>{{ data.original.location }}</div>
            </div>
            <div class="mds-agenda-event-time">
              <div class="mds-agenda-event-label">Time</div>
              <div>{{ data.start }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.mds-agenda-event-img {
  width: 100px;
  margin-right: 10px;
  border-radius: 6px;
}

.mds-agenda-event-title {
  font-size: 17px;
  font-weight: 600;
  padding-bottom: 10px;
}

.mds-agenda-event-location {
  line-height: 1.4;
  margin-right: 40px;
}

.mds-agenda-event-time {
  line-height: 1.4;
}

.mds-agenda-event-label {
  font-size: 12px;
  font-weight: 600;
  color: #aaa;
}
</style>
