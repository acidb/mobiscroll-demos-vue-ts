<script setup lang="ts">
import { MbscEventcalendar, MbscToast, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const user = { id: 2, name: 'Willis Cane', role: 'limited' }

/* Other user examples
const user = { name: 'Client',  role: 'readonly' }
const user = { name: 'Project Manager', role: 'full' } */

const editEvents = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')
const defaultColor = ref<string>('')

const myView = ref<MbscEventcalendarView>({
  timeline: {
    type: 'week',
    startTime: '08:00',
    endTime: '20:00'
  }
})

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Task 1',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,17)',
    title: 'Task 2',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,14)',
    title: 'Task 3',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Task 4',
    resource: 1
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Task 5',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Task 6',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Task 7',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,d,17)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Task 8',
    resource: 3
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,11,30)',
    title: 'Task 9',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Task 10',
    resource: 4
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Task 11',
    resource: 5
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Task 12',
    resource: 5
  },
  {
    start: 'dyndatetime(y,m,d,16,30)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Task 13',
    resource: 5
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,14)',
    title: 'Task 14',
    resource: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Task 15',
    resource: 5
  }
])

const myResources = ref<MbscResource[]>([
  { id: 1, name: 'Jude Chester', color: '#af2ec3' },
  { id: 2, name: 'Willis Cane', color: '#cccc39' },
  { id: 3, name: 'Derek Austyn', color: '#56ca2c' },
  { id: 4, name: 'Merv Kenny', color: '#af2424' },
  { id: 5, name: 'Fred Waldez', color: '#256ebc' }
])

function myDefaultEvent() {
  return {
    color: defaultColor.value
  }
}

// Simulate login
function login() {
  const newTasks = [...myEvents.value]
  const newResources = [...myResources.value]

  if (user.role === 'readonly') {
    defaultColor.value = ''
    for (const task of newTasks) {
      task.editable = false
      task.color = '#af2ec3'
    }

    toastMessage.value = 'Client with read-only access logged in'
  } else if (user.role === 'limited') {
    defaultColor.value = '#af2424'
    for (const task of newTasks) {
      if (task.resource !== user.id) {
        task.editable = false
        task.color = '#6a6a6a'
      } else {
        task.color = '#af2424'
      }
    }

    for (const res of newResources) {
      if (res.id !== user.id) {
        res.eventCreation = false
      }
    }
    toastMessage.value = 'User ' + user.name + ' with limited access logged in'
  } else {
    defaultColor.value = ''
    toastMessage.value = 'User with full access logged in'
  }

  myEvents.value = newTasks
  myResources.value = newResources
  editEvents.value = user.role != 'readonly'
  isToastOpen.value = true
}

login()
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-role-based-timeline"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :clickToCreate="editEvents"
    :dragToCreate="editEvents"
    :dragToMove="editEvents"
    :dragToResize="editEvents"
    :eventDelete="editEvents"
    :extendDefaultEvent="myDefaultEvent"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-role-based-timeline
  .mbsc-schedule-event:not(.mbsc-readonly-event)
  .mbsc-schedule-event-background {
  border: 2px solid currentColor;
}

.mds-role-based-timeline .mbsc-schedule-event .mbsc-schedule-event-background::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.6);
}
</style>
