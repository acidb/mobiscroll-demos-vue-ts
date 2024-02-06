<script setup lang="ts">
import {
  formatDate,
  MbscButton,
  MbscEventcalendar,
  MbscPopup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscEventClickEvent } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const appointments = ref<MbscCalendarEvent[]>([
  {
    title: 'Jude Chester',
    age: 69,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9)',
    confirmed: false,
    reason: 'Headaches morning & afternoon',
    location: 'Topmed, Building A, Room 203',
    color: '#b33d3d'
  },
  {
    title: 'Leon Porter',
    age: 44,
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,10)',
    confirmed: false,
    reason: 'Left abdominal pain',
    location: 'Topmed, Building D, Room 360',
    color: '#b33d3d'
  },
  {
    title: 'Lily Racquel',
    age: 54,
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,11)',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Procare, Building C, Room 12',
    color: '#309346'
  },
  {
    title: 'Mia Sawyer',
    age: 59,
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,12)',
    confirmed: true,
    reason: 'Difficulty sleeping & loss of appetite',
    location: 'Procare, Building C, Room 12',
    color: '#309346'
  },
  {
    title: 'Jon Candace',
    age: 63,
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,13)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'MedStar, Building A, Room 1',
    color: '#c77c0a'
  },
  {
    title: 'Layton Drake',
    age: 57,
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,14)',
    confirmed: true,
    reason: 'Headaches & loss of appetite',
    location: 'Vitalife, Room 160',
    color: '#c77c0a'
  },
  {
    title: 'Willis Kane',
    age: 44,
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,9)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Care Cente, Room 320r',
    color: '#b33d3d'
  },
  {
    title: 'Theo Calanthia',
    age: 60,
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,10)',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 320',
    color: '#b33d3d'
  },
  {
    title: 'Ford Kaiden',
    age: 53,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,15)',
    confirmed: true,
    reason: 'Nausea & vomiting',
    location: 'Care Center, Room 206',
    color: '#b33d3d'
  },
  {
    title: 'Gerry Irma',
    age: 50,
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,14)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a'
  },
  {
    title: 'Carlyn Dorothy',
    age: 36,
    start: 'dyndatetime(y,m,d+1,14)',
    end: 'dyndatetime(y,m,d+1,15)',
    confirmed: true,
    reason: 'Tiredness & muscle pain',
    location: 'Medica Zone, Building C, Room 2',
    color: '#c77c0a'
  },
  {
    title: 'Alma Potter',
    age: 74,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,11)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
  },
  {
    title: 'Debra Aguilar',
    age: 47,
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,12)',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
  },
  {
    title: 'Marjorie White',
    age: 55,
    start: 'dyndatetime(y,m,d-1,13)',
    end: 'dyndatetime(y,m,d-1,14)',
    confirmed: true,
    reason: 'Back pain',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
  },
  {
    title: 'Lora Wilson',
    age: 66,
    start: 'dyndatetime(y,m,d-1,15)',
    end: 'dyndatetime(y,m,d-1,16)',
    confirmed: false,
    reason: 'Fever & headache',
    location: 'Vitacure, Building D, Room 2',
    color: '#b33d3d'
  },
  {
    title: 'Christie Baker',
    age: 71,
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,11)',
    confirmed: true,
    reason: 'Headaches morning & afternoon',
    location: 'Care Center, Room 300',
    color: '#309346'
  },
  {
    title: 'Arlene Lyons',
    age: 41,
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,15)',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'Care Center, Room 202',
    color: '#c77c0a'
  },
  {
    title: 'Dory Edie',
    age: 45,
    start: 'dyndatetime(y,m,d-2,9)',
    end: 'dyndatetime(y,m,d-2,10)',
    confirmed: true,
    reason: 'Right abdominal pain',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346'
  },
  {
    title: 'Kaylin Toni',
    age: 68,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,11)',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346'
  },
  {
    title: 'Gray Kestrel',
    age: 60,
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,13)',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Vitacure, Building A, Room 203',
    color: '#309346'
  },
  {
    title: 'Lou Andie',
    age: 76,
    start: 'dyndatetime(y,m,d-2,15)',
    end: 'dyndatetime(y,m,d-2,16)',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Medica Zone, Room 13',
    color: '#309346'
  },
  {
    title: 'Yancy Dustin',
    age: 52,
    start: 'dyndatetime(y,m,d-2,10)',
    end: 'dyndatetime(y,m,d-2,11)',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Vitacure, Building E, Room 50',
    color: '#c77c0a'
  },
  {
    title: 'Terry Clark',
    age: 78,
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,12)',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building E, Room 50',
    color: '#c77c0a'
  }
])

const myView = ref<MbscEventcalendarView>({
  calendar: {
    type: 'week'
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

function handleEventHoverIn(args: MbscEventClickEvent) {
  const event: any = args.event
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

  bgColor.value = event.color
  info.value = event.title + ', Age: ' + event.age
  time.value = newTime
  reason.value = event.reason
  location.value = event.location

  clearTimeout(timer.value)
  timer.value = null

  myAnchor.value = args.domEvent.target
  tooltipOpen.value = true
}

function handleEventHoverout() {
  if (!timer.value) {
    timer.value = setTimeout(() => {
      tooltipOpen.value = false
    }, 200)
  }
}

function handleEventClick() {
  tooltipOpen.value = true
}
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="appointments"
    :clickToCreate="false"
    :dragToCreate="false"
    :showEventTooltip="false"
    :height="260"
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
    :closeOnOverlayClick="false"
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
