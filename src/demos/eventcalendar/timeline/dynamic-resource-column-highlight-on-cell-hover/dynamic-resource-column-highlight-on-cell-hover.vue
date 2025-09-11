<script setup lang="ts">
import { formatDate, MbscEventcalendar, MbscPopup, setOptions } from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscCellHoverEvent,
  MbscEventcalendarView,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const anchor = ref<HTMLElement>()
const hoverDate = ref<Date | null>(null)
const hoverResource = ref<MbscResource | null>(null)
const isPopupOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'month',
    resolutionHorizontal: 'day'
  }
}

const myEvents = ref<MbscCalendarEvent[]>([
  { start: 'dyndatetime(y,m,2)', end: 'dyndatetime(y,m,5)', title: 'Event 1', resource: 1 },
  { start: 'dyndatetime(y,m,10,9)', end: 'dyndatetime(y,m,15,15)', title: 'Event 2', resource: 3 },
  { start: 'dyndatetime(y,m,12)', end: 'dyndatetime(y,m,14)', title: 'Event 3', resource: 4 },
  { start: 'dyndatetime(y,m,15,7)', end: 'dyndatetime(y,m,20,12)', title: 'Event 4', resource: 5 },
  { start: 'dyndatetime(y,m,3)', end: 'dyndatetime(y,m,10)', title: 'Event 5', resource: 6 },
  { start: 'dyndatetime(y,m,10,8)', end: 'dyndatetime(y,m,11,20)', title: 'Event 6', resource: 7 },
  { start: 'dyndatetime(y,m,22)', end: 'dyndatetime(y,m,28)', title: 'Event 7', resource: 7 },
  { start: 'dyndatetime(y,m,8)', end: 'dyndatetime(y,m,13)', title: 'Event 8', resource: 15 },
  { start: 'dyndatetime(y,m,25)', end: 'dyndatetime(y,m,27)', title: 'Event 9', resource: 10 },
  { start: 'dyndatetime(y,m,20)', end: 'dyndatetime(y,m,23)', title: 'Event 10', resource: 12 }
])

const myResources = ref<MbscResource[]>([
  { id: 1, name: 'Resource A', color: '#e20000', cssClass: '' },
  { id: 2, name: 'Resource B', color: '#76e083', cssClass: '' },
  { id: 3, name: 'Resource C', color: '#4981d6', cssClass: '' },
  { id: 4, name: 'Resource D', color: '#e25dd2', cssClass: '' },
  { id: 5, name: 'Resource E', color: '#1dab2f', cssClass: '' },
  { id: 6, name: 'Resource F', color: '#d6d145', cssClass: '' },
  { id: 7, name: 'Resource G', color: '#34c8e0', cssClass: '' },
  { id: 8, name: 'Resource H', color: '#9dde46', cssClass: '' },
  { id: 9, name: 'Resource I', color: '#166f6f', cssClass: '' },
  { id: 10, name: 'Resource J', color: '#f7961e', cssClass: '' },
  { id: 11, name: 'Resource K', color: '#34c8e0', cssClass: '' },
  { id: 12, name: 'Resource L', color: '#af0000', cssClass: '' },
  { id: 13, name: 'Resource M', color: '#446f1c', cssClass: '' },
  { id: 14, name: 'Resource N', color: '#073138', cssClass: '' },
  { id: 15, name: 'Resource O', color: '#4caf00', cssClass: '' }
])

function handleCellHoverIn(args: MbscCellHoverEvent) {
  const resId = args.resource.id
  myResources.value = myResources.value.map((r) => ({
    ...r,
    cssClass: r.id === resId ? 'mds-highlight-row-hover' : ''
  }))

  hoverDate.value = args.date
  hoverResource.value = myResources.value.find((r) => r.id === resId) || null
  anchor.value = args.domEvent.target as HTMLElement
  isPopupOpen.value = true
}

function handleCellHoverOut() {
  hoverDate.value = null
  hoverResource.value = null
  myResources.value = myResources.value.map((r) => ({ ...r, cssClass: '' }))
  isPopupOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-highlight-hover"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    @cell-hover-in="handleCellHoverIn"
    @cell-hover-out="handleCellHoverOut"
  >
    <template #cell="{ date }">
      <div
        v-if="hoverDate && date.getTime() === hoverDate.getTime()"
        class="mds-highlight-col-hover"
      />
    </template>

    <template #sidebar="resource">
      <div>{{ resource.name }} Sidebar</div>
    </template>

    <template #day="{ date }">
      <div
        :class="[
          'mds-highlight-day-content',
          hoverDate && date.getTime() === hoverDate.getTime() && 'mds-highlight-col-hover'
        ]"
      >
        {{ formatDate('D DDD', date) }}
      </div>
    </template>

    <template #dayFooter="{ date }">
      <div
        :class="[
          'mds-highlight-day-content',
          hoverDate && date.getTime() === hoverDate.getTime() && 'mds-highlight-col-hover'
        ]"
      >
        {{ formatDate('D DDD', date) }}
      </div>
    </template>
  </MbscEventcalendar>

  <MbscPopup
    :anchor="anchor"
    :closeOnScroll="true"
    display="anchored"
    :focusOnClose="false"
    :isOpen="isPopupOpen"
    :scrollLock="false"
    :showOverlay="false"
  >
    <div
      v-if="hoverResource && hoverDate"
      class="mds-highlight-tooltip"
    >
      <div class="mds-highlight-tooltip-name">{{ hoverResource.name }}</div>
      <div class="mds-highlight-tooltip-date">{{ formatDate('MMM DD, YYYY', hoverDate) }}</div>
    </div>
  </MbscPopup>
</template>

<style>
.mds-highlight-hover .mbsc-timeline-sidebar-col {
  width: 170px;
}

.mds-highlight-hover .mbsc-timeline-sidebar-resource-title {
  font-weight: 500;
}

.mds-highlight-hover .mds-highlight-row-hover,
.mds-highlight-hover .mds-highlight-col-hover {
  background: rgba(220, 220, 220, 0.25);
}

.mds-highlight-col-hover {
  position: absolute;
  inset: 0;
  background: transparent;
  pointer-events: none;
  box-sizing: border-box;
}

.mds-highlight-day-content {
  font-size: 14px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  position: relative;
}

.mds-highlight-tooltip {
  padding: 5px;
  font-size: 14px;
  line-height: 1.4;
}

.mds-highlight-tooltip-name {
  font-weight: 600;
  margin-bottom: 5px;
}

.mds-highlight-tooltip-date {
  color: #888;
}
</style>
