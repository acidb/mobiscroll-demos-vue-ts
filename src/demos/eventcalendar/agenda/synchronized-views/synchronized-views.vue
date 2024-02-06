<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const mySelectedDate = ref(new Date())

const monthView: MbscEventcalendarView = {
  calendar: { popover: false, labels: false }
}

const dayView: MbscEventcalendarView = {
  agenda: { type: 'day' }
}

function handleSelectedDateChange(event: MbscSelectedDateChangeEvent) {
  mySelectedDate.value = event.date as Date
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <div class="mbsc-grid md-demo-synchronized-views">
    <div class="mbsc-row mbsc-no-padding">
      <div class="mbsc-col-md-4 mbsc-col-12">
        <MbscEventcalendar
          :view="monthView"
          :data="myEvents"
          :selectedDate="mySelectedDate"
          @selected-date-change="handleSelectedDateChange"
        />
      </div>
      <div class="mbsc-col-md-8 mbsc-col-12 md-col-right">
        <MbscEventcalendar
          :view="dayView"
          :data="myEvents"
          :selectedDate="mySelectedDate"
          @selected-date-change="handleSelectedDateChange"
        />
      </div>
    </div>
  </div>
</template>

<style>
.md-sync-views {
  display: flex;
}

.md-sync-cal {
  width: 350px;
}

.md-sync-list {
  flex: 1;
  border-left: 1px solid #ccc;
}

.demo-synchronized-views,
.md-sync-views,
.md-sync-list {
  height: 100%;
}

@media screen and (max-width: 700px) {
  .md-sync-views {
    display: block;
  }
  .md-sync-cal {
    width: auto;
  }
}
</style>
