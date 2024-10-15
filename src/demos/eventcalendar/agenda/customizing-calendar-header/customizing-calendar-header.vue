<script setup lang="ts">
import {
  getJson,
  MbscButton,
  MbscCalendarNav,
  MbscCalendarToday,
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

const currentDate = ref<Date>(new Date())
const currentView = ref<string>('agenda')
const myEvents = ref<MbscCalendarEvent[]>([])
const myView = ref<MbscEventcalendarView>({ agenda: { type: 'month' } })

function changeView() {
  switch (currentView.value) {
    case 'calendar':
      myView.value = {
        calendar: { type: 'month' }
      }
      break
    case 'agenda':
      myView.value = {
        agenda: { type: 'month' }
      }
      break
  }
}

function prevPage() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

function nextPage() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
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
  <MbscEventcalendar :data="myEvents" :selectedDate="currentDate" :view="myView">
    <template #header>
      <MbscCalendarNav className="mds-custom-header-nav"></MbscCalendarNav>
      <div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-center">
        <MbscButton
          cssClass="mds-custom-header-button"
          icon="material-arrow-back"
          variant="flat"
          @click="prevPage()"
        />
        <MbscCalendarToday />
        <MbscButton
          cssClass="mds-custom-header-button"
          icon="material-arrow-forward"
          variant="flat"
          @click="nextPage()"
        />
      </div>
      <div class="mds-custom-header-switch">
        <MbscSegmentedGroup v-model="currentView" @change="changeView()">
          <MbscSegmented value="agenda" icon="material-view-day" />
          <MbscSegmented value="calendar" icon="calendar" />
        </MbscSegmentedGroup>
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.mds-custom-header-nav {
  width: 180px;
}

.mds-custom-header-button.mbsc-button {
  font-size: 20px;
  height: auto;
  padding: 0;
  margin: 0;
}

.mds-custom-header-switch .mbsc-segmented {
  width: 110px;
  margin-top: 0;
  margin-bottom: 0;
}

.mds-custom-header-switch .mbsc-segmented.mbsc-material,
.mds-custom-header-switch .mbsc-segmented.mbsc-windows {
  padding: 0;
}

.mds-custom-header-switch .mbsc-segmented-button.mbsc-button {
  font-size: 20px;
  height: 32px;
  padding: 0;
}
</style>
