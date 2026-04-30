<script setup lang="ts">
import { MbscEventcalendar, MbscToast, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscCellHoverEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventDeleteEvent,
  MbscEventDragEvent,
  MbscEventUpdateEvent,
  MbscNewEventData,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'
import { dyndatetime } from '../../../../dyndatetime'

setOptions({
  // locale,
  // theme
})

interface Shift {
  startHour: number
  endHour: number
  title: string
  color: string
  nextDay?: boolean
}

const morningColor = '#4a8c4d'
const afternoonColor = '#f87c6b'
const nightColor = '#8567AD'

const shifts = {
  morning: { startHour: 6, endHour: 14, title: 'Morning Shift', color: morningColor },
  afternoon: { startHour: 14, endHour: 22, title: 'Afternoon Shift', color: afternoonColor },
  night: { startHour: 22, endHour: 6, nextDay: true, title: 'Night Shift', color: nightColor }
}

const getShiftByHour = (hour: number): Shift => {
  if (hour >= 6 && hour < 14) {
    return shifts.morning
  }
  if (hour >= 14 && hour < 22) {
    return shifts.afternoon
  }
  if (hour >= 22 || hour < 6) {
    return shifts.night
  }
  return shifts.afternoon
}

const calculateStart = (start: Date | string) => {
  const d = new Date(start)
  const originalHour = d.getHours()
  const shift = getShiftByHour(originalHour)
  d.setHours(shift.startHour, 0, 0, 0)
  if (shift.startHour === 22 && originalHour < 6) {
    d.setDate(d.getDate() - 1)
  }
  return d
}

const calculateEnd = (start: Date | string) => {
  const d = new Date(start)
  const startHour = d.getHours()
  const shift = getShiftByHour(d.getHours())
  d.setHours(shift.endHour, 0, 0, 0)
  if (shift.nextDay && startHour === 22) {
    d.setDate(d.getDate() + 1)
  }
  return d
}

const getTitle = (startHours: number) => getShiftByHour(startHours).title

const getColor = (startHours: number) => getShiftByHour(startHours).color

const initialEvents: MbscCalendarEvent[] = [
  {
    id: 1,
    resource: 'A',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d-6,6'),
    end: dyndatetime('y,m,d-6,14'),
    color: morningColor
  },
  {
    id: 2,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-6,14'),
    end: dyndatetime('y,m,d-6,22'),
    color: afternoonColor
  },
  {
    id: 3,
    resource: 'C',
    title: 'Night Shift',
    start: dyndatetime('y,m,d-6,22'),
    end: dyndatetime('y,m,d-5,6'),
    color: nightColor
  },
  {
    id: 4,
    resource: 'A',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d-5,6'),
    end: dyndatetime('y,m,d-5,14'),
    color: morningColor
  },
  {
    id: 5,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-5,14'),
    end: dyndatetime('y,m,d-5,22'),
    color: afternoonColor
  },
  {
    id: 6,
    resource: 'C',
    title: 'Night Shift',
    start: dyndatetime('y,m,d-5,22'),
    end: dyndatetime('y,m,d-4,6'),
    color: nightColor
  },
  //<hide-comment>
  {
    id: 7,
    resource: 'A',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d-4,6'),
    end: dyndatetime('y,m,d-4,14'),
    color: morningColor
  },
  {
    id: 8,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-4,14'),
    end: dyndatetime('y,m,d-4,22'),
    color: afternoonColor
  },
  {
    id: 9,
    resource: 'C',
    title: 'Night Shift',
    start: dyndatetime('y,m,d-4,22'),
    end: dyndatetime('y,m,d-3,6'),
    color: nightColor
  },
  {
    id: 10,
    resource: 'C',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d-3,6'),
    end: dyndatetime('y,m,d-3,14'),
    color: morningColor
  },
  {
    id: 11,
    resource: 'A',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-3,14'),
    end: dyndatetime('y,m,d-3,22'),
    color: afternoonColor
  },
  {
    id: 12,
    resource: 'B',
    title: 'Night Shift',
    start: dyndatetime('y,m,d-3,22'),
    end: dyndatetime('y,m,d-2,6'),
    color: nightColor
  },
  {
    id: 13,
    resource: 'C',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d-2,6'),
    end: dyndatetime('y,m,d-2,14'),
    color: morningColor
  },
  {
    id: 14,
    resource: 'A',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-2,14'),
    end: dyndatetime('y,m,d-2,22'),
    color: afternoonColor
  },
  {
    id: 15,
    resource: 'B',
    title: 'Night Shift',
    start: dyndatetime('y,m,d-2,22'),
    end: dyndatetime('y,m,d-1,6'),
    color: nightColor
  },
  {
    id: 16,
    resource: 'C',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d-1,6'),
    end: dyndatetime('y,m,d-1,14'),
    color: morningColor
  },
  {
    id: 17,
    resource: 'A',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-1,14'),
    end: dyndatetime('y,m,d-1,22'),
    color: afternoonColor
  },
  {
    id: 18,
    resource: 'B',
    title: 'Night Shift',
    start: dyndatetime('y,m,d-1,22'),
    end: dyndatetime('y,m,d,6'),
    color: nightColor
  },
  {
    id: 19,
    resource: 'B',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d,6'),
    end: dyndatetime('y,m,d,14'),
    color: morningColor
  },
  {
    id: 20,
    resource: 'C',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d,14'),
    end: dyndatetime('y,m,d,22'),
    color: afternoonColor
  },
  {
    id: 21,
    resource: 'A',
    title: 'Night Shift',
    start: dyndatetime('y,m,d,22'),
    end: dyndatetime('y,m,d+1,6'),
    color: nightColor
  },
  {
    id: 22,
    resource: 'B',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d+1,6'),
    end: dyndatetime('y,m,d+1,14'),
    color: morningColor
  },
  {
    id: 23,
    resource: 'C',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+1,14'),
    end: dyndatetime('y,m,d+1,22'),
    color: afternoonColor
  },
  {
    id: 24,
    resource: 'A',
    title: 'Night Shift',
    start: dyndatetime('y,m,d+1,22'),
    end: dyndatetime('y,m,d+2,6'),
    color: nightColor
  },
  {
    id: 25,
    resource: 'B',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d+2,6'),
    end: dyndatetime('y,m,d+2,14'),
    color: morningColor
  },
  {
    id: 26,
    resource: 'C',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+2,14'),
    end: dyndatetime('y,m,d+2,22'),
    color: afternoonColor
  },
  {
    id: 27,
    resource: 'A',
    title: 'Night Shift',
    start: dyndatetime('y,m,d+2,22'),
    end: dyndatetime('y,m,d+3,6'),
    color: nightColor
  },
  {
    id: 28,
    resource: 'A',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d+3,6'),
    end: dyndatetime('y,m,d+3,14'),
    color: morningColor
  },
  {
    id: 29,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+3,14'),
    end: dyndatetime('y,m,d+3,22'),
    color: afternoonColor
  },
  {
    id: 30,
    resource: 'C',
    title: 'Night Shift',
    start: dyndatetime('y,m,d+3,22'),
    end: dyndatetime('y,m,d+4,6'),
    color: nightColor
  },
  {
    id: 31,
    resource: 'A',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d+4,6'),
    end: dyndatetime('y,m,d+4,14'),
    color: morningColor
  },
  {
    id: 32,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+4,14'),
    end: dyndatetime('y,m,d+4,22'),
    color: afternoonColor
  },
  {
    id: 33,
    resource: 'C',
    title: 'Night Shift',
    start: dyndatetime('y,m,d+4,22'),
    end: dyndatetime('y,m,d+5,6'),
    color: nightColor
  },
  {
    id: 34,
    resource: 'A',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d+5,6'),
    end: dyndatetime('y,m,d+5,14'),
    color: morningColor
  },
  {
    id: 35,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+5,14'),
    end: dyndatetime('y,m,d+5,22'),
    color: afternoonColor
  },
  {
    id: 36,
    resource: 'C',
    title: 'Night Shift',
    start: dyndatetime('y,m,d+5,22'),
    end: dyndatetime('y,m,d+6,6'),
    color: nightColor
  },
  {
    id: 37,
    resource: 'C',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d+6,6'),
    end: dyndatetime('y,m,d+6,14'),
    color: morningColor
  },
  {
    id: 38,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+6,14'),
    end: dyndatetime('y,m,d+6,22'),
    color: afternoonColor
  },
  {
    id: 39,
    resource: 'A',
    title: 'Night Shift',
    start: dyndatetime('y,m,d+6,22'),
    end: dyndatetime('y,m,d+7,6'),
    color: nightColor
  },
  {
    id: 40,
    resource: 'C',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d+7,6'),
    end: dyndatetime('y,m,d+7,14'),
    color: morningColor
  },
  {
    id: 41,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+7,14'),
    end: dyndatetime('y,m,d+7,22'),
    color: afternoonColor
  },
  {
    id: 42,
    resource: 'A',
    title: 'Night Shift',
    start: dyndatetime('y,m,d+7,22'),
    end: dyndatetime('y,m,d+8,6'),
    color: nightColor
  },
  {
    id: 43,
    resource: 'C',
    title: 'Morning Shift',
    start: dyndatetime('y,m,d+8,6'),
    end: dyndatetime('y,m,d+8,14'),
    color: morningColor
  },
  {
    id: 44,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+8,14'),
    end: dyndatetime('y,m,d+8,22'),
    color: afternoonColor
  },
  {
    id: 45,
    resource: 'A',
    title: 'Night Shift',
    start: dyndatetime('y,m,d+8,22'),
    end: dyndatetime('y,m,d+9,6'),
    color: nightColor
  }
  //</hide-comment>
]

const resources: MbscResource[] = [
  { id: 'A', name: 'Crew' },
  { id: 'B', name: 'Crew B' },
  { id: 'C', name: 'Crew C' }
]

const view: MbscEventcalendarView = {
  scheduler: {
    type: 'week',
    allDay: false,
    startTime: '06:00',
    endTime: '06:00+1',
    timeCellStep: 120,
    timeLabelStep: 120
  }
}

const colors = ref<MbscCalendarColor[]>([])
const redResources = ref<Record<string, boolean>>({})
const draggedEventStart = ref<Date | null | undefined>(null)
const draggedEventEnd = ref<Date | null | undefined>(null)
const draggedEventResource = ref<string | number | (string | number)[] | null | undefined>(null)
const availableSlotOnHover = ref<MbscCalendarColor | null>(null)
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')
const myEvents = ref<MbscCalendarEvent[]>(initialEvents)

const getAvailableSlots = (resourceId: string, dayStart: Date) => {
  const dayEnd = new Date(dayStart)
  dayEnd.setDate(dayEnd.getDate() + 1)
  dayEnd.setHours(6, 0, 0, 0)
  const dayEvents = myEvents.value.filter((e) => {
    const eStart = new Date(e.start! as string | number | Date)
    return eStart >= dayStart && eStart < dayEnd
  })
  const slots = { morning: true, afternoon: true, night: true }
  dayEvents.forEach((e) => {
    if (e.resource === resourceId) {
      slots.morning = slots.afternoon = slots.night = false
    } else {
      const startHour = new Date(e.start! as string | number | Date).getHours()
      if (startHour === 6) {
        slots.morning = false
      } else if (startHour === 14) {
        slots.afternoon = false
      } else if (startHour === 22) {
        slots.night = false
      }
    }
  })
  return slots
}

const clearColorsForResource = (
  currentColors: MbscCalendarColor[],
  resourceId: string,
  date: Date
) => {
  const base = new Date(date)
  base.setHours(0, 0, 0, 0)
  const baseTime = +base
  return currentColors.filter((c) => {
    if (c.resource === resourceId) {
      const cDate = new Date(c.start! as string | number | Date)
      cDate.setHours(0, 0, 0, 0)
      if (+cDate === baseTime) {
        const hour = new Date(c.start! as string | number | Date).getHours()
        if (hour === 6 || hour === 14 || hour === 22) {
          return false
        }
      }
    }
    return true
  })
}

const handleCellHoverIn = (args: MbscCellHoverEvent) => {
  const hoveredDate = new Date(args.date)
  const shift = getShiftByHour(hoveredDate.getHours())
  if (!shift) return

  const dayStart = new Date(args.date)
  dayStart.setHours(6, 0, 0, 0)
  const availableSlots = getAvailableSlots(String(args.resource.id), dayStart)
  const slotKey = Object.keys(availableSlots).find(
    (key) => (availableSlots as any)[key] && (shifts as any)[key].startHour === shift.startHour
  )
  if (slotKey) {
    const startTime = new Date(dayStart)
    startTime.setHours((shifts as any)[slotKey].startHour, 0, 0, 0)
    const endTime = new Date(+startTime + 8 * 60 * 60 * 1000 - 1)
    const slot = {
      background: '#c1ffe180',
      cssClass: 'available-slot mbsc-font-icon mbsc-icon-plus',
      start: +startTime + 1,
      end: endTime,
      resource: args.resource.id
    }
    availableSlotOnHover.value = slot as any
    colors.value = [...colors.value, slot as any]
  }
}

const handleCellHoverOut = () => {
  if (availableSlotOnHover.value) {
    colors.value = colors.value.filter((c) => c !== availableSlotOnHover.value)
    availableSlotOnHover.value = null
  }
}

const handleEventCreate = (args: MbscEventCreateEvent) => {
  const event = { ...args.event, id: Date.now() }
  const dayStart = new Date(event.start! as string | number | Date)
  dayStart.setHours(6, 0, 0, 0)
  const dayEnd = new Date(dayStart)
  dayEnd.setDate(dayEnd.getDate() + 1)
  dayEnd.setHours(6, 0, 0, 0)
  const dayEvents = myEvents.value.filter((e) => {
    const eStart = new Date(e.start! as string | number | Date)
    return eStart >= dayStart && eStart < dayEnd
  })
  const conflict = dayEvents.find(
    (ev) =>
      ev.resource === event.resource ||
      +new Date(ev.start! as string | number | Date) ===
        +new Date(event.start! as string | number | Date)
  )
  if (conflict) {
    toastMessage.value = 'Already assigned'
    isToastOpen.value = true
    return false
  }
  colors.value = clearColorsForResource(
    colors.value,
    String(event.resource),
    new Date(event.start! as string | number | Date)
  )
  const day = new Date(event.start! as string | number | Date)
  day.setHours(0, 0, 0, 0)
  redResources.value = { ...redResources.value, [event.resource + day.toISOString()]: false }
  availableSlotOnHover.value = null
  myEvents.value = [...myEvents.value, event]
}

const handleEventClick = () => {
  toastMessage.value = 'Already assigned'
  isToastOpen.value = true
}

const handleEventDelete = (args: MbscEventDeleteEvent) => {
  myEvents.value = myEvents.value.filter((e) => e.id !== args.event.id)
  const colorStart = new Date(args.event.start! as string | number | Date)
  colorStart.setHours(6, 0, 0, 0)
  const colorEnd = new Date(args.event.start! as string | number | Date)
  colorEnd.setDate(colorEnd.getDate() + 1)
  colorEnd.setHours(6, 0, 0, 0)
  colors.value = [
    ...colors.value,
    { start: colorStart, end: colorEnd, background: '#ffdbd280', resource: args.event.resource }
  ]
  const resource = args.event.resource
  const day = new Date(args.event.start! as string | number | Date)
  day.setHours(0, 0, 0, 0)
  redResources.value = { ...redResources.value, [resource + day.toISOString()]: true }
  toastMessage.value = args.event.title + ' deleted'
  isToastOpen.value = true
}

const handleEventDragStart = (args: MbscEventDragEvent) => {
  draggedEventStart.value = args.event.start
    ? new Date(args.event.start! as string | number | Date)
    : null
  draggedEventEnd.value = args.event.end
    ? new Date(args.event.end! as string | number | Date)
    : null
  draggedEventResource.value = args.event.resource
}

const handleEventUpdateFailed = () => {
  toastMessage.value = 'Already assigned'
  isToastOpen.value = true
}

const handleEventUpdate = (args: MbscEventUpdateEvent) => {
  const event = args.event
  const dayStart = new Date(event.start! as string | number | Date)
  dayStart.setHours(6, 0, 0, 0)
  const dragStartDay = new Date(draggedEventStart.value!)
  dragStartDay.setHours(6, 0, 0, 0)
  if (+dayStart !== +dragStartDay) {
    return false
  }

  const dayEnd = new Date(dayStart)
  dayEnd.setDate(dayEnd.getDate() + 1)
  dayEnd.setHours(6, 0, 0, 0)
  const dayEvents = myEvents.value.filter((e) => {
    const eStart = new Date(e.start! as string | number | Date)
    return eStart >= dayStart && eStart < dayEnd
  })
  const conflicts = dayEvents.filter(
    (ev) =>
      ev.id !== event.id &&
      (ev.resource === event.resource ||
        +new Date(ev.start! as string | number | Date) ===
          +new Date(event.start! as string | number | Date))
  )
  const evStart = new Date(event.start! as string | number | Date)
  event.title = getTitle(evStart.getHours())
  event.color = getColor(evStart.getHours())

  if (conflicts.length) {
    let shouldReturn = false
    conflicts.forEach((sh, i) => {
      if (sh.resource === event.resource) {
        if (+event.start! === +new Date(sh.start! as string | number | Date)) {
          shouldReturn = true
        }
        sh.resource = draggedEventResource.value as string
        conflicts[i] = sh
      } else {
        sh.start = draggedEventStart.value as Date
        sh.end = draggedEventEnd.value as Date
        const start = new Date(draggedEventStart.value!)
        sh.title = getTitle(start.getHours())
        sh.color = getColor(start.getHours())
        conflicts[i] = sh
      }
    })
    if (shouldReturn) {
      return false
    }
    myEvents.value = myEvents.value.map((e) => {
      const updated = [...conflicts, event].find((u) => u.id === e.id)
      return updated || e
    })
  } else {
    if (dayEvents.some((ev) => ev.id === event.id)) {
      myEvents.value = myEvents.value.map((e) => (e.id === event.id ? event : e))
    }
  }

  colors.value = clearColorsForResource(
    colors.value,
    String(event.resource),
    new Date(event.start! as string | number | Date)
  )
  const day = new Date(event.start! as string | number | Date)
  day.setHours(0, 0, 0, 0)
  redResources.value = { ...redResources.value, [event.resource + day.toISOString()]: false }
  if (!conflicts.length && event.resource !== draggedEventResource.value) {
    const colorEnd = new Date(dayStart)
    colorEnd.setDate(colorEnd.getDate() + 1)
    colorEnd.setHours(6, 0, 0, 0)
    colors.value = [
      ...colors.value,
      { start: dayStart, resource: args.oldEvent!.resource, background: '#ffdbd280', end: colorEnd }
    ]
    redResources.value = {
      ...redResources.value,
      [args.oldEvent!.resource + day.toISOString()]: true
    }
  }
  draggedEventStart.value = null
  draggedEventEnd.value = null
  draggedEventResource.value = null
}

const extendDefaultEvent = (args: MbscNewEventData) => {
  const start = new Date(args.start! as string | number | Date)
  const newStart = calculateStart(start)
  const newEnd = calculateEnd(start)
  const title = getTitle(newStart.getHours())
  const color = getColor(newStart.getHours())
  return {
    title: title,
    start: newStart,
    end: newEnd,
    color: color
  }
}

const handleToastClose = () => {
  isToastOpen.value = false
}

// Workaround for TypeScript error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const day = new Date()
</script>

<template>
  <div>
    <MbscEventcalendar
      cssClass="mds-24-hour-manufacturing-calendar"
      :data="myEvents"
      :colors="colors"
      :dragToMove="true"
      :dragToCreate="false"
      :clickToCreate="'single'"
      :dragToResize="false"
      :dragTimeStep="480"
      :dragTimeStepBase="'viewStart'"
      :eventDelete="true"
      :eventOverlap="false"
      :extendDefaultEvent="extendDefaultEvent"
      @cellHoverIn="handleCellHoverIn"
      @cellHoverOut="handleCellHoverOut"
      @eventCreate="handleEventCreate"
      @eventClick="handleEventClick"
      @eventDelete="handleEventDelete"
      @eventDragStart="handleEventDragStart"
      @eventUpdateFailed="handleEventUpdateFailed"
      @eventUpdate="handleEventUpdate"
      :groupBy="'date'"
      :resources="resources"
      :view="view"
    >
      <template #resource="resource, day">
        <div
          :style="
            redResources[resource.id + day.toISOString()]
              ? { color: '#53000080', background: '#ffdbd280', margin: '-0.5em', padding: '0.5em' }
              : {}
          "
        >
          {{ resource.name }}
        </div>
      </template>
    </MbscEventcalendar>
    <MbscToast :isOpen="isToastOpen" :message="toastMessage" @close="handleToastClose" />
  </div>
</template>

<style>
.mds-24-hour-manufacturing-calendar .mbsc-schedule-events {
  left: 0;
  right: 0;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-time-wrapper {
  height: 2.5em;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-item {
  height: 2.5em;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-color.available-slot {
  z-index: auto;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-color.available-slot .mbsc-schedule-color-text {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #33333380, #00000080);
  box-sizing: border-box;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-color.available-slot.mbsc-font-icon:before {
  position: absolute;
  z-index: 2;
  pointer-events: none;
  top: 50%;
  left: 50%;
  color: #e0fff0;
  font-size: 12px;
  opacity: 0.8;
  transform: translate(-50%, -50%);
}
</style>
