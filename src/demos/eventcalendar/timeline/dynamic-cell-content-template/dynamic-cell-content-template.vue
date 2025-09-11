<script setup lang="ts">
import { MbscEventcalendar, MbscToast, setOptions } from '@mobiscroll/vue'
import type {
  MbscCalendarCellData,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscNewEventData,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const iconMap: Record<string, string> = {
  Review: 'calendar',
  Demo: 'play',
  Kickoff: 'flag',
  Strategy: 'map',
  Collab: 'bubbles',
  Update: 'upload',
  Discussion: 'bubble',
  Planning: 'pencil',
  Retrospect: 'history',
  Onboard: 'user4'
}
const titles = Object.keys(iconMap)
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')

const myEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    resource: 1,
    title: 'Review',
    start: 'dyndatetime(y,m,d+7,0,0)',
    end: 'dyndatetime(y,m,d+7,2,0)'
  },
  {
    id: 2,
    resource: 1,
    title: 'Demo',
    start: 'dyndatetime(y,m,d+7,0,0)',
    end: 'dyndatetime(y,m,d+7,2,0)'
  },
  {
    id: 3,
    resource: 1,
    title: 'Kickoff',
    start: 'dyndatetime(y,m,d+7,0,0)',
    end: 'dyndatetime(y,m,d+7,2,0)'
  },
  {
    id: 4,
    resource: 4,
    title: 'Strategy',
    start: 'dyndatetime(y,m,d+7,0,0)',
    end: 'dyndatetime(y,m,d+7,2,0)'
  },
  {
    id: 5,
    resource: 4,
    title: 'Collab',
    start: 'dyndatetime(y,m,d+7,0,0)',
    end: 'dyndatetime(y,m,d+7,2,0)'
  },
  {
    id: 6,
    resource: 4,
    title: 'Update',
    start: 'dyndatetime(y,m,d+7,0,0)',
    end: 'dyndatetime(y,m,d+7,2,0)'
  },
  {
    id: 7,
    resource: 2,
    title: 'Discussion',
    start: 'dyndatetime(y,m,d+7,0,0)',
    end: 'dyndatetime(y,m,d+7,2,0)'
  },
  {
    id: 8,
    resource: 2,
    title: 'Planning',
    start: 'dyndatetime(y,m,d+6,0,0)',
    end: 'dyndatetime(y,m,d+6,2,0)'
  },
  {
    id: 9,
    resource: 2,
    title: 'Retrospect',
    start: 'dyndatetime(y,m,d+6,0,0)',
    end: 'dyndatetime(y,m,d+6,2,0)'
  },
  {
    id: 10,
    resource: 2,
    title: 'Demo',
    start: 'dyndatetime(y,m,d+6,0,0)',
    end: 'dyndatetime(y,m,d+6,2,0)'
  },
  {
    id: 11,
    resource: 3,
    title: 'Collab',
    start: 'dyndatetime(y, m, d + 6, 0, 0)',
    end: 'dyndatetime(y, m, d + 6, 2, 0)'
  },
  {
    id: 12,
    resource: 3,
    title: 'Strategy',
    start: 'dyndatetime(y, m, d + 6, 0, 0)',
    end: 'dyndatetime(y, m, d + 6, 2, 0)'
  },
  {
    id: 13,
    resource: 3,
    title: 'Update',
    start: 'dyndatetime(y, m, d + 6, 0, 0)',
    end: 'dyndatetime(y, m, d + 6, 2, 0)'
  },
  {
    id: 14,
    resource: 4,
    title: 'Kickoff',
    start: 'dyndatetime(y, m, d + 6, 0, 0)',
    end: 'dyndatetime(y, m, d + 6, 2, 0)'
  },
  {
    id: 15,
    resource: 2,
    title: 'Demo',
    start: 'dyndatetime(y, m, d - 1, 0, 0)',
    end: 'dyndatetime(y, m, d - 1, 2, 0)'
  },
  {
    id: 16,
    resource: 2,
    title: 'Planning',
    start: 'dyndatetime(y, m, d - 1, 0, 0)',
    end: 'dyndatetime(y, m, d - 1, 2, 0)'
  },
  {
    id: 17,
    resource: 3,
    title: 'Discussion',
    start: 'dyndatetime(y, m, d - 1, 0, 0)',
    end: 'dyndatetime(y, m, d - 1, 2, 0)'
  },
  {
    id: 18,
    resource: 3,
    title: 'Retrospect',
    start: 'dyndatetime(y, m, d - 1, 0, 0)',
    end: 'dyndatetime(y, m, d - 1, 2, 0)'
  },
  {
    id: 19,
    resource: 3,
    title: 'Strategy',
    start: 'dyndatetime(y, m, d - 1, 0, 0)',
    end: 'dyndatetime(y, m, d - 1, 2, 0)'
  },
  {
    id: 20,
    resource: 1,
    title: 'Onboard',
    start: 'dyndatetime(y, m, d - 1, 0, 0)',
    end: 'dyndatetime(y, m, d - 1, 2, 0)'
  },
  {
    id: 21,
    resource: 1,
    title: 'Collab',
    start: 'dyndatetime(y, m, d - 1, 0, 0)',
    end: 'dyndatetime(y, m, d - 1, 2, 0)'
  },
  {
    id: 22,
    resource: 1,
    title: 'Demo',
    start: 'dyndatetime(y, m, d, 0, 0)',
    end: 'dyndatetime(y, m, d, 2, 0)'
  },
  {
    id: 23,
    resource: 1,
    title: 'Planning',
    start: 'dyndatetime(y, m, d, 0, 0)',
    end: 'dyndatetime(y, m, d, 2, 0)'
  },
  {
    id: 24,
    resource: 1,
    title: 'Update',
    start: 'dyndatetime(y, m, d, 0, 0)',
    end: 'dyndatetime(y, m, d, 2, 0)'
  },
  {
    id: 25,
    resource: 2,
    title: 'Strategy',
    start: 'dyndatetime(y, m, d, 0, 0)',
    end: 'dyndatetime(y, m, d, 2, 0)'
  },
  {
    id: 26,
    resource: 2,
    title: 'Demo',
    start: 'dyndatetime(y, m, d, 0, 0)',
    end: 'dyndatetime(y, m, d, 2, 0)'
  },
  {
    id: 27,
    resource: 3,
    title: 'Kickoff',
    start: 'dyndatetime(y, m, d, 0, 0)',
    end: 'dyndatetime(y, m, d, 2, 0)'
  },
  {
    id: 28,
    resource: 3,
    title: 'Collab',
    start: 'dyndatetime(y, m, d + 1, 0, 0)',
    end: 'dyndatetime(y, m, d + 1, 2, 0)'
  },
  {
    id: 29,
    resource: 3,
    title: 'Demo',
    start: 'dyndatetime(y, m, d + 1, 0, 0)',
    end: 'dyndatetime(y, m, d + 1, 2, 0)'
  },
  {
    id: 30,
    resource: 3,
    title: 'Strategy',
    start: 'dyndatetime(y, m, d + 1, 0, 0)',
    end: 'dyndatetime(y, m, d + 1, 2, 0)'
  },
  {
    id: 31,
    resource: 3,
    title: 'Demo',
    start: 'dyndatetime(y, m, d + 1, 0, 0)',
    end: 'dyndatetime(y, m, d + 1, 2, 0)'
  },
  {
    id: 32,
    resource: 4,
    title: 'Retrospect',
    start: 'dyndatetime(y, m, d + 3, 0, 0)',
    end: 'dyndatetime(y, m, d + 3, 2, 0)'
  },
  {
    id: 33,
    resource: 4,
    title: 'Demo',
    start: 'dyndatetime(y, m, d + 3, 0, 0)',
    end: 'dyndatetime(y, m, d + 3, 2, 0)'
  },
  {
    id: 34,
    resource: 4,
    title: 'Retrospect',
    start: 'dyndatetime(y, m, d + 3, 0, 0)',
    end: 'dyndatetime(y, m, d + 3, 2, 0)'
  },
  {
    id: 35,
    resource: 4,
    title: 'Onboard',
    start: 'dyndatetime(y, m, d + 3, 0, 0)',
    end: 'dyndatetime(y, m, d + 3, 2, 0)'
  },
  {
    id: 36,
    resource: 1,
    title: 'Discussion',
    start: 'dyndatetime(y, m, d + 3, 0, 0)',
    end: 'dyndatetime(y, m, d + 3, 2, 0)'
  },
  {
    id: 37,
    resource: 3,
    title: 'Collab',
    start: 'dyndatetime(y, m, d + 3, 0, 0)',
    end: 'dyndatetime(y, m, d + 3, 2, 0)'
  },
  {
    id: 38,
    resource: 3,
    title: 'Update',
    start: 'dyndatetime(y, m, d + 3, 0, 0)',
    end: 'dyndatetime(y, m, d + 3, 2, 0)'
  },
  {
    id: 39,
    resource: 3,
    title: 'Planning',
    start: 'dyndatetime(y, m, d + 3, 0, 0)',
    end: 'dyndatetime(y, m, d + 3, 2, 0)'
  },
  {
    id: 40,
    resource: 1,
    title: 'Planning',
    start: 'dyndatetime(y, m, d + 5, 0, 0)',
    end: 'dyndatetime(y, m, d + 5, 2, 0)'
  },
  {
    id: 41,
    resource: 1,
    title: 'Update',
    start: 'dyndatetime(y, m, d + 5, 0, 0)',
    end: 'dyndatetime(y, m, d + 5, 2, 0)'
  },
  {
    id: 42,
    resource: 2,
    title: 'Strategy',
    start: 'dyndatetime(y, m, d + 5, 0, 0)',
    end: 'dyndatetime(y, m, d + 5, 2, 0)'
  },
  {
    id: 43,
    resource: 4,
    title: 'Onboard',
    start: 'dyndatetime(y, m, d + 5, 0, 0)',
    end: 'dyndatetime(y, m, d + 5, 2, 0)'
  },
  {
    id: 44,
    resource: 4,
    title: 'Planning',
    start: 'dyndatetime(y, m, d + 5, 0, 0)',
    end: 'dyndatetime(y, m, d + 5, 2, 0)'
  },
  {
    id: 45,
    resource: 4,
    title: 'Retrospect',
    start: 'dyndatetime(y, m, d + 5, 0, 0)',
    end: 'dyndatetime(y, m, d + 5, 2, 0)'
  },
  {
    id: 46,
    resource: 3,
    title: 'Demo',
    start: 'dyndatetime(y, m, d + 5, 0, 0)',
    end: 'dyndatetime(y, m, d + 5, 2, 0)'
  },
  {
    id: 47,
    resource: 3,
    title: 'Demo',
    start: 'dyndatetime(y, m, d + 5, 0, 0)',
    end: 'dyndatetime(y, m, d + 5, 2, 0)'
  },
  {
    id: 48,
    resource: 2,
    title: 'Demo',
    start: 'dyndatetime(y, m, d + 4, 0, 0)',
    end: 'dyndatetime(y, m, d + 4, 2, 0)'
  },
  {
    id: 49,
    resource: 2,
    title: 'Demo',
    start: 'dyndatetime(y, m, d + 4, 0, 0)',
    end: 'dyndatetime(y, m, d + 4, 2, 0)'
  },
  {
    id: 50,
    resource: 1,
    title: 'Discussion',
    start: 'dyndatetime(y, m, d + 4, 0, 0)',
    end: 'dyndatetime(y, m, d + 4, 2, 0)'
  },
  {
    id: 51,
    resource: 2,
    title: 'Discussion',
    start: 'dyndatetime(y, m, d + 2, 0, 0)',
    end: 'dyndatetime(y, m, d + 2, 2, 0)'
  },
  {
    id: 52,
    resource: 3,
    title: 'Retrospect',
    start: 'dyndatetime(y, m, d + 10, 0, 0)',
    end: 'dyndatetime(y, m, d + 10, 2, 0)'
  },
  {
    id: 53,
    resource: 1,
    title: 'Retrospect',
    start: 'dyndatetime(y, m, d + 10, 0, 0)',
    end: 'dyndatetime(y, m, d + 10, 2, 0)'
  },
  {
    id: 54,
    resource: 3,
    title: 'Retrospect',
    start: 'dyndatetime(y, m, d + 10, 0, 0)',
    end: 'dyndatetime(y, m, d + 10, 2, 0)'
  },
  {
    id: 55,
    resource: 3,
    title: 'Strategy',
    start: 'dyndatetime(y, m, d + 11, 0, 0)',
    end: 'dyndatetime(y, m, d + 11, 2, 0)'
  },
  {
    id: 56,
    resource: 2,
    title: 'Kickoff',
    start: 'dyndatetime(y, m, d + 11, 0, 0)',
    end: 'dyndatetime(y, m, d + 11, 2, 0)'
  },
  {
    id: 57,
    resource: 2,
    title: 'Kickoff',
    start: 'dyndatetime(y, m, d + 11, 0, 0)',
    end: 'dyndatetime(y, m, d + 11, 2, 0)'
  },
  {
    id: 58,
    resource: 2,
    title: 'Update',
    start: 'dyndatetime(y, m, d + 11, 0, 0)',
    end: 'dyndatetime(y, m, d + 11, 2, 0)'
  },
  {
    id: 59,
    resource: 4,
    title: 'Demo',
    start: 'dyndatetime(y, m, d + 11, 0, 0)',
    end: 'dyndatetime(y, m, d + 11, 2, 0)'
  },
  {
    id: 60,
    resource: 4,
    title: 'Collab',
    start: 'dyndatetime(y, m, d + 11, 0, 0)',
    end: 'dyndatetime(y, m, d + 11, 2, 0)'
  },
  {
    id: 61,
    resource: 4,
    title: 'Collab',
    start: 'dyndatetime(y, m, d + 11, 0, 0)',
    end: 'dyndatetime(y, m, d + 11, 2, 0)'
  },
  {
    id: 62,
    resource: 4,
    title: 'Discussion',
    start: 'dyndatetime(y, m, d + 11, 0, 0)',
    end: 'dyndatetime(y, m, d + 11, 2, 0)'
  },
  {
    id: 63,
    resource: 1,
    title: 'Planning',
    start: 'dyndatetime(y, m, d + 12, 0, 0)',
    end: 'dyndatetime(y, m, d + 12, 2, 0)'
  },
  {
    id: 64,
    resource: 1,
    title: 'Retrospect',
    start: 'dyndatetime(y, m, d + 12, 0, 0)',
    end: 'dyndatetime(y, m, d + 12, 2, 0)'
  },
  {
    id: 65,
    resource: 1,
    title: 'Review',
    start: 'dyndatetime(y, m, d + 12, 0, 0)',
    end: 'dyndatetime(y, m, d + 12, 2, 0)'
  },
  {
    id: 66,
    resource: 3,
    title: 'Collab',
    start: 'dyndatetime(y, m, d + 12, 0, 0)',
    end: 'dyndatetime(y, m, d + 12, 2, 0)'
  },
  {
    id: 67,
    resource: 3,
    title: 'Demo',
    start: 'dyndatetime(y, m, d + 12, 0, 0)',
    end: 'dyndatetime(y, m, d + 12, 2, 0)'
  },
  {
    id: 68,
    resource: 3,
    title: 'Collab',
    start: 'dyndatetime(y, m, d + 12, 0, 0)',
    end: 'dyndatetime(y, m, d + 12, 2, 0)'
  },
  {
    id: 69,
    resource: 2,
    title: 'Strategy',
    start: 'dyndatetime(y, m, d + 12, 0, 0)',
    end: 'dyndatetime(y, m, d + 12, 2, 0)'
  }
])

const myResources: MbscResource[] = [
  { id: 1, name: 'Resource A' },
  { id: 2, name: 'Resource B' },
  { id: 3, name: 'Resource C' },
  { id: 4, name: 'Resource D' }
]

const myView: MbscEventcalendarView = {
  timeline: {
    endDay: 5,
    eventList: true,
    type: 'month',
    resolutionHorizontal: 'day',
    startDay: 1
  }
}

function getHours(events: MbscCalendarEvent[] = []) {
  const total = events.reduce((s, ev) => {
    const st = new Date(ev.start as Date).getTime()
    const en = new Date(ev.end as Date).getTime()
    return s + (en - st) / 36e5
  }, 0)
  return Math.round(total)
}

function getBadgeClass(events: MbscCalendarEvent[] = []) {
  const hours = getHours(events)
  const map: Record<number, string> = { 2: 'light', 4: 'medium', 6: 'semi', 8: 'full' }
  return 'mds-timeline-cell-content-badge-' + (map[hours] || 'default')
}

function getIcons(events: Array<{ title?: string }> = []) {
  const seen = new Set<string>()
  const icons: string[] = []

  for (const ev of events) {
    const t = ev.title
    if (!t) continue

    const name = iconMap[t]
    if (name && !seen.has(t)) {
      seen.add(t)
      icons.push(name)
    }
  }
  return icons
}

function handleAddClick(cell: MbscCalendarCellData) {
  if (cell.events.length >= 4) {
    toastMessage.value = 'Task limit reached'
    isToastOpen.value = true
    return
  }

  myEvents.value = [
    ...myEvents.value,
    {
      title: titles[Math.floor(Math.random() * titles.length)],
      start: cell.date,
      end: new Date(cell.date.getTime() + 2 * 3600000),
      resource: cell.resource.id
    }
  ]
}

function extendDefaultEvent(args: MbscNewEventData) {
  return {
    title: titles[Math.floor(Math.random() * titles.length)],
    end: new Date(args.start.getTime() + 2 * 3600000)
  }
}
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-timeline-cell-content"
    :clickToCreate="false"
    :data="myEvents"
    :dragToCreate="false"
    :dragToMove="false"
    :dragToResize="false"
    :extendDefaultEvent="extendDefaultEvent"
    :resources="myResources"
    :view="myView"
  >
    <template #cell="cell">
      <div :class="['mds-timeline-cell-content-badge', getBadgeClass(cell.events)]">
        {{ getHours(cell.events) }}h / 8h
      </div>

      <button class="mds-timeline-cell-content-add" @click.stop="handleAddClick(cell)">+</button>

      <div class="mds-timeline-cell-icons">
        <i
          v-for="icon in getIcons(cell.events)"
          :key="icon"
          :class="['mbsc-font-icon', 'mds-timeline-cell-icon', 'mbsc-icon-' + icon]"
        />
      </div>
    </template>

    <template #scheduleEventContent="{ title, startDate, endDate }">
      <div>{{ title }} - {{ Math.round((endDate - startDate) / 36e5) }}h</div>
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-timeline-cell-content .mbsc-timeline-events {
  top: 25px;
}

.mds-timeline-cell-content .mbsc-timeline-row-gutter {
  height: 55px;
}

.mds-timeline-cell-content .mbsc-timeline-column {
  width: 110px;
}

.mds-timeline-cell-content-badge {
  position: relative;
  top: 6px;
  left: 4px;
  display: inline-block;
  padding: 1px 4px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 12px;
  max-width: 80px;
  color: black;
  background: #f9f9f9;
  overflow: hidden;
  z-index: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

.mds-timeline-cell-content-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: skewX(-15deg);
  z-index: -1;
}

.mds-timeline-cell-content-badge-light::before {
  width: 25%;
  background: #ff9c9c;
}

.mds-timeline-cell-content-badge-medium::before {
  width: 50%;
  background: #ffcf9f;
}

.mds-timeline-cell-content-badge-semi::before {
  width: 75%;
  background: #fff4a3;
}

.mds-timeline-cell-content-badge-full::before {
  width: 100%;
  background: #a3e4a1;
}

.mds-timeline-cell-content-add {
  opacity: 0;
  position: absolute;
  inset: 6px 4px auto auto;
  width: 17px;
  height: 17px;
  line-height: 13px;
  padding: 0;
  padding-bottom: 4px;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
  background: linear-gradient(135deg, rgb(73, 73, 73), rgb(22, 21, 21));
  transition: transform 0.2s ease;
}

.mbsc-timeline-column:hover .mds-timeline-cell-content-add {
  opacity: 1;
  pointer-events: auto;
}

.mds-timeline-cell-content-add:hover {
  outline: 3px solid rgba(140, 140, 140, 0.5);
}

.mds-timeline-cell-icons {
  position: absolute;
  inset: auto auto 4px auto;
}

.mds-timeline-cell-icon {
  text-align: center;
  padding: 2px 4px;
  margin: 0 3px;
  line-height: 17px !important;
  color: #000;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 13px;
}
</style>
