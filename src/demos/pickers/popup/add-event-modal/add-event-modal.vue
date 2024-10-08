<script setup lang="ts">
import {
  MbscButton,
  MbscDatepicker,
  MbscEventcalendar,
  MbscInput,
  MbscPage,
  MbscPopup,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscSwitch,
  MbscTextarea,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent } from '@mobiscroll/vue'
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

const mySelectedDate = ref<Date>(new Date())
const isPopupOpen = ref<boolean>(false)
const popupEventAllDay = ref<boolean>(false)
const datePickerControls: any = ['calendar']
const datetimePickerControls: any = ['calendar', 'time']
const popupEventTitle = ref<string>('')
const popupEventDescription = ref<string>('')
const popupEventDates = ref<Date[]>([new Date(), new Date()])
const popupEventStatus = ref<'free' | 'busy'>('free')
const toastMessage = ref<string>('Event added')
const isToastOpen = ref<boolean>(false)

const startInput = ref<any>(null)
const endInput = ref<any>(null)

function openPopup() {
  popupEventTitle.value = 'New Event'
  isPopupOpen.value = true
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-button-group-block">
        <MbscButton @click="openPopup">Add event</MbscButton>
      </div>
    </div>

    <MbscPopup
      :width="400"
      :contentPadding="false"
      headerText="Add new event"
      display="center"
      :isOpen="isPopupOpen"
      :buttons="[
        'cancel',
        {
          text: 'Add',
          keyCode: 'enter',
          handler: function () {
            const newEvent = {
              title: popupEventTitle,
              description: popupEventDescription,
              allDay: popupEventAllDay,
              status: popupEventStatus,
              start: popupEventDates[0],
              end: popupEventDates[1]
            }

            myEvents = [...myEvents, newEvent]
            mySelectedDate = popupEventDates[0]

            isPopupOpen = false
            isToastOpen = true
          },
          cssClass: 'mbsc-popup-button-primary'
        }
      ]"
      @close="isPopupOpen = false"
    >
      <div class="mbsc-form-group">
        <MbscInput label="Title" v-model="popupEventTitle" />
        <MbscTextarea label="Description" v-model="popupEventDescription" />
      </div>
      <div class="mbsc-form-group">
        <MbscSwitch label="All-day" v-model="popupEventAllDay" />

        <MbscInput ref="startInput" label="Starts" />
        <MbscInput ref="endInput" label="Ends" />

        <MbscDatepicker
          v-model="popupEventDates"
          select="range"
          display="anchored"
          :touchUi="true"
          :controls="popupEventAllDay ? datePickerControls : datetimePickerControls"
          :startInput="startInput"
          :endInput="endInput"
          :showRangeLabels="false"
        />
        <MbscSegmentedGroup v-model="popupEventStatus">
          <MbscSegmented value="busy">Show as busy</MbscSegmented>
          <MbscSegmented value="free">Show as free</MbscSegmented>
        </MbscSegmentedGroup>
        <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
      </div>
    </MbscPopup>
    <MbscEventcalendar :selectedDate="mySelectedDate" :data="myEvents"> </MbscEventcalendar>
  </MbscPage>
</template>
