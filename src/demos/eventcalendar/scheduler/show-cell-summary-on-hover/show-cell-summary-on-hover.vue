<script setup lang="ts">
import {
  formatDate,
  MbscEventcalendar,
  MbscPopup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscCellHoverEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-3,8)',
    end: 'dyndatetime(y,m,d-3,11)',
    title: 'Task 1'
  },
  {
    start: 'dyndatetime(y,m,d-2,14)',
    end: 'dyndatetime(y,m,d-2,16)',
    title: 'Task 2'
  },
  {
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,17)',
    title: 'Task 3'
  },
  {
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Task 4'
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Task 5'
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Task 6'
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Task 7'
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Task 8'
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Task 9'
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Task 10'
  },
  {
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,17)',
    title: 'Task 11'
  },
  {
    start: 'dyndatetime(y,m,d+1,18)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Task 12'
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Task 13'
  },
  {
    start: 'dyndatetime(y,m,d+2,15)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: 'Task 14'
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,11)',
    title: 'Task 15'
  },
  {
    start: 'dyndatetime(y,m,d+3,15)',
    end: 'dyndatetime(y,m,d+3,17)',
    title: 'Task 16'
  },
  {
    start: 'dyndatetime(y,m,d+4,9)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Task 17'
  }
])

const myInvalid = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,13)'
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,10)'
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,15)'
  },
  {
    start: 'dyndatetime(y,m,d+1,15)',
    end: 'dyndatetime(y,m,d+1,17)'
  },
  {
    start: '10:00',
    end: '11:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'TU,TH,SA,SU'
    }
  }
])

const myColors = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,14)',
    cssClass: 'mds-cell-summary-color'
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,12)',
    cssClass: 'mds-cell-summary-color'
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,11)',
    cssClass: 'mds-cell-summary-color'
  },
  {
    start: 'dyndatetime(y,m,d+2,14)',
    end: 'dyndatetime(y,m,d+2,17)',
    cssClass: 'mds-cell-summary-color'
  },
  {
    start: '08:00',
    end: '09:00',
    cssClass: 'mds-cell-summary-color',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,FR'
    }
  },
  {
    start: '14:00',
    end: '16:00',
    cssClass: 'mds-cell-summary-color',
    recurring: {
      repeat: 'weekly',
      weekDays: 'TU,TH'
    }
  },
  {
    start: '10:00',
    end: '12:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'FR'
    },
    cssClass: 'mds-cell-summary-color'
  },
  {
    start: '16:00',
    end: '17:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'SU,SA'
    },
    cssClass: 'mds-cell-summary-color'
  }
])

const cellDate = ref<string>('')
const cellEventNr = ref<number>(0)
const cellInvalidNr = ref<number>(0)
const cellColorNr = ref<number>(0)
const isTooltipOpen = ref<boolean>(false)
const tooltipAnchor = ref<HTMLElement | undefined>(undefined)

const myView: MbscEventcalendarView = {
  schedule: {
    type: 'week',
    startTime: '08:00',
    endTime: '18:00',
    timeCellStep: 30
  }
}

// Mobiscroll resource hover events
function handleCellHoverIn(args: MbscCellHoverEvent) {
  const endDate = new Date(args.date)
  endDate.setHours(endDate.getHours() + 1)
  const date = formatDate('DDDD MMM D, YYYY, HA - ', args.date)
  const time = formatDate('HA', endDate)

  cellDate.value = date + time
  cellEventNr.value = args.events ? args.events.length : 0
  cellInvalidNr.value = args.invalids ? args.invalids.length : 0
  cellColorNr.value = args.colors ? args.colors.length : 0

  tooltipAnchor.value = args.target
  isTooltipOpen.value = true
}

function handleCellHoverOut() {
  isTooltipOpen.value = false
}

function handleTooltipClose() {
  isTooltipOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-cell-summary-on-hover"
    :view="myView"
    :data="myEvents"
    :invalid="myInvalid"
    :colors="myColors"
    @cell-hover-in="handleCellHoverIn"
    @cell-hover-out="handleCellHoverOut"
  >
    <template #resource="resource">
      <div class="mbsc-flex">
        <img class="mds-resource-info-avatar" :src="resource.avatar" alt="Avatar" />
        <div class="mds-resource-info-details">
          <div class="mds-resource-info-title">{{ resource.name }}</div>
          <div class="mds-resource-info-profession">{{ resource.profession }}</div>
        </div>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscPopup
    display="anchored"
    :anchor="tooltipAnchor"
    :showOverlay="false"
    :touchUi="false"
    :scrollLock="false"
    :isOpen="isTooltipOpen"
    @close="handleTooltipClose"
  >
    <div class="mds-cell-summary-title">{{ cellDate }}</div>
    <div class="mbsc-flex">
      <div class="mbsc-flex-1-0 mds-cell-summary-item">
        <div class="mbsc-txt-muted">Events</div>
        <div class="mds-cell-summary-content">{{ cellEventNr }}</div>
      </div>
      <div class="mbsc-flex-1-0 mds-cell-summary-item">
        <div class="mbsc-txt-muted">Invalid</div>
        <div class="mds-cell-summary-content">{{ cellInvalidNr }}</div>
      </div>
      <div class="mbsc-flex-1-0 mds-cell-summary-item">
        <div class="mbsc-txt-muted">Colors</div>
        <div class="mds-cell-summary-content">{{ cellColorNr }}</div>
      </div>
    </div>
  </MbscPopup>
</template>

<style>
.mds-cell-summary-on-hover .mbsc-schedule-events.mbsc-ltr {
  right: 20px;
}
.mds-cell-summary-on-hover .mbsc-schedule-events.mbsc-rtl {
  left: 20px;
}
.mds-cell-summary-on-hover .mbsc-schedule-item:hover {
  box-shadow:
    0px 1px 6px 3px rgba(0, 0, 0, 0.2),
    0px 1px 6px 3px rgba(255, 255, 255, 0.2);
}
.mds-cell-summary-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}
.mds-cell-summary-item {
  flex: 1;
}
.mds-cell-summary-content {
  font-weight: 500;
  opacity: 0.8;
  margin-top: 5px;
}
.mds-cell-summary-color {
  background: repeating-linear-gradient(-45deg, #cce9d3, #cce9d3 10px, #c5dfc1 10px, #c5dfc1 20px);
  opacity: 0.5;
}
</style>
