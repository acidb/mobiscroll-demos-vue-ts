<script setup lang="ts">
import {
  getJson,
  MbscCalendarEvent,
  MbscDatepicker,
  MbscDatepickerChangeEvent,
  MbscDateType,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent>([])
const mySelectedDate = ref<MbscDateType>(new Date())
const dayView: MbscEventcalendarView = {
  timeline: { type: 'day' }
}

function handleSelectedDateChange(args: MbscSelectedDateChangeEvent) {
  mySelectedDate.value = args.date
}

function handleDateChange(args: MbscDatepickerChangeEvent) {
  if (args.value) {
    mySelectedDate.value = args.value
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <div class="mds-external-nav-timeline mbsc-flex">
    <div class="mds-external-nav-dp">
      <MbscDatepicker display="inline" :value="mySelectedDate" @change="handleDateChange" />
    </div>
    <div class="mds-external-nav-ec mbsc-flex-1-1">
      <MbscEventcalendar
        :view="dayView"
        :data="myEvents"
        :selectedDate="mySelectedDate"
        @selected-date-change="handleSelectedDateChange"
      />
    </div>
  </div>
</template>

<style>
.mds-external-nav-timeline {
  height: 100%;
}

.mds-external-nav-dp .mbsc-datepicker-inline {
  height: auto;
}

.mds-external-nav-ec {
  border-left: 1px solid #ccc;
  overflow: hidden;
}

@media screen and (max-width: 700px) {
  .mds-external-nav-timeline {
    display: block;
  }
}
</style>
