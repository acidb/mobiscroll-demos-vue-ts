<script setup lang="ts">
import {
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const calInst = ref<typeof MbscEventcalendar>()
const isToastOpen = ref(false)

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
    end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
    title: 'General orientation',
    color: '#35bb5a'
  }
])

const myView: MbscEventcalendarView = { agenda: { type: 'month' } }

function addEvent() {
  const newEvent: MbscCalendarEvent = {
    // base properties
    title: 'Product planning',
    color: '#56ca70',
    start: new Date(2018, 11, 21, 13),
    end: new Date(2018, 11, 21, 14),
    // add any property you'd like
    busy: true,
    description: 'Weekly meeting with team',
    location: 'Office'
  }

  myEvents.value = [...myEvents.value, newEvent]
  isToastOpen.value = true
  calInst.value.instance.navigateToEvent(newEvent)
}
</script>

<template>
  <MbscPage cssClass="mds-full-height">
    <div className="mds-full-height mbsc-flex-col">
      <div class="mbsc-flex-none">
        <MbscButton startIcon="plus" @click="addEvent()">Add event to calendar</MbscButton>
      </div>
      <div className="mds-overflow-hidden mbsc-flex-1-1">
        <MbscEventcalendar ref="calInst" :data="myEvents" :view="myView" />
      </div>
    </div>
    <MbscToast message="Event added" :isOpen="isToastOpen" @close="isToastOpen = false" />
  </MbscPage>
</template>

<style>
.mds-full-height {
  height: 100%;
}

.mds-overflow-hidden {
  overflow: hidden;
}
</style>
