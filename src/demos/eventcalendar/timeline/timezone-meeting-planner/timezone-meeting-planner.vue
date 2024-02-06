<script setup lang="ts">
import {
  formatDate,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscConfirm,
  MbscEventcalendar,
  MbscToast,
  momentTimezone,
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
import * as moment from 'moment-timezone'
import { ref } from 'vue'

momentTimezone.moment = moment

setOptions({
  // locale,
  // theme
})

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

const details = ref<any>(getDetails())
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

function getProps(h: number) {
  if (h < 6) {
    return { color: '#ffbaba4d', invalid: true }
  } else if (h < 8) {
    return { color: '#a5ceff4d' }
  } else if (h < 18) {
    return { color: '#f7f7bb4d' }
  } else if (h < 22) {
    return { color: '#a5ceff4d' }
  } else {
    return { color: '#ffbaba4d', invalid: true }
  }
}

function getDetails() {
  const colors = []
  const invalid = []

  for (const resource of myResources) {
    for (let i = 0; i < 24; ++i) {
      const hour = i + getUtcOffset(resource.timezone)
      const isAM = i < 12 ? hour >= 0 && hour < 12 : !(hour >= 12 && hour < 24)
      const startTime = (i < 10 ? '0' : '') + i + ':00'
      const endTime = (i < 9 ? '0' : '') + (i + 1) + ':00'
      const title = hour % 12 === 0 ? 12 : hour < 0 ? 12 + hour : hour <= 12 ? hour : hour % 12
      const props = getProps(title + ((title === 12 && !isAM) || (title !== 12 && isAM) ? 0 : 12))

      colors.push({
        start: startTime,
        end: endTime,
        title: title + (isAM ? ' AM' : ' PM'),
        background: props.color,
        recurring: {
          repeat: 'daily'
        },
        resource: resource.id
      })

      if (props.invalid) {
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
  return { colors, invalid }
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
    :timezonePlugin="momentTimezone"
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :dragTimeStep="60"
    :height="400"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :colors="details.colors"
    :invalid="details.invalid"
    :extendDefaultEvent="myDefaultEvent"
    @event-created="handleEventCreated"
    @event-updated="handleEventUpdated"
    @event-deleted="handleEventDeleted"
    @event-create-failed="handleEventCreateFailed"
    @event-update-failed="handleEventUpdateFailed"
  >
    <template #header>
      <MbscCalendarNav />
      <div class="md-meeting-planner-header">
        <div class="md-meeting-planner-zone md-meeting-planner-work">working hours</div>
        <div class="md-meeting-planner-zone md-meeting-planner-flex">flex hours</div>
        <div class="md-meeting-planner-zone md-meeting-planner-off">time off</div>
        <MbscCalendarPrev />
        <MbscCalendarToday />
        <MbscCalendarNext />
      </div>
    </template>
    <template #resource="resource">
      <div class="md-meeting-participant-cont">
        <div class="md-meeting-participant-name">{{ resource.name }}</div>
        <div>
          <span v-if="resource.organizer">Organizer </span>
          <span class="md-meeting-participant-offset">{{ resource.utcOffset }}</span>
        </div>
        <img class="md-meeting-participant-avatar" :src="resource.img" />
      </div>
    </template>
    <template #scheduleEvent="event">
      <div class="md-meeting-planner-cont" :style="{ background: event.color }">
        <div class="md-meeting-planner-wrapper">
          <div class="md-meeting-planner-title">{{ event.title }}</div>
          <div class="md-meeting-planner-time">{{ getTitleTime(event) }}</div>
        </div>
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
.md-timezone-meeting-planner .mbsc-schedule-color-text {
  padding: 16px 0;
  text-align: center;
}

.md-timezone-meeting-planner.mbsc-ios-dark .mbsc-timeline-color,
.md-timezone-meeting-planner.mbsc-material-dark .mbsc-timeline-color,
.md-timezone-meeting-planner.mbsc-windows-dark .mbsc-timeline-color {
  color: #fff !important;
}

.md-meeting-planner-cont {
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

.md-meeting-planner-wrapper {
  background: rgba(255, 255, 255, 0.5);
  height: 100%;
  box-sizing: border-box;
  padding: 0 6px;
  transition: background 0.15s ease-in-out;
}

.mbsc-schedule-event-hover .md-meeting-planner-wrapper {
  background: rgba(255, 255, 255, 0.3);
}

.md-meeting-planner-title {
  padding-top: 3px;
  color: initial;
}

.md-meeting-planner-time {
  color: #666;
}

.md-meeting-planner-title,
.md-meeting-planner-time {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.md-meeting-planner-header {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.md-meeting-planner-zone {
  font-size: 12px;
  padding: 3px 6px;
  margin: 0 5px;
  border-radius: 16px;
  color: #888;
}

.md-meeting-planner-work {
  background: #f7f7bb4d;
}

.md-meeting-planner-flex {
  background: #a5ceff4d;
}

.md-meeting-planner-off {
  background: #ffbaba4d;
}

.md-meeting-participant-cont {
  position: relative;
  padding-left: 50px;
  max-height: 40px;
  line-height: 20px;
}

.md-meeting-participant-avatar {
  position: absolute;
  max-height: 40px;
  max-width: 40px;
  top: 18px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  left: 20px;
}

.md-meeting-participant-name {
  font-size: 16px;
}

.md-meeting-participant-offset {
  font-size: 12px;
  opacity: 0.6;
}
</style>
