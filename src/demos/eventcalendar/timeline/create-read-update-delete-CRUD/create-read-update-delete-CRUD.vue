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
  MbscDateType,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscPopupButton,
  MbscPopupOptions,
  MbscResource,
  MbscResponsiveOptions
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calendar = ref<typeof MbscEventcalendar>()
const colorPicker = ref<typeof MbscPopup>()

const eventId = ref<string | number | undefined>()
const eventTitle = ref<string>('')
const eventDescription = ref<string>('')
const eventAllDay = ref<boolean>(false)
const eventDates = ref<MbscDateType[]>([])
const startInput = ref<typeof MbscInput>()
const endInput = ref<typeof MbscInput>()
const eventBuffer = ref<number>(0)
const eventColor = ref<string>('')
const eventStatus = ref<boolean>(false)
const eventResource = ref<string | number | (string | number)[]>()

const selectedColor = ref<string>('')
const statusValue = ref<string>('busy')
const editedEvent = ref<MbscCalendarEvent | null>(null)
const isAddEditPopupOpen = ref<boolean>(false)
const addEditPopupAnchor = ref<HTMLElement | undefined>()
const isColorPickerOpen = ref<boolean>(false)
const colorPickerAnchor = ref<HTMLElement | undefined>()
const isEdit = ref<boolean>(false)
const isSuccess = ref<boolean>(false)

const isSnackbarOpen = ref<boolean>(false)

const snackbarButton = {
  action: () => {
    myEvents.value = [...myEvents.value, editedEvent.value!]
  },
  text: 'Undo'
}

const myView: MbscEventcalendarView = { timeline: { type: 'day' } }

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

const myEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,15)',
    title: "Lunch @ Butcher's",
    description: '',
    allDay: false,
    bufferBefore: 15,
    free: true,
    resource: 3
  },
  {
    id: 2,
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Conference',
    description: '',
    allDay: false,
    bufferBefore: 30,
    free: false,
    resource: 5
  },
  {
    id: 3,
    start: 'dyndatetime(y,m,d,18)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Site Visit',
    description: '',
    allDay: false,
    bufferBefore: 60,
    free: true,
    resource: 4
  },
  {
    id: 4,
    start: 'dyndatetime(y,m,d,10,30)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Stakeholder mtg.',
    description: '',
    allDay: false,
    free: false,
    resource: 1
  }
])

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Resource A',
    color: '#ffeb3c'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#f44437'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#3f51b5'
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#4baf4f'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#ff9900'
  }
]

const editButtons: (MbscPopupButton | string)[] = [
  'cancel',
  {
    text: 'Save',
    keyCode: 'enter',
    cssClass: 'mbsc-popup-button-primary',
    handler: () => {
      const updatedEvent = getEventData()
      const index = myEvents.value.findIndex((x) => x.id === updatedEvent.id)
      const newEventList = [...myEvents.value]

      // Update event in the list
      newEventList.splice(index, 1, updatedEvent)
      myEvents.value = newEventList

      calendar.value?.instance.navigateToEvent(updatedEvent)
      isAddEditPopupOpen.value = false
    }
  }
]

const addButtons: (MbscPopupButton | string)[] = [
  'cancel',
  {
    text: 'Add',
    keyCode: 'enter',
    cssClass: 'mbsc-popup-button-primary',
    handler: () => {
      const newEvent = getEventData()

      // Add new event to the list
      myEvents.value = [...myEvents.value, newEvent]

      isSuccess.value = true
      calendar.value?.instance.navigateToEvent(newEvent)
      isAddEditPopupOpen.value = false
    }
  }
]

const addEditPopupResponsive: MbscResponsiveOptions<MbscPopupOptions> = {
  medium: {
    display: 'anchored',
    width: 400,
    fullScreen: false,
    touchUi: false
  }
}

const colorPickerButtons: (MbscPopupButton | string)[] = [
  'cancel',
  {
    text: 'Set',
    keyCode: 'enter',
    handler: () => applySelectedColor(selectedColor.value),
    cssClass: 'mbsc-popup-button-primary'
  }
]

const colorPickerResponsive: MbscResponsiveOptions<MbscPopupOptions> = {
  medium: {
    display: 'anchored',
    buttons: [],
    touchUi: false
  }
}

function fillPopup(event: MbscCalendarEvent, resourceColor: string | undefined) {
  eventId.value = event.id
  eventTitle.value = event.title || ''
  eventDescription.value = event.description || ''
  eventAllDay.value = event.allDay!
  eventDates.value = [event.start!, event.end!]
  eventBuffer.value = event.bufferBefore || 0
  eventColor.value = event.color || resourceColor || ''
  eventStatus.value = event.free || false
  statusValue.value = event.free ? 'free' : 'busy'
  eventResource.value = event.resource
}

function createEditPopup(event: MbscCalendarEvent, target: HTMLElement, color: string | undefined) {
  isEdit.value = true
  editedEvent.value = event
  addEditPopupAnchor.value = target
  fillPopup(event, color)
  isAddEditPopupOpen.value = true
}

function createAddPopup(event: MbscCalendarEvent, target: HTMLElement, color: string | undefined) {
  isSuccess.value = false
  isEdit.value = false
  editedEvent.value = event
  addEditPopupAnchor.value = target
  fillPopup(event, color)
  isAddEditPopupOpen.value = true
}

function getEventData() {
  return {
    id: eventId.value,
    title: eventTitle.value,
    description: eventDescription.value,
    allDay: eventAllDay.value,
    start: eventDates.value[0],
    end: eventDates.value[1],
    bufferBefore: eventBuffer.value,
    color: eventColor.value,
    free: statusValue.value === 'free',
    resource: eventResource.value
  }
}

function handleAddEditPopupClose() {
  if (!isEdit.value && !isSuccess.value) {
    // Refresh the list, if add popup was canceled, to remove the temporary event
    myEvents.value = [...myEvents.value]
  }
  isAddEditPopupOpen.value = false
}

function handleEventClick(args: MbscEventClickEvent) {
  console.log(args.resourceObj)
  createEditPopup(args.event, args.domEvent.currentTarget, args.resourceObj.color)
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  createAddPopup(args.event, args.target!, args.resourceObj!.color)
}

function handleEventDeleted() {
  isSnackbarOpen.value = true
}

function handleDeleteButtonClick() {
  const filteredEvents = myEvents.value.filter((e) => e.id !== editedEvent.value!.id)
  myEvents.value = filteredEvents
  isAddEditPopupOpen.value = false
  isSnackbarOpen.value = true
}

function handleEventColorClick(ev: MouseEvent) {
  colorPickerAnchor.value = ev.currentTarget as HTMLElement
  isColorPickerOpen.value = true
}

function handleColorChange(ev: MouseEvent) {
  const color: string = (ev.currentTarget as HTMLDivElement).getAttribute('data-value') || ''
  eventColor.value = color
  selectedColor.value = color
  if (!colorPicker.value?.instance.s.buttons!.length) {
    applySelectedColor(color)
  }
}

function applySelectedColor(color: string) {
  eventColor.value = color
  isColorPickerOpen.value = false
}

function handleSnackbarClose() {
  isSnackbarOpen.value = false
}

function handleColorPickerClose() {
  isColorPickerOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    ref="calendar"
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :data="myEvents"
    :resources="myResources"
    :view="myView"
    @event-click="handleEventClick"
    @event-created="handleEventCreated"
    @event-deleted="handleEventDeleted"
  />
  <MbscPopup
    display="bottom"
    :contentPadding="false"
    :fullScreen="true"
    :scrollLock="false"
    :headerText="isEdit ? 'Edit event' : 'New Event'"
    :buttons="isEdit ? editButtons : addButtons"
    :anchor="addEditPopupAnchor"
    :responsive="addEditPopupResponsive"
    :isOpen="isAddEditPopupOpen"
    @close="handleAddEditPopupClose"
  >
    <div class="mbsc-form-group">
      <MbscInput label="Title" v-model="eventTitle" />
      <MbscTextarea label="Description" v-model="eventDescription" />
    </div>
    <div class="mbsc-form-group">
      <div>
        <MbscSwitch label="All-day" v-model="eventAllDay" />

        <MbscDatepicker
          v-model="eventDates"
          select="range"
          :controls="eventAllDay ? ['date'] : ['datetime']"
          :responsive="
            eventAllDay
              ? { medium: { controls: ['calendar'], touchUi: false } }
              : { medium: { controls: ['calendar', 'time'], touchUi: false } }
          "
          :startInput="startInput"
          :endInput="endInput"
        />

        <MbscInput ref="startInput" label="Starts" />
        <MbscInput ref="endInput" label="Ends" />

        <MbscDropdown v-if="!eventAllDay" v-model="eventBuffer" label="Travel time">
          <option value="0">None</option>
          <option value="5">5 minutes</option>
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="60">1 hour</option>
          <option value="90">1.5 hours</option>
          <option value="120">2 hours</option>
        </MbscDropdown>
      </div>

      <div class="mbsc-flex mds-crud-event-color-cont" @click="handleEventColorClick($event)">
        <div class="mbsc-flex-1-0">Color</div>
        <div class="mds-crud-selected-event-color" :style="{ background: eventColor }"></div>
      </div>

      <MbscSegmentedGroup v-model="statusValue">
        <MbscSegmented value="busy">Show as busy</MbscSegmented>
        <MbscSegmented value="free">Show as free</MbscSegmented>
      </MbscSegmentedGroup>

      <div v-if="isEdit" class="mbsc-button-group">
        <MbscButton
          cssClass="mbsc-button-block"
          color="danger"
          variant="outline"
          @click="handleDeleteButtonClick"
          >Delete event
        </MbscButton>
      </div>
    </div>
  </MbscPopup>

  <MbscSnackbar
    message="Event deleted"
    :button="snackbarButton"
    :isOpen="isSnackbarOpen"
    @close="handleSnackbarClose"
  />

  <MbscPopup
    ref="colorPicker"
    display="bottom"
    :anchor="colorPickerAnchor"
    :contentPadding="false"
    :showArrow="false"
    :showOverlay="false"
    :buttons="colorPickerButtons"
    :responsive="colorPickerResponsive"
    :isOpen="isColorPickerOpen"
    @close="handleColorPickerClose"
  >
    <div class="mbsc-flex mds-crud-color-row">
      <div v-for="(color, i) in colors" :key="color">
        <div
          v-if="i < 5"
          class="mds-crud-color-value"
          :class="{ 'mds-crud-color-value-selected': eventColor === color }"
          :data-value="color"
          @click="handleColorChange($event)"
        >
          <div
            class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
            :style="{ background: color }"
          ></div>
        </div>
      </div>
    </div>
    <div class="mbsc-flex mds-crud-color-row">
      <div v-for="(color, i) in colors" :key="color">
        <div
          v-if="i >= 5"
          class="mds-crud-color-value"
          :class="{ 'mds-crud-color-value-selected': eventColor === color }"
          :data-value="color"
          @click="handleColorChange($event)"
        >
          <div
            class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
            :style="{ background: color }"
          ></div>
        </div>
      </div>
    </div>
  </MbscPopup>
</template>

<style>
.mds-crud-event-color-cont {
  margin: 16px;
  align-items: center;
  cursor: pointer;
}

.mds-crud-selected-event-color {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  margin-left: 240px;
  background: #5ac8fa;
}

.mds-crud-color-row {
  justify-content: center;
  margin: 5px;
}

.mds-crud-color {
  position: relative;
  min-width: 46px;
  min-height: 46px;
  margin: 2px;
  cursor: pointer;
  border-radius: 23px;
  background: #5ac8fa;
}

.mds-crud-color:before {
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

.mds-crud-color-value {
  padding: 3px;
  margin: 2px;
}

.mds-crud-color-value.mds-crud-color-value-selected,
.mds-crud-color-value:hover {
  box-shadow: inset 0 0 0 3px #007bff;
  border-radius: 48px;
}

.mds-crud-color-value.mds-crud-color-value-selected .mds-crud-color:before {
  display: block;
}
</style>
