<script setup lang="ts">
import {
  formatDate,
  MbscButton,
  MbscDatepicker,
  MbscEventcalendar,
  MbscInput,
  MbscPopup,
  MbscSnackbar,
  MbscTextarea,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const staff: MbscResource[] = [
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
  },
  {
    id: 4,
    name: 'Mark',
    color: '#e25dd2',
    title: 'Network Administrator',
    img: 'https://img.mobiscroll.com/demos/m3.png'
  },
  {
    id: 5,
    name: 'Sharon',
    color: '#f1e920',
    title: 'Data Quality Manager',
    img: 'https://img.mobiscroll.com/demos/f2.png'
  },
  {
    id: 6,
    name: 'Emma',
    color: '#1ac38d',
    title: 'Product Tactics Agent',
    img: 'https://img.mobiscroll.com/demos/f3.png'
  }
]

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
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,18)',
    title: '12:00 - 18:00',
    resource: 4,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,18)',
    title: '12:00 - 18:00',
    resource: 5,
    slot: 2
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
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: '07:00 - 13:00',
    resource: 6,
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
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: '12:00 - 18:00',
    resource: 5,
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
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,13)',
    title: '07:00 - 13:00',
    resource: 4,
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
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,18)',
    title: '12:00 - 18:00',
    resource: 6,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,13)',
    title: '07:00 - 13:00',
    resource: 5,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,13)',
    title: '07:00 - 13:00',
    resource: 6,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: '12:00 - 18:00',
    resource: 2,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: '12:00 - 18:00',
    resource: 4,
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
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,13)',
    title: '07:00 - 13:00',
    resource: 5,
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
    start: 'dyndatetime(y,m,d+2,12)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: '12:00 - 18:00',
    resource: 6,
    slot: 2
  }
])

const mySlots = [
  {
    id: 1,
    name: 'Morning'
  },
  {
    id: 2,
    name: 'Afternoon'
  }
]

const myInvalid = [
  {
    start: 'dyndatetime(y,m,d+1,0)',
    end: 'dyndatetime(y,m,d+1,23,59)',
    resource: 4,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-1,0)',
    end: 'dyndatetime(y,m,d-1,23,59)',
    resource: 2,
    slot: 2
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

const responsivePopup = {
  medium: {
    display: 'center',
    width: 400,
    fullScreen: false,
    touchUi: false,
    showOverlay: false
  }
}

const tempShift = ref<MbscCalendarEvent | null>(null)
const startInput = ref<any>(null)
const endInput = ref<any>(null)
const minTime = ref<string>('')
const maxTime = ref<string>('')
const snackbarButton = ref<any>(null)
const isSnackbarOpen = ref<boolean>(false)
const isPopupOpen = ref<boolean>(false)
const isEdit = ref<boolean>(false)
const headerText = ref<string>('')
const shiftDate = ref<any>([])
const shiftNotes = ref<string>('')
const popupButtons = ref<any>([])

function saveShift() {
  const start = new Date(shiftDate.value[0])
  const end = new Date(shiftDate.value[1])
  const newEvent: MbscCalendarEvent = {
    id: tempShift.value!.id,
    title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
    notes: shiftNotes.value,
    start: start,
    end: end,
    resource: tempShift.value!.resource,
    slot: tempShift.value!.slot
  }
  if (isEdit.value) {
    // update the event in the list
    const index = shifts.value.findIndex((x) => x.id === tempShift.value!.id)
    const newEventList = [...shifts.value]

    newEventList.splice(index, 1, newEvent)
    shifts.value = newEventList
  } else {
    // add the new event to the list
    shifts.value = [...shifts.value, newEvent]
  }
  // close the popup
  isPopupOpen.value = false
}

function deleteEvent(shift: MbscCalendarEvent) {
  shifts.value = shifts.value.filter((item) => item.id !== shift.id)
  setTimeout(() => {
    snackbarButton.value = {
      action: () => {
        shifts.value = [...shifts.value, shift]
      },
      text: 'Undo'
    }
    isSnackbarOpen.value = true
  })
}

function loadPopupForm(event: MbscCalendarEvent) {
  shiftDate.value = [event.start, event.end]
  shiftNotes.value = event.notes
}

// handle popup form changes
function notesChange(ev: any) {
  shiftNotes.value = ev.target.value
}

function handleDelete() {
  deleteEvent(tempShift.value!)
  isPopupOpen.value = false
}

// scheduler options
function handleEventClick(args: MbscEventClickEvent) {
  const event: any = args.event
  const resource = staff.find((r) => r.id === event.resource)
  const slot = mySlots.find((s) => s.id === event.slot)
  popupButtons.value = [
    'cancel',
    {
      handler: () => {
        saveShift()
      },
      keyCode: 'enter',
      text: 'Save',
      cssClass: 'mbsc-popup-button-primary'
    }
  ]
  headerText.value =
    '<div>Edit ' +
    resource!.name +
    '\'s hours</div><div class="employee-shifts-day">' +
    formatDate('DDDD', new Date(event.start)) +
    ' ' +
    slot!.name +
    ',' +
    formatDate('DD MMMM YYYY', new Date(event.start)) +
    '</div>'
  minTime.value = event.slot === 1 ? '07:00' : '12:00'
  maxTime.value = event.slot === 1 ? '13:00' : '18:00'
  isEdit.value = true
  tempShift.value = { ...event }
  // fill popup form with event data
  loadPopupForm(event)
  isPopupOpen.value = true
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  const event = args.event
  const slot = mySlots.find((s) => s.id === event.slot)
  popupButtons.value = [
    'cancel',
    {
      handler: () => {
        saveShift()
      },
      keyCode: 'enter',
      text: 'Add',
      cssClass: 'mbsc-popup-button-primary'
    }
  ]
  headerText.value =
    '<div>New shift</div><div class="employee-shifts-day">' +
    formatDate('DDDD', new Date(event.start as string)) +
    ' ' +
    slot!.name +
    ',' +
    formatDate('DD MMMM YYYY', new Date(event.start as string)) +
    '</div>'
  isEdit.value = false
  minTime.value = event.slot === 1 ? '07:00' : '12:00'
  maxTime.value = event.slot === 1 ? '13:00' : '18:00'
  tempShift.value = event
  // fill popup form with event data
  loadPopupForm(event)
  // open the popup
  isPopupOpen.value = true
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  deleteEvent(args.event)
}

function handlePopupClose() {
  if (!isEdit.value) {
    // refresh the list, if add popup was canceled, to remove the temporary event
    shifts.value = [...shifts.value]
  }
  isPopupOpen.value = false
}

function myDefaultEvent(args: MbscCalendarEvent) {
  const d: any = args.start
  const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), args.slot === 1 ? 7 : 12)
  const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), args.slot === 1 ? 13 : 18)

  return {
    title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
    start: start,
    end: end,
    resource: args.resource
  }
}
</script>

<template>
  <MbscEventcalendar
    cssClass="md-employee-shifts"
    :view="myView"
    :data="shifts"
    :resources="staff"
    :slots="mySlots"
    :invalid="myInvalid"
    :dragToCreate="false"
    :dragToResize="false"
    :dragToMove="true"
    :clickToCreate="true"
    :extendDefaultEvent="myDefaultEvent"
    @event-click="handleEventClick"
    @event-created="handleEventCreated"
    @event-deleted="handleEventDeleted"
  >
    <template #resource="resource">
      <div class="employee-shifts-cont">
        <div class="employee-shifts-name">{{ resource.name }}</div>
        <div class="employee-shifts-title">{{ resource.title }}</div>
        <img class="employee-shifts-avatar" :src="resource.img" />
      </div>
    </template>
  </MbscEventcalendar>
  <MbscPopup
    cssClass="employee-shifts-popup"
    display="bottom"
    :fullScreen="true"
    :contentPadding="false"
    :headerText="headerText"
    :buttons="popupButtons"
    :isOpen="isPopupOpen"
    :responsive="responsivePopup"
    @close="handlePopupClose"
  >
    <div class="mbsc-form-group">
      <MbscInput ref="startInput" label="Shift start" :dropdown="true" />
      <MbscInput ref="endInput" label="Shift end" :dropdown="true" />
      <MbscDatepicker
        v-model="shiftDate"
        display="anchored"
        select="range"
        timeWheels="|h:mm A|"
        :controls="['time']"
        :startInput="startInput"
        :endInput="endInput"
        :showRangeLabels="false"
        :touchUi="false"
        :stepMinute="30"
        :minTime="minTime"
        :maxTime="maxTime"
      />
    </div>
    <div class="mbsc-form-group">
      <MbscTextarea label="Notes" v-model="shiftNotes" @change="notesChange" />
    </div>
    <div v-if="isEdit" class="mbsc-button-group">
      <MbscButton
        className="mbsc-button-block"
        color="danger"
        variant="outline"
        @click="handleDelete"
      >
        Delete shift
      </MbscButton>
    </div>
  </MbscPopup>
  <MbscSnackbar
    message="Event deleted"
    :button="snackbarButton"
    :isOpen="isSnackbarOpen"
    @close="isSnackbarOpen = false"
  />
</template>

<style>
.employee-shifts-day {
  font-size: 14px;
  font-weight: 600;
  opacity: 0.6;
}

.employee-shifts-popup .mbsc-popup .mbsc-popup-header {
  padding-top: 8px;
  padding-bottom: 8px;
}

.employee-shifts-cont {
  position: relative;
  padding-left: 42px;
  max-height: 40px;
}

.employee-shifts-avatar {
  position: absolute;
  max-height: 40px;
  max-width: 40px;
  top: 18px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  left: 20px;
}

.employee-shifts-name {
  font-size: 15px;
}

.employee-shifts-title {
  font-size: 12px;
}

.md-employee-shifts .mbsc-timeline-resource,
.md-employee-shifts .mbsc-timeline-resource-col {
  width: 200px;
  align-items: center;
  display: flex;
}

.md-employee-shifts .mbsc-schedule-event {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
}
</style>
