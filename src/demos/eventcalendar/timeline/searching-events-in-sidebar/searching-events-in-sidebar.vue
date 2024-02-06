<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscEventcalendar,
  MbscInput,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageLoadingEvent,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calEvents = ref<MbscCalendarEvent[]>([])
const listEvents = ref<MbscCalendarEvent[]>([])
const mySelectedEvent = ref<MbscCalendarEvent[]>([])
const showList = ref<boolean>(false)
const currentDate = ref<any>(new Date())
const timer = ref<any>(null)

const calView: MbscEventcalendarView = {
  timeline: {
    type: 'month',
    eventList: true
  }
}

const listView: MbscEventcalendarView = {
  agenda: {
    type: 'year',
    size: 5
  }
}

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Resource 1',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Resource 2',
    color: '#ff4600'
  },
  {
    id: 3,
    name: 'Resource 3',
    color: '#ff0101'
  },
  {
    id: 4,
    name: 'Resource 4',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Resource 5',
    color: '#8f1ed6'
  },
  {
    id: 6,
    name: 'Resource 6',
    color: '#01adff'
  }
]

function handleSearch(ev: any) {
  const text = ev.target.value

  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }

  timer.value = setTimeout(() => {
    if (text.length > 0) {
      getJson(
        'https://trial.mobiscroll.com/searchevents-timeline/?text=' + text,
        (data: MbscCalendarEvent[]) => {
          listEvents.value = data
          showList.value = true
        },
        'jsonp'
      )
    } else {
      showList.value = false
    }
  }, 200)
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  const start = formatDate('YYYY-MM-DD', args.viewStart!)
  const end = formatDate('YYYY-MM-DD', args.viewEnd!)

  setTimeout(() => {
    getJson(
      'https://trial.mobiscroll.com/searchevents-timeline/?start=' + start + '&end=' + end,
      (data: MbscCalendarEvent[]) => {
        calEvents.value = data
      },
      'jsonp'
    )
  })
}

function handleEventClick(args: MbscEventClickEvent) {
  currentDate.value = args.event.start
  mySelectedEvent.value = [args.event]
}
</script>

<template>
  <MbscPage>
    <div class="md-search-events-sidebar mbsc-flex">
      <div class="md-search-events-cont mbsc-flex-col mbsc-flex-none">
        <MbscInput
          startIcon="material-search"
          inputStyle="outline"
          placeholder="Search events"
          @input="handleSearch"
        />
        <MbscEventcalendar
          v-if="showList"
          :view="listView"
          :data="listEvents"
          :showControls="false"
          @event-click="handleEventClick"
        />
      </div>
      <div class="md-search-events-calendar mbsc-flex-1-1">
        <MbscEventcalendar
          :clickToCreate="false"
          :dragToCreate="false"
          :dragToMove="false"
          :dragToResize="false"
          :selectMultipleEvents="true"
          :view="calView"
          :data="calEvents"
          :resources="myResources"
          :selectedEvents="mySelectedEvent"
          :selectedDate="currentDate"
          @page-loading="handlePageLoading"
        />
      </div>
    </div>
  </MbscPage>
</template>

<style>
.md-search-events-cont {
  width: 350px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-ios {
  margin-top: 26px;
  margin-bottom: 26px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-material {
  margin-top: 25px;
  margin-bottom: 26px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-windows {
  margin-top: 34px;
  margin-bottom: 35px;
}

@media (min-width: 1135px) {
  .md-search-events-cont .mbsc-textfield-wrapper.mbsc-windows {
    margin-top: 39px;
    margin-bottom: 40px;
  }
}

.md-search-events-calendar {
  border-left: 1px solid #ccc;
  overflow: hidden;
}

.demo-searching-events-in-sidebar,
.md-search-events-sidebar,
.md-search-events-calendar {
  height: 100%;
}
</style>
