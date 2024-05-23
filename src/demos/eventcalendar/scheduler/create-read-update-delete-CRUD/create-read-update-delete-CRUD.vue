<script setup lang="ts">
import {
  MbscButton,
  MbscDatepicker,
  MbscDropdown,
  MbscEventcalendar,
  MbscInput,
  MbscPopup,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscSnackbar,
  MbscSwitch,
  MbscTextarea,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    start: 'dyndatetime(y,m,8,13)',
    end: 'dyndatetime(y,m,8,13,45)',
    title: "Lunch @ Butcher's",
    description: '',
    allDay: false,
    bufferBefore: 15,
    free: true,
    color: '#009788'
  },
  {
    id: 2,
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Conference',
    description: '',
    allDay: false,
    bufferBefore: 30,
    free: false,
    color: '#ff9900'
  },
  {
    id: 3,
    start: 'dyndatetime(y,m,d-1,18)',
    end: 'dyndatetime(y,m,d-1,22)',
    title: 'Site Visit',
    description: '',
    allDay: false,
    bufferBefore: 60,
    free: true,
    color: '#3f51b5'
  },
  {
    id: 4,
    start: 'dyndatetime(y,m,d+1,10,30)',
    end: 'dyndatetime(y,m,d+1,11,30)',
    title: 'Stakeholder mtg.',
    description: '',
    allDay: false,
    free: false,
    color: '#f44437'
  }
])
const myView: MbscEventcalendarView = {
  schedule: {
    type: 'week'
  }
}
const isEdit = ref<boolean>(false)
const popupEventColor = ref<string>('')
const mySelectedDate = ref<Date>()
let addedEvent: MbscCalendarEvent | null = null
let editedEvent: MbscCalendarEvent | null = null

// Popup
const myResponsive: any = {
  medium: {
    display: 'anchored',
    width: 400,
    fullScreen: false,
    touchUi: false
  }
}
const popupEventTitle = ref<string>('')
const popupEventDescription = ref<string>('')
const popupEventDates = ref<any>([])
const popupEventAllDay = ref<boolean>(false)
const popupTravelTime = ref<number>(0)
const popupEventStatus = ref<string>('free')
const popupAnchor = ref<any>(null)
const popupButtons = ref<any>([])
const popupHeaderText = ref<string>('')
const isPopupOpen = ref<boolean>(false)

// Datepicker
const startInput = ref<any>(null)
const endInput = ref<any>(null)

const datePickerControls: any = ['date']
const datePickerResponsive: any = {
  medium: {
    controls: ['calendar'],
    touchUi: false
  }
}
const datetimePickerControls: any = ['datetime']
const datetimePickerResponsive: any = {
  medium: {
    controls: ['calendar', 'time'],
    touchUi: false
  }
}

// Color picker
const colors: string[] = [
  '#ffeb3c',
  '#ff9900',
  '#f44437',
  '#ea1e63',
  '#9c26b0',
  '#3f51b5',
  '',
  '#009788',
  '#4baf4f',
  '#7e5d4e'
]
const colorAnchor = ref<any>(null)
const isColorPickerOpen = ref<boolean>(false)
const tempColor = ref<string>('')
const colorElm = ref<any>(null)
const colorPopup = ref<any>(null)

const colorButtons: any = [
  'cancel',
  {
    text: 'Set',
    keyCode: 'enter',
    handler: () => {
      popupEventColor.value = tempColor.value
      isColorPickerOpen.value = false
    },
    cssClass: 'mbsc-popup-button-primary'
  }
]

const colorResponsive: any = {
  medium: {
    display: 'anchored',
    buttons: {}
  }
}

// Snackbar
const isSnackbarOpen = ref<boolean>(false)
const snackbarButton: any = {
  action: () => {
    myEvents.value = [...myEvents.value, editedEvent!]
  },
  text: 'Undo'
}

// Fills the popup with the event's data
function fillPopup(event: MbscCalendarEvent) {
  popupEventTitle.value = event.title || ''
  popupEventDescription.value = event.description
  popupEventAllDay.value = event.allDay || false
  popupTravelTime.value = event.bufferBefore || 0
  popupEventDates.value = [event.start, event.end]
  popupEventStatus.value = event.status || 'busy'
  popupEventColor.value = event.color || ''
}

function createAddPopup(event: MbscCalendarEvent, target: any) {
  // Hide delete button inside add popup
  isEdit.value = false

  addedEvent = event

  // Set popup header text and buttons
  popupHeaderText.value = 'New event'
  popupButtons.value = [
    'cancel',
    {
      text: 'Add',
      keyCode: 'enter',
      handler: () => {
        const newEvent: MbscCalendarEvent = {
          id: addedEvent!.id,
          title: popupEventTitle.value,
          description: popupEventDescription.value,
          allDay: popupEventAllDay.value,
          bufferBefore: popupTravelTime.value,
          status: popupEventStatus.value,
          start: popupEventDates.value[0],
          end: popupEventDates.value[1],
          color: popupEventColor.value
        }
        myEvents.value = [...myEvents.value, newEvent]
        mySelectedDate.value = popupEventDates.value[0]
        isPopupOpen.value = false
      },
      cssClass: 'mbsc-popup-button-primary'
    }
  ]
  popupAnchor.value = target

  fillPopup(event)
  isPopupOpen.value = true
}

function createEditPopup(event: MbscCalendarEvent, target: any) {
  // Show delete button inside edit popup
  isEdit.value = true

  editedEvent = event
  addedEvent = null

  popupHeaderText.value = 'Edit event'

  // Set popup header text and buttons
  popupButtons.value = [
    'cancel',
    {
      text: 'Save',
      keyCode: 'enter',
      handler: () => {
        const updatedEvent: MbscCalendarEvent = editedEvent!
        updatedEvent.title = popupEventTitle.value
        updatedEvent.description = popupEventDescription.value
        updatedEvent.allDay = popupEventAllDay.value
        updatedEvent.bufferBefore = popupTravelTime.value
        updatedEvent.start = popupEventDates.value[0]
        updatedEvent.end = popupEventDates.value[1]
        updatedEvent.color = popupEventColor.value
        updatedEvent.status = popupEventStatus.value
        // Update event
        let newEventList = [...myEvents.value]
        const index = newEventList.findIndex((x) => x.id === updatedEvent.id)
        newEventList[index] = updatedEvent
        myEvents.value = newEventList

        isPopupOpen.value = false
      },
      cssClass: 'mbsc-popup-button-primary'
    }
  ]
  popupAnchor.value = target
  fillPopup(event)
  isPopupOpen.value = true
}

// Calendar events
function handleEventClick(args: MbscEventClickEvent) {
  createEditPopup(args.event, args.domEvent.currentTarget)
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  createAddPopup(args.event, args.target)
}

function deleteEvent(event: MbscCalendarEvent) {
  myEvents.value = myEvents.value.filter((item) => item.id !== event.id)
  isSnackbarOpen.value = true
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  deleteEvent(args.event)
  isPopupOpen.value = false
}

function handleDeleteClick() {
  deleteEvent(editedEvent!)
}

function handlePopupClose() {
  // Remove event if popup is cancelled
  if (addedEvent) {
    deleteEvent(addedEvent)
  }
  isPopupOpen.value = false
  isColorPickerOpen.value = false
}

function openColorPicker(event: MbscCalendarEvent) {
  tempColor.value = popupEventColor.value || ''
  colorAnchor.value = event.currentTarget
  isColorPickerOpen.value = true
}

function handleColorClick(event: any) {
  const color = event.currentTarget.getAttribute('data-value')
  tempColor.value = color

  if (!colorPopup.value.instance.s.buttons.length) {
    popupEventColor.value = color
    isColorPickerOpen.value = false
  }
}

function handleSnackbarClose() {
  isSnackbarOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    clickToCreate="double"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :selectedDate="mySelectedDate"
    @event-click="handleEventClick"
    @event-created="handleEventCreated"
    @event-deleted="handleEventDeleted"
  />
  <MbscPopup
    display="bottom"
    :contentPadding="false"
    :fullScreen="true"
    :isOpen="isPopupOpen"
    :responsive="myResponsive"
    :anchor="popupAnchor"
    :buttons="popupButtons"
    :headerText="popupHeaderText"
    @close="handlePopupClose"
  >
    <div class="mbsc-form-group">
      <MbscInput label="Title" v-model="popupEventTitle" />
      <MbscTextarea label="Description" v-model="popupEventDescription" />
    </div>
    <div class="mbsc-form-group">
      <MbscSwitch label="All-day" v-model="popupEventAllDay" />

      <MbscInput ref="startInput" label="Starts" />
      <MbscInput ref="endInput" label="Ends" />
      <template v-if="!popupEventAllDay">
        <MbscDropdown v-model="popupTravelTime" label="Travel time">
          <option value="0">None</option>
          <option value="5">5 minutes</option>
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="60">1 hour</option>
          <option value="90">1.5 hours</option>
          <option value="120">2 hours</option>
        </MbscDropdown>
      </template>
      <MbscDatepicker
        v-model="popupEventDates"
        select="range"
        :controls="popupEventAllDay ? datePickerControls : datetimePickerControls"
        :responsive="popupEventAllDay ? datePickerResponsive : datetimePickerResponsive"
        :startInput="startInput"
        :endInput="endInput"
      />
      <div ref="colorElm" class="event-color-c" @click="openColorPicker($event)">
        <div class="event-color-label">Color</div>
        <div class="event-color" :style="{ background: popupEventColor }"></div>
      </div>
      <MbscSegmentedGroup v-model="popupEventStatus">
        <MbscSegmented value="busy" v-model="popupEventStatus">Show as busy</MbscSegmented>
        <MbscSegmented value="free" v-model="popupEventStatus">Show as free</MbscSegmented>
      </MbscSegmentedGroup>
      <div v-if="isEdit" class="mbsc-button-group">
        <MbscButton
          cssClass="mbsc-button-block"
          color="danger"
          variant="outline"
          @click="handleDeleteClick"
          >Delete event
        </MbscButton>
        <MbscSnackbar
          :button="snackbarButton"
          message="Event deleted"
          :isOpen="isSnackbarOpen"
          @close="handleSnackbarClose"
        />
      </div>
    </div>
  </MbscPopup>

  <MbscPopup
    ref="colorPopup"
    display="bottom"
    :anchor="colorAnchor"
    :contentPadding="false"
    :showArrow="false"
    :showOverlay="false"
    :buttons="colorButtons"
    :responsive="colorResponsive"
    :isOpen="isColorPickerOpen"
  >
    <div class="crud-color-row">
      <div v-for="(color, i) in colors" :key="color">
        <div
          v-if="i < 5"
          class="crud-color-c"
          :class="{ selected: tempColor === color }"
          :data-value="color"
          @click="handleColorClick"
        >
          <div
            class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
            :style="{ background: color }"
          ></div>
        </div>
      </div>
    </div>
    <div class="crud-color-row">
      <div v-for="(color, i) in colors" :key="color">
        <div
          v-if="i >= 5"
          class="crud-color-c"
          :class="{ selected: tempColor === color }"
          :data-value="color"
          @click="handleColorClick"
        >
          <div
            class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
            :style="{ background: color }"
          ></div>
        </div>
      </div>
    </div>
  </MbscPopup>
</template>

<style>
.event-color-c {
  display: flex;
  margin: 16px;
  align-items: center;
  cursor: pointer;
}

.event-color-label {
  flex: 1 0 auto;
}

.event-color {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  margin-left: 240px;
  background: #5ac8fa;
}

.crud-color-row {
  display: flex;
  justify-content: center;
  margin: 5px;
}

.crud-color-c {
  padding: 3px;
  margin: 2px;
}

.crud-color {
  position: relative;
  min-width: 46px;
  min-height: 46px;
  margin: 2px;
  cursor: pointer;
  border-radius: 23px;
  background: #5ac8fa;
}

.crud-color-c.selected,
.crud-color-c:hover {
  box-shadow: inset 0 0 0 3px #007bff;
  border-radius: 48px;
}

.crud-color:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
  color: #f7f7f7;
  font-size: 20px;
  text-shadow: 0 0 3px #000;
  display: none;
}

.crud-color-c.selected .crud-color:before {
  display: block;
}
</style>
