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

const filteredEvents = ref<MbscCalendarEvent[]>([])
const myEvents = ref<MbscCalendarEvent[]>([])
const selectedResources = ref([1])
const isToastOpen = ref(false)
const toastMessage = ref('')

const myView: MbscEventcalendarView = { schedule: { type: 'week' } }

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Barry',
    color: '#328e39',
    img: 'https://img.mobiscroll.com/demos/m1.png'
  },
  {
    id: 2,
    name: 'Hortense',
    color: '#00aabb',
    img: 'https://img.mobiscroll.com/demos/f1.png'
  },
  {
    id: 3,
    name: 'Carl',
    color: '#ea72c0',
    img: 'https://img.mobiscroll.com/demos/m2.png'
  }
]

function handleChange(ev: Event) {
  const target = ev.target as HTMLInputElement
  const value = +target.value
  const checked = target.checked
  const resource = myResources.find((r) => r.id === value)

  filteredEvents.value = myEvents.value.filter(
    (e) => selectedResources.value.indexOf(e.participant) !== -1
  )
  toastMessage.value =
    (checked ? 'Showing ' : 'Hiding ') + (resource ? resource.name : '') + ' events'
  isToastOpen.value = true
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/custom-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events.map((e) => {
        e.color = myResources.find((r) => r.id === e.participant)!.color
        return e
      })
      filteredEvents.value = myEvents.value.filter(
        (e) => selectedResources.value.indexOf(e.participant) !== -1
      )
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    :clickToCreate="false"
    :dragToCreate="false"
    :dragToMove="true"
    :dragToResize="true"
    :data="filteredEvents"
    :view="myView"
  >
    <template #header>
      <MbscCalendarNav class="mds-header-filter-nav" />
      <div class="mds-header-filter mbsc-flex-1-0">
        <MbscSegmentedGroup select="multiple" v-model="selectedResources" @change="handleChange">
          <MbscSegmented
            v-for="res in myResources"
            :cssClass="'mds-header-filter-' + res.id"
            :key="res.id"
            :value="res.id"
          >
            <img class="mds-header-filter-img" :alt="res.name" :src="res.img" />
            <span class="mds-header-filter-name"> {{ res.name }}</span>
          </MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev className="mds-header-filter-prev" />
      <MbscCalendarToday className="mds-header-filter-today" />
      <MbscCalendarNext className="mds-header-filter-next" />
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-header-filter-nav {
  width: 180px;
}

.mds-header-filter-img {
  width: 25px;
}

.mds-header-filter-name {
  margin-left: 10px;
}

.mds-header-filter .mbsc-segmented {
  max-width: 400px;
  margin: 0 auto;
}

.mds-header-filter .mbsc-segmented-button.mbsc-selected {
  color: #fff;
}

.mds-header-filter-1 .mbsc-button.mbsc-selected.mbsc-material,
.mds-header-filter-1 .mbsc-button.mbsc-selected.mbsc-windows,
.mds-header-filter-1 .mbsc-segmented-selectbox-inner {
  background: #328e39;
}

.mds-header-filter-2 .mbsc-button.mbsc-selected.mbsc-material,
.mds-header-filter-2 .mbsc-button.mbsc-selected.mbsc-windows,
.mds-header-filter-2 .mbsc-segmented-selectbox-inner {
  background: #00aabb;
}

.mds-header-filter-3 .mbsc-button.mbsc-selected.mbsc-material,
.mds-header-filter-3 .mbsc-button.mbsc-selected.mbsc-windows,
.mds-header-filter-3 .mbsc-segmented-selectbox-inner {
  background: #ea72c0;
}

.mbsc-material .mds-header-filter-prev {
  order: 1;
}

.mbsc-material .mds-header-filter-next {
  order: 2;
}

.mbsc-material .mds-header-filter {
  order: 3;
}

.mbsc-material .mds-header-filter-today {
  order: 4;
}
</style>
