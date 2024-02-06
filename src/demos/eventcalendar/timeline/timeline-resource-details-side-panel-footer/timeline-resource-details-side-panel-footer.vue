<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const oneDay: number = 60000 * 60 * 24

const myResources: MbscResource[] = [
  { id: 1, name: 'Flatiron Room', seats: 90, color: '#fdf500', price: 600 },
  {
    id: 2,
    name: 'The Capital City',
    seats: 250,
    color: '#ff0101',
    price: 800
  },
  {
    id: 3,
    name: 'Heroes Square',
    seats: 400,
    color: '#01adff',
    price: 1100
  },
  {
    id: 4,
    name: 'Hall of Faces',
    seats: 850,
    color: '#239a21',
    price: 750
  },
  {
    id: 5,
    name: 'King’s Landing',
    seats: 550,
    color: '#ff4600',
    price: 950
  },
  {
    id: 6,
    name: 'Gathering Field',
    seats: 900,
    color: '#8f1ed6',
    price: 700
  }
]

const myEvents = ref<MbscCalendarEvent[]>()

const calendarElm = ref<any>(null)

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'month'
  }
}

function getUTCDateOnly(d: Date) {
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())
}

function getDayDiff(d1: Date, d2: Date) {
  return Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / oneDay) + 1
}

function getRevenue(resource: MbscResource) {
  if (calendarElm.value) {
    let days = 0
    for (const event of calendarElm.value.instance.getEvents()) {
      if (event.resource === resource.id) {
        days += getDayDiff(new Date(event.start), new Date(event.end))
      }
    }
    return days * resource.price
  } else {
    return 0
  }
}

function getTotal() {
  let total = 0
  for (const resource of myResources) {
    total += getRevenue(resource)
  }
  return total
}

function getOccuppancy(events: MbscCalendarEvent[]) {
  let occuppancy = 0
  if (events) {
    let resourceIds: string[] = []
    let nr = 0
    for (const event of events) {
      if (resourceIds.indexOf(event.resource as string) < 0) {
        nr++
        resourceIds = [...resourceIds, event.resource as string]
      }
    }
    occuppancy = (nr * 100) / myResources.length
  }
  return occuppancy.toFixed(0)
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/multiday-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    ref="calendarElm"
    className="md-resource-details"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
  >
    <template #resourceHeader>
      <div class="md-resource-details-title">
        <div class="md-resource-header md-resource-details-name">Room</div>
        <div class="md-resource-header md-resource-details-seats">Capacity</div>
        <div class="md-resource-header md-resource-details-seats">Price</div>
      </div>
    </template>

    <template #resource="resource">
      <div class="md-resource-details-cont">
        <div class="md-resource-header md-resource-details-name">{{ resource.name }}</div>
        <div class="md-resource-header md-resource-details-seats">
          {{ resource.seats + ' seats' }}
        </div>
        <div class="md-resource-header md-resource-details-seats">{{ '$' + resource.price }}</div>
      </div>
    </template>

    <template #sidebar="resource">
      <div class="md-resource-details-sidebar">{{ getRevenue(resource) }}</div>
    </template>

    <template #resourceFooter>
      <div class="md-resource-details-footer md-resource-details-occuppancy">Occuppancy</div>
    </template>

    <template #sidebarHeader>
      <div class="md-resource-details-sidebar-header">Revenue</div>
    </template>

    <template #dayFooter="data">
      <div class="md-resource-details-footer md-resource-details-footer-day">
        {{ getOccuppancy(data.events) }}%
      </div>
    </template>

    <template #sidebarFooter>
      <div class="md-resource-details-footer md-resource-details-total">${{ getTotal() }}</div>
    </template>
  </MbscEventcalendar>
</template>

<style>
/* Header */

.md-resource-details .mbsc-timeline-resource-col {
  width: 280px;
}

.md-resource-details .mbsc-timeline-resource-header,
.md-resource-details .mbsc-timeline-resource-title,
.md-resource-details .mbsc-timeline-resource-footer,
.md-resource-details .mbsc-timeline-sidebar-header {
  padding: 0;
}

.md-resource-details .mbsc-timeline-resource-title {
  height: 100%;
}

.md-resource-details-cont {
  line-height: 50px;
  height: 100%;
}

.md-resource-header {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: top;
}

.md-resource-details-name {
  width: 120px;
}

.md-resource-details-seats,
.md-resource-details-price {
  width: 78px;
}

.md-resource-details-seats {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.md-resource-details-title {
  font-weight: 600;
  line-height: 26px;
}

.md-resource-details-sidebar-header {
  line-height: 26px;
  padding: 0 5px;
}

.md-resource-details .mbsc-timeline-day {
  width: 144px;
}

.md-resource-details-sidebar {
  line-height: 36px;
  text-align: center;
}

/* Footer */

.md-resource-details-occuppancy {
  font-size: 15px;
  text-align: right;
  background: #f8f8f8;
  padding-right: 15px;
}

.md-resource-details-footer {
  line-height: 50px;
}

.md-resource-details-total {
  font-size: 18px;
  text-align: center;
  line-height: 36px;
}

.md-resource-details-footer-day {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  background: #f8f8f8;
  padding: 0 5px;
}

.md-resource-details .mbsc-timeline-sidebar-footer {
  background: #feefee;
  border-top-color: #5a0101;
  color: #5a0101;
}

.md-resource-details .mbsc-timeline-sidebar-col {
  width: 85px;
}

@supports (overflow: clip) {
  .md-resource-details.mbsc-ltr .mbsc-schedule-event-inner {
    left: 280px;
  }
  .md-resource-details.mbsc-rtl .mbsc-schedule-event-inner {
    right: 280px;
  }
}
</style>
