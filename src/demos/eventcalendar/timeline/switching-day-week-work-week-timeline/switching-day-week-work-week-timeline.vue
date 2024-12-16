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
const calendarView = ref<string>('week')
const isToastOpen = ref<boolean>(false)

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Ryan',
    color: '#ff0101',
    title: 'Cloud System Engineer',
    img: 'https://img.mobiscroll.com/demos/m1.png'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#239a21',
    title: 'Help Desk Specialist',
    img: 'https://img.mobiscroll.com/demos/f1.png'
  },
  {
    id: 3,
    name: 'John',
    color: '#8f1ed6',
    title: 'Application Developer',
    img: 'https://img.mobiscroll.com/demos/m2.png'
  },
  {
    id: 4,
    name: 'Mark',
    color: '#01adff',
    title: 'Network Administrator',
    img: 'https://img.mobiscroll.com/demos/m3.png'
  },
  {
    id: 5,
    name: 'Sharon',
    color: '#d8ca1a',
    title: 'Data Quality Manager',
    img: 'https://img.mobiscroll.com/demos/f2.png'
  }
]

const myView = ref<MbscEventcalendarView>({
  timeline: {
    type: 'week'
  }
})

const myInvalid = [
  {
    start: '00:00',
    end: '06:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    }
  },
  {
    start: '20:00',
    end: '23:59',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    }
  },
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'SA,SU'
    }
  }
]

function handleViewChange() {
  switch (calendarView.value) {
    case 'day':
      myView.value = {
        timeline: {
          type: 'day'
        }
      }
      break
    case 'workweek':
      myView.value = {
        timeline: {
          type: 'week',
          startDay: 1,
          endDay: 5
        }
      }
      break
    case 'week':
      myView.value = {
        timeline: {
          type: 'week'
        }
      }
      break
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    cssClass="md-switching-timeline-view-cont"
    :view="myView"
    :data="myEvents"
    :invalid="myInvalid"
    :resources="myResources"
    @event-create-failed="isToastOpen = true"
    @event-update-failed="isToastOpen = true"
  >
    <template #header>
      <MbscCalendarNav className="md-work-week-nav" />
      <div class="md-work-week-picker">
        <MbscSegmentedGroup v-model="calendarView" @change="handleViewChange">
          <MbscSegmented value="day"> Day </MbscSegmented>
          <MbscSegmented value="workweek"> Work week </MbscSegmented>
          <MbscSegmented value="week"> Week </MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev className="md-work-week-prev" />
      <MbscCalendarToday className="md-work-week-today" />
      <MbscCalendarNext className="md-work-week-next" />
    </template>
    <template #resource="resource">
      <div class="md-work-week-cont">
        <div class="md-work-week-name">{{ resource.name }}</div>
        <div class="md-work-week-title">{{ resource.title }}</div>
        <img class="md-work-week-avatar" :src="resource.img" />
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast
    message="Can't schedule outside of working hours"
    :isOpen="isToastOpen"
    @close="isToastOpen = false"
  />
</template>

<style>
.md-work-week-cont {
  position: relative;
  padding-left: 50px;
}

.md-work-week-avatar {
  position: absolute;
  max-height: 50px;
  max-width: 50px;
  top: 21px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  left: 20px;
}

.md-work-week-name {
  font-size: 16px;
}

.md-work-week-title {
  font-size: 12px;
  margin-top: 5px;
}

.md-switching-timeline-view-cont .mbsc-segmented {
  max-width: 350px;
  margin: 0 auto;
  padding: 1px;
}

.md-work-week-picker {
  flex: 1 0 auto;
}

.md-work-week-nav {
  width: 200px;
}

.md-switching-timeline-view-cont .mbsc-timeline-resource {
  display: flex;
  align-items: center;
}

.md-switching-timeline-view-cont .mbsc-timeline-resource-col {
  width: 205px;
}

/* material header order */

.mbsc-material.md-work-week-prev {
  order: 1;
}

.mbsc-material.md-work-week-next {
  order: 2;
}

.mbsc-material.md-work-week-nav {
  order: 3;
}

.mbsc-material .md-work-week-picker {
  order: 4;
}

.mbsc-material .md-work-week-today {
  order: 5;
}

/* windows header order */

.mbsc-windows.md-work-week-nav {
  order: 1;
}

.mbsc-windows.md-work-week-prev {
  order: 2;
}

.mbsc-windows.md-work-week-next {
  order: 3;
}

.mbsc-windows .md-work-week-picker {
  order: 4;
}

.mbsc-windows .md-work-week-today {
  order: 5;
}
</style>
