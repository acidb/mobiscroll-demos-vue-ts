<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myView: MbscEventcalendarView = {
  agenda: { type: 'month' }
}

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
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents">
    <template #event="data">
      <div class="md-full-event">
        <img
          class="md-full-event-img"
          :src="'https://img.mobiscroll.com/demos/' + data.original.img"
        />
        <div class="md-full-event-details">
          <div class="md-full-event-title">{{ data.title }}</div>
          <div class="md-full-event-location">
            <div class="md-full-event-label">Location</div>
            <div>{{ data.original.location }}</div>
          </div>
          <div class="md-full-event-time">
            <div class="md-full-event-label">Time</div>
            <div>{{ data.start }}</div>
          </div>
        </div>
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-full-event {
  width: 100%;
  padding: 10px 0;
}

.md-full-event-img {
  width: 100px;
  border-radius: 6px;
  float: left;
}

.md-full-event-details {
  margin-left: 114px;
}

.md-full-event-title {
  font-size: 17px;
  font-weight: 600;
  padding-bottom: 10px;
}

.md-full-event-location {
  display: inline-block;
  line-height: 1.4;
  margin-right: 40px;
}

.md-full-event-time {
  display: inline-block;
  line-height: 1.4;
}

.md-full-event-label {
  font-size: 12px;
  font-weight: 600;
  color: #aaa;
}
</style>
