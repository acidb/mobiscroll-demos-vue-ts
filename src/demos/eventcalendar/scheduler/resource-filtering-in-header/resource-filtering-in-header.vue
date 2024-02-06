<script setup lang="ts">
import {
  getJson,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscEventcalendar,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const allEvents = ref<MbscCalendarEvent[]>([])
const filteredEvents = ref<MbscCalendarEvent[]>([])
const selected = ref(['1'])

const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  schedule: {
    type: 'week'
  }
}

function filterEvents() {
  const ev = []
  for (const event of allEvents.value) {
    if (selected.value.find((item) => +item === event.participant)) {
      if (event.participant === 1) {
        event.color = '#328e39'
      } else if (event.participant === 2) {
        event.color = '#00aabb'
      } else if (event.participant === 3) {
        event.color = '#ea72c0'
      }
      ev.push(event)
    }
  }
  filteredEvents.value = ev
}

function filter(value: number) {
  filterEvents()
  toastMessage.value =
    (selected.value.find((item) => +item === value) ? 'Showing ' : 'Hiding ') +
    document.querySelector('.md-header-filter-name-' + value)!.textContent +
    ' events'
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/custom-events/',
    (events: MbscCalendarEvent[]) => {
      allEvents.value = events
      filterEvents()
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar className="md-custom-header-filtering" :view="myView" :data="filteredEvents">
    <template #header>
      <MbscCalendarNav className="md-header-filter-nav" />
      <div class="md-header-filter-controls">
        <MbscSegmentedGroup select="multiple" v-model="selected">
          <MbscSegmented value="1" @change="filter(1)">
            <img class="md-header-filter-img" src="https://img.mobiscroll.com/demos/m1.png" />
            <span class="md-header-filter-name md-header-filter-name-1">Barry</span>
          </MbscSegmented>
          <MbscSegmented value="2" @change="filter(2)">
            <img class="md-header-filter-img" src="https://img.mobiscroll.com/demos/f1.png" />
            <span class="md-header-filter-name md-header-filter-name-2">Hortense</span>
          </MbscSegmented>
          <MbscSegmented value="3" @change="filter(3)">
            <img class="md-header-filter-img" src="https://img.mobiscroll.com/demos/m2.png" />
            <span class="md-header-filter-name md-header-filter-name-3">Carl</span>
          </MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev className="md-header-filter-prev" />
      <MbscCalendarNext className="md-header-filter-next" />
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-header-filter-controls {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
}

.md-custom-header-filtering .mbsc-segmented {
  max-width: 400px;
  margin: 0 auto;
  flex: 1 0 auto;
}

.md-header-filter-img {
  width: 25px;
}

.md-header-filter-name {
  margin-left: 10px;
}

.md-header-filter-nav {
  width: 200px;
}

.md-header-filter-controls .mbsc-segmented-button.mbsc-selected {
  color: #fff;
}

.md-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-selected.mbsc-material,
.md-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-selected.mbsc-windows,
.md-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-segmented-selectbox-inner {
  background: #328e39;
}

.md-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-material,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-windows,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-segmented-selectbox-inner {
  background: #00aabb;
}

.md-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-material,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-windows,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-segmented-selectbox-inner {
  background: #ea72c0;
}
</style>
