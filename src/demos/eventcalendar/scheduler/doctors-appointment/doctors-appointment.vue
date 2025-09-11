<script setup lang="ts">
import {
  MbscDraggable,
  MbscDropcontainer,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventCreateEvent,
  MbscEventCreateFailedEvent,
  MbscEventDeleteEvent,
  MbscEventUpdateFailedEvent,
  MbscItemDragEvent,
  MbscResource
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const today = new Date(now.setMinutes(59))
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)

const doctors = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Dr. Keila Delores'
  },
  {
    id: 2,
    name: 'Dr. Gene Cortez'
  },
  {
    id: 3,
    name: 'Dr. Paula Bush'
  },
  {
    id: 4,
    name: 'Dr. Pete Nichols'
  },
  {
    id: 5,
    name: 'Dr. Jean Pearson',
    color: '#8f1ed6'
  },
  {
    id: 6,
    name: 'Dr. Thelma Cain'
  }
])

const myEvents = ref<MbscCalendarEvent[]>([
  {
    id: 'job1',
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,16)',
    resource: 1,
    title: 'Myla Bennett',
    job: 'Wisdom tooth removal',
    color: '#334ab9'
  },
  {
    id: 'job2',
    start: 'dyndatetime(y,m,d,17)',
    end: 'dyndatetime(y,m,d,18,30)',
    resource: 1,
    title: 'Beatrix Foley',
    job: 'Braces',
    color: '#177e70'
  },
  {
    id: 'job3',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)',
    resource: 3,
    title: 'Frank Watson',
    job: 'Teeth whitening',
    color: '#d1891f'
  },
  {
    id: 'job4',
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,12,30)',
    resource: 3,
    title: 'Jaime Joyce',
    job: 'Root canal treatment',
    color: '#cb3939'
  },
  {
    id: 'job5',
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,14)',
    resource: 3,
    title: 'Corey Shepard',
    job: 'Tooth extraction',
    color: '#aba343'
  },
  {
    id: 'job6',
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,16)',
    resource: 4,
    title: 'Callie Leonard',
    job: 'Crown and bridge',
    color: '#1ca11a'
  },
  {
    id: 'job7',
    start: 'dyndatetime(y,m,d,17)',
    end: 'dyndatetime(y,m,d,18)',
    resource: 4,
    title: 'Harley Thomson',
    job: 'Tartar removal',
    color: '#a446b5'
  },
  {
    id: 'job8',
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,11)',
    resource: 6,
    title: 'Ricky Welch',
    job: 'Wisdom tooth removal',
    color: '#334ab9'
  }
])

const myAppointments = ref<MbscCalendarEvent[]>([
  {
    id: 'd1',
    title: 'Winfred Lesley',
    job: 'Teeth whitening',
    color: '#d1891f',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)',
    unscheduled: true
  },
  {
    id: 'd2',
    title: 'Rosalin Delice',
    job: 'Crown and bridge',
    color: '#1ca11a',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)',
    unscheduled: true
  },
  {
    id: 'd3',
    title: 'Macy Steven',
    job: 'Root canal treatment',
    color: '#cb3939',
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,12,30)',
    unscheduled: true
  },
  {
    id: 'd4',
    title: 'Lavern Cameron',
    job: 'Tartar removal',
    color: '#a446b5',
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,13)',
    unscheduled: true
  }
])

const myInvalid = ref([
  {
    recurring: {
      repeat: 'daily',
      until: yesterday
    }
  },
  {
    start: yesterday,
    end: today
  }
])

const dragElements = ref<HTMLElement[]>([])
const dropCont = ref<HTMLDivElement>()
const myColors = ref<MbscCalendarColor[]>([])
const contBg = ref<string>('')
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  schedule: {
    type: 'day',
    startTime: '08:00',
    endTime: '20:00',
    allDay: false
  }
}

function handleEventCreate(args: MbscEventCreateEvent) {
  const event = args.event
  event.unscheduled = false
  myColors.value = []
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  toastMessage.value = args.event.title + ' added'
  isToastOpen.value = true
  myAppointments.value = myAppointments.value.filter((item) => item.id !== args.event.id)
}

function handleEventCreateFailed(args: MbscEventCreateFailedEvent) {
  handleFailed(args.event)
}

function handleEventUpdateFailed(args: MbscEventUpdateFailedEvent) {
  handleFailed(args.event)
}

function handleFailed(event: MbscCalendarEvent) {
  if (event.start! <= today) {
    toastMessage.value = "Can't add event in the past"
    isToastOpen.value = true
  } else {
    toastMessage.value = 'Make sure not to double book'
    isToastOpen.value = true
  }
}

function handleEventDelete(args: MbscEventDeleteEvent) {
  toastMessage.value = args.event.title + ' unscheduled'
  isToastOpen.value = true
}

function handleEventDragEnter() {
  myColors.value = [
    {
      background: '#f1fff24d',
      start: '08:00',
      end: '20:00',
      recurring: {
        repeat: 'daily'
      }
    }
  ]
}

function handleEventDragLeave() {
  myColors.value = []
}

function handleItemDrop(args: MbscItemDragEvent) {
  if (args.data) {
    const event = args.data
    event.unscheduled = true
    myAppointments.value = [...myAppointments.value, event]
  }
  contBg.value = ''
}

function handleItemDragEnter(args: MbscItemDragEvent) {
  if (!(args.data && args.data.unscheduled)) {
    contBg.value = '#d0e7d2cc'
  }
}

function handleItemDragLeave() {
  contBg.value = ''
}

function handleToastClose() {
  isToastOpen.value = false
}

function getHours(event: MbscCalendarEvent) {
  const eventLength =
    Math.abs(new Date(event.end as string).getTime() - new Date(event.start as string).getTime()) /
    (60 * 60 * 1000)
  return eventLength + ' hour' + (eventLength > 1 ? 's' : '')
}

onMounted(() => {
  for (const event of myEvents.value) {
    // Convert dates to date objects
    event.start = event.start ? new Date(event.start as string) : event.start
    event.end = event.end ? new Date(event.end as string) : event.end
    // Mark past events as fixed by setting the event.editable property to false
    event.editable = !!(event.start && today < event.start)
  }
})
</script>

<template>
  <div className="mbsc-grid mbsc-no-padding">
    <div className="mbsc-row">
      <div className="mbsc-col-sm-9 docs-appointment-calendar">
        <MbscEventcalendar
          :view="myView"
          :data="myEvents"
          :resources="doctors"
          :invalid="myInvalid"
          :dragToMove="true"
          :dragToCreate="true"
          :eventOverlap="false"
          :externalDrop="true"
          :externalDrag="true"
          :colors="myColors"
          @event-create="handleEventCreate"
          @event-created="handleEventCreated"
          @event-create-failed="handleEventCreateFailed"
          @event-update-failed="handleEventUpdateFailed"
          @event-delete="handleEventDelete"
          @event-drag-enter="handleEventDragEnter"
          @event-drag-leave="handleEventDragLeave"
        />
      </div>
      <div
        ref="dropCont"
        class="mbsc-col-sm-3 docs-appointment-cont"
        :style="{ background: contBg }"
      >
        <MbscDropcontainer
          :element="dropCont"
          @item-drop="handleItemDrop"
          @item-drag-enter="handleItemDragEnter"
          @item-drag-leave="handleItemDragLeave"
        >
          <div class="mbsc-form-group-title">Unscheduled appointments</div>

          <div
            v-for="(task, i) in myAppointments"
            ref="dragElements"
            class="docs-appointment-task"
            :key="task.id"
            :style="{ background: task.color }"
          >
            <div>{{ task.title }} - {{ task.job }}</div>
            <div>{{ getHours(task) }}</div>
            <MbscDraggable :element="dragElements[i]" :dragData="task" />
          </div>
        </MbscDropcontainer>
      </div>
    </div>
  </div>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.docs-appointment-calendar {
  border-right: 1px solid #ccc;
}

.docs-appointment-calendar .mbsc-readonly-event {
  opacity: 0.6;
}

.docs-appointment-cont {
  height: 100%;
  overflow: auto;
}

.docs-appointment-task {
  color: #fff;
  background: #999;
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  font-family:
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
}

.demo-doctors-appointment.demo-wrapper,
.demo-doctors-appointment .mbsc-grid,
.demo-doctors-appointment .mbsc-row,
.demo-doctors-appointment .docs-appointment-calendar {
  height: 100%;
}
</style>
