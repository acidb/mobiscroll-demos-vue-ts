<script setup lang="ts">
import {
  getJson,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Event 14',
    resource: 6
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,17,30)',
    title: 'Event 15',
    resource: 7
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Event 16',
    resource: 8
  },
  {
    start: 'dyndatetime(y,m,d,17)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Event 17',
    resource: 9
  }
])

const myResources = ref<MbscResource[]>([
  {
    id: 1,
    name: 'Group 1',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 11,
        color: '#e20000',
        name: 'Resource 1'
      },
      {
        id: 12,
        color: '#76e083',
        name: 'Resource 2'
      },
      {
        id: 13,
        color: '#4981d6',
        name: 'Resource 3'
      }
    ]
  },
  {
    id: 2,
    name: 'Group 2',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 21,
        name: 'Loading...'
      }
    ]
  },
  {
    id: 3,
    name: 'Group 3',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 31,
        name: 'Loading...'
      }
    ]
  },
  {
    id: 4,
    name: 'Group 4',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 41,
        name: 'Loading...'
      }
    ]
  },
  {
    id: 5,
    name: 'Group 5',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 51,
        color: '#af0000',
        name: 'Resource 12'
      },
      {
        id: 52,
        color: '#446f1c',
        name: 'Resource 13'
      },
      {
        id: 53,
        color: '#1dab2f',
        name: 'Resource 14'
      }
    ]
  },
  {
    id: 6,
    name: 'Resource 17',
    color: '#167593'
  },
  {
    id: 7,
    name: 'Resource 18',
    color: '#93166c'
  },
  {
    id: 8,
    name: 'Resource 19',
    color: '#e5e923'
  },
  {
    id: 9,
    name: 'Resource 20',
    color: '#935028'
  }
])

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'day'
  }
}

function loadChildResources(args: any) {
  const resource = args.resourceObj!

  if (resource && !resource.loaded) {
    getJson(
      'https://trial.mobiscroll.com/load-resources/?res=' + args.resource,
      (data: any) => {
        const newEvents = [...myEvents.value, ...data.events]

        resource.children = data.resources
        resource.loaded = true

        myEvents.value = newEvents
        myResources.value = [...myResources.value]

        toastMessage.value = 'Resources loaded'
        isToastOpen.value = true
      },
      'jsonp'
    )
  }
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    className="md-load-resources-on-demand"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    @resource-expand="loadChildResources"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-load-resources-on-demand .mbsc-timeline-parent {
  height: 34px;
}
</style>
