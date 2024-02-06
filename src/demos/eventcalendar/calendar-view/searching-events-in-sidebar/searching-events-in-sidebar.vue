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
  MbscPageLoadingEvent
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
  calendar: {
    labels: true
  }
}

const listView: MbscEventcalendarView = {
  agenda: {
    type: 'year',
    size: 5
  }
}

function handleSearch(ev: any) {
  const text = ev.target.value

  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }

  timer.value = setTimeout(() => {
    if (text.length > 0) {
      getJson(
        'https://trial.mobiscroll.com/searchevents/?text=' + text,
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
      'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end,
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
  margin-top: 8px;
  margin-bottom: 9px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-material {
  margin-top: 15px;
  margin-bottom: 15px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-windows {
  margin-top: 28px;
  margin-bottom: 29px;
}

@media (min-width: 1135px) {
  .md-search-events-cont .mbsc-textfield-wrapper.mbsc-ios {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

.md-search-events-calendar {
  border-left: 1px solid #ccc;
}

.demo-searching-events-in-sidebar,
.md-search-events-sidebar,
.md-search-events-calendar {
  height: 100%;
}
</style>
