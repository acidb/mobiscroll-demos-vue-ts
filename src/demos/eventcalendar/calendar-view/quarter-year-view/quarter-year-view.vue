<script setup lang="ts">
import {
  getJson,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
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
const calendarType = ref<string>('quarter')
const calHeight = ref<string>('auto')

const myView = ref<MbscEventcalendarView>({
  calendar: {
    type: 'month',
    size: 3
  }
})

function changeView() {
  switch (calendarType.value) {
    case 'quarter':
      myView.value = {
        calendar: {
          type: 'month',
          size: 3
        }
      }
      calHeight.value = 'auto'
      break
    case 'year':
      myView.value = {
        calendar: {
          type: 'year'
        }
      }
      calHeight.value = '100%'
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
  <MbscEventcalendar :data="myEvents" :view="myView" :height="calHeight">
    <template #header>
      <MbscCalendarNav />
      <div class="quarter-year-header-picker">
        <MbscSegmentedGroup v-model="calendarType" @change="changeView()">
          <MbscSegmented value="quarter">Quarter</MbscSegmented>
          <MbscSegmented value="year">Year</MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev />
      <MbscCalendarToday />
      <MbscCalendarNext />
    </template>
  </MbscEventcalendar>
</template>

<style>
.mbsc-calendar .quarter-year-header-picker .mbsc-segmented {
  max-width: 200px;
  margin: 0 auto;
}

.quarter-year-header-picker {
  flex: 1 0 auto;
}
</style>
