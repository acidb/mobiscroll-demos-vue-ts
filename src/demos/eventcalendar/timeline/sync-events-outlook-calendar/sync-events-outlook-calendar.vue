<script setup lang="ts">
import { outlookCalendarSync } from '@mobiscroll/calendar-integration'
import {
  MbscButton,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscConfirm,
  MbscEventcalendar,
  MbscPage,
  MbscPopup,
  MbscSwitch,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventDeleteEvent,
  MbscEventUpdateEvent,
  MbscPageLoadingEvent,
  MbscResource
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const myResources = ref<MbscResource[]>([])
const myInvalids = ref<any>([])
const isEditable = ref<boolean>(false)
const isLoggedIn = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const isHidden = ref<boolean>(true)
const calendarIds = ref<any>([])
const myCalendars = ref<any>([])
const myReadonlyCalendars = ref<any>([])
const mySelectedDate = ref<any>(new Date())
const startDate = ref<any>(null)
const endDate = ref<any>(null)
const debounce = ref<any>(null)
const calendarData = ref<any>({})
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
const confirmTitle = ref<string>('')
const confirmMessage = ref<string>('')
const confirmOkText = ref<string>('')
const isConfirmOpen = ref<boolean>(false)
const confirmCallback = ref<any>(null)
const isPopupOpen = ref<boolean>(false)
const myAnchor = ref<any>(null)
const buttonRef = ref<any>(null)

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    eventList: true
  }
}

function onError(resp: any) {
  toastMessage.value = resp.error ? resp.error : resp.result.error.message
  isToastOpen.value = true
}

function toggleCalendars(ev: any, calendarId: string) {
  const checked = ev.target.checked
  calendarData.value[calendarId].checked = checked

  if (checked) {
    isLoading.value = true
    calendarIds.value = [...calendarIds.value, calendarId]
    outlookCalendarSync
      .getEvents([calendarId], startDate.value, endDate.value)
      .then((events: MbscCalendarEvent[]) => {
        const newResource = calendarData.value[calendarId]
        isLoading.value = false
        myResources.value = [
          ...myResources.value,
          { id: calendarId, name: newResource.name, color: newResource.color }
        ]
        events.forEach((event) => {
          event.resource = event.outlookCalendarId
        })
        myEvents.value = [...myEvents.value, ...events]
      })
      .catch(onError)
  } else {
    myResources.value = myResources.value.filter((item: any) => item.id !== calendarId)
    calendarIds.value = calendarIds.value.filter((id: string) => id !== calendarId)
    myEvents.value = myEvents.value.filter((item: any) => item.outlookCalendarId !== calendarId)
  }
}

function navigate() {
  mySelectedDate.value = new Date()
}

function signOut() {
  outlookCalendarSync.signOut().catch((error: any) => {
    onError(error)
  })
}

function signIn() {
  if (!outlookCalendarSync.isSignedIn()) {
    outlookCalendarSync.signIn().catch((error: any) => {
      onError(error)
    })
  }
}

function handleSelectedDateChange(args: any) {
  mySelectedDate.value = args.date
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  clearTimeout(debounce.value)
  startDate.value = args.viewStart
  endDate.value = args.viewEnd
  debounce.value = setTimeout(() => {
    if (outlookCalendarSync.isSignedIn()) {
      isLoading.value = true
      outlookCalendarSync
        .getEvents(calendarIds.value, startDate.value, endDate.value)
        .then((events: MbscCalendarEvent[]) => {
          events.forEach((event: MbscCalendarEvent) => {
            event.resource = event.outlookCalendarId
          })
          myEvents.value = events
          isLoading.value = false
        })
        .catch(onError)
    }
  }, 200)
}

function handleEventCreate(args: MbscEventCreateEvent) {
  if (outlookCalendarSync.isSignedIn()) {
    const event = args.event
    const calendarId: any = event.resource

    if (myReadonlyCalendars.value.indexOf(calendarId) !== -1) {
      toastMessage.value = 'This calendar is readonly'
      isToastOpen.value = true
    } else {
      outlookCalendarSync
        .addEvent(calendarId, event)
        .then((newEvent: MbscCalendarEvent) => {
          newEvent.resource = event.resource
          myEvents.value = [...myEvents.value, newEvent]
          toastMessage.value =
            'Event created in "' + calendarData.value[calendarId].name + '" calendar'
          isToastOpen.value = true
        })
        .catch((error: any) => {
          myEvents.value = [...myEvents.value]
          onError(error)
        })
    }
  }
}
function handleEventUpdate(args: MbscEventUpdateEvent) {
  if (outlookCalendarSync.isSignedIn()) {
    confirmTitle.value = 'Are you sure you want to update this event?'
    confirmMessage.value = 'This action will affect your Outlook Calendar event.'
    confirmOkText.value = 'Update'
    confirmCallback.value = function (result: any) {
      const event = args.event
      if (result) {
        const calendarId = event.outlookCalendarId
        outlookCalendarSync
          .updateEvent(calendarId, event)
          .then(() => {
            toastMessage.value =
              'Event updated on "' + calendarData.value[calendarId].name + '" calendar'
            isToastOpen.value = true
          })
          .catch((error: any) => {
            myEvents.value = [
              ...myEvents.value.filter((item: any) => item.id !== event.id),
              args.oldEvent!
            ]
            onError(error)
          })
      } else {
        myEvents.value = [
          ...myEvents.value.filter((item: any) => item.id !== event.id),
          args.oldEvent!
        ]
      }
    }
  }
  isConfirmOpen.value = true
}
function handleEventDelete(args: MbscEventDeleteEvent) {
  if (outlookCalendarSync.isSignedIn()) {
    confirmTitle.value = 'Are you sure you want to delete this event?'
    confirmMessage.value = 'This action will remove the event from your Outlook Calendar as well.'
    confirmOkText.value = 'Delete'
    confirmCallback.value = function (result: any) {
      if (result) {
        const event = args.event
        const calendarId = event.outlookCalendarId
        outlookCalendarSync
          .deleteEvent(calendarId, event)
          .then(() => {
            myEvents.value = myEvents.value.filter((item: any) => item.id !== event.id)
            toastMessage.value =
              'Event deleted from "' + calendarData.value[calendarId].name + '" calendar'
            isToastOpen.value = true
          })
          .catch(onError)
      } else {
        myEvents.value = [...myEvents.value]
      }
    }
    isConfirmOpen.value = true
  }
  return false
}

function handleToastClose() {
  isToastOpen.value = false
}

function handleConfirmClose() {
  isConfirmOpen.value = false
}

function handlePopupClose() {
  isPopupOpen.value = false
}

function openPopup() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isPopupOpen.value = true
}

onMounted(() => {
  function onSignedIn() {
    isLoggedIn.value = true
    outlookCalendarSync
      .getCalendars()
      .then((calendars) => {
        const newCalendarIds = []
        const newResources = []
        const calData: any = {}
        const readonlyCals = []

        calendars.sort((c: any) => (c.primary ? -1 : 1))

        for (const c of calendars) {
          newCalendarIds.push(c.id)
          newResources.push({ id: c.id, name: c.name, color: c.hexColor })
          calData[c.id] = { name: c.name, color: c.hexColor, checked: true }
          if (!(c.accessRole === 'writer' || c.accessRole === 'owner')) {
            readonlyCals.push(c.id)
          }
        }

        calendarIds.value = newCalendarIds
        myResources.value = newResources
        calendarData.value = calData
        myReadonlyCalendars.value = readonlyCals
        myCalendars.value = calendars
        isLoading.value = true
        myInvalids.value = [
          {
            recurring: {
              repeat: 'daily',
              interval: 1
            },
            resource: readonlyCals
          }
        ]

        return outlookCalendarSync.getEvents(newCalendarIds, startDate.value, endDate.value)
      })
      .then((events: MbscCalendarEvent[]) => {
        events.forEach((event) => {
          event.resource = event.outlookCalendarId
        })
        myEvents.value = events
        isLoading.value = false
      })
      .catch(onError)
  }

  const onSignedOut = () => {
    isLoggedIn.value = false
    myCalendars.value = []
    calendarIds.value = []
    calendarData.value = {}
    myEvents.value = []
    myResources.value = []
    isPopupOpen.value = false
  }

  isHidden.value = false

  // init outlook client
  outlookCalendarSync.init({
    clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
    redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
    onSignedIn: onSignedIn,
    onSignedOut: onSignedOut
  })
})
</script>

<template>
  <MbscPage :className="'md-sync-events-outlook-cont' + (isLoading ? ' md-loading-events' : '')">
    <MbscEventcalendar
      :view="myView"
      :data="myEvents"
      :resources="myResources"
      :invalid="myInvalids"
      :exclusiveEndDates="true"
      :clickToCreate="isEditable"
      :dragToCreate="isEditable"
      :dragToMove="isEditable"
      :dragToResize="isEditable"
      :selectedDate="mySelectedDate"
      @page-loading="handlePageLoading"
      @event-create="handleEventCreate"
      @event-update="handleEventUpdate"
      @event-deleted="handleEventDelete"
      @selected-date-change="handleSelectedDateChange"
    >
      <template #header>
        <MbscCalendarNav className="md-sync-events-outlook-nav" />
        <div class="md-spinner">
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
          <div class="md-spinner-blade"></div>
        </div>
        <div class="md-outlook-calendar-buttons">
          <MbscButton
            v-if="isLoggedIn"
            ref="buttonRef"
            @click="openPopup"
            className="md-sync-events-outlook-button"
          >
            My Calendars
          </MbscButton>
          <MbscButton v-if="!isLoggedIn" @click="signIn" className="md-sync-events-outlook-button"
            >Sync my outlook calendars</MbscButton
          >
          <MbscButton @click="navigate">Today</MbscButton>
          <MbscCalendarPrev />
          <MbscCalendarNext />
        </div>
      </template>
    </MbscEventcalendar>
    <MbscPopup
      display="anchored"
      :anchor="myAnchor"
      :width="400"
      :touchUi="false"
      :showOverlay="false"
      :scrollLock="false"
      :contentPadding="false"
      :isOpen="isPopupOpen"
      @close="handlePopupClose"
    >
      <div class="mbsc-form-group-inset mbsc-align-center">
        <p class="mbsc-italic mbsc-txt-muted">
          Editing events sync back to your calendar when enabled. You'll be asked for confirmation
          on every action.
        </p>
      </div>
      <div class="mbsc-form-group-inset">
        <MbscSwitch label="Enable editing" v-model="isEditable" />
      </div>
      <div class="mbsc-form-group-inset md-sync-events-outlook-inset">
        <div class="mbsc-form-group-title">My Calendars</div>
        <template v-for="cal in myCalendars" :key="cal.id">
          <MbscSwitch
            :label="cal.name"
            v-model="calendarData[cal.id].checked"
            @change="toggleCalendars($event, cal.id)"
          />
        </template>
      </div>
      <div class="mbsc-form-group-inset">
        <MbscButton className="md-sync-events-outlook-button mbsc-button-block" @click="signOut"
          >Log out of my account</MbscButton
        >
      </div>
    </MbscPopup>
  </MbscPage>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  <MbscConfirm
    :title="confirmTitle"
    :message="confirmMessage"
    :okText="confirmOkText"
    :isOpen="isConfirmOpen"
    :callback="confirmCallback"
    @close="handleConfirmClose"
  />
</template>

<style>
.md-outlook-calendar-buttons {
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}

.md-sync-events-outlook-calendar {
  border-left: 1px solid #ccc;
}

.md-outlook-calendar-header {
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
}

.md-sync-events-outlook-nav {
  justify-content: flex-start;
}

.md-sync-events-outlook-button.mbsc-button {
  text-transform: capitalize;
}

.md-sync-events-outlook-inset {
  margin-bottom: 0;
}

/* loading spinner and overlay */

.md-loading-events .md-sync-events-overlay {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.md-spinner {
  visibility: hidden;
  position: relative;
  width: 20px;
  height: 20px;
}

.md-loading-events .md-spinner {
  visibility: visible;
}

.md-spinner .md-spinner-blade {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 10%;
  height: 25%;
  border-radius: 50%/20%;
  background-color: #8c8c8c;
  -webkit-animation: md-spinner-fade 1s linear infinite;
  animation: md-spinner-fade 1s linear infinite;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

.md-spinner .md-spinner-blade:nth-child(1) {
  -webkit-animation-delay: -1.66667s;
  animation-delay: -1.66667s;
  -webkit-transform: rotate(30deg) translate(0, -150%);
  transform: rotate(30deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(2) {
  -webkit-animation-delay: -1.58333s;
  animation-delay: -1.58333s;
  -webkit-transform: rotate(60deg) translate(0, -150%);
  transform: rotate(60deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(3) {
  -webkit-animation-delay: -1.5s;
  animation-delay: -1.5s;
  -webkit-transform: rotate(90deg) translate(0, -150%);
  transform: rotate(90deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(4) {
  -webkit-animation-delay: -1.41667s;
  animation-delay: -1.41667s;
  -webkit-transform: rotate(120deg) translate(0, -150%);
  transform: rotate(120deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(5) {
  -webkit-animation-delay: -1.33333s;
  animation-delay: -1.33333s;
  -webkit-transform: rotate(150deg) translate(0, -150%);
  transform: rotate(150deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(6) {
  -webkit-animation-delay: -1.25s;
  animation-delay: -1.25s;
  -webkit-transform: rotate(180deg) translate(0, -150%);
  transform: rotate(180deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(7) {
  -webkit-animation-delay: -1.16667s;
  animation-delay: -1.16667s;
  -webkit-transform: rotate(210deg) translate(0, -150%);
  transform: rotate(210deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(8) {
  -webkit-animation-delay: -1.08333s;
  animation-delay: -1.08333s;
  -webkit-transform: rotate(240deg) translate(0, -150%);
  transform: rotate(240deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(9) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  -webkit-transform: rotate(270deg) translate(0, -150%);
  transform: rotate(270deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(10) {
  -webkit-animation-delay: -0.91667s;
  animation-delay: -0.91667s;
  -webkit-transform: rotate(300deg) translate(0, -150%);
  transform: rotate(300deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(11) {
  -webkit-animation-delay: -0.83333s;
  animation-delay: -0.83333s;
  -webkit-transform: rotate(330deg) translate(0, -150%);
  transform: rotate(330deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(12) {
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
  -webkit-transform: rotate(360deg) translate(0, -150%);
  transform: rotate(360deg) translate(0, -150%);
}

.md-loading-events .md-spinner-blade {
  -webkit-animation-play-state: running;
  animation-play-state: running;
}

@-webkit-keyframes md-spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}

@keyframes md-spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
</style>
