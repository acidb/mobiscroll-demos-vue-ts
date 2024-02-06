<script setup lang="ts">
import {
  getJson,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'

import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const filteredEvents = ref<MbscCalendarEvent[]>([])
const selected = ref<string[]>(['1'])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
const myResources: MbscResource[] = [
  {
    id: '1',
    name: 'Barry',
    color: '#328e39',
    img: 'https://img.mobiscroll.com/demos/m1.png',
    checked: true
  },
  {
    id: '2',
    name: 'Hortense',
    color: '#00aabb',
    img: 'https://img.mobiscroll.com/demos/f1.png',
    checked: false
  },
  {
    id: '3',
    name: 'Carl',
    color: '#ea72c0',
    img: 'https://img.mobiscroll.com/demos/m2.png',
    checked: false
  }
]

const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}

function handleToastClose() {
  isToastOpen.value = false
}

function filterEvents() {
  const evs = []
  for (const value of myEvents.value) {
    const item = value
    if (selected.value.indexOf('' + item.resource) > -1) {
      evs.push(item)
    }
  }
  filteredEvents.value = evs
}

function filter(ev: any) {
  const value = ev.target.value
  const checked = ev.target.checked
  const name = document.querySelector('.md-header-filter-name-' + value)

  filterEvents()
  toastMessage.value =
    (checked ? 'Showing ' : 'Hiding ') + (name ? name.textContent : '') + ' events'
  isToastOpen.value = true
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/filter-resource-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
      filterEvents()
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    cssClass="md-custom-header-filtering"
    :view="myView"
    :data="filteredEvents"
    :resources="myResources"
  >
    <template #header>
      <MbscCalendarNav class="md-header-filter-nav" />
      <div class="md-header-filter-controls">
        <MbscSegmentedGroup select="multiple" v-model="selected" @change="filter">
          <MbscSegmented v-for="res in myResources" :value="res.id" :key="res.id">
            <img class="md-header-filter-img" :src="res.img" />
            <span :class="'md-header-filter-name md-header-filter-name-' + res.id">
              {{ res.name }}
            </span>
          </MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev className="md-header-filter-prev" />
      <MbscCalendarToday className="md-header-filter-today" />
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
