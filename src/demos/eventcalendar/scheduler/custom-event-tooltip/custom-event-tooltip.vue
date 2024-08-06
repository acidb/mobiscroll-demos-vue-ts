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
  { id: 1, name: 'Dr. Breanne Lorinda', color: '#b33d3d' },
  { id: 2, name: 'Dr. Ryan Melicent', color: '#309346' },
  { id: 3, name: 'Dr. Meredith Chantelle', color: '#c77c0a' }
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

const appointment = ref<MbscCalendarEvent>()
const appointmentInfo = ref<string>()
const appointmentLocation = ref<string>()
const appointmentReason = ref<string>()
const appointmentStatus = ref<string>()
const appointmentTime = ref<string>()
const buttonText = ref<string>()
const buttonType = ref<string>()
const isTooltipOpen = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')
const tooltipAnchor = ref<HTMLElement>()
const tooltipColor = ref<string>()
const timer = ref<ReturnType<typeof setTimeout>>()

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

function openTooltip(args: MbscEventClickEvent) {
  const event: MbscCalendarEvent = args.event
  const doctor = doctors.find((dr) => dr.id === event.resource)!
  const time =
    formatDate('hh:mm A', new Date(event.start as string)) +
    ' - ' +
    formatDate('hh:mm A', new Date(event.end as string))

  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = undefined
  }

  if (event.confirmed) {
    appointmentStatus.value = 'Confirmed'
    buttonText.value = 'Cancel appointment'
    buttonType.value = 'warning'
  } else {
    appointmentStatus.value = 'Canceled'
    buttonText.value = 'Confirm appointment'
    buttonType.value = 'success'
  }

  appointment.value = event
  appointmentInfo.value = event.title + ', Age: ' + event.age
  appointmentLocation.value = event.location
  appointmentTime.value = time
  appointmentReason.value = event.reason

  tooltipColor.value = doctor.color
  tooltipAnchor.value = args.domEvent.target.closest('.mbsc-schedule-event')

  isTooltipOpen.value = true
}

function handleEventClick() {
  isTooltipOpen.value = true
}

function handleEventDragStart() {
  isTooltipOpen.value = false
}

function handleEventHoverIn(args: MbscEventClickEvent) {
  openTooltip(args)
}

function handleEventHoverout() {
  if (!timer.value) {
    timer.value = setTimeout(() => {
      isTooltipOpen.value = false
    }, 200)
  }
}

function handleMouseEnter() {
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = undefined
  }
}

function handleMouseLeave() {
  timer.value = setTimeout(() => {
    isTooltipOpen.value = false
  }, 200)
}

function updateAppointmentStatus() {
  appointment.value!.confirmed = !appointment.value!.confirmed
  toastMessage.value = 'Appointment ' + (appointment.value!.confirmed ? 'confirmed' : 'canceled')
  isToastOpen.value = true
  isTooltipOpen.value = false
}

function viewAppointmentFile() {
  toastMessage.value = 'View file'
  isToastOpen.value = true
  isTooltipOpen.value = false
}

function deleteAppointment() {
  appointments.value = appointments.value.filter((item) => item.id !== appointment.value!.id)
  toastMessage.value = 'Appointment deleted'
  isToastOpen.value = true
  isTooltipOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    :clickToCreate="false"
    :dragToCreate="false"
    :dragToMove="true"
    :dragToResize="false"
    :data="appointments"
    :resources="doctors"
    :showEventTooltip="false"
    :view="myView"
    @event-click="handleEventClick"
    @event-drag-start="handleEventDragStart"
    @event-hover-in="handleEventHoverIn"
    @event-hover-out="handleEventHoverout"
  />
  <MbscPopup
    display="anchored"
    :anchor="tooltipAnchor"
    :contentPadding="false"
    :isOpen="isTooltipOpen"
    :scrollLock="false"
    :showOverlay="false"
    :touchUi="false"
    :width="380"
    @close="isTooltipOpen = false"
  >
    <div class="mds-tooltip" @mouseenter="handleMouseEnter()" @mouseleave="handleMouseLeave()">
      <div class="mds-tooltip-header" :style="{ background: tooltipColor }">
        <span>{{ appointmentInfo }}</span>
        <span class="mbsc-pull-right">{{ appointmentTime }}</span>
      </div>
      <div class="mbsc-padding">
        <div class="md-tooltip-title">
          Status: <span class="mds-tooltip-label mbsc-margin">{{ appointmentStatus }}</span>
          <MbscButton
            :color="buttonType"
            variant="outline"
            className="mds-tooltip-button mbsc-pull-right"
            @click="updateAppointmentStatus()"
          >
            {{ buttonText }}
          </MbscButton>
        </div>
        <div class="mds-tooltip-label mbsc-margin">
          Reason for visit: <span class="mbsc-light">{{ appointmentReason }}</span>
        </div>
        <div class="mds-tooltip-label mbsc-margin">
          Location: <span class="mbsc-light">{{ appointmentLocation }}</span>
        </div>
        <MbscButton color="secondary" className="mds-tooltip-button" @click="viewAppointmentFile()">
          View patient file
        </MbscButton>
        <MbscButton
          color="danger"
          variant="outline"
          className="mds-tooltip-button mbsc-pull-right"
          @click="deleteAppointment()"
        >
          Delete appointment
        </MbscButton>
      </div>
    </div>
  </MbscPopup>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-tooltip {
  font-size: 15px;
  font-weight: 600;
}

.mds-tooltip-header {
  padding: 12px 16px;
  color: #eee;
}

.mds-tooltip-label {
  line-height: 32px;
}

.mds-tooltip-button.mbsc-button {
  font-size: 14px;
  margin: 0;
}

.mds-tooltip-button.mbsc-material {
  font-size: 12px;
}
</style>
