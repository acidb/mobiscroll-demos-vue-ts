<script setup lang="ts">
import {
  getJson,
  MbscButton,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { computed, onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calRef = ref<typeof MbscEventcalendar>()

const zoomLevel = ref(9)

const refDate = computed(() => {
  const viewDate = calRef.value ? calRef.value.instance.getViewDate() : new Date()
  if (zoomLevel.value < 11) {
    return new Date(viewDate.getFullYear() - 12, 0, 1)
  }
  if (zoomLevel.value < 15) {
    return new Date(viewDate.getFullYear() - 1, 0, 1)
  }
  return new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myResources: MbscResource[] = [
  { id: 1, name: 'Resource A', color: '#e20000' },
  { id: 2, name: 'Resource B', color: '#76e083' },
  { id: 3, name: 'Resource C', color: '#4981d6' },
  { id: 4, name: 'Resource D', color: '#e25dd2' },
  { id: 5, name: 'Resource E', color: '#1dab2f' },
  { id: 6, name: 'Resource F', color: '#d6d145' }
]

const myView: MbscEventcalendarView = {
  timeline: {
    zoomLevels: {
      1: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'small' },
      2: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'xlarge' },
      3: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'small' },
      4: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'xlarge' },
      5: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'medium' },
      6: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'xxxlarge' },
      7: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'medium' },
      8: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'xxxlarge' },
      9: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'small' },
      10: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
      11: {
        type: 'year',
        size: 3,
        resolutionHorizontal: 'hour',
        columnWidth: 'xlarge',
        timeCellStep: 720,
        timeLabelStep: 720
      },
      12: {
        type: 'year',
        size: 3,
        resolutionHorizontal: 'hour',
        columnWidth: 'xlarge',
        timeCellStep: 360,
        timeLabelStep: 360
      },
      13: {
        type: 'year',
        size: 3,
        resolutionHorizontal: 'hour',
        columnWidth: 'xlarge',
        timeCellStep: 180,
        timeLabelStep: 180
      },
      14: {
        type: 'year',
        size: 3,
        resolutionHorizontal: 'hour',
        columnWidth: 'medium',
        timeCellStep: 60,
        timeLabelStep: 60
      },
      15: {
        type: 'month',
        size: 3,
        resolutionHorizontal: 'hour',
        timeCellStep: 30,
        timeLabelStep: 30,
        columnWidth: 'medium'
      },
      16: {
        type: 'month',
        size: 3,
        resolutionHorizontal: 'hour',
        timeCellStep: 30,
        timeLabelStep: 30,
        columnWidth: 'xxxlarge'
      },
      17: {
        type: 'month',
        size: 3,
        resolutionHorizontal: 'hour',
        timeCellStep: 15,
        timeLabelStep: 15,
        columnWidth: 'xxxlarge'
      },
      18: {
        type: 'month',
        size: 3,
        resolutionHorizontal: 'hour',
        timeCellStep: 5,
        timeLabelStep: 5,
        columnWidth: 'large'
      }
    }
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    ref="calRef"
    :data="myEvents"
    :ref-date="refDate"
    :resources="myResources"
    :view="myView"
    :zoomLevel="zoomLevel"
  >
    <template #header>
      <MbscCalendarNav />
      <div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
        <MbscButton @click="zoomLevel--" :disabled="zoomLevel === 1" icon="minus" variant="flat" />
        <input type="range" v-model="zoomLevel" min="1" max="18" />
        <MbscButton @click="zoomLevel++" :disabled="zoomLevel === 18" icon="plus" variant="flat" />
      </div>
      <MbscCalendarPrev />
      <MbscCalendarToday />
      <MbscCalendarNext />
    </template>
  </MbscEventcalendar>
</template>
