<script setup lang="ts">
import {
  getJson,
  MbscButton,
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

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  calendar: { type: 'week' },
  agenda: { type: 'day' }
}

function getParticipant(id: number) {
  switch (id) {
    case 1:
      return {
        img: 'https://img.mobiscroll.com/demos/m1.png',
        name: 'Barry L.'
      }
    case 2:
      return {
        img: 'https://img.mobiscroll.com/demos/f1.png',
        name: 'Hortense T.'
      }
    case 3:
      return {
        img: 'https://img.mobiscroll.com/demos/m2.png',
        name: 'Carl H.'
      }
  }
}

function add(data: MbscCalendarEvent) {
  toastMessage.value = data.title + ' clicked'
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/custom-events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents" className="md-custom-event">
    <template #eventContent="data">
      <div>{{ data.title }}</div>
      <div class="md-custom-event-cont">
        <img class="md-custom-event-img" :src="getParticipant(data.original.participant)!.img" />
        <div class="mbsc-custom-event-name">
          {{ getParticipant(data.original.participant)!.name }}
        </div>
        <MbscButton
          className="md-custom-event-btn"
          color="secondary"
          data-variant="outline"
          @click="add(data.original)"
        >
          Add participant
        </MbscButton>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-custom-event-img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.md-custom-event-cont {
  display: flex;
  align-items: center;
  padding-top: 10px;
  font-size: 13px;
}

.md-custom-event-btn,
.md-custom-event-btn.mbsc-button {
  position: absolute;
  right: 10px;
  bottom: 8px;
  line-height: 20px;
}

.md-custom-event .mbsc-material.mbsc-event-time {
  margin-top: 5px;
}
</style>
