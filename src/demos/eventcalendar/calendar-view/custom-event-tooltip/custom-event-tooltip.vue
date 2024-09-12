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

const appointment = ref<MbscCalendarEvent>()
const appointmentInfo = ref<string>()
const appointmentLocation = ref<string>()
const appointmentReason = ref<string>()
const appointmentStatus = ref<string>()
const appointmentTime = ref<string>()
const buttonText = ref<string>()
const buttonType = ref<'success' | 'warning'>()
const isTooltipOpen = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')
const tooltipAnchor = ref<HTMLElement>()
const tooltipColor = ref<string>()
const timer = ref<ReturnType<typeof setTimeout>>()

const myView = ref<MbscEventcalendarView>({ calendar: { type: 'week' } })

function openTooltip(args: MbscEventClickEvent) {
  const event: MbscCalendarEvent = args.event
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

  tooltipColor.value = event.color
  tooltipAnchor.value = args.domEvent.target.closest('.mbsc-calendar-label')

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
    :height="260"
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
