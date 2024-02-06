<script setup lang="ts">
import { formatDate, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventUpdateEvent,
  MbscResource,
  MbscSlot
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const staff = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Ryan',
    color: '#e20000',
    title: 'Cloud System Engineer',
    img: 'https://img.mobiscroll.com/demos/m1.png'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#60e81a',
    title: 'Help Desk Specialist',
    img: 'https://img.mobiscroll.com/demos/f1.png'
  },
  {
    id: 3,
    name: 'John',
    color: '#3ba7ff',
    title: 'Application Developer',
    img: 'https://img.mobiscroll.com/demos/m2.png'
  }
])

const shifts = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,13)',
    title: '07:00 - 13:00',
    resource: 2,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,13)',
    title: '07:00 - 13:00',
    resource: 3,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,13)',
    title: '07:00 - 13:00',
    resource: 6,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: '07:00 - 13:00',
    resource: 1,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: '07:00 - 13:00',
    resource: 2,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: '12:00 - 18:00',
    resource: 3,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,13)',
    title: '07:00 - 13:00',
    resource: 1,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,13)',
    title: '07:00 - 13:00',
    resource: 3,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,18)',
    title: '12:00 - 18:00',
    resource: 2,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: '12:00 - 18:00',
    resource: 2,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,13)',
    title: '07:00 - 13:00',
    resource: 1,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+2,12)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: '12:00 - 18:00',
    resource: 2,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,12)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: '12:00 - 18:00',
    resource: 3,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+3,7)',
    end: 'dyndatetime(y,m,d+3,13)',
    title: '07:00 - 13:00',
    resource: 1,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+3,12)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: '12:00 - 18:00',
    resource: 3,
    slot: 2
  }
])

const myColors: MbscCalendarColor[] = [
  {
    background: '#a5ceff4d',
    slot: 1,
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    }
  },
  {
    background: '#f7f7bb4d',
    slot: 2,
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    }
  }
]

const mySlots: MbscSlot[] = [
  {
    id: 1,
    name: 'Morning'
  },
  {
    id: 2,
    name: 'Afternoon'
  }
]

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    eventList: true,
    startDay: 1,
    endDay: 5
  }
}

function handleEventUpdate(args: MbscEventUpdateEvent) {
  const event = args.event
  const index = shifts.value.findIndex((x) => x.id === event.id)
  const newShifts = [...shifts.value]

  newShifts.splice(index, 1, {
    ...event,
    title: event.slot === 1 ? '07:00 - 13:00' : '12:00 - 18:00'
  })
  shifts.value = newShifts
  return false
}

function myDefaultEvent(ev: MbscCalendarEvent) {
  const d = ev.start as Date
  const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), ev.slot === 1 ? 7 : 12)
  const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), ev.slot === 1 ? 13 : 18)

  return {
    title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
    start,
    end
  }
}
</script>

<template>
  <MbscEventcalendar
    cssClass="md-shift-template"
    :view="myView"
    :data="shifts"
    :resources="staff"
    :colors="myColors"
    :slots="mySlots"
    :clickToCreate="true"
    :dragToMove="true"
    :dragToResize="false"
    :extendDefaultEvent="myDefaultEvent"
    @event-update="handleEventUpdate"
  >
    <template #slot="args">
      <div
        class="md-employees-cont"
        :style="{ background: args.slot.id === 1 ? '#a5ceff4d' : '#f7f7bb4d', padding: '4px' }"
      >
        <div class="slot-name">{{ args.slot.name }}</div>
        <div class="slot-time">{{ args.slot.id === 1 ? '7am - 1pm' : '12pm - 6pm' }}</div>
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.slot-name {
  line-height: 20px;
  font-size: 15px;
}

.slot-time {
  opacity: 0.5;
  line-height: 20px;
  font-size: 13px;
}

.md-shift-template .mbsc-timeline-header-placeholder {
  height: 74px;
}

.md-shift-template .mbsc-timeline-slots {
  height: 48px;
  text-align: center;
}

.md-shift-template .mbsc-schedule-event {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
}

.md-shift-template .mbsc-timeline-slot-title {
  padding: 0;
}
</style>
