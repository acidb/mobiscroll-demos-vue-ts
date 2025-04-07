<script setup lang="ts">
import { MbscEventcalendar, MbscToast, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventDragEvent,
  MbscPageLoadingEvent,
  MbscResource,
  MbscSelectedDateChangeEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const bookings = [
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Budapest - Ljubljana',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Ljubljana - Berlin',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,4)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Los Angeles - Dublin',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d,18)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Dublin - Bucharest',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Chicago - Amsterdam',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,d,17)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Amsterdam - Cairo',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Hong Kong - Sydney',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Sydney - Tokyo',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d,4)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Paris - Washington, D.C.',
    resource: 5
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Washington, D.C. - Los-Angeles',
    resource: 5
  },
  {
    start: 'dyndatetime(y,m,d,3)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Los Angeles - Dublin',
    resource: 6
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Dublin - Rome',
    resource: 6
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Barcelona - Dubai',
    resource: 7
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Dubai - Tokyo',
    resource: 7
  },
  {
    start: 'dyndatetime(y,m,d,3,30)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Rome - Toronto',
    resource: 8
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Toronto - New-York',
    resource: 8
  },
  {
    start: 'dyndatetime(y,m,d,3)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Vienna - Shanghai',
    resource: 9
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23,30)',
    title: 'Shanghai - Moscow',
    resource: 9
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'London - Cairo',
    resource: 10
  },
  {
    start: 'dyndatetime(y,m,d,15,30)',
    end: 'dyndatetime(y,m,d,19,30)',
    title: 'Cairo - Sofia',
    resource: 10
  },
  {
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Istanbul - New York',
    resource: 11
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'New York - Montreal',
    resource: 11
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Seattle - Miami',
    resource: 12
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Miami - Buenos-Aires',
    resource: 12
  },
  {
    start: 'dyndatetime(y,m,d+1,4)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Hong Kong - Sydney',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d+1,6)',
    end: 'dyndatetime(y,m,d+1,10)',
    title: 'Los Angeles - Dublin',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,3)',
    end: 'dyndatetime(y,m,d+1,11)',
    title: 'Budapest - Ljubljana',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Los Angeles - Dublin',
    resource: 6
  },
  {
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'London - Cairo',
    resource: 7
  },
  {
    start: 'dyndatetime(y,m,d+1,3)',
    end: 'dyndatetime(y,m,d+1,14)',
    title: 'Miami - Buenos-Aires',
    resource: 9
  },
  {
    start: 'dyndatetime(y,m,d+1,6)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Barcelona - Dubai',
    resource: 10
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,22)',
    title: 'Istanbul - New York',
    resource: 11
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,11)',
    title: 'Vienna - Shanghai',
    resource: 12
  }
]

const jets = [
  {
    id: 'Op 1',
    name: 'Prestige Air',
    eventCreation: false,
    children: [
      {
        id: 1,
        code: '#AF 7703',
        crew: 52,
        name: 'Red Bolt',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-1.jpg'
      },
      {
        id: 2,
        code: '#BQ 4718',
        crew: 47,
        name: 'Skyroar',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-2.jpg'
      },
      {
        id: 3,
        code: '#ZM 8430',
        crew: 24,
        name: 'Agile Raven',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-3.jpg'
      }
    ]
  },
  {
    id: 'Op 2',
    name: 'Elite Wings',
    eventCreation: false,
    children: [
      {
        id: 4,
        code: '#XG 5500',
        crew: 43,
        name: 'Monsterbolt',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-4.jpg'
      },
      {
        id: 5,
        code: '#FL 2531',
        crew: 22,
        name: 'Airrise',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-5.jpg'
      },
      {
        id: 6,
        code: '#PA 6487',
        crew: 84,
        name: 'Starblast',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-6.jpg'
      },
      {
        id: 7,
        code: '#PP 9812',
        crew: 28,
        name: 'Ebonfire',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-7.jpg'
      }
    ]
  },
  {
    id: 'Op 3',
    name: 'Luxury Skies',
    eventCreation: false,
    children: [
      {
        id: 8,
        code: '#DN 3191',
        crew: 36,
        name: 'Dark Bee',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-8.jpg'
      },
      {
        id: 9,
        code: '#ZW 2328',
        crew: 76,
        name: 'Keen Sparrow',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-9.jpg'
      },
      {
        id: 10,
        code: '#RX 9898',
        crew: 37,
        name: 'Jagged Bolt',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-10.jpg'
      }
    ]
  }
]

const reservations = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Alison Reyes'
  },
  {
    id: 2,
    name: 'Shauna Perry'
  },
  {
    id: 3,
    name: 'Jan Whitney'
  },
  {
    id: 4,
    name: 'Freddie Durham'
  },
  {
    id: 5,
    name: 'William Dillon'
  },
  {
    id: 6,
    name: 'Tyrell Edwards'
  },
  {
    id: 7,
    name: 'Caitlyn Riddle'
  },
  {
    id: 8,
    name: 'Liam Mays'
  },
  {
    id: 9,
    name: 'Frank Medina'
  },
  {
    id: 10,
    name: 'Calvin Larsen'
  },
  {
    id: 11,
    name: 'Heather Walsh'
  },
  {
    id: 12,
    name: 'Conner Paul'
  }
])

const flights = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Barcelona - Dubai',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d,7,30)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Toronto - Rome',
    resource: 8
  },
  {
    start: 'dyndatetime(y,m,d,4)',
    end: 'dyndatetime(y,m,d,8)',
    title: 'Ljubljana - Budapest',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Paris - Washington, D.C.',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'New York - Istanbul',
    resource: 7
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Moscow - Tokyo',
    resource: 3
  }
])

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'day',
    size: 1
  }
}

const invalid = ref<MbscCalendarEvent[]>([])
const firstCalCont = ref<any>(null)
const secondCalCont = ref<any>(null)
const skipScroll1 = ref<boolean>(false)
const skipScroll2 = ref<boolean>(false)
const mySelectedDate = ref<any>(new Date())
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

function handleScroll1(ev: any) {
  if (secondCalCont.value && !skipScroll2.value) {
    skipScroll1.value = true
    secondCalCont.value.scrollLeft = ev.target.scrollLeft
  }
  skipScroll1.value = false
}

function handleScroll2(ev: any) {
  if (firstCalCont.value && !skipScroll1.value) {
    skipScroll2.value = true
    firstCalCont.value.scrollLeft = ev.target.scrollLeft
  }
  skipScroll2.value = false
}

function handleFirstScroll() {
  if (!firstCalCont.value) {
    firstCalCont.value = document.querySelector(
      '.md-drag-drop-bw-inst-first .mbsc-timeline-grid-scroll'
    )
    firstCalCont.value.addEventListener('scroll', handleScroll1)
  }
}

function handleSecondScroll() {
  if (!secondCalCont.value) {
    secondCalCont.value = document.querySelector(
      '.md-drag-drop-bw-inst-second .mbsc-timeline-grid-scroll'
    )
    secondCalCont.value.addEventListener('scroll', handleScroll2)
  }
}

function detachFirstScroll() {
  if (firstCalCont.value) {
    firstCalCont.value.removeEventListener('scroll', handleScroll1)
  }
}

function detachSecondScroll() {
  if (secondCalCont.value) {
    secondCalCont.value.removeEventListener('scroll', handleScroll2)
  }
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  if (secondCalCont.value) {
    setTimeout(() => {
      mySelectedDate.value = args.firstDay
    }, 100)
  }
}

// function handleEventDelete(args) {
//   reservations.value = reservations.value.filter((item) => item.id !== args.event.resource)
// }

function handleSelectedDateChange(args: MbscSelectedDateChangeEvent) {
  mySelectedDate.value = args.date
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  flights.value = [...flights.value, args.event]
  toastMessage.value = 'Flight scheduled'
  isToastOpen.value = true
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  flights.value = flights.value.filter((flight) => flight.id !== args.event.id)
}

function handleEventCreateUpdateFailed() {
  toastMessage.value = "There's already a flight on this date"
}

function handleEventDragStart(args: MbscEventDragEvent) {
  const unavailable: { [key: number]: boolean } = {}
  const inv: MbscCalendarEvent = {
    cssClass: 'md-drag-drop-invalid',
    recurring: { repeat: 'daily' },
    resource: []
  }
  // Filter unavailable jets
  flights.value.forEach((flight) => {
    if (
      flight.id !== args.event.id &&
      new Date(flight.start as string) < new Date(args.event.end as string) &&
      new Date(flight.end as string) > new Date(args.event.start as string)
    ) {
      unavailable[flight.resource as number] = true
    }
  })
  flights.value.forEach((flight) => {
    if (unavailable[flight.resource as number]) {
      flight.cssClass = 'md-drag-drop-faded'
    }
  })
  jets.forEach((group) => {
    group.children.forEach((jet) => {
      if (unavailable[jet.id]) {
        ;(inv.resource as number[]).push(jet.id)
      }
    })
  })
  invalid.value = [inv]
}

function handleEventDragEnd() {
  flights.value.forEach((flight) => {
    delete flight.cssClass
  })
  invalid.value = []
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <div class="mbsc-flex-col md-drag-drop-bw-inst-cont">
    <MbscEventcalendar
      cssClass="md-drag-drop-bw-inst-first"
      :data="bookings"
      :resources="reservations"
      :view="myView"
      :dragToMove="false"
      :dragToCreate="true"
      :dragToResize="false"
      :eventDelete="true"
      :externalDrag="true"
      @page-loading="handlePageLoading"
      @page-loaded="handleFirstScroll"
      @destroy="detachFirstScroll"
    />
    <MbscEventcalendar
      cssClass="md-drag-drop-bw-inst-second"
      :invalid="invalid"
      :data="flights"
      :resources="jets"
      :view="myView"
      :showControls="false"
      :dragToCreate="false"
      :dragToMove="true"
      :dragToResize="false"
      :dragInTime="false"
      :externalDrop="true"
      :eventDelete="true"
      :eventOverlap="false"
      :selectedDate="mySelectedDate"
      @selected-date-change="handleSelectedDateChange"
      @event-created="handleEventCreated"
      @event-create-failed="handleEventCreateUpdateFailed"
      @event-deleted="handleEventDeleted"
      @event-update-failed="handleEventCreateUpdateFailed"
      @event-drag-start="handleEventDragStart"
      @event-drag-end="handleEventDragEnd"
      @page-loaded="handleSecondScroll"
      @destroy="detachSecondScroll"
    >
      <template #resource="resource">
        <div
          v-if="!resource.children"
          class="mbsc-flex mbsc-align-items-center mbsc-justify-content-start"
        >
          <img class="md-drag-drop-bw-inst-avatar" :src="resource.img" />
          <div class="md-drag-drop-bw-inst-details mbsc-flex-col mbsc-flex-1-0">
            <div>{{ resource.name }}</div>
            <div class="md-aircraft-code mbsc-flex mbsc-justify-content-between">
              <div>{{ resource.code }}</div>
              <div>&#x1F468;&#x1F3FE;&#x200D;&#x2708; {{ resource.crew }}</div>
            </div>
          </div>
        </div>
        <div v-else>{{ resource.name }}</div>
      </template>
    </MbscEventcalendar>
    <MbscToast
      display="center"
      :message="toastMessage"
      :isOpen="isToastOpen"
      @close="handleToastClose"
    />
  </div>
</template>

<style>
.md-drag-drop-bw-inst-cont .mbsc-eventcalendar {
  height: 500px;
}

.md-drag-drop-bw-inst-cont .mbsc-timeline-parent {
  height: 32px;
}

.md-drag-drop-bw-inst-cont .mbsc-timeline-resource {
  padding-left: 5px !important;
}

.md-drag-drop-bw-inst-cont .mbsc-timeline-row-gutter {
  height: 6px;
}

.md-drag-drop-bw-inst-cont .mbsc-timeline-resource-depth-step {
  width: 0;
}

.md-drag-drop-bw-inst-second .mbsc-timeline-header,
.md-drag-drop-bw-inst-second .mbsc-timeline-header-sticky {
  display: none;
}

.md-aircraft-code {
  color: #939995;
}

.md-drag-drop-bw-inst-cont {
  min-height: 500px;
  height: 100%;
}

.md-drag-drop-bw-inst-first {
  border-bottom: 5px solid #ccc;
}

.md-drag-drop-bw-inst-avatar {
  max-height: 55px;
  max-width: 55px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}

.md-drag-drop-bw-inst-details {
  margin-left: 16px;
  font-size: 12px;
}

.md-drag-drop-bw-inst-title {
  font-size: 12px;
  margin-top: 5px;
}

.md-drag-drop-faded {
  opacity: 0.3;
}

.md-drag-drop-invalid.mbsc-schedule-invalid {
  background: repeating-linear-gradient(-45deg, #f3f3f3, #f3f3f3 11px, #e5e5e5 11px, #e5e5e5 22px);
}
</style>
