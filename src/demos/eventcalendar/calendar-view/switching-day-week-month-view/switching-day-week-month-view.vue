<script setup lang="ts">
import {
  getJson,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscEventcalendar,
  MbscSegmented,
  MbscSegmentedGroup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myView = ref<MbscEventcalendarView>({
  calendar: { type: 'month' },
  agenda: { type: 'month' }
})

const view = ref<string>('month')

function changeView() {
  setTimeout(() => {
    switch (view.value) {
      case 'month':
        myView.value = {
          calendar: { type: 'month' },
          agenda: { type: 'month' }
        }
        break
      case 'week':
        myView.value = {
          calendar: { type: 'week' },
          agenda: { type: 'week' }
        }
        break
      case 'day':
        myView.value = {
          agenda: { type: 'day' }
        }
        break
    }
  })
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
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents">
    <template #header>
      <MbscCalendarNav />
      <div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-center">
        <MbscSegmentedGroup v-model="view" @change="changeView()">
          <MbscSegmented value="month" icon="material-event-note"></MbscSegmented>
          <MbscSegmented value="week" icon="material-date-range"></MbscSegmented>
          <MbscSegmented value="day" icon="material-view-day"></MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev cssClass="cal-header-prev" />
      <MbscCalendarNext cssClass="cal-header-next" />
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-switching-view-cont {
  height: 100%;
}

.md-switching-view-cont .mbsc-segmented {
  margin: 0;
}

.md-switching-view-cont .mbsc-segmented.mbsc-material,
.md-switching-view-cont .mbsc-segmented.mbsc-windows {
  padding: 0;
}

.md-switching-view-cont .mbsc-segmented .mbsc-segmented-button {
  padding: 0 1px;
}

.md-switching-view-cont .mbsc-segmented .mbsc-icon {
  font-size: 20px;
}

.md-switching-view-cont .mbsc-segmented-button.mbsc-windows {
  border: 0;
}

.cal-header-picker {
  -webkit-flex: 1 0 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.cal-header-nav {
  width: 165px;
}

.cal-header-nav .mbsc-calendar-title.mbsc-material {
  font-size: 16px;
}
</style>
