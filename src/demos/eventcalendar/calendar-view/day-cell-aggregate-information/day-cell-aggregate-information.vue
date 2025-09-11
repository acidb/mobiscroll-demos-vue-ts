<script setup lang="ts">
import {
  formatDate,
  MbscButton,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscCellClickEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

interface WeatherData {
  date: Date
  degree: number
  emoji: string
}

const myCssClass = ref<string>('mds-cell-template mds-cell-template-month-view')
const weatherCache = ref<Record<number, WeatherData>>({})
const selectedView = ref<string>('month')
const previousView = ref<string>('month')
const currentDate = ref<MbscDateType>(new Date())
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,17)',
    title: 'Operations Huddle',
    type: 'meeting',
    color: '#634b67'
  },
  {
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: 'HR Policy Update',
    type: 'meeting',
    color: '#634b67'
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Team Retrospective',
    type: 'meeting',
    color: '#634b67'
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,11,30)',
    title: 'Proposal Review Meeting',
    type: 'meeting',
    color: '#634b67'
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Solutions Presentation',
    type: 'appointment',
    color: '#656d49'
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Follow-up Discussion',
    type: 'appointment',
    color: '#656d49'
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Performance Review',
    type: 'meeting',
    color: '#634b67'
  },
  {
    start: 'dyndatetime(y,m,d+1,10)',
    end: 'dyndatetime(y,m,d+1,13)',
    title: 'Client Onboarding',
    type: 'appointment',
    color: '#656d49'
  },
  {
    start: 'dyndatetime(y,m,d+1,15)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Marketing Campaign Brainstorm',
    type: 'meeting',
    color: '#634b67'
  },
  {
    start: 'dyndatetime(y,m,2,10)',
    end: 'dyndatetime(y,m,2,12)',
    title: 'Innovation Brainstorm',
    type: 'meeting',
    color: '#634b67'
  },
  {
    start: 'dyndatetime(y,m,2,13)',
    end: 'dyndatetime(y,m,2,15,30)',
    title: 'Onboarding Session',
    type: 'appointment',
    color: '#656d49'
  },
  {
    start: 'dyndatetime(y,m,2,16)',
    end: 'dyndatetime(y,m,2,17)',
    title: 'Discovery Call',
    type: 'appointment',
    color: '#656d49'
  },
  {
    start: 'dyndatetime(y,m,9,9)',
    end: 'dyndatetime(y,m,9,10)',
    title: 'Partnership Exploration',
    type: 'appointment',
    color: '#656d49'
  },
  {
    start: 'dyndatetime(y,m,9,11)',
    end: 'dyndatetime(y,m,9,13)',
    title: 'Service Implementation',
    type: 'appointment',
    color: '#656d49'
  },
  {
    start: 'dyndatetime(y,m,9,14)',
    end: 'dyndatetime(y,m,9,15)',
    title: 'Future Planning Summit',
    type: 'meeting',
    color: '#634b67'
  },
  {
    start: 'dyndatetime(y,m,15,10)',
    end: 'dyndatetime(y,m,15,12)',
    title: 'Strategy Alignment',
    type: 'meeting',
    color: '#634b67'
  },
  {
    start: 'dyndatetime(y,m,18,12)',
    end: 'dyndatetime(y,m,18,14)',
    title: 'Project Kick-off',
    type: 'appointment',
    color: '#656d49'
  },
  {
    start: 'dyndatetime(y,m,18,15)',
    end: 'dyndatetime(y,m,18,16)',
    title: 'Account Review',
    type: 'appointment',
    color: '#656d49'
  },
  {
    start: 'dyndatetime(y,m,22,12)',
    end: 'dyndatetime(y,m,22,14)',
    title: 'Deep Dive Session',
    type: 'meeting',
    color: '#634b67'
  },
  {
    title: 'Fresh start meeting',
    start: '09:00',
    end: '10:00',
    type: 'meeting',
    color: '#634b67',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO'
    }
  },
  {
    title: 'Weekly wrapup',
    start: '16:00',
    end: '16:30',
    type: 'meeting',
    color: '#634b67',
    recurring: {
      repeat: 'weekly',
      weekDays: 'FR'
    }
  }
])

const myView = ref<MbscEventcalendarView>({
  calendar: {
    type: 'month'
  }
})

let dayData: {
  dayContent: string
  weather: string
  stressLevelColor: string
  nrMeetings: number
  nrAppointments: number
}

function myDefaultEvent(): MbscCalendarEvent {
  return {
    title: 'New appointment',
    type: 'appointment',
    color: '#656d49'
  }
}

function getWeatherForDate(date: Date): WeatherData {
  const key = date.getTime()
  if (!weatherCache.value[key]) {
    weatherCache.value[key] = generateRandomWeather(date)
  }
  return weatherCache.value[key]
}

function generateRandomWeather(date: Date): WeatherData {
  const weatherTypes = [
    { emoji: '☀️', min: 24, max: 30 },
    { emoji: '🌤️', min: 20, max: 25 },
    { emoji: '☁️', min: 17, max: 22 },
    { emoji: '🌧️', min: 15, max: 20 }
  ]
  const type = weatherTypes[Math.floor(Math.random() * weatherTypes.length)]
  const degree = Math.floor(Math.random() * (type.max - type.min + 1)) + type.min

  return {
    date: date,
    degree: degree,
    emoji: type.emoji
  }
}

function getStressLevel(nrEvents: number) {
  let emoji: string
  let color: string

  if (nrEvents < 1) {
    emoji = ''
    color = ''
  } else if (nrEvents < 3) {
    emoji = '😃'
    color = '#6ece86ff'
  } else if (nrEvents < 5) {
    emoji = '😐'
    color = '#d89c6aff'
  } else {
    emoji = '😫'
    color = '#d6727aff'
  }
  return { emoji: emoji, color: color }
}

function getNrEvents(events: MbscCalendarEvent[]) {
  let nrMeetings = 0
  let nrAppointments = 0

  for (const event of events) {
    if (event['type'] === 'meeting') {
      nrMeetings++
    } else {
      nrAppointments++
    }
  }

  return { meetings: nrMeetings, appointments: nrAppointments }
}

function setSelectedView(view: string, date?: Date) {
  if (view === 'day') {
    previousView.value = selectedView.value
  }

  selectedView.value = view

  switch (view) {
    case 'month':
      myCssClass.value = 'mds-cell-template mds-cell-template-month-view'
      myView.value = {
        calendar: { type: 'month' }
      }
      break
    case 'week':
      myCssClass.value = 'mds-cell-template mds-cell-template-week-view'
      myView.value = {
        schedule: {
          type: 'week',
          allDay: false,
          startTime: '08:00',
          endTime: '17:00'
        }
      }
      break
    case 'day':
      myCssClass.value = 'mds-cell-template mds-cell-template-day-view'
      myView.value = {
        schedule: {
          type: 'day',
          allDay: false,
          startTime: '08:00',
          endTime: '17:00'
        }
      }
      break
  }

  if (date) {
    currentDate.value = date
  }
}

function handleCellClick(args: MbscCellClickEvent) {
  const date = args.date
  const target = args.domEvent.target as HTMLElement

  if (target.closest('.mds-cell-template-add')) {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const newEvent = {
      title: 'New appointment',
      start: new Date(year, month, day, 9),
      end: new Date(year, month, day, 10),
      color: '#ecee8d'
    }

    myEvents.value = [...myEvents.value, newEvent]

    toastMessage.value = 'Appointment added to ' + formatDate('DDD D, MMM', date)
    isToastOpen.value = true
  } else if (selectedView.value === 'month') {
    setSelectedView('day', date)
  }
}

function getDayTemplate(args: { date: Date; events: MbscCalendarEvent[] }) {
  const date = args.date
  const nrEvents = getNrEvents(args.events)
  const nrAllEvents = args.events.length
  const stressLevel = getStressLevel(nrAllEvents)
  const weather = getWeatherForDate(date)

  return {
    dayContent: formatDate('DDD D, MMM', date) + ' ' + stressLevel.emoji,
    weather: weather.emoji + ' ' + weather.degree + '°C',
    stressLevelColor: stressLevel.color,
    nrMeetings: nrEvents.meetings,
    nrAppointments: nrEvents.appointments
  }
}

function handleSelectedDateChange(args: MbscSelectedDateChangeEvent) {
  currentDate.value = args.date
}
</script>

<template>
  <MbscEventcalendar
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :eventDelete="true"
    :cssClass="myCssClass"
    :view="myView"
    :data="myEvents"
    :extendDefaultEvent="myDefaultEvent"
    :selectedDate="currentDate"
    @selected-date-change="handleSelectedDateChange"
    @cell-click="handleCellClick"
  >
    <template #day="data">
      {{ void (dayData = getDayTemplate(data)) }}
      <div
        class="mds-cell-template-cont"
        :style="{
          background:
            dayData.stressLevelColor && selectedView !== 'day' ? dayData.stressLevelColor : ''
        }"
        @click="selectedView === 'week' ? setSelectedView('day', data.date) : null"
      >
        <div class="mds-cell-template-day">{{ dayData.dayContent }}</div>
        <div>{{ dayData.weather }}</div>
        <div class="mds-cell-template-info" style="color: #634b67">
          Internal mtgs: {{ dayData.nrMeetings }}
        </div>
        <div class="mds-cell-template-info" style="color: #656d49">
          Client mtgs: {{ dayData.nrAppointments }}
        </div>
        <MbscButton cssClass="mds-cell-template-add" icon="plus"></MbscButton>
      </div>
    </template>

    <template #header>
      <MbscCalendarNav cssClass="mds-cell-template-nav"></MbscCalendarNav>
      <div class="mds-cell-template-view-controls mbsc-flex-1-0">
        <MbscButton
          color="secondary"
          startIcon="close"
          cssClass="mds-cell-template-back"
          @click="setSelectedView(previousView)"
          >Back to calendar</MbscButton
        >
        <div class="mds-cell-template-view-switch">
          <MbscSegmentedGroup
            v-model="selectedView"
            @change="(ev: Event) => setSelectedView((ev.target as HTMLInputElement).value)"
          >
            <MbscSegmented
              value="month"
              icon="material-date-range"
              cssClass="mds-cell-template-view"
              >Calendar</MbscSegmented
            >
            <MbscSegmented value="week" icon="material-event-note" cssClass="mds-cell-template-view"
              >Week view</MbscSegmented
            >
          </MbscSegmentedGroup>
        </div>
      </div>
      <MbscCalendarPrev></MbscCalendarPrev>
      <MbscCalendarToday></MbscCalendarToday>
      <MbscCalendarNext></MbscCalendarNext>
    </template>
  </MbscEventcalendar>
  <MbscToast :isOpen="isToastOpen" :message="toastMessage" @close="isToastOpen = false" />
</template>

<style>
/* Overrides */

.mds-cell-template .mbsc-calendar-week-days,
.mds-cell-template .mbsc-calendar-labels {
  display: none;
}

.mds-cell-template .mbsc-calendar-cell {
  min-height: 120px;
}

.mds-cell-template .mbsc-calendar-day-outer {
  opacity: 0.7;
}

.mds-cell-template .mbsc-schedule-header-item {
  min-height: 120px;
  padding: 0;
  cursor: pointer;
}

/* Custom header */

.mds-cell-template-nav {
  width: 200px;
}

.mds-cell-template-view-controls {
  max-width: 350px;
  margin: 0 auto;
}

.mds-cell-template-view-switch .mbsc-segmented {
  margin: 0;
}

.mds-cell-template-view-switch .mbsc-segmented.mbsc-material,
.mds-cell-template-view-switch .mbsc-segmented.mbsc-windows {
  padding: 0;
}

.mds-cell-template-back.mbsc-button {
  width: 100%;
  height: 32px;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
  display: none;
}

.mds-cell-template-back .mbsc-icon {
  line-height: 18px;
}

/* Cell template */

.mds-cell-template-cont {
  position: absolute;
  inset: -1px;
  overflow: hidden;
  padding: 10px;
  text-align: left;
  line-height: 25px;
  white-space: nowrap;
}

.mds-cell-template-cont:after {
  content: '';
  position: absolute;
  inset: -1px;
  pointer-events: none;
  transition: background 0.15s ease-in-out;
}

.mds-cell-template-cont:hover:after {
  background: rgba(51, 51, 51, 0.2);
}

.mds-cell-template-day {
  font-weight: 600;
}

.mds-cell-template-info {
  font-weight: 600;
  font-size: 15px;
  color: #555;
}

.mds-cell-template-add.mbsc-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 10px;
  display: none;
}

.mbsc-calendar-width-sm .mds-cell-template-cont {
  font-size: 14px;
}

.mbsc-calendar-width-sm .mds-cell-template-info {
  font-size: 12px;
}

/* Month view */

.mds-cell-template-month-view.mbsc-windows .mds-cell-template-cont {
  inset: -2px -1px;
}

.mds-cell-template-month-view .mds-cell-template-add {
  display: block;
}

/* Day view */

.mds-cell-template-day-view .mds-cell-template-back {
  display: block;
}

.mds-cell-template-day-view .mbsc-schedule-header-item:not(.mbsc-selected),
.mds-cell-template-day-view .mds-cell-template-view-switch,
.mds-cell-template-day-view .mds-cell-template-cont:after {
  display: none;
}

.mds-cell-template-day-view .mds-cell-template-cont {
  text-align: center;
}

.mds-cell-template-day-view .mbsc-schedule-header-item.mbsc-selected {
  border: 0;
}
</style>
