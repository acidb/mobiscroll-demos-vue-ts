<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

interface MyResource extends MbscResource {
  busyHours?: number
  price: number
  revenue?: number
  seats: number
}

const calRef = ref<typeof MbscEventcalendar>()
const myEvents = ref<MbscCalendarEvent[]>()
const loadedEvents = ref<MbscCalendarEvent[]>([])
const sortColumn = ref<string>('')
const sortDirection = ref<string>('')
const sortDay = ref<number>()
const totalRevenue = ref<number>(0)

const myResources = ref<MyResource[]>([
  { id: 1, name: 'Horizon', seats: 1200, color: '#4a4a4a', price: 1000, revenue: 0 },
  { id: 2, name: 'Apex Hall', seats: 90, color: '#fdf500', price: 600, revenue: 0 },
  { id: 3, name: 'Jade Room', seats: 700, color: '#00aaff', price: 900, revenue: 0 },
  { id: 4, name: 'Dome Arena', seats: 850, color: '#239a21', price: 750, revenue: 0 },
  { id: 5, name: 'Forum Plaza', seats: 900, color: '#8f1ed6', price: 700, revenue: 0 },
  { id: 6, name: 'Gallery', seats: 300, color: '#0077b6', price: 650, revenue: 0 },
  { id: 7, name: 'Icon Hall', seats: 450, color: '#e63946', price: 850, revenue: 0 },
  { id: 8, name: 'Broadway', seats: 250, color: '#ff0101', price: 800, revenue: 0 },
  { id: 9, name: 'Central Hub', seats: 400, color: '#01adff', price: 1100, revenue: 0 },
  { id: 10, name: 'Empire Hall', seats: 550, color: '#ff4600', price: 950, revenue: 0 }
])

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'month'
  }
}

function getUTCDateOnly(d: Date) {
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())
}

function getDayDiff(d1: Date, d2: Date) {
  return Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / (60000 * 60 * 24)) + 1
}

function getRevenue(resource: MyResource) {
  let days = 0
  for (const event of loadedEvents.value) {
    if (event.resource === resource.id) {
      days += getDayDiff(new Date(event.start as Date), new Date(event.end as Date))
    }
  }
  return days * resource.price
}

function getOccuppancy(events: MbscCalendarEvent[]) {
  let occuppancy = 0
  if (events) {
    const resourceIds: string[] = []
    let nr = 0
    for (const event of events) {
      if (resourceIds.indexOf(event.resource as string) < 0) {
        nr++
        resourceIds.push(event.resource as string)
      }
    }
    occuppancy = (nr * 100) / myResources.value.length
  }
  return occuppancy.toFixed(0)
}

function getSortArrow(column: string, day?: undefined) {
  if (sortColumn.value === column && day === sortDay.value) {
    return sortDirection.value === 'asc' ? 'asc' : sortDirection.value === 'desc' ? 'desc' : 'def'
  }
  return 'def'
}

function getBusyHours(resource: MyResource, timestamp: number) {
  const startOfDay = new Date(timestamp)
  const endOfDay = new Date(
    startOfDay.getFullYear(),
    startOfDay.getMonth(),
    startOfDay.getDate() + 1
  )
  return loadedEvents.value.reduce((totalHours, event) => {
    if (event.resource === resource.id) {
      const eventStart = Math.max(+startOfDay, +new Date(event.start as Date))
      const eventEnd = Math.min(+endOfDay, +new Date(event.end as Date))
      return totalHours + (eventStart < eventEnd ? (eventEnd - eventStart) / (60 * 60 * 1000) : 0)
    }
    return totalHours
  }, 0)
}

function sortResources(column?: string, day?: number) {
  if (column) {
    if (sortColumn.value === column && day === sortDay.value) {
      sortDirection.value =
        sortDirection.value === 'asc' ? 'desc' : sortDirection.value === 'desc' ? 'def' : 'asc'
    } else {
      sortColumn.value = column
      sortDirection.value = 'asc'
    }
    sortDay.value = day
  }

  if (sortDay.value) {
    // Precalculate busy hours for the clicked day
    myResources.value.forEach((resource) => {
      resource.busyHours = getBusyHours(resource, sortDay.value!)
    })
  }

  myResources.value = [
    ...myResources.value.sort((a, b) => {
      const col = sortColumn.value as keyof typeof a
      if (sortDirection.value === 'asc') {
        return a[col] > b[col] ? 1 : -1
      }
      if (sortDirection.value === 'desc') {
        return a[col] < b[col] ? 1 : -1
      }
      return +a.id - +b.id
    })
  ]
}

function refreshData() {
  setTimeout(() => {
    loadedEvents.value = calRef.value!.instance.getEvents()

    myResources.value.forEach((resource) => {
      resource.revenue = getRevenue(resource)
    })

    totalRevenue.value = myResources.value.reduce(
      (total, resource) => total + (resource.revenue || 0),
      0
    )

    sortResources()
  })
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/multiday-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
      refreshData()
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    className="mds-resource-details"
    ref="calRef"
    :clickToCreate="true"
    :data="myEvents"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :resources="myResources"
    :view="myView"
    :onPageLoading="refreshData"
    :onEventCreated="refreshData"
    :onEventDeleted="refreshData"
    :onEventUpdated="refreshData"
  >
    <template #resourceHeader>
      <div
        :class="
          'mds-resource-sort-header mds-resource-cell mds-resource-cell-name mds-resource-sort-' +
          getSortArrow('name')
        "
        @click="sortResources('name')"
      >
        Room
      </div>
      <div
        :class="
          'mds-resource-sort-header mds-resource-cell mds-resource-cell-seats mds-resource-sort-' +
          getSortArrow('seats')
        "
        @click="sortResources('seats')"
      >
        Capacity
      </div>
      <div
        :class="
          'mds-resource-sort-header mds-resource-cell mds-resource-cell-price mds-resource-sort-' +
          getSortArrow('price')
        "
        @click="sortResources('price')"
      >
        Price/day
      </div>
    </template>

    <template #resource="resource">
      <div class="mds-resource-cell mds-resource-cell-name">{{ resource.name }}</div>
      <div class="mds-resource-cell mds-resource-cell-seats">
        {{ resource.seats + ' seats' }}
      </div>
      <div class="mds-resource-cell mds-resource-cell-price">{{ '$' + resource.price }}</div>
    </template>

    <template #sidebar="resource">
      <div class="mds-resource-cell">${{ resource.revenue }}</div>
    </template>

    <template #resourceFooter>
      <div class="mds-resource-details-footer mds-resource-details-occuppancy">Occuppancy</div>
    </template>

    <template #sidebarHeader>
      <div
        :class="'mds-resource-sort-header mds-resource-sort-' + getSortArrow('revenue')"
        @click="sortResources('revenue')"
      >
        Revenue
      </div>
    </template>

    <template #day="data">
      <div
        :class="
          'mds-resource-sort-header mds-resource-sort-' +
          getSortArrow('busyHours', data.date.getTime())
        "
        @click="sortResources('busyHours', data.date.getTime())"
      >
        <span>{{ formatDate('D DDD', data.date) }}</span>
      </div>
    </template>

    <template #dayFooter="data">
      <div class="mds-resource-details-footer mds-resource-details-footer-day">
        {{ getOccuppancy(data.events) }}%
      </div>
    </template>

    <template #sidebarFooter>
      <div class="mds-resource-details-footer mds-resource-details-total">${{ totalRevenue }}</div>
    </template>
  </MbscEventcalendar>
</template>

<style>
/* Overrides */
.mds-resource-details .mbsc-timeline-resource-header,
.mds-resource-details .mbsc-timeline-resource-title,
.mds-resource-details .mbsc-timeline-resource-footer,
.mds-resource-details .mbsc-timeline-sidebar-header,
.mds-resource-details .mbsc-timeline-sidebar-resource-title,
.mds-resource-details .mbsc-timeline-sidebar-footer {
  padding: 0;
}

.mds-resource-details .mbsc-timeline-resource-col {
  width: 335px;
}

.mds-resource-details .mbsc-timeline-sidebar-col {
  width: 98px;
}

.mds-resource-details .mbsc-timeline-day {
  width: 144px;
}

.mds-resource-details .mbsc-timeline-resource-title {
  height: 100%;
}

/* Resource grid */

.mds-resource-cell {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  vertical-align: top;
  line-height: 50px;
}

.mds-resource-cell-name {
  width: 120px;
}

.mds-resource-cell-seats,
.mds-resource-cell-price {
  width: 107px;
}

.mds-resource-cell-seats {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.mds-resource-details.mbsc-ios-dark .mds-resource-cell-seats,
.mds-resource-details.mbsc-material-dark .mds-resource-cell-seats,
.mds-resource-details.mbsc-windows-dark .mds-resource-cell-seats {
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}

/* Sort arrows */

.mds-resource-sort-header {
  cursor: pointer;
  position: relative;
  line-height: 25px;
  padding: 0 5px;
  font-size: 14px;
}

.mds-resource-sort-header::after {
  position: absolute;
  opacity: 0.5;
  right: 8px;
}

.mds-resource-sort-header:hover::after {
  opacity: 1;
}

.mds-resource-sort-asc::after {
  content: '↑';
}

.mds-resource-sort-desc::after {
  content: '↓';
}

.mds-resource-sort-def::after {
  content: '‹›';
  right: 5px;
  top: 12px;
  transform: translateY(-50%) rotate(90deg);
}

/* Footer */

.mds-resource-details-footer {
  line-height: 50px;
  background: rgba(150, 150, 150, 0.1);
}

.mds-resource-details-footer-day {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  padding: 0 5px;
}

.mds-resource-details-occuppancy {
  font-size: 15px;
  text-align: end;
  text-align: right;
  padding: 0 15px;
}

.mds-resource-details-total {
  font-size: 18px;
  padding: 0 5px;
  color: #8c0000;
}
</style>
