<script setup lang="ts">
import {
  MbscDraggable,
  MbscEventcalendar,
  MbscPage,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventDragEvent,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const hwInvalids = [
  {
    recurring: {
      repeat: 'daily'
    },
    resource: ['res4', 'res5', 'res6']
  }
]
const swInvalids = [
  {
    recurring: {
      repeat: 'daily'
    },
    resource: ['res1', 'res2', 'res3']
  }
]
const hwColors = [
  {
    recurring: {
      repeat: 'daily'
    },
    resource: ['res1', 'res2', 'res3'],
    background: '#1ad4041a'
  }
]
const swColors = [
  {
    recurring: {
      repeat: 'daily'
    },
    resource: ['res4', 'res5', 'res6'],
    background: '#1ad4041a'
  }
]
const myView: MbscEventcalendarView = {
  timeline: { type: 'day' }
}
const myResources: MbscResource[] = [
  {
    id: 'hwt',
    name: 'HW Team',
    eventCreation: false,
    children: [
      {
        id: 'res1',
        name: 'Resource 1',
        color: '#0e9ea5'
      },
      {
        id: 'res2',
        name: 'Resource 2',
        color: '#0e9ea5'
      },
      {
        id: 'res3',
        name: 'Resource 3',
        color: '#0e9ea5'
      }
    ]
  },
  {
    id: 'swt',
    name: 'SW Team',
    eventCreation: false,
    children: [
      {
        id: 'res4',
        name: 'Resource 4',
        color: '#c3b726'
      },
      {
        id: 'res5',
        name: 'Resource 5',
        color: '#c3b726'
      },
      {
        id: 'res6',
        name: 'Resource 6',
        color: '#c3b726'
      }
    ]
  }
]
const myTasks: MbscCalendarEvent[] = [
  {
    taskId: 1,
    title: 'Task 1',
    start: '08:00',
    end: '12:00',
    category: 'hw',
    color: '#0e9ea5'
  },
  {
    taskId: 2,
    title: 'Task 2',
    start: '08:00',
    end: '12:00',
    category: 'hw',
    color: '#0e9ea5'
  },
  {
    taskId: 3,
    title: 'Task 3',
    start: '08:00',
    end: '12:00',
    category: 'hw',
    color: '#0e9ea5'
  },
  {
    taskId: 4,
    title: 'Task 4',
    start: '08:00',
    end: '12:00',
    category: 'sw',
    color: '#c3b726'
  },
  {
    taskId: 5,
    title: 'Task 5',
    start: '08:00',
    end: '12:00',
    category: 'sw',
    color: '#c3b726'
  },
  {
    taskId: 6,
    title: 'Task 6',
    start: '08:00',
    end: '12:00',
    category: 'sw',
    color: '#c3b726'
  }
]

const myInvalids = ref<any>([])
const myColors = ref<any>([])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
const dragElements = ref<any>([])

function myDefaultEvent(event: MbscCalendarEvent) {
  const res = event.resource

  if (res) {
    if (res === 'res1' || res === 'res2' || res === 'res3') {
      return {
        category: 'hw'
      }
    } else {
      return {
        category: 'sw'
      }
    }
  }
}

function handleEventDragStart(args: MbscEventDragEvent) {
  let event = args.event

  if (event) {
    event = event.original || event

    if (event.category === 'hw') {
      myInvalids.value = hwInvalids
      myColors.value = hwColors
    } else {
      myInvalids.value = swInvalids
      myColors.value = swColors
    }
  }
}

function handleEventDragEnd() {
  myInvalids.value = []
  myColors.value = []
}

function handleEventCreated() {
  toastMessage.value = 'Event created'
  isToastOpen.value = true
}

function handleEventUpdated() {
  toastMessage.value = 'Event moved'
  isToastOpen.value = true
}

function handleEventCreateFailed() {
  toastMessage.value = "Can't create event"
  isToastOpen.value = true
}

function handleEventUpdateFailed() {
  toastMessage.value = "Can't move event"
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-3">
          <div class="mbsc-form-group-title">Available tasks</div>
          <div v-for="(task, i) in myTasks" :key="task.taskId">
            <div ref="dragElements" class="dynamically-color-and-invalidate-task">
              <div>
                {{ task.title }}
                <span class="dynamically-color-and-invalidate-task-type">{{ task.category }}</span>
              </div>
              <MbscDraggable :element="dragElements[i]" :dragData="task" theme="auto" />
            </div>
          </div>
        </div>
        <div class="mbsc-col-sm-9 dynamically-color-and-invalidate-calendar">
          <MbscEventcalendar
            :view="myView"
            :resources="myResources"
            :invalid="myInvalids"
            :colors="myColors"
            :dragToMove="true"
            :externalDrop="true"
            :extendDefaultEvent="myDefaultEvent"
            @event-drag-start="handleEventDragStart"
            @event-drag-end="handleEventDragEnd"
            @event-created="handleEventCreated"
            @event-updated="handleEventUpdated"
            @event-create-failed="handleEventCreateFailed"
            @event-update-failed="handleEventUpdateFailed"
          />
        </div>
      </div>
    </div>
  </MbscPage>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.dynamically-color-and-invalidate-calendar {
  border-left: 1px solid #ccc;
}

.dynamically-color-and-invalidate-task {
  border: 2px solid #888;
  color: #666;
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  font-family:
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
}

.dynamically-color-and-invalidate-task-type {
  float: right;
  margin-left: 30px;
  text-transform: uppercase;
}

.dynamically-color-and-invalidate-calendar .mbsc-timeline-parent {
  height: 32px;
}
</style>
