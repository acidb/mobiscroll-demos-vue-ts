<script setup lang="ts">
import {
  formatDate,
  MbscEventcalendar,
  MbscPage,
  MbscPopup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscEventClickEvent } from '@mobiscroll/vue'

import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([
  {
    title: 'CEO Strategy Meeting',
    start: 'dyndatetime(y,m,1,10)',
    end: 'dyndatetime(y,m,1,11)',
    color: '#FF5733'
  },
  {
    title: 'Board of Directors Briefing',
    start: 'dyndatetime(y,m,3,14)',
    end: 'dyndatetime(y,m,3,15)',
    color: '#33C4FF'
  },
  {
    title: 'Quarterly Review',
    start: 'dyndatetime(y,m,5,9)',
    end: 'dyndatetime(y,m,5,10)',
    color: '#33FF77'
  },
  {
    title: 'Executive Team Lunch',
    start: 'dyndatetime(y,m,7,12)',
    end: 'dyndatetime(y,m,7,13)',
    color: '#FFC733'
  },
  {
    title: 'Investor Meeting',
    start: 'dyndatetime(y,m,10,11)',
    end: 'dyndatetime(y,m,10,12)',
    color: '#9B59B6'
  },
  {
    title: 'Product Launch Review',
    start: 'dyndatetime(y,m,12,13)',
    end: 'dyndatetime(y,m,12,14)',
    color: '#FF6347'
  },
  {
    title: 'Press Conference Preparation',
    start: 'dyndatetime(y,m,14,16)',
    end: 'dyndatetime(y,m,14,17)',
    color: '#1E90FF'
  },
  {
    title: 'Client Partnership Discussion',
    start: 'dyndatetime(y,m,18,10)',
    end: 'dyndatetime(y,m,18,11)',
    color: '#FFD700'
  },
  {
    title: 'CEO’s Weekly Report',
    start: 'dyndatetime(y,m,20,9)',
    end: 'dyndatetime(y,m,20,10)',
    color: '#20B2AA'
  },
  {
    title: 'Town Hall Meeting',
    start: 'dyndatetime(y,m,25,14)',
    end: 'dyndatetime(y,m,25,15)',
    color: '#FF4500'
  }
])

const isPopupOpen = ref<boolean>(false)
const myAnchor = ref<any>()
const eventTitle = ref<string>()
const eventStart = ref<string>()
const eventEnd = ref<string>()
const timer = ref<any>()

function handleEventHoverIn(args: MbscEventClickEvent) {
  const event = args.event

  eventTitle.value = event.title
  eventStart.value = formatDate('hh:mm A', new Date(event.start as Date))
  eventEnd.value = formatDate('hh:mm A', new Date(event.end as Date))

  clearTimeout(timer.value)
  timer.value = null

  myAnchor.value = args.domEvent.target
  isPopupOpen.value = true
}

function handleEventHoverout() {
  if (!timer.value) {
    timer.value = setTimeout(() => {
      isPopupOpen.value = false
    }, 200)
  }
}

function mouseEnter() {
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

function mouseLeave() {
  timer.value = setTimeout(() => {
    isPopupOpen.value = false
  }, 200)
}

const myView = ref<MbscEventcalendarView>({
  calendar: {
    type: 'month'
  }
})
</script>

<template>
  <MbscPage>
    <MbscEventcalendar
      :view="myView"
      :data="myEvents"
      @event-hover-in="handleEventHoverIn($event)"
      @event-hover-out="handleEventHoverout()"
    />
    <MbscPopup
      display="anchored"
      :anchor="myAnchor"
      :isOpen="isPopupOpen"
      :touchUi="false"
      :showOverlay="false"
      :width="250"
    >
      <div @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
        <div class="mds-tooltip-event-title-cont">
          <span>{{ eventTitle }}</span>
        </div>
        <div class="mds-tooltip-start-cont mbsc-flex">
          <span class="mds-tooltip-label">Start:</span>
          <span>{{ eventStart }}</span>
        </div>
        <div class="mds-tooltip-end-cont mbsc-flex">
          <span class="mds-tooltip-label">End:</span>
          <span>{{ eventEnd }}</span>
        </div>
      </div>
    </MbscPopup>
  </MbscPage>
</template>

<style>
.mds-tooltip-event-title-cont {
  margin-bottom: 15px;
  text-align: center;
  font-size: 16px;
}

.mds-tooltip-start-cont,
.mds-tooltip-end-cont {
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 14px;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.mds-tooltip-label {
  font-weight: 600;
}
</style>
