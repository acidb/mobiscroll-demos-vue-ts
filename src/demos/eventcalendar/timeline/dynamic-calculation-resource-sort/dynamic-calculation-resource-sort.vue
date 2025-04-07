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
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscPageLoadingEvent,
  MbscPopupButton,
  MbscResource
} from '@mobiscroll/vue'

import { computed, ref, watch } from 'vue'

setOptions({
  // locale,
  // theme
})

interface MyEvent extends MbscCalendarEvent {
  payload?: number
}

interface MyResource extends MbscResource {
  standby?: number
  deadhead?: number
  payload?: number
  model: string
  location: string
}

const myEvents = ref<MyEvent[]>([
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
    title: 'Tour #028 - Trenton to Philadelphia',
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

const isPopupOpen = ref<boolean>(false)
const isSnackbarOpen = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const popupAnchor = ref<HTMLButtonElement>()
const sortRequest = ref<number>(0)
const snackbarKey = ref<number>(0)
const sortedResources = computed(() => myResources.value)
const tempSortColumn = ref<'standby' | 'payload' | 'deadhead' | 'name'>()
const tempSortDirection = ref<'asc' | 'desc'>()

const buttonRef = ref<typeof MbscButton | null>(null)
const calRef = ref<typeof MbscEventcalendar | null>(null)

let metricBarAnimation = true
let sortColumn: 'standby' | 'payload' | 'deadhead' | 'name' = 'standby'
let sortDirection: 'asc' | 'desc' = 'asc'
let tempEvent: MyEvent | null = null
let weekStart: Date | null = null
let weekEnd: Date | null = null

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    resolutionHorizontal: 'day'
  }
}

const sortColumnLabels: { [key: string]: string } = {
  standby: 'Standby Time',
  payload: 'Payload Efficiency',
  deadhead: 'Deadhead Time'
}

const calcMetrics = () => {
  const loadedEvents: MyEvent[] = calRef.value?.instance?.getEvents() || []

  myResources.value.forEach((resource) => {
    let standby = 168
    let deadhead = 0
    let payload = 0
    let numberOfTours = 0

    const resourceEvents = loadedEvents.filter((event) => event.resource === resource.id)

    resourceEvents.forEach((event) => {
      const eventStart = new Date(event.start as Date)
      const eventEnd = new Date(event.end as Date)
      const effectiveStart = eventStart < weekStart! ? weekStart : eventStart
      const effectiveEnd = eventEnd > weekEnd! ? weekEnd : eventEnd

      if (effectiveStart! < effectiveEnd!) {
        standby -= (effectiveEnd!.getTime() - effectiveStart!.getTime()) / (1000 * 60 * 60)
      }

      if (effectiveStart! < effectiveEnd! && (!event.payload || event.payload <= 0)) {
        deadhead += (effectiveEnd!.getTime() - effectiveStart!.getTime()) / (1000 * 60 * 60)
      }

      if (eventEnd > weekStart! && eventStart < weekEnd!) {
        numberOfTours++
        payload += event.payload || 0
      }
    })

    resource.standby = standby
    resource.deadhead = deadhead
    resource.payload =
      numberOfTours && resource.capacity
        ? Math.round((payload / numberOfTours / resource.capacity) * 100)
        : 0
  })
}

const sortResources = () => {
  metricBarAnimation = true

  myResources.value = [...myResources.value].sort((resource1, resource2) => {
    let col = sortColumn
    if (resource1[col] === resource2[col]) {
      col = 'name'
    }
    return sortDirection === 'asc'
      ? resource1[col]! > resource2[col]!
        ? 1
        : -1
      : resource1[col]! < resource2[col]!
        ? 1
        : -1
  })

  setTimeout(() => {
    metricBarAnimation = false
  }, 100)
}

const delayedSort = (event: MbscCalendarEvent) => {
  tempEvent = event
  isSnackbarOpen.value = false
  sortRequest.value++
}

const addEventPayload = () => ({
  payload: Math.floor(Math.random() * (17 - 5 + 1)) + 5
})

const popupButtons: Array<MbscPopupButton | 'cancel'> = [
  'cancel',
  {
    text: 'Apply',
    keyCode: 'enter',
    handler: () => {
      isPopupOpen.value = false
      isToastOpen.value = true
      sortColumn = tempSortColumn.value!
      sortDirection = tempSortDirection.value!
      sortResources()
    },
    cssClass: 'mbsc-popup-button-primary'
  }
]

const snackbarButton = {
  text: 'Sort now',
  action() {
    isSnackbarOpen.value = false
  }
}

const handleSnackbarClose = () => {
  isSnackbarOpen.value = false
  const event = tempEvent
  const resource = myResources.value.find((r) => r.id === event!.resource)
  const eventStart = new Date(event!.start as Date)
  const navStart = eventStart < weekStart! ? weekStart : eventStart
  sortResources()
  calRef.value!.instance.navigateToEvent({ start: navStart, resource: event!.resource })
  resource!.cssClass = 'mbsc-timeline-parent-hover'
  setTimeout(() => {
    resource!.cssClass = ''
    myResources.value = [...myResources.value]
  }, 1000)
}

const handlePopupOpen = () => {
  tempSortColumn.value = sortColumn
  tempSortDirection.value = sortDirection
  popupAnchor.value = buttonRef.value?.instance.nativeElement
  isPopupOpen.value = true
}

const handlePageLoading = (args: MbscPageLoadingEvent) => {
  weekStart = args.firstDay
  weekEnd = args.lastDay
  setTimeout(() => {
    calcMetrics()
    sortResources()
  })
}

const handleEventCreated = (args: MbscEventCreatedEvent) => {
  myEvents.value.push(args.event)
  calcMetrics()
  delayedSort(args.event)
}

const handleEventDeleted = (args: MbscEventDeletedEvent) => {
  calcMetrics()
  delayedSort(args.event)
}

const handleEventUpdated = (args: MbscEventUpdatedEvent) => {
  const oldEventStart = new Date(args.oldEvent!.start as Date)
  const oldEventEnd = new Date(args.oldEvent!.end as Date)
  if (
    +oldEventStart !== +args.event.start! &&
    +oldEventEnd !== +args.event.end! &&
    oldEventStart >= weekStart! &&
    oldEventEnd <= weekEnd! &&
    args.event.start! >= weekStart! &&
    args.event.end! <= weekEnd! &&
    args.oldEvent!.resource === args.event.resource
  ) {
    return
  }
  calcMetrics()
  delayedSort(args.event)
}

const getBarValue = (resource: MyResource) => {
  const metricValue = resource[sortColumn]
  return sortColumn === 'payload' ? metricValue : ((metricValue as number) / 168) * 100
}

const getBarColor = (resource: MyResource) => {
  const barValue = getBarValue(resource)
  return (barValue as number) <= 33 ? 'green' : (barValue as number) <= 66 ? 'yellow' : 'red'
}

watch(sortRequest, (newVal) => {
  if (newVal > 0) {
    setTimeout(() => {
      snackbarKey.value++
    })
  }
})

watch(snackbarKey, (newVal) => {
  if (newVal > 0) {
    setTimeout(() => {
      isSnackbarOpen.value = true
    })
  }
})
</script>

<template>
  <MbscEventcalendar
    ref="calRef"
    cssClass="mds-popup-sort"
    :clickToCreate="true"
    :data="myEvents"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :eventOverlap="false"
    :extendDefaultEvent="addEventPayload"
    :resources="sortedResources"
    :view="myView"
    :onPageLoading="handlePageLoading"
    :onEventCreated="handleEventCreated"
    :onEventDeleted="handleEventDeleted"
    :onEventUpdated="handleEventUpdated"
  >
    <template #header>
      <MbscCalendarPrev />
      <MbscCalendarNext />
      <MbscCalendarNav />
      <div className="mbsc-flex mbsc-flex-1-1 mbsc-justify-content-end">
        <MbscButton ref="buttonRef" startIcon="bars" variant="flat" @click="handlePopupOpen">
          Sort Trucks
        </MbscButton>
      </div>
    </template>

    <template #resourceHeader>
      <div class="mds-popup-sort-resource-header">Trucks</div>
    </template>

    <template #resource="resource">
      <div class="mds-popup-sort-resource-cell">
        <strong>{{ resource.name }}</strong>
        <div class="mds-popup-sort-resource-attr">Model: {{ resource.model }}</div>
        <div class="mds-popup-sort-resource-attr">Capacity: {{ resource.capacity }}T</div>
        <div class="mds-popup-sort-resource-attr">
          {{ sortColumnLabels[sortColumn] }}: {{ resource[sortColumn]
          }}{{ sortColumn === 'payload' ? '%' : 'h' }}
        </div>
        <div class="mds-popup-sort-bar-track">
          <div
            :class="[
              'mds-popup-sort-bar',
              'mds-popup-sort-bar-' + getBarColor(resource),
              metricBarAnimation ? 'mds-popup-sort-bar-animation' : ''
            ]"
            :style="{ width: getBarValue(resource) + '%' }"
          ></div>
        </div>
      </div>
    </template>

    <template #scheduleEventContent="event">
      <div>
        <div>{{ event.title }}</div>
        <div class="mds-popup-sort-event-attr">
          Payload: {{ event.original.payload ? event.original.payload + ' T' : 'empty' }}
        </div>
      </div>
    </template>
  </MbscEventcalendar>

  <MbscPopup
    display="anchored"
    :anchor="popupAnchor"
    :buttons="popupButtons"
    :contentPadding="false"
    :focusOnClose="false"
    :focusOnOpen="false"
    :isOpen="isPopupOpen"
    :showOverlay="false"
    :width="400"
    @close="isPopupOpen = false"
  >
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Metric to calculate and sort by</div>
      <MbscRadioGroup v-model="tempSortColumn">
        <MbscRadio
          label="Standby Time"
          description="Time the truck is driven without cargo."
          value="standby"
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
      <MbscSegmentedGroup v-model="tempSortDirection">
        <MbscSegmented value="asc">Ascending</MbscSegmented>
        <MbscSegmented value="desc">Descending</MbscSegmented>
      </MbscSegmentedGroup>
    </div>
  </MbscPopup>
  <MbscSnackbar
    animation="pop"
    cssClass="mds-popup-sort-snackbar"
    display="center"
    :button="snackbarButton"
    :duration="3000"
    :isOpen="isSnackbarOpen"
    :key="snackbarKey"
    @close="handleSnackbarClose"
  />
  <MbscToast :message="'Resources sorted'" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
/* Overrides */

.mds-popup-sort .mbsc-timeline-resource-header,
.mds-popup-sort .mbsc-timeline-resource-title {
  padding: 0;
}

.mds-popup-sort .mbsc-timeline-resource-col {
  width: 170px;
}

.mds-popup-sort .mbsc-timeline-row {
  height: 110px;
}

.mds-popup-sort .mbsc-timeline-events {
  top: 20px;
}

/* Resource grid */

.mds-popup-sort-resource-header {
  padding: 0 5px;
  line-height: 25px;
}

.mds-popup-sort-resource-cell {
  padding: 5px;
  line-height: 20px;
}

.mds-popup-sort-resource-attr {
  font-size: 12px;
  font-weight: 400;
}

/* Event template */

.mds-popup-sort-event-attr {
  font-size: 11px;
}

/* Metric bar */

.mds-popup-sort-bar-track {
  background-color: #f0f0f0;
  border-radius: 5px;
  height: 10px;
  width: 150px;
  margin-top: 5px;
  overflow: hidden;
}

.mds-popup-sort-bar {
  height: 100%;
}

.mds-popup-sort-bar-green {
  background-color: #4caf50;
}

.mds-popup-sort-bar-yellow {
  background-color: #ffeb3b;
}

.mds-popup-sort-bar-red {
  background-color: #f44336;
}

.mds-popup-sort-bar-animation {
  animation: mds-popup-sort-fill-bar 1s ease-in-out forwards;
}

/* Snackbar countdown */

.mds-popup-sort-snackbar .mbsc-snackbar-cont {
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.mds-popup-sort-snackbar .mbsc-snackbar-cont::before {
  content: '';
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: mds-popup-sort-fill-bar 3s linear forwards;
}

.mds-popup-sort-snackbar .mbsc-snackbar-message::after {
  content: 'Sorting in 1 .';
  position: relative;
  z-index: 1;
  animation: mds-popup-sort-message 3s steps(3) forwards;
}

/* Animations */

@keyframes mds-popup-sort-fill-bar {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes mds-popup-sort-message {
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
</style>
