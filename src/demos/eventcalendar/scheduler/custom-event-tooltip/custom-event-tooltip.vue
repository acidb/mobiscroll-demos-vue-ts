<script setup lang="ts">
import {
  formatDate,
  MbscButton,
  MbscEventcalendar,
  MbscPopup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const doctors: MbscResource[] = [
  {
    id: 1,
    name: 'Dr. Breanne Lorinda',
    color: '#b33d3d'
  },
  {
    id: 2,
    name: 'Dr. Ryan Melicent',
    color: '#309346'
  },
  {
    id: 3,
    name: 'Dr. Meredith Chantelle',
    color: '#c77c0a'
  }
]

const appointments = ref<MbscCalendarEvent[]>([
  {
    title: 'Jude Chester',
    age: 69,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,8,45)',
    confirmed: false,
    reason: 'Headaches morning & afternoon',
    location: 'Topmed, Building A, Room 203',
    resource: 1
  },
  {
    title: 'Leon Porter',
    age: 44,
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,9,45)',
    confirmed: false,
    reason: 'Left abdominal pain',
    location: 'Topmed, Building D, Room 360',
    resource: 1
  },
  {
    title: 'Merv Kenny',
    age: 56,
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,10,45)',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Topmed, Building D, Room 360',
    resource: 1
  },
  {
    title: 'Derek Austyn',
    age: 72,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,13,45)',
    confirmed: false,
    reason: 'Nausea & weakness',
    location: 'Rose Medical Center, Room 18',
    resource: 1
  },
  {
    title: 'Jenifer Kalyn',
    age: 65,
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,14,45)',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Rose Medical Center, Room 18',
    resource: 1
  },
  {
    title: 'Lily Racquel',
    age: 54,
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,10,45)',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Procare, Building C, Room 12',
    resource: 2
  },
  {
    title: 'Mia Sawyer',
    age: 59,
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,45)',
    confirmed: true,
    reason: 'Difficulty sleeping & loss of appetite',
    location: 'Procare, Building C, Room 12',
    resource: 2
  },
  {
    title: 'Fred Valdez',
    age: 62,
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,15,45)',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Procare, Building C, Room 40',
    resource: 2
  },
  {
    title: 'Sylvia Cale',
    age: 41,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,8,45)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'MedStar, Building A, Room 1',
    resource: 3
  },
  {
    title: 'Isadora Lyric',
    age: 30,
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,9,45)',
    confirmed: false,
    reason: 'Constant tiredness & weakness',
    location: 'MedStar, Building A, Room 1',
    resource: 3
  },
  {
    title: 'Jon Candace',
    age: 63,
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,12,45)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'MedStar, Building A, Room 1',
    resource: 3
  },
  {
    title: 'Layton Drake',
    age: 57,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,13,45)',
    confirmed: true,
    reason: 'Headaches & loss of appetite',
    location: 'Vitalife, Room 160',
    resource: 3
  },
  {
    title: 'Florence Amy',
    age: 73,
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,14,45)',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitalife, Room 160',
    resource: 3
  },
  {
    title: 'Willis Kane',
    age: 44,
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,8,45)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Care Cente, Room 320r',
    resource: 1
  },
  {
    title: 'Theo Calanthia',
    age: 60,
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,9,45)',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 320',
    resource: 1
  },
  {
    title: 'Ford Kaiden',
    age: 53,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,14,45)',
    confirmed: true,
    reason: 'Nausea & vomiting',
    location: 'Care Center, Room 206',
    resource: 1
  },
  {
    title: 'Jewell Ryder',
    age: 75,
    start: 'dyndatetime(y,m,d+1,15)',
    end: 'dyndatetime(y,m,d+1,15,45)',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Care Center, Room 206',
    resource: 1
  },
  {
    title: 'Antonia Cindra',
    age: 48,
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,12,45)',
    confirmed: true,
    reason: 'Dry, persistent cough',
    location: 'Medica Zone, Building C, Room 2',
    resource: 3
  },
  {
    title: 'Gerry Irma',
    age: 50,
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,13,45)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Building C, Room 2',
    resource: 3
  },
  {
    title: 'Carlyn Dorothy',
    age: 36,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,14,45)',
    confirmed: true,
    reason: 'Tiredness & muscle pain',
    location: 'Medica Zone, Building C, Room 2',
    resource: 3
  },
  {
    title: 'Alma Potter',
    age: 74,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,10,45)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
  },
  {
    title: 'Debra Aguilar',
    age: 47,
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,45)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
  },
  {
    title: 'Tommie Love',
    age: 42,
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,12,45)',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
  },
  {
    title: 'Marjorie White',
    age: 55,
    start: 'dyndatetime(y,m,d-1,13)',
    end: 'dyndatetime(y,m,d-1,13,45)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
  },
  {
    title: 'Brandon Perkins',
    age: 68,
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,14,45)',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
  },
  {
    title: 'Lora Wilson',
    age: 66,
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,15,45)',
    confirmed: false,
    reason: 'Fever & headache',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
  },
  {
    title: 'Ismael Bates',
    age: 58,
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,8,45)',
    confirmed: false,
    reason: 'Tiredness & muscle pain',
    location: 'Care Center, Room 300',
    resource: 2
  },
  {
    title: 'Archie Wilkins',
    age: 69,
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,9,45)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Care Center, Room 300',
    resource: 2
  },
  {
    title: 'Christie Baker',
    age: 71,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,10,45)',
    confirmed: true,
    reason: 'Headaches morning & afternoon',
    location: 'Care Center, Room 300',
    resource: 2
  },
  {
    title: 'Laura Shelton',
    age: 45,
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,12,45)',
    confirmed: false,
    reason: 'Dry, persistent cough',
    location: 'Care Center, Room 300',
    resource: 2
  },
  {
    title: 'Mary Hudson',
    age: 77,
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,9,45)',
    confirmed: true,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Room 45',
    resource: 3
  },
  {
    title: 'Ralph Rice',
    age: 64,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,10,45)',
    confirmed: true,
    reason: 'Left abdominal pain',
    location: 'Medica Zone, Room 45',
    resource: 3
  },
  {
    title: 'Marc Hoffman',
    age: 53,
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,12,45)',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Medica Zone, Room 45',
    resource: 3
  },
  {
    title: 'Arlene Lyons',
    age: 41,
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,14,45)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'Care Center, Room 202',
    resource: 3
  },
  {
    title: 'Thelma Shaw',
    age: 26,
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,15,45)',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 202',
    resource: 3
  },
  {
    title: 'Dory Edie',
    age: 45,
    start: 'dyndatetime(y,m,d-2,9)',
    end: 'dyndatetime(y,m,d-2,9,45)',
    confirmed: true,
    reason: 'Right abdominal pain',
    location: 'Vitacure, Building A, Room 203',
    resource: 2
  },
  {
    title: 'Kaylin Toni',
    age: 68,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,10,45)',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Vitacure, Building A, Room 203',
    resource: 2
  },
  {
    title: 'Gray Kestrel',
    age: 60,
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,12,45)',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Vitacure, Building A, Room 203',
    resource: 2
  },
  {
    title: 'Reg Izabelle',
    age: 41,
    start: 'dyndatetime(y,m,d-2,14)',
    end: 'dyndatetime(y,m,d-2,14,45)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Medica Zone, Room 13',
    resource: 2
  },
  {
    title: 'Lou Andie',
    age: 76,
    start: 'dyndatetime(y,m,d-2,15)',
    end: 'dyndatetime(y,m,d-2,15,45)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Medica Zone, Room 13',
    resource: 2
  },
  {
    title: 'Yancy Dustin',
    age: 52,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,10,45)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Vitacure, Building E, Room 50',
    resource: 3
  },
  {
    title: 'Terry Clark',
    age: 78,
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,45)',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building E, Room 50',
    resource: 3
  }
])

const myView = ref<MbscEventcalendarView>({
  schedule: {
    type: 'week',
    startDay: 1,
    endDay: 5,
    startTime: '08:00',
    endTime: '16:00',
    allDay: false
  }
})

const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
const tooltipOpen = ref<boolean>(false)
const currentEvent = ref<MbscCalendarEvent>()
const status = ref<string>()
const buttonText = ref<string>()
const buttonType = ref<string>()
const bgColor = ref<string>()
const info = ref<string>()
const time = ref<any>()
const reason = ref<string>()
const location = ref<string>()
const myAnchor = ref<any>()
const timer = ref<any>()
const closeOnOverlayClick = ref(false)

function mouseEnter() {
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

function mouseLeave() {
  timer.value = setTimeout(() => {
    tooltipOpen.value = false
  }, 200)
}

function setStatus() {
  const index = appointments.value.findIndex((item) => item.id === currentEvent.value!.id)
  appointments.value[index].confirmed = !appointments.value[index].confirmed
  tooltipOpen.value = false
  toastMessage.value = 'Appointment ' + (currentEvent.value!.confirmed ? 'confirmed' : 'canceled')
  isToastOpen.value = true
}

function viewFile() {
  tooltipOpen.value = false
  toastMessage.value = 'View file'
  isToastOpen.value = true
}

function deleteApp() {
  appointments.value = appointments.value.filter((item) => item.id !== currentEvent.value!.id)
  tooltipOpen.value = false
  toastMessage.value = 'Appointment deleted'
  isToastOpen.value = true
}

function handleTooltipClose() {
  tooltipOpen.value = false
}

function handleToastClose() {
  isToastOpen.value = false
}

function openTooltip(args: MbscEventClickEvent, closeOption: boolean) {
  const event: any = args.event
  const resource = doctors.find((dr) => dr.id === event.resource)!
  const newTime =
    formatDate('hh:mm A', new Date(event.start)) +
    ' - ' +
    formatDate('hh:mm A', new Date(event.end))

  currentEvent.value = event

  if (event.confirmed) {
    status.value = 'Confirmed'
    buttonText.value = 'Cancel appointment'
    buttonType.value = 'warning'
  } else {
    status.value = 'Canceled'
    buttonText.value = 'Confirm appointment'
    buttonType.value = 'success'
  }

  bgColor.value = resource.color
  info.value = event.title + ', Age: ' + event.age
  time.value = newTime
  reason.value = event.reason
  location.value = event.location

  clearTimeout(timer.value)
  timer.value = null

  myAnchor.value = args.domEvent.currentTarget || args.domEvent.target
  closeOnOverlayClick.value = closeOption
  tooltipOpen.value = true
}

function handleEventHoverIn(args: MbscEventClickEvent) {
  openTooltip(args, false)
}

function handleEventHoverout() {
  if (!timer.value) {
    timer.value = setTimeout(() => {
      tooltipOpen.value = false
    }, 200)
  }
}

function handleEventClick(args: MbscEventClickEvent) {
  openTooltip(args, true)
}
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :resources="doctors"
    :data="appointments"
    :clickToCreate="false"
    :dragToCreate="false"
    :showEventTooltip="false"
    @event-hover-in="handleEventHoverIn"
    @event-hover-out="handleEventHoverout"
    @event-click-in="handleEventClick"
  />
  <MbscPopup
    className="md-tooltip"
    display="anchored"
    :anchor="myAnchor"
    :touchUi="false"
    :showOverlay="false"
    :contentPadding="false"
    :closeOnOverlayClick="closeOnOverlayClick"
    :width="350"
    :isOpen="tooltipOpen"
    @close="handleTooltipClose"
  >
    <div @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
      <div class="md-tooltip-header" :style="{ background: bgColor }">
        <span class="md-tooltip-name-age">{{ info }}</span>
        <span class="md-tooltip-time">{{ time }}</span>
      </div>
      <div class="md-tooltip-info">
        <div class="md-tooltip-title">
          Status: <span class="md-tooltip-status md-tooltip-text">{{ status }}</span>
          <MbscButton
            :color="buttonType"
            variant="outline"
            className="md-tooltip-status-button"
            @click="setStatus()"
          >
            {{ buttonText }}
          </MbscButton>
        </div>
        <div class="md-tooltip-title">
          Reason for visit: <span class="md-tooltip-reason md-tooltip-text">{{ reason }}</span>
        </div>
        <div class="md-tooltip-title">
          Location: <span class="md-tooltip-location md-tooltip-text">{{ location }}</span>
        </div>
        <MbscButton color="secondary" className="md-tooltip-view-button" @click="viewFile()">
          View patient file
        </MbscButton>
        <MbscButton
          color="danger"
          variant="outline"
          className="md-tooltip-delete-button"
          @click="deleteApp()"
        >
          Delete appointment
        </MbscButton>
      </div>
    </div>
  </MbscPopup>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-tooltip .mbsc-popup-content {
  padding: 0;
}

.md-tooltip {
  font-size: 15px;
  font-weight: 600;
}

.md-tooltip-header {
  padding: 12px 16px;
  color: #eee;
}

.md-tooltip-info {
  padding: 16px 16px 60px 16px;
  position: relative;
  line-height: 32px;
}

.md-tooltip-time,
.md-tooltip-status-button {
  float: right;
}

.md-tooltip-title {
  margin-bottom: 15px;
}

.md-tooltip-text {
  font-weight: 300;
}

.md-tooltip-info .mbsc-button {
  font-size: 14px;
  margin: 0;
}

.md-tooltip-info .mbsc-button.mbsc-material {
  font-size: 12px;
}

.md-tooltip-view-button {
  position: absolute;
  bottom: 16px;
  left: 16px;
}

.md-tooltip-delete-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
}
</style>
