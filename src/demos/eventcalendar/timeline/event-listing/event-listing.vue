<script setup lang="ts">
import {
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscSegmented,
  MbscSegmentedGroup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Event 1',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: 'Event 2',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Event 3',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d-2,9)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Event 4',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Event 5',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Event 6',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,d-3,8)',
    end: 'dyndatetime(y,m,d-3,20)',
    title: 'Event 7',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Event 8',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Event 9',
    resource: 5
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Event 10',
    resource: 5
  },
  {
    start: 'dyndatetime(y,m,d+2,18)',
    end: 'dyndatetime(y,m,d+2,22)',
    title: 'Event 11',
    resource: 5
  },
  {
    start: 'dyndatetime(y,m,d-4,10)',
    end: 'dyndatetime(y,m,d-4,16)',
    title: 'Event 12',
    resource: 6
  },
  {
    start: 'dyndatetime(y,m,d-3,15)',
    end: 'dyndatetime(y,m,d-3,20)',
    title: 'Event 13',
    resource: 6
  }
]

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Resource A',
    color: '#e20000'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#60e81a'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#3ba7ff'
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#e25dd2'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#f1e920'
  },
  {
    id: 6,
    name: 'Resource F',
    color: '#1ac38d'
  }
]

const myView = ref<MbscEventcalendarView>({
  timeline: {
    type: 'month',
    eventList: true
  }
})

const calendarView = ref<string>('month')

function handleViewChange() {
  switch (calendarView.value) {
    case 'workweek':
      myView.value = {
        timeline: {
          type: 'week',
          eventList: true,
          startDay: 1,
          endDay: 5
        }
      }
      break
    case 'week':
      myView.value = {
        timeline: {
          type: 'week',
          eventList: true
        }
      }
      break
    case 'month':
      myView.value = {
        timeline: {
          type: 'month',
          eventList: true
        }
      }
      break
  }
}
</script>

<template>
  <MbscEventcalendar
    cssClass="md-event-listing"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
  >
    <template #header>
      <MbscCalendarNav className="md-event-listing-nav" />
      <div className="md-event-listing-picker">
        <MbscSegmentedGroup v-model="calendarView" @change="handleViewChange">
          <MbscSegmented value="workweek"> Work week </MbscSegmented>
          <MbscSegmented value="week"> Week </MbscSegmented>
          <MbscSegmented value="month"> Month </MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev className="md-event-listing-prev" />
      <MbscCalendarToday className="md-event-listing-today" />
      <MbscCalendarNext className="md-event-listing-next" />
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-event-listing-cont {
  position: relative;
  padding-left: 50px;
}

.md-event-listing-avatar {
  position: absolute;
  max-height: 50px;
  max-width: 50px;
  top: 21px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  left: 20px;
}

.md-event-listing-name {
  font-size: 16px;
}

.md-event-listing-title {
  font-size: 12px;
  margin-top: 5px;
}

.md-event-listing .mbsc-segmented {
  max-width: 350px;
  margin: 0 auto;
  padding: 1px;
}

.md-event-listing-picker {
  flex: 1 0 auto;
}

.md-event-listing-nav {
  width: 200px;
}

/* material header order */

.mbsc-material.md-event-listing-prev {
  order: 1;
}

.mbsc-material.md-event-listing-next {
  order: 2;
}

.mbsc-material.md-event-listing-nav {
  order: 3;
}

.mbsc-material .md-event-listing-picker {
  order: 4;
}

.mbsc-material .md-event-listing-today {
  order: 5;
}

/* windows header order */

.mbsc-windows.md-event-listing-nav {
  order: 1;
}

.mbsc-windows.md-event-listing-prev {
  order: 2;
}

.mbsc-windows.md-event-listing-next {
  order: 3;
}

.mbsc-windows .md-event-listing-picker {
  order: 4;
}

.mbsc-windows .md-event-listing-today {
  order: 5;
}
</style>
