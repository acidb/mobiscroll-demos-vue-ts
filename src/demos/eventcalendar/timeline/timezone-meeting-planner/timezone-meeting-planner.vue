<script setup lang="ts">
import {
  dayjsTimezone,
  formatDate,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscConfirm,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventCreateFailedEvent,
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscEventUpdateFailedEvent,
  MbscResource
} from '@mobiscroll/vue'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { ref } from 'vue'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjsTimezone.dayjs = dayjs

setOptions({
  // locale,
  // theme
})

let hProps: { hour: number; isAM: boolean; title: number; color: string; invalid: boolean }

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'General orientation',
    color: '#1ad404',
    resource: [1, 2, 3, 4, 5, 6]
  }
])

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Keila Delores',
    timezone: 'utc',
    img: 'https://img.mobiscroll.com/demos/f1.png',
    utcOffset: '(UTC)',
    organizer: true
  },
  {
    id: 2,
    name: 'Gene Cortez',
    timezone: 'America/Chicago',
    img: 'https://img.mobiscroll.com/demos/m1.png',
    utcOffset: 'UTC - 5'
  },
  {
    id: 3,
    name: 'Paula Bush',
    timezone: 'America/New_York',
    img: 'https://img.mobiscroll.com/demos/f2.png',
    utcOffset: 'UTC - 4'
  },
  {
    id: 4,
    name: 'Pete Nichols',
    timezone: 'Europe/London',
    img: 'https://img.mobiscroll.com/demos/m2.png',
    utcOffset: 'UTC + 1'
  },
  {
    id: 5,
    name: 'Jean Pearson',
    timezone: 'Europe/Berlin',
    img: 'https://img.mobiscroll.com/demos/m3.png',
    utcOffset: 'UTC + 2'
  },
  {
    id: 6,
    name: 'Thelma Cain',
    timezone: 'Europe/Bucharest',
    img: 'https://img.mobiscroll.com/demos/f3.png',
    utcOffset: 'UTC + 3'
  }
]

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    timeLabelStep: 1440
  }
}

const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
const isConfirmOpen = ref<boolean>(false)
const confirmCallback = ref<any>(null)

function createUpdateEvent(event: MbscCalendarEvent, isNew: boolean) {
  confirmCallback.value = function (res: any) {
    if (res) {
      if (isNew) {
        myEvents.value = [...myEvents.value, event]
      } else {
        const index = myEvents.value.findIndex((x) => x.id === event.id)
        const newEventList = [...myEvents.value]

        newEventList.splice(index, 1, event)
        myEvents.value = newEventList
      }

      toastMessage.value = isNew ? 'Event created' : 'Event updated'
      isToastOpen.value = true
    }
  }
  isConfirmOpen.value = true
}

function getUtcOffset(timezone: string) {
  switch (timezone) {
    case 'America/Los_Angeles':
      return -7
    case 'America/Chicago':
      return -5
    case 'America/New_York':
      return -4
    case 'Europe/London':
      return 1
    case 'Europe/Berlin':
      return 2
    case 'Europe/Bucharest':
      return 3
    case 'Asia/Shanghai':
      return 8
    case 'Asia/Tokyo':
      return 9
    default:
      return 0
  }
}

function getHourProps(h: number, timezone: string) {
  const offset = getUtcOffset(timezone)
  const hour = h + offset
  const isAM = hour % 24 < 12
  const title = ((hour % 12) + 12) % 12 || 12
  const hForProps = title + ((title === 12 && !isAM) || (title !== 12 && isAM) ? 0 : 12)
  let color = '#f7f7bb4d'
  let invalid = false

  if (hForProps < 6 || hForProps >= 22) {
    color = '#ffbaba4d'
    invalid = true
  } else if (hForProps < 8 || (hForProps >= 18 && hForProps < 22)) {
    color = '#a5ceff4d'
  }

  return {
    hour: hour,
    isAM: isAM,
    title: title,
    color: color,
    invalid: invalid
  }
}

function getInvalids() {
  const invalid = []

  for (const resource of myResources) {
    for (let i = 0; i < 24; ++i) {
      if (getHourProps(i, resource.timezone).invalid) {
        const startTime = (i < 10 ? '0' : '') + i + ':00:00'
        const endTime = (i < 9 ? '0' : '') + (i + 1) + ':00:00'

        invalid.push({
          start: startTime,
          end: endTime,
          resource: resource.id,
          recurring: {
            repeat: 'daily'
          }
        })
      }
    }
  }
  return invalid
}

function myDefaultEvent() {
  return { resource: [1, 2, 3, 4, 5, 6] }
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  myEvents.value = [...myEvents.value, args.event]
  toastMessage.value = 'Event created'
  isToastOpen.value = true
}
function handleEventUpdated(args: MbscEventUpdatedEvent) {
  const index = myEvents.value.findIndex((x) => x.id === args.event.id)
  const newEventList = [...myEvents.value]

  newEventList.splice(index, 1, args.event)
  myEvents.value = newEventList
  toastMessage.value = 'Event updated'
  isToastOpen.value = true
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  myEvents.value = myEvents.value.filter((item) => item.id !== args.event.id)
}

function handleEventCreateFailed(args: MbscEventCreateFailedEvent) {
  createUpdateEvent(args.event, true)
}

function handleEventUpdateFailed(args: MbscEventUpdateFailedEvent) {
  createUpdateEvent(args.event, false)
}

function getTitleTime(data: any) {
  const start = data.startDate.clone()
  const end = data.endDate.clone()

  start.setTimezone(data.currentResource.timezone)
  end.setTimezone(data.currentResource.timezone)

  return formatDate('hh:mm A', start) + ' - ' + formatDate('hh:mm A', end)
}

function handleToastClose() {
  isToastOpen.value = false
}

function handleConfirmClose() {
  isConfirmOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    dataTimezone="utc"
    displayTimezone="utc"
    :timezonePlugin="dayjsTimezone"
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :dragTimeStep="60"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :invalid="getInvalids()"
    :extendDefaultEvent="myDefaultEvent"
    @event-created="handleEventCreated"
    @event-updated="handleEventUpdated"
    @event-deleted="handleEventDeleted"
    @event-create-failed="handleEventCreateFailed"
    @event-update-failed="handleEventUpdateFailed"
  >
    <template #header>
      <MbscCalendarNav />
      <div class="mds-meeting-planner-header">
        <div class="mds-meeting-planner-zone mds-meeting-planner-work">working hours</div>
        <div class="mds-meeting-planner-zone mds-meeting-planner-flex">flex hours</div>
        <div class="mds-meeting-planner-zone mds-meeting-planner-off">time off</div>
        <MbscCalendarPrev />
        <MbscCalendarToday />
        <MbscCalendarNext />
      </div>
    </template>
    <template #resource="resource">
      <div class="mds-meeting-participant-cont">
        <div class="mds-meeting-participant-name">{{ resource.name }}</div>
        <div>
          <span v-if="resource.organizer">Organizer </span>
          <span class="mds-meeting-participant-offset">{{ resource.utcOffset }}</span>
        </div>
        <img class="mds-meeting-participant-avatar" :src="resource.img" />
      </div>
    </template>
    <template #scheduleEvent="event">
      <div class="mds-meeting-planner-cont" :style="{ background: event.color }">
        <div class="mds-meeting-planner-wrapper">
          <div class="mds-meeting-planner-title">{{ event.title }}</div>
          <div class="mds-meeting-planner-time">{{ getTitleTime(event) }}</div>
        </div>
      </div>
    </template>
    <template #cell="args">
      {{ void (hProps = getHourProps(args.date.getHours(), args.resource.timezone)) }}
      <div
        class="mds-meeting-planner-time-slot mbsc-flex mbsc-justify-content-center"
        :style="{ 'background-color': hProps.color }"
      >
        {{ hProps.title }} {{ hProps.isAM ? ' AM' : ' PM' }}
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  <MbscConfirm
    title="Are you sure you want to proceed?"
    message="It looks like someone from the team won\'t be able to join the meeting."
    okText="Yes"
    cancelText="No"
    :isOpen="isConfirmOpen"
    :callback="confirmCallback"
    @close="handleConfirmClose"
  />
</template>

<style>
.mds-meeting-planner-cont {
  font-size: 12px;
  font-weight: 600;
  height: 100%;
  background: #1ad404;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  overflow: hidden;
}

.mds-meeting-planner-wrapper {
  background: rgba(255, 255, 255, 0.5);
  height: 100%;
  box-sizing: border-box;
  padding: 0 6px;
  transition: background 0.15s ease-in-out;
}

.mbsc-schedule-event-hover .mds-meeting-planner-wrapper {
  background: rgba(255, 255, 255, 0.3);
}

.mds-meeting-planner-title {
  padding-top: 3px;
  color: initial;
}

.mds-meeting-planner-time {
  color: #666;
}

.mds-meeting-planner-title,
.mds-meeting-planner-time {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mds-meeting-planner-header {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.mds-meeting-planner-zone {
  font-size: 12px;
  padding: 3px 6px;
  margin: 0 5px;
  border-radius: 16px;
  color: #888;
}

.mds-meeting-planner-work {
  background: #f7f7bb4d;
}

.mds-meeting-planner-flex {
  background: #a5ceff4d;
}

.mds-meeting-planner-off {
  background: #ffbaba4d;
}

.mds-meeting-participant-cont {
  position: relative;
  padding-left: 50px;
  max-height: 40px;
  line-height: 20px;
}

.mds-meeting-participant-avatar {
  position: absolute;
  max-height: 40px;
  max-width: 40px;
  top: 18px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  left: 20px;
}

.mds-meeting-participant-name {
  font-size: 16px;
}

.mds-meeting-participant-offset {
  font-size: 12px;
  opacity: 0.6;
}

.mds-meeting-planner-time-slot {
  font-size: 12px;
  opacity: 0.7;
  line-height: 50px;
  height: 100%;
  pointer-events: none;
}
</style>
