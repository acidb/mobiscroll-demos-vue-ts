<script setup lang="ts">
import {
  MbscButton,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscEventcalendar,
  MbscPopup,
  MbscRadio,
  MbscRadioGroup,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscSnackbar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeleteEvent,
  MbscEventUpdateEvent,
  MbscPageLoadingEvent,
  MbscResource
} from '@mobiscroll/vue'

import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

interface MyResource extends MbscResource {
  standby?: number
  deadhead?: number
  payload?: number
  model: string
  location: string
}

const calRef = ref<typeof MbscEventcalendar>()
const myAnchor = ref<any>(null)
const buttonRef = ref<any>(null)
const event = ref<MbscCalendarEvent>()
const initialSort = ref<boolean>(true)
const initialSortColumn = ref<string>('')
const initialSortDirection = ref<string>('')
const isPopupOpen = ref<boolean>(false)
const isSnackbarOpen = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const loadedEvents = ref<MbscCalendarEvent[]>()
const metricBarAnimation = ref<boolean>(true)
const resource = ref<MyResource>()
const selectedMetric = ref<string>('standby')
const selectedMetricDesc = ref<string>('Standby Time')
const sortColumn = ref<string>('standby')
const sortDirection = ref<string>('asc')
const weekStart = ref<Date>()
const weekEnd = ref<Date>()

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-1)',
    end: 'dyndatetime(y,m,d+3)',
    title: 'Tour #013 - Miami to Seattle',
    resource: 1,
    color: '#FF9933',
    payload: 25,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d+1)',
    end: 'dyndatetime(y,m,d+3)',
    title: 'Tour #014 - Denver to Boston',
    resource: 2,
    color: '#33FFA6',
    payload: 18,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+3)',
    title: 'Tour #015 - Orlando to Austin',
    resource: 3,
    color: '#9933FF',
    payload: 20,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d+1)',
    end: 'dyndatetime(y,m,d+4)',
    title: 'Tour #016 - Detroit to Baltimore',
    resource: 4,
    color: '#33A6FF',
    payload: 0,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d+2)',
    end: 'dyndatetime(y,m,d+5)',
    title: 'Tour #017 - Las Vegas to Portland',
    resource: 5,
    color: '#FF5733',
    payload: 20,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d+2)',
    end: 'dyndatetime(y,m,d+5)',
    title: 'Tour #018 - Atlanta to Kansas City',
    resource: 6,
    color: '#33FF99',
    payload: 0,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d-4,11)',
    end: 'dyndatetime(y,m,d)',
    title: 'Tour #018 - Dallas to Atlanta',
    resource: 6,
    color: '#33FF99',
    payload: 14,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+4)',
    title: 'Tour #019 - Charlotte to Indianapolis',
    resource: 7,
    color: '#FF5733',
    payload: 22,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    title: 'Tour #005 - Dallas to San Francisco',
    resource: 7,
    color: '#FF5733',
    payload: 18,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d+4)',
    end: 'dyndatetime(y,m,d+6)',
    title: 'Tour #001 - New York to Los Angeles',
    resource: 7,
    color: '#FF5733',
    payload: 20,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    title: 'Tour #009 - San Diego to Dallas',
    resource: 7,
    color: '#FF5733',
    payload: 16,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d+4)',
    end: 'dyndatetime(y,m,d+6)',
    title: 'Tour #006 - Los Angeles to Chicago',
    resource: 8,
    color: '#FF33A6',
    payload: 10,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d-2)',
    end: 'dyndatetime(y,m,d+2)',
    title: 'Tour #010 - San Francisco to Los Angeles',
    resource: 8,
    color: '#FF33A6',
    payload: 0,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d+3)',
    end: 'dyndatetime(y,m,d+6)',
    title: 'Tour #007 - Houston to New York',
    resource: 9,
    color: '#33FF57',
    payload: 0,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    title: 'Tour #003 - Philadelphia to Phoenix',
    resource: 9,
    color: '#33FF57',
    payload: 0,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d-4)',
    end: 'dyndatetime(y,m,d-1)',
    title: 'Tour #028 - ? to Philadelphiax',
    resource: 9,
    color: '#33FF57',
    payload: 11,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d-4)',
    end: 'dyndatetime(y,m,d+1)',
    title: 'Tour #004 - San Antonio to San Diego',
    resource: 10,
    color: '#3357FF',
    payload: 15,
    overlap: false
  },

  {
    start: 'dyndatetime(y,m,d+3)',
    end: 'dyndatetime(y,m,d+6)',
    title: 'Tour #022 - Cleveland to Cincinnati',
    resource: 10,
    color: '#3357FF',
    payload: 17,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d-4)',
    end: 'dyndatetime(y,m,d+1)',
    title: 'Tour #023 - Boston to Philadelphia',
    resource: 11,
    color: '#FF9933',
    payload: 19,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    title: 'Tour #024 - Las Vegas to San Diego',
    resource: 12,
    color: '#33FF57',
    payload: 28,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d-3)',
    end: 'dyndatetime(y,m,d)',
    title: 'Tour #025 - Miami to Charlotte',
    resource: 13,
    color: '#9933FF',
    payload: 26,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d+2)',
    end: 'dyndatetime(y,m,d+5)',
    title: 'Tour #026 - Seattle to Portland',
    resource: 14,
    color: '#33A6FF',
    payload: 12,
    overlap: false
  },
  {
    start: 'dyndatetime(y,m,d-1)',
    end: 'dyndatetime(y,m,d+2)',
    title: 'Tour #027 - Atlanta to Orlando',
    resource: 15,
    color: '#FF5733',
    payload: 17,
    overlap: false
  }
])

const myResources = ref<MyResource[]>([
  { id: 1, name: 'NY-TRK-1200', capacity: 25, location: 'New York', model: 'Renault Magnum' },
  { id: 2, name: 'LA-TRK-0090', capacity: 18, location: 'Los Angeles', model: 'Mercedes Actros' },
  { id: 3, name: 'CH-TRK-0700', capacity: 22, location: 'Phoenix', model: 'Scania R500' },
  { id: 4, name: 'HO-TRK-0850', capacity: 28, location: 'Houston', model: 'Volvo FH16' },
  { id: 5, name: 'PH-TRK-0900', capacity: 24, location: 'Chicago', model: 'MAN TGX' },
  { id: 6, name: 'PA-TRK-0300', capacity: 15, location: 'Philadelphia', model: 'Renault T High' },
  { id: 8, name: 'SD-TRK-0250', capacity: 21, location: 'San Francisco', model: 'Mercedes Arocs' },
  { id: 9, name: 'DA-TRK-0400', capacity: 20, location: 'Dallas', model: 'DAF XF' },
  { id: 10, name: 'SF-TRK-0550', capacity: 17, location: 'San Diego', model: 'Iveco Stralis' },
  { id: 11, name: 'BO-TRK-1100', capacity: 23, location: 'Boston', model: 'Kenworth T680' },
  { id: 12, name: 'LV-TRK-2200', capacity: 30, location: 'Las Vegas', model: 'Volvo FH16' },
  { id: 13, name: 'MI-TRK-3300', capacity: 26, location: 'Miami', model: 'Peterbilt 579' },
  { id: 14, name: 'SE-TRK-4400', capacity: 16, location: 'Seattle', model: 'Mack Anthem' },
  { id: 15, name: 'AT-TRK-5500', capacity: 19, location: 'Atlanta', model: 'Renault Magnum' }
])

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    resolutionHorizontal: 'day'
  }
}

const refreshData = () => {
  // setTimeout(() => {
  //   loadedEvents.value = calRef.value.instance.getEvents()
  // }, 100)

  myResources.value.forEach((resource) => {
    const resourceEvents = myEvents.value.filter((event) => event.resource === resource.id)

    if (sortColumn.value === 'standby') {
      resource.standby = 168
      resourceEvents.forEach((event) => {
        const eventStart = new Date(event.start as Date)
        const eventEnd = new Date(event.end as Date)
        const effectiveStart =
          weekStart.value && eventStart < weekStart.value ? weekStart.value : eventStart
        const effectiveEnd = weekEnd.value && eventEnd > weekEnd.value ? weekEnd.value : eventEnd

        if (effectiveStart < effectiveEnd) {
          resource.standby! -=
            (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60)
        }
      })
    }

    if (sortColumn.value === 'deadhead') {
      const totalDeadheadTime = resourceEvents.reduce((total, event) => {
        const eventStart = new Date(event.start as Date)
        const eventEnd = new Date(event.end as Date)
        const effectiveStart =
          weekStart.value && eventStart < weekStart.value ? weekStart.value : eventStart
        const effectiveEnd = weekEnd.value && eventEnd > weekEnd.value ? weekEnd.value : eventEnd

        if (effectiveStart < effectiveEnd && (!event.payload || event.payload <= 0)) {
          return total + (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60)
        }
        return total
      }, 0)
      resource.deadhead = totalDeadheadTime
    }

    if (sortColumn.value === 'payload') {
      const weekEvents = resourceEvents.filter(
        (event) =>
          new Date(event.end as Date) > weekStart.value! &&
          new Date(event.start as Date) < weekEnd.value!
      )

      const totalPayload = weekEvents.reduce((total, event) => total + (event.payload || 0), 0)

      const numberOfTours = weekEvents.length

      resource.payload =
        numberOfTours > 0 && resource.capacity
          ? Math.round((totalPayload / numberOfTours / resource.capacity) * 100)
          : 0
    }
  })
}

const sortResources = () => {
  metricBarAnimation.value = true
  initialSort.value = false

  myResources.value = [
    ...myResources.value.sort((a, b) => {
      if (sortDirection.value === 'asc') {
        return a[sortColumn.value] > b[sortColumn.value] ? 1 : -1
      } else {
        return a[sortColumn.value] < b[sortColumn.value] ? 1 : -1
      }
    })
  ]

  setTimeout(() => {
    metricBarAnimation.value = false
  }, 100)
}

const delayedToastSort = (resourceId: any, event: MbscCalendarEvent) => {
  resource.value = myResources.value.find((resource) => resource.id === resourceId)
  event.value = event

  isSnackbarOpen.value = true

  setTimeout(() => {
    document.querySelector('.mbsc-toast-background')!.classList.add('start-progress')
  })
}

const handlePopupOpen = () => {
  myAnchor.value = buttonRef.value?.instance.nativeElement
  isPopupOpen.value = true
}

const handlePopupClose = () => {
  isPopupOpen.value = false
  // restore initial state
}

const handleSnackbarClose = () => {
  isSnackbarOpen.value = false

  resource.value!.cssClass = 'mds-resource-highlight'
  sortResources()
  setTimeout(() => {
    resource.value!.cssClass = ''
    myResources.value = [...myResources.value]
  }, 1000)
  calRef.value!.instance.navigateToEvent(event)
}

const handlePageLoading = (args: MbscPageLoadingEvent) => {
  weekStart.value = args.firstDay
  weekEnd.value = args.lastDay
  refreshData()
}

const handlePageLoaded = () => {
  refreshData()
  if (initialSort.value) {
    sortResources()
  }
}

const handleEventCreated = (args: MbscEventCreatedEvent) => {
  args.event.payload = Math.floor(Math.random() * (17 - 5 + 1)) + 5
  args.event.overlap = false
  refreshData()
  delayedToastSort(args.event.resource, args.event)
}

const handleEventDelete = (args: MbscEventDeleteEvent) => {
  refreshData()
  delayedToastSort(args.event.resource, args.event)
}

const handleEventUpdate = (args: MbscEventUpdateEvent) => {
  if (args.oldEvent) {
    if (
      new Date(args.oldEvent.start as string).getTime() !==
        new Date(args.event.start as string).getTime() &&
      new Date(args.oldEvent.end as string).getTime() !==
        new Date(args.event.end as string).getTime()
    ) {
      return
    }
  }
  refreshData()
  delayedToastSort(args.event.resource, args.event)
}

function getMetricValue(resource: MyResource) {
  const metricValue = resource[this.selectedMetric]
  if (this.selectedMetric === 'payload') {
    return `${metricValue}%`
  } else if (['standby', 'deadhead'].includes(this.selectedMetric)) {
    return `${metricValue}h`
  }
  return metricValue
}

function getBarValue(resource: MyResource) {
  const metricValue = resource[this.selectedMetric]
  if (this.selectedMetric === 'payload') {
    return metricValue
  } else if (['standby', 'deadhead'].includes(this.selectedMetric)) {
    return (metricValue / 168) * 100
  }
  return 100
}

function getBarColorClass(resource: MyResource) {
  const barValue = this.getBarValue(resource)
  const animationClass = this.metricBarAnimation
    ? 'mds-metric-bar-animation'
    : 'mds-metric-bar-no-animation'

  if (barValue <= 33) {
    return `mds-resource-green-bar ${animationClass}`
  } else if (barValue <= 66) {
    return `mds-resource-yellow-bar ${animationClass}`
  } else {
    return `mds-resource-red-bar ${animationClass}`
  }
}
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-timeline-popup-sort"
    ref="calRef"
    :clickToCreate="true"
    :data="myEvents"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :resources="myResources"
    :view="myView"
    :onPageLoading="handlePageLoading"
    :onPageLoaded="handlePageLoaded"
    :onEventCreated="handleEventCreated"
    :onEventDelete="handleEventDelete"
    :onEventUpdate="handleEventUpdate"
  >
    <template #header>
      <MbscCalendarPrev />
      <MbscCalendarNext />
      <MbscCalendarNav />
      <MbscButton
        ref="buttonRef"
        style="margin-left: auto"
        id="demo-popup-sort-button"
        startIcon="bars"
        variant="flat"
        @click="handlePopupOpen"
      >
        Sort Trucks
      </MbscButton>
    </template>

    <template #resourceHeader>
      <div class="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-name">Trucks</div>
    </template>

    <template #resource="resource">
      <div class="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-name">
        <strong>{{ resource.name }}</strong>
        <div class="mds-resource-attribute">Model: {{ resource.model || 'N/A' }}</div>
        <div class="mds-resource-attribute">Capacity: {{ resource.capacity }}T</div>
        <div class="mds-resource-attribute">{{ sortColumn }}: {{ getMetricValue(resource) }}</div>

        <div class="mds-metric-bar-container" style="margin-top: 5px">
          <div
            :class="getBarColorClass(resource)"
            :style="{ width: getBarValue(resource) + '%' }"
          ></div>
          <div
            class="mds-metric-bar-overlay"
            :style="{ width: 100 - getBarValue(resource) + '%' }"
          ></div>
        </div>
      </div>
    </template>

    <template #scheduleEventContent="event">
      <div>
        <div>{{ event.title }}</div>
        <div style="font-size: 11px">
          Payload: {{ event.original.payload ? event.original.payload + ' T' : 'empty' }}
        </div>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscPopup
    :contentPadding="false"
    display="anchored"
    :anchor="myAnchor"
    width="400"
    :buttons="[
      'cancel',
      {
        text: 'Apply',
        keyCode: 'enter',
        handler: function () {
          isPopupOpen = false

          // if (initialSortColumn.value != sortColumn.value) {
          refreshData()
          // }
          sortResources()
          // initialSortColumn.value = sortColumn.value
          // initialSortDirection.value = sortDirection.value

          isToastOpen = true
        },
        cssClass: 'mbsc-popup-button-primary'
      }
    ]"
    @close="handlePopupClose"
    :isOpen="isPopupOpen"
    :showOverlay="false"
    :focusOnClose="false"
    :focusOnOpen="false"
  >
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Metric to calculate and sort by</div>
      <MbscRadioGroup v-model="sortColumn">
        <MbscRadio
          label="Standby Time"
          description="Time the truck is driven without cargo."
          value="standby"
          :defaultChecked="true"
        />
        <MbscRadio
          label="Payload Efficiency"
          description="Truck capacity divided by the average cargo on tours."
          value="payload"
        />
        <MbscRadio
          label="Deadhead Time"
          description="Time when the truck is not on a tour."
          value="deadhead"
        />
      </MbscRadioGroup>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Sort direction</div>
      <MbscSegmentedGroup v-model="sortDirection">
        <MbscSegmented value="asc" :defaultChecked="true">Ascending</MbscSegmented>
        <MbscSegmented value="desc">Descending</MbscSegmented>
      </MbscSegmentedGroup>
    </div>
  </MbscPopup>
  <MbscSnackbar
    animation="pop"
    :button="{
      text: 'Sort now',
      action: function () {
        sortResources()
      }
    }"
    cssClass="mds-popup-sort-snackbar"
    :duration="3000"
    display="bottom"
    :isOpen="isSnackbarOpen"
    @close="isSnackbarOpen = false"
  />
  <MbscToast :message="'Resouces sorted'" :isOpen="isToastOpen" @close="handleSnackbarClose" />
</template>

<style>
/* resource highlight */

.mds-resource-highlight {
  background-color: rgba(128, 128, 128, 0.4);
  transition: background-color 0.5s ease;
}

/* progress bar */

.mds-popup-sort-snackbar .mbsc-toast-background::before {
  content: '';
  position: absolute;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: width 3s linear;
}

.mds-popup-sort-snackbar .mbsc-snackbar-message::after {
  content: 'Sorting in 1 .';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: changeMessage 3s steps(3) forwards;
}

.mds-popup-sort-snackbar .mbsc-snackbar-message {
  position: relative;
}

@keyframes countdown {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes changeMessage {
  0% {
    content: 'Sorting in 3 ...';
  }
  43% {
    content: 'Sorting in 2 ..';
  }
  76% {
    content: 'Sorting in 1 .';
  }
}

.mds-popup-sort-snackbar .mbsc-toast-background.start-progress::before {
  animation: countdown 3s linear forwards;
}

.mds-popup-sort-snackbar .mbsc-snackbar-cont {
  border-radius: 4px;
}

/* metric bar */

.mds-metric-bar-container {
  position: relative;
  background-color: #f0f0f0;
  border-radius: 5px;
  height: 10px;
  width: 150px;
  overflow: hidden;
}

.mds-metric-bar-animation {
  height: 100%;
  animation: fillBar 1s ease-in-out forwards;
}
.mds-metric-bar-no-animation {
  height: 100%;
  animation: fillBar 0s ease-in-out forwards;
}

.mds-metric-bar-overlay {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #f0f0f0;
}

@keyframes fillBar {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.mds-resource-green-bar {
  background-color: #4caf50;
}

.mds-resource-yellow-bar {
  background-color: #ffeb3b;
}

.mds-resource-red-bar {
  background-color: #f44336;
}

/* Overrides */

.mds-timeline-popup-sort .mbsc-timeline-events {
  top: 20px;
}

.mds-timeline-popup-sort .mbsc-timeline-resource-header,
.mds-timeline-popup-sort .mbsc-timeline-resource-title,
.mds-timeline-popup-sort .mbsc-timeline-resource-footer,
.mds-timeline-popup-sort .mbsc-timeline-sidebar-header,
.mds-timeline-popup-sort .mbsc-timeline-sidebar-resource-title,
.mds-timeline-popup-sort .mbsc-timeline-sidebar-footer {
  padding: 0;
}

.mds-timeline-popup-sort .mbsc-timeline-row {
  min-height: 110px;
}

.mds-timeline-popup-sort .mbsc-timeline-resource-col {
  width: 170px;
}

.mds-timeline-popup-sort .mbsc-timeline-resource-title {
  height: 100%;
}

/* Resource grid */

.mds-popup-sort-resource-cell {
  display: inline-block;
  height: 100%;
  padding: 5px 5px;
  box-sizing: border-box;
  vertical-align: top;
  line-height: 20px;
}

.mds-popup-sort-resource-cell-name {
  padding: 2px 5px;
  width: 170px;
}

.mds-resource-attribute {
  font-size: 12px;
  font-weight: 400;
}
</style>
