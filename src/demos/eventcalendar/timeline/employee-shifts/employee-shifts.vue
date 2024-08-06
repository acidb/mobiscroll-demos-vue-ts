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
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscDatepickerValue,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscPopupButton,
  MbscPopupOptions,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const deletedShift = ref<MbscCalendarEvent>()
const isEdit = ref(false)
const isPopupOpen = ref(false)
const isSnackbarOpen = ref(false)
const isToastOpen = ref(false)
const minTime = ref('')
const maxTime = ref('')
const popupHeader = ref('')
const popupButtons = ref<Array<MbscPopupButton | 'cancel'>>([])
const startInput = ref<typeof MbscInput>(null)
const endInput = ref<typeof MbscInput>(null)
const shift = ref<MbscCalendarEvent>()
const shiftDates = ref<MbscDatepickerValue>([])
const shiftNotes = ref('')
const toastMessage = ref('')

const popupResponsive: { [key: string]: MbscPopupOptions } = {
  medium: {
    display: 'center',
    fullScreen: false,
    touchUi: false,
    width: 400
  }
}

const snackbarButton = {
  action: () => {
    shifts.value = [...shifts.value, deletedShift.value!]
  },
  text: 'Undo'
}

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
  { id: 1, name: 'Morning' },
  { id: 2, name: 'Afternoon' }
]

const myInvalids = [
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

function getShiftTimes(event: MbscCalendarEvent) {
  const d = event.start as Date
  const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot === 1 ? 7 : 12)
  const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot === 1 ? 13 : 18)

  return {
    title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
    start: start,
    end: end
  }
}

function fillPopup(event: MbscCalendarEvent, edit: boolean) {
  isEdit.value = edit
  minTime.value = event.slot === 1 ? '07:00' : '12:00'
  maxTime.value = event.slot === 1 ? '13:00' : '18:00'
  shift.value = event
  shiftDates.value = [new Date(event.start as Date), new Date(event.end as Date)]
  shiftNotes.value = event.notes
}

function deleteEvent(event: MbscCalendarEvent) {
  shifts.value = shifts.value.filter((item) => item.id !== event.id)
  deletedShift.value = event
  isSnackbarOpen.value = true
}

function updateEvent(event: MbscCalendarEvent) {
  const index = shifts.value.findIndex((s) => s.id === event.id)
  const newShifts = [...shifts.value]

  newShifts.splice(index, 1, event)

  shifts.value = newShifts
}

function saveEvent(event: MbscCalendarEvent) {
  const dates = shiftDates.value as Date[]
  const start = dates[0]
  const end = dates[1] ? dates[1] : dates[0]

  const shiftStart = new Date(event.start as Date)
  const shiftEnd = new Date(event.end as Date)

  shiftStart.setHours(start.getHours(), start.getMinutes(), 0, 0)
  shiftEnd.setHours(end.getHours(), end.getMinutes(), 0, 0)

  event.start = shiftStart
  event.end = shiftEnd
  event.title = formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end)
  event.notes = shiftNotes.value

  if (isEdit.value) {
    updateEvent(event)
  } else {
    // Add the new event to the list
    shifts.value = [...shifts.value, event]
  }
  isPopupOpen.value = false
}

function handleEventClick(args: MbscEventClickEvent) {
  const event = args.event
  const resource = staff.find((r) => r.id === event.resource)!
  const slot = mySlots.find((s) => s.id === event.slot)!

  fillPopup(event, true)
  popupButtons.value = [
    'cancel',
    {
      handler: () => {
        saveEvent(event)
      },
      keyCode: 'enter',
      text: 'Save',
      cssClass: 'mbsc-popup-button-primary'
    }
  ]
  popupHeader.value =
    '<div>Edit ' +
    resource.name +
    '\'s hours</div><div class="mds-employee-shifts-header">' +
    formatDate('DDDD', new Date(event.start as Date)) +
    ' ' +
    slot.name +
    ', ' +
    formatDate('D MMMM YYYY', new Date(event.start as Date)) +
    '</div>'
  isPopupOpen.value = true
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  const event = args.event
  const slot = mySlots.find((s) => s.id === event.slot)!

  fillPopup(event, false)
  popupButtons.value = [
    'cancel',
    {
      handler: () => {
        saveEvent(event)
      },
      keyCode: 'enter',
      text: 'Add',
      cssClass: 'mbsc-popup-button-primary'
    }
  ]
  popupHeader.value =
    '<div>New shift</div><div class="mds-employee-shifts-header">' +
    formatDate('DDDD', new Date(event.start as Date)) +
    ' ' +
    slot.name +
    ', ' +
    formatDate('D MMMM YYYY', new Date(event.start as Date)) +
    '</div>'
  isPopupOpen.value = true
}

function handleEventCreateFailed() {
  toastMessage.value = "Can't create shift"
  isToastOpen.value = true
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  deleteEvent(args.event)
}

function handleEventUpdated(args: MbscEventUpdatedEvent) {
  const shift = args.event
  if (shift.slot !== args.oldEvent!.slot) {
    const data = getShiftTimes(shift)
    shift.start = data.start
    shift.end = data.end
    shift.title = data.title
    updateEvent(shift)
  }
}

function handleEventUpdateFailed() {
  toastMessage.value = "Can't move shift"
  isToastOpen.value = true
}

function handlePopupClose() {
  if (!isEdit.value) {
    // Remove event if popup is cancelled
    shifts.value = [...shifts.value]
  }
  isPopupOpen.value = false
}

function handleShiftDeleteClick() {
  deleteEvent(shift.value!)
  isPopupOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-employee-shifts"
    :clickToCreate="true"
    :dragToCreate="false"
    :dragToResize="false"
    :dragToMove="true"
    :data="shifts"
    :eventOverlap="false"
    :extendDefaultEvent="getShiftTimes"
    :invalid="myInvalids"
    :resources="staff"
    :slots="mySlots"
    :view="myView"
    @event-click="handleEventClick"
    @event-created="handleEventCreated"
    @event-create-failed="handleEventCreateFailed"
    @event-deleted="handleEventDeleted"
    @event-updated="handleEventUpdated"
    @event-update-failed="handleEventUpdateFailed"
  >
    <template #resource="resource">
      <div class="mbsc-flex">
        <img class="mds-employee-shifts-avatar" :alt="resource.name" :src="resource.img" />
        <div class="mds-employee-shifts-cont">
          <div class="mds-employee-shifts-name">{{ resource.name }}</div>
          <div class="mds-employee-shifts-title">{{ resource.title }}</div>
        </div>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscPopup
    display="bottom"
    :buttons="popupButtons"
    :contentPadding="false"
    :fullScreen="true"
    :headerText="popupHeader"
    :isOpen="isPopupOpen"
    :responsive="popupResponsive"
    :scrollLock="false"
    @close="handlePopupClose"
  >
    <MbscDatepicker
      v-model="shiftDates"
      display="anchored"
      select="range"
      timeWheels="|h:mm A|"
      :controls="['time']"
      :minTime="minTime"
      :maxTime="maxTime"
      :showRangeLabels="false"
      :stepMinute="30"
      :startInput="startInput"
      :endInput="endInput"
      :touchUi="false"
    />
    <div class="mbsc-form-group">
      <MbscInput ref="startInput" label="Shift start" :dropdown="true" />
      <MbscInput ref="endInput" label="Shift end" :dropdown="true" />
    </div>
    <div class="mbsc-form-group">
      <MbscTextarea v-model="shiftNotes" label="Notes" />
    </div>
    <div v-if="isEdit" class="mbsc-button-group">
      <MbscButton
        className="mbsc-button-block"
        color="danger"
        variant="outline"
        @click="handleShiftDeleteClick"
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
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-employee-shifts-header {
  font-size: 14px;
  font-weight: 600;
  opacity: 0.6;
}

.mds-employee-shifts .mbsc-timeline-resource-col {
  width: 200px;
}

.mds-employee-shifts .mbsc-schedule-event-inner {
  text-align: center;
  height: 36px;
  line-height: 36px;
}

.mds-employee-shifts-cont {
  padding: 0 7px;
}

.mds-employee-shifts-name {
  font-size: 14px;
  line-height: 24px;
}

.mds-employee-shifts-title {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.mds-employee-shifts-avatar {
  width: 40px;
  height: 40px;
}
</style>
