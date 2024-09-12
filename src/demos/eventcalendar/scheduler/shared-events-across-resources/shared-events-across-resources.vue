<script setup lang="ts">
import {
  MbscEventcalendar,
  MbscInput,
  MbscPopup,
  MbscSegmented,
  MbscSegmentedGroup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscPopupButton,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-3,10)',
    end: 'dyndatetime(y,m,d-3,15)',
    title: 'Impact Training',
    resource: [2, 3],
    color: '#35bb5a'
  },
  {
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Impact Training',
    resource: [2, 3],
    color: '#35bb5a'
  },
  {
    start: 'dyndatetime(y,m,d,8,30)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Quick mtg. with Martin',
    resource: 3,
    color: '#913aa7'
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'General orientation',
    resource: [1, 2, 3],
    color: '#a71111'
  },
  {
    start: 'dyndatetime(y,m,d+1,10)',
    end: 'dyndatetime(y,m,d+1,11)',
    title: 'Product team mtg.',
    resource: [2, 3],
    color: '#6e7f29'
  },
  {
    start: 'dyndatetime(y,m,d+2,14)',
    end: 'dyndatetime(y,m,d+2,16)',
    title: 'Stakeholder mtg.',
    resource: 1,
    color: '#dcd234'
  },
  {
    start: 'dyndatetime(y,m,d+3,10)',
    end: 'dyndatetime(y,m,d+3,14)',
    title: 'Innovation mtg.',
    resource: [1, 2],
    color: '#de3d83'
  }
])

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Ryan',
    color: '#f7c4b4'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#c6f1c9'
  },
  {
    id: 3,
    name: 'John',
    color: '#e8d0ef'
  }
]

const myView: MbscEventcalendarView = {
  schedule: {
    type: 'week',
    allDay: false,
    startDay: 1,
    endDay: 5,
    startTime: '05:00',
    endTime: '22:00'
  }
}

const tempEvent = ref<MbscCalendarEvent>({})
const participants = ref<number[]>([])
const isNewEvent = ref<boolean>(false)
const isPopupOpen = ref<boolean>(false)
const popupAnchor = ref<any>(null)
const title = ref<string>('')

const popupButtons: Array<MbscPopupButton | string> = [
  'cancel',
  {
    text: 'OK',
    keyCode: 'enter',
    handler: () => {
      tempEvent.value.resource = participants.value
      tempEvent.value.title = title.value

      if (isNewEvent.value) {
        myEvents.value = [...myEvents.value, tempEvent.value]
      } else {
        myEvents.value = [...myEvents.value]
      }
      isNewEvent.value = false
      isPopupOpen.value = false
    },
    cssClass: 'mbsc-popup-button-primary'
  }
]

function showPopup(args: any) {
  setTimeout(() => {
    const event = args.event
    const resources = Array.isArray(event.resource) ? event.resource : [event.resource]

    // store temporary event
    tempEvent.value = event

    // fill popup with the current event data
    title.value = event.title
    participants.value = resources

    // set anchor for the popup
    popupAnchor.value = args.target ? args.target : args.domEvent.target
    isPopupOpen.value = true
  })
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  isNewEvent.value = true
  showPopup(args)
}

function handleEventDoubleClick(args: MbscEventClickEvent) {
  isNewEvent.value = false
  showPopup(args)
}

function myDefaultEvent() {
  return { color: '#4a9e42' }
}

function handlePopupClose() {
  if (isNewEvent.value) {
    myEvents.value = myEvents.value.filter((item) => item.id !== tempEvent.value.id)
  }
  isPopupOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :extendDefaultEvent="myDefaultEvent"
    @event-double-click="handleEventDoubleClick"
    @event-created="handleEventCreated"
  />
  <MbscPopup
    display="anchored"
    :anchor="popupAnchor"
    :buttons="popupButtons"
    :contentPadding="false"
    :touchUi="false"
    :width="350"
    :isOpen="isPopupOpen"
    @close="handlePopupClose"
  >
    <div class="mbsc-form-group">
      <MbscInput v-model="title" label="Title" input-style="box" label-style="stacked" />
      <div class="mbsc-padding">
        <label class="mbsc-txt-muted">Select event participants</label>
      </div>
      <MbscSegmentedGroup select="multiple" v-model="participants">
        <MbscSegmented :value="1">Ryan</MbscSegmented>
        <MbscSegmented :value="2">Kate</MbscSegmented>
        <MbscSegmented :value="3">John</MbscSegmented>
      </MbscSegmentedGroup>
    </div>
  </MbscPopup>
</template>
