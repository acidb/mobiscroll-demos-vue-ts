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
  calendar: {
    labels: false,
    popover: true,
    popoverClass: 'custom-event-popover'
  }
}

function getParticipant(id: any) {
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
    default:
      return {
        img: '',
        name: ''
      }
  }
}

function add(ev: any, data: any) {
  ev.stopPropagation()
  toastMessage.value = getParticipant(data.participant).name + "'s event clicked"
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/custom-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents">
    <template #eventContent="data">
      <div>{{ data.title }}</div>
      <div class="md-custom-event-cont">
        <img class="md-custom-event-img" :src="getParticipant(data.original.participant).img" />
        <div class="mbsc-custom-event-name">
          {{ getParticipant(data.original.participant).name }}
        </div>
        <MbscButton
          className="md-custom-event-btn"
          color="primary"
          variant="outline"
          @click="add($event, data.original)"
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
}

.mbsc-custom-event-name {
  padding: 0 10px;
}

.md-custom-event-cont {
  display: flex;
  align-items: center;
  padding-top: 10px;
  font-size: 13px;
}

.md-custom-event-btn.mbsc-button {
  position: absolute;
  right: 10px;
  bottom: 8px;
  line-height: 20px;
  padding: 0px 6px;
}

.custom-event-popover.mbsc-material .mbsc-popover-list .mbsc-event {
  padding: 10px 14px;
}

.custom-event-popover.mbsc-ios .mbsc-popover-list {
  width: 340px;
}

.custom-event-popover.mbsc-material .mbsc-popover-list {
  width: 320px;
}

.custom-event-popover.mbsc-windows .mbsc-popover-list {
  width: 340px;
}
</style>
