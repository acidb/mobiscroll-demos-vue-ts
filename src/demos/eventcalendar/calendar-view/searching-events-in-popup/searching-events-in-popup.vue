<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscInput,
  MbscPopup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageLoadingEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calEvents = ref<MbscCalendarEvent[]>([])
const isPopupOpen = ref<boolean>(false)
const listEvents = ref<MbscCalendarEvent[]>([])
const searchInput = ref<HTMLInputElement>()
const selectedEvent = ref<MbscCalendarEvent[]>([])

const calInst = ref<typeof MbscEventcalendar>()
const timer = ref<ReturnType<typeof setTimeout>>()
const inputRef = ref<typeof MbscInput>()

const calView: MbscEventcalendarView = { calendar: { labels: true } }
const listView: MbscEventcalendarView = { agenda: { type: 'year', size: 5 } }

function handleInputChange(ev: Event) {
  const input = ev.target as HTMLInputElement
  const text = input.value

  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    if (text.length > 0) {
      getJson(
        'https://trial.mobiscroll.com/searchevents/?text=' + text,
        (data: MbscCalendarEvent[]) => {
          listEvents.value = data
          isPopupOpen.value = true
        },
        'jsonp'
      )
    } else {
      isPopupOpen.value = false
    }
  }, 200)
}

function handleInputFocus(ev: Event) {
  const input = ev.target as HTMLInputElement
  if (input.value.length > 0) {
    isPopupOpen.value = true
  }
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  const start = formatDate('YYYY-MM-DD', args.viewStart!)
  const end = formatDate('YYYY-MM-DD', args.viewEnd!)

  setTimeout(() => {
    getJson(
      'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end,
      (data: MbscCalendarEvent[]) => {
        calEvents.value = data
      },
      'jsonp'
    )
  })
}

function handlePopupClose() {
  isPopupOpen.value = false
}

function handleEventClick(args: MbscEventClickEvent) {
  selectedEvent.value = [args.event]
  isPopupOpen.value = false
  calInst.value?.instance.navigateToEvent(args.event)
}

function handleInit() {
  setTimeout(() => {
    searchInput.value = inputRef.value.instance.nativeElement
  })
}
</script>

<template>
  <MbscEventcalendar
    ref="calInst"
    :clickToCreate="false"
    :dragToCreate="false"
    :dragToMove="false"
    :dragToResize="false"
    :data="calEvents"
    :selectMultipleEvents="true"
    :selectedEvents="selectedEvent"
    :view="calView"
    @init="handleInit"
    @page-loading="handlePageLoading"
  >
    <template #header>
      <MbscCalendarNav />
      <div class="mds-search-bar mbsc-flex-1-0">
        <MbscInput
          autocomplete="off"
          inputStyle="box"
          placeholder="Search events"
          startIcon="material-search"
          ref="inputRef"
          @input="handleInputChange"
          @focus="handleInputFocus"
        />
      </div>
      <MbscCalendarPrev />
      <MbscCalendarToday />
      <MbscCalendarNext />
    </template>
  </MbscEventcalendar>
  <MbscPopup
    display="anchored"
    :anchor="searchInput"
    :contentPadding="false"
    :focusElm="searchInput"
    :focusOnClose="false"
    :focusOnOpen="false"
    :isOpen="isPopupOpen"
    :scrollLock="false"
    :showArrow="false"
    :showOverlay="false"
    :width="400"
    @close="handlePopupClose"
  >
    <MbscEventcalendar
      cssClass="mds-search-results"
      :data="listEvents"
      :showControls="false"
      :view="listView"
      @event-click="handleEventClick"
    />
  </MbscPopup>
</template>

<style>
.mds-search-bar .mbsc-textfield-wrapper {
  max-width: 400px;
  margin: 8px auto;
}

.mds-search-bar .mbsc-textfield.mbsc-ios-dark {
  background: #313131;
}

.mds-search-results .mbsc-calendar-wrapper {
  margin-top: -1px;
}
</style>
