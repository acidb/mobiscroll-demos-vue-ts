<script setup lang="ts">
import {
  formatDate,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscCellHoverEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,2,12)',
    end: 'dyndatetime(y,m,2,16)',
    title: 'Company Strategy Offsite',
    color: '#90bcff'
  },
  {
    start: 'dyndatetime(y,m,7,9)',
    end: 'dyndatetime(y,m,7,17)',
    title: 'R&D Innovation Workshop',
    color: '#ffdfaf'
  },
  {
    start: 'dyndatetime(y,m,15,10)',
    end: 'dyndatetime(y,m,15,15)',
    title: 'Client Feedback Review',
    color: '#ffb9ad'
  },
  {
    start: 'dyndatetime(y,m,19,9)',
    end: 'dyndatetime(y,m,19,19)',
    title: 'Team Building Adventure',
    color: '#f3c1ff'
  },
  {
    start: 'dyndatetime(y,m,23,11)',
    end: 'dyndatetime(y,m,23,15)',
    title: 'Sales Summit & Training',
    color: '#b5eff8'
  },
  {
    start: 'dyndatetime(y,m,25,10)',
    end: 'dyndatetime(y,m,25,15)',

    title: 'Executive Planning Retreat',
    color: '#c7ffbb'
  },
  {
    start: 'dyndatetime(y,m,29,14)',
    end: 'dyndatetime(y,m,29,17)',
    title: 'Marketing Team Conference',
    color: '#ffeeb6'
  }
])

const hoveredDate = ref<Date | undefined>(undefined)
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')

const myView: MbscEventcalendarView = {
  calendar: {
    labels: 2
  }
}

function addEvent() {
  const newEvent: MbscCalendarEvent = {
    start: hoveredDate.value!,
    title: 'New Event'
  }
  myEvents.value = [...myEvents.value, newEvent]
  toastMessage.value = 'Event added on ' + formatDate('YYYY-MM-DD', hoveredDate.value!)
  isToastOpen.value = true
}

// Mobiscroll resource hover events
function handleCellHoverIn(args: MbscCellHoverEvent) {
  hoveredDate.value = args.date
}

function handleCellHoverOut() {
  hoveredDate.value = undefined
}

function handleToastClose() {
  isToastOpen.value = false
}

function isHovered(date: Date) {
  return hoveredDate.value && hoveredDate.value.getTime() === date.getTime()
}
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-cell-summary"
    :view="myView"
    :data="myEvents"
    @cell-hover-in="handleCellHoverIn"
    @cell-hover-out="handleCellHoverOut"
  >
    <template #dayContent="args">
      <button @click="addEvent" class="mds-cell-summary-btn" v-if="isHovered(args.date)">
        Add event
      </button>
    </template>
  </MbscEventcalendar>
  <MbscToast :isOpen="isToastOpen" :message="toastMessage" @close="handleToastClose" />
</template>

<style>
.mds-cell-summary .mbsc-calendar-cell {
  min-height: 145px;
}
.mds-cell-summary-btn {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 8px;
  z-index: 3;
  font-size: 10px;
  padding: 8px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #5584b5;
  color: #5584b5;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.1s ease-out;
}
.mds-cell-summary-btn:hover {
  background: #5584b5;
  color: white;
  box-shadow: 0 2px 8px rgba(85, 132, 181, 0.3);
}
.mds-cell-summary-btn:active {
  box-shadow: 0 1px 4px rgba(85, 132, 181, 0.3);
}
</style>
