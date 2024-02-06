<script setup lang="ts">
import {
  getJson,
  MbscButton,
  MbscCalendarNav,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscSegmented,
  MbscSegmentedGroup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const currentDate = ref<any>(new Date())
const view = ref<string>('schedule')
const calView = ref<MbscEventcalendarView>({
  schedule: { type: 'week' }
})

function getFirstDayOfWeek(d: Date, prev: boolean) {
  const day = d.getDay()
  const diff = d.getDate() - day + (prev ? -7 : 7)
  return new Date(d.setDate(diff))
}

function navigatePage(prev: boolean) {
  const newCurrentDate = currentDate.value
  if (view.value === 'calendar') {
    const prevNextPage = new Date(
      newCurrentDate.getFullYear(),
      newCurrentDate.getMonth() + (prev ? -1 : 1),
      1
    )
    currentDate.value = prevNextPage
  } else {
    const prevNextSunday = getFirstDayOfWeek(newCurrentDate, prev)
    currentDate.value = prevNextSunday
  }
}

function changeView() {
  switch (view.value) {
    case 'calendar':
      calView.value = {
        calendar: { labels: true }
      }
      break
    case 'schedule':
      calView.value = {
        schedule: { type: 'week' }
      }
      break
  }
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
  <MbscEventcalendar
    :data="myEvents"
    :view="calView"
    :selectedDate="currentDate"
    className="md-custom-header"
  >
    <template #header>
      <MbscCalendarNav className="md-custom-header-nav"></MbscCalendarNav>
      <div class="md-custom-header-controls">
        <MbscButton
          @click="navigatePage(true)"
          icon="material-arrow-back"
          variant="flat"
          className="md-custom-header-button"
        ></MbscButton>
        <MbscCalendarToday className="md-custom-header-today"></MbscCalendarToday>
        <MbscButton
          @click="navigatePage(false)"
          icon="material-arrow-forward"
          variant="flat"
          className="md-custom-header-button"
        ></MbscButton>
      </div>
      <div class="md-custom-header-view">
        <MbscSegmentedGroup v-model="view" @change="changeView()">
          <MbscSegmented value="schedule" v-model="view" icon="material-list"></MbscSegmented>
          <MbscSegmented value="calendar" v-model="view" icon="calendar"></MbscSegmented>
        </MbscSegmentedGroup>
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-custom-header-controls {
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
}

.md-custom-header-nav,
.md-custom-header-view {
  width: 180px;
}

.md-custom-header-button.mbsc-button {
  font-size: 20px;
  height: auto;
  padding: 0;
  margin: 0;
}

.md-custom-header .mbsc-segmented {
  width: 110px;
  float: right;
  margin-top: 0;
  margin-bottom: 0;
}

.md-custom-header .mbsc-material.mbsc-segmented,
.md-custom-header .mbsc-windows.mbsc-segmented {
  padding: 0;
}

.md-custom-header .mbsc-segmented .mbsc-segmented-button {
  font-size: 20px;
  height: 32px;
  padding: 0;
}
</style>
