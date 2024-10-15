<script setup lang="ts">
import { googleCalendarSync } from '@mobiscroll/calendar-integration'
import {
  MbscButton,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscEventcalendar,
  MbscPopup,
  MbscSwitch,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscPageLoadingEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calendarData = ref<{ [key: string]: { checked: boolean } }>({})
const calendarIds = ref<string[]>([])
const isLoggedIn = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const isPopupOpen = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const myAnchor = ref<HTMLElement>()
const myCalendars = ref<{ summary: string; id: string }[]>([])
const myEvents = ref<MbscCalendarEvent[]>([])
const mySelectedDate = ref<MbscDateType>(new Date())
const myView: MbscEventcalendarView = { agenda: { type: 'month' } }
const toastMessage = ref<string>('')

const buttonRef = ref<typeof MbscButton>()
const startDate = ref<Date>()
const endDate = ref<Date>()
const timer = ref<ReturnType<typeof setTimeout>>()

function handleError(resp: { error: string; result: { error: { message: string } } }) {
  toastMessage.value = resp.error ? resp.error : resp.result.error.message
  isToastOpen.value = true
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  clearTimeout(timer.value)
  startDate.value = args.viewStart
  endDate.value = args.viewEnd
  timer.value = setTimeout(() => {
    if (googleCalendarSync.isSignedIn()) {
      isLoading.value = true
      googleCalendarSync
        .getEvents(calendarIds.value, startDate.value!, endDate.value!)
        .then((events: MbscCalendarEvent[]) => {
          myEvents.value = events
          isLoading.value = false
        })
        .catch(handleError)
    }
  }, 200)
}

function toggleCalendar(ev: Event, calendarId: string) {
  const checked = (ev.target as HTMLInputElement).checked
  calendarData.value[calendarId].checked = checked
  if (checked) {
    isLoading.value = true
    calendarIds.value = [...calendarIds.value, calendarId]
    googleCalendarSync
      .getEvents([calendarId], startDate.value!, endDate.value!)
      .then((events) => {
        isLoading.value = false
        myEvents.value = [...myEvents.value, ...events]
      })
      .catch(handleError)
  } else {
    calendarIds.value = calendarIds.value.filter((id) => id !== calendarId)
    myEvents.value = myEvents.value.filter((item) => item.googleCalendarId !== calendarId)
  }
}

function openPopup() {
  myAnchor.value = buttonRef.value!.instance.nativeElement
  isPopupOpen.value = true
}

function navigate() {
  mySelectedDate.value = new Date()
}

function signIn() {
  if (!googleCalendarSync.isSignedIn()) {
    googleCalendarSync.signIn().catch(handleError)
  }
}

function signOut() {
  googleCalendarSync.signOut().catch(handleError)
}

onMounted(() => {
  function onSignedIn() {
    isLoggedIn.value = true
    googleCalendarSync
      .getCalendars()
      .then((calendars: { summary: string; id: string; primary: boolean }[]) => {
        const newCalendarIds = []
        const newCalendarData: { [key: string]: { checked: boolean } } = {}

        calendars.sort((c) => (c.primary ? -1 : 1))

        for (const c of calendars) {
          newCalendarIds.push(c.id)
          newCalendarData[c.id] = { checked: true }
        }

        calendarIds.value = newCalendarIds
        calendarData.value = newCalendarData
        myCalendars.value = calendars
        isLoading.value = true

        return googleCalendarSync.getEvents(newCalendarIds, startDate.value!, endDate.value!)
      })
      .then((events: MbscCalendarEvent[]) => {
        myEvents.value = events
        isLoading.value = false
      })
      .catch(handleError)
  }

  const onSignedOut = () => {
    calendarIds.value = []
    calendarData.value = {}
    isLoggedIn.value = false
    isPopupOpen.value = false
    myCalendars.value = []
    myEvents.value = []
  }

  // Init Google client
  googleCalendarSync.init({
    apiKey: '<YOUR_GOOGLE_API_KEY>',
    clientId: '<YOUR_GOOGLE_CLIENT_ID>',
    onSignedIn: onSignedIn,
    onSignedOut: onSignedOut
  })
})
</script>

<template>
  <MbscEventcalendar
    :data="myEvents"
    :exclusiveEndDates="true"
    :selectedDate="mySelectedDate"
    :view="myView"
    @page-loading="handlePageLoading"
    @selected-date-change="mySelectedDate = $event.date"
  >
    <template #header>
      <MbscCalendarNav />
      <div :class="'mds-loader' + (isLoading ? ' mds-loader-visible' : '')"></div>
      <div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
        <MbscButton v-if="isLoggedIn" ref="buttonRef" @click="openPopup">My Calendars</MbscButton>
        <MbscButton v-if="!isLoggedIn" @click="signIn">Sync my Google calendars</MbscButton>
        <MbscButton @click="navigate">Today</MbscButton>
      </div>
      <MbscCalendarPrev />
      <MbscCalendarNext />
    </template>
  </MbscEventcalendar>
  <MbscPopup
    display="anchored"
    :anchor="myAnchor"
    :contentPadding="false"
    :isOpen="isPopupOpen"
    :scrollLock="false"
    :showOverlay="false"
    :touchUi="false"
    :width="400"
    @close="isPopupOpen = false"
  >
    <div class="mbsc-form-group-inset">
      <div class="mbsc-form-group-title">My Calendars</div>
      <MbscSwitch
        v-for="cal in myCalendars"
        :key="cal.id"
        :label="cal.summary"
        v-model="calendarData[cal.id].checked"
        @change="toggleCalendar($event, cal.id)"
      />
    </div>
    <div class="mbsc-form-group-inset">
      <MbscButton cssClass="mbsc-button-block" @click="signOut">Log out of my account</MbscButton>
    </div>
  </MbscPopup>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-loader {
  width: 32px;
  height: 32px;
  border: 4px solid #8c8c8c;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: mds-loader-rotation 1s linear infinite;
  visibility: hidden;
}

.mds-loader-visible {
  visibility: visible;
}

@keyframes mds-loader-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
