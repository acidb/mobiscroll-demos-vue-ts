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
  MbscPage,
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
const listEvents = ref<MbscCalendarEvent[]>([])
const mySelectedEvent = ref<MbscCalendarEvent[]>([])
const isPopupOpen = ref<boolean>(false)
const currentDate = ref<any>(new Date())
const searchInput = ref<any>(null)
const inputRef = ref<any>(null)
const timer = ref<any>(null)

const calView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}

const listView: MbscEventcalendarView = {
  agenda: {
    type: 'year',
    size: 5
  }
}

function handleSearch(ev: any) {
  const text = ev.target.value

  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }

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

function handleInputFocus(ev: any) {
  if (ev.target.value.length > 0) {
    isPopupOpen.value = true
  }
}

function handlePopupInit() {
  setTimeout(() => {
    searchInput.value = inputRef.value.instance.nativeElement
  })
}

function handlePopupClose() {
  isPopupOpen.value = false
}

function handleEventClick(args: MbscEventClickEvent) {
  currentDate.value = args.event.start
  mySelectedEvent.value = [args.event]
  isPopupOpen.value = false
}
</script>

<template>
  <MbscPage>
    <MbscEventcalendar
      className="md-search-events"
      :clickToCreate="false"
      :dragToCreate="false"
      :dragToMove="false"
      :dragToResize="false"
      :selectMultipleEvents="true"
      :view="calView"
      :data="calEvents"
      :selectedEvents="mySelectedEvent"
      :selectedDate="currentDate"
      @page-loading="handlePageLoading"
    >
      <template #header>
        <MbscCalendarNav />
        <div class="md-seach-header-bar mbsc-flex-1-0">
          <MbscInput
            ref="inputRef"
            startIcon="material-search"
            inputStyle="box"
            placeholder="Search events"
            @input="handleSearch"
            @focus="handleInputFocus"
          />
        </div>
        <MbscCalendarPrev />
        <MbscCalendarToday />
        <MbscCalendarNext />
      </template>
    </MbscEventcalendar>
    <MbscPopup
      className="md-search-popup"
      display="anchored"
      :showArrow="false"
      :showOverlay="false"
      :scrollLock="false"
      :contentPadding="false"
      :focusOnOpen="false"
      :focusOnClose="false"
      :anchor="searchInput"
      :focusElm="searchInput"
      :isOpen="isPopupOpen"
      @init="handlePopupInit"
      @close="handlePopupClose"
    >
      <MbscEventcalendar
        className="mbsc-popover-list"
        :view="listView"
        :data="listEvents"
        :showControls="false"
        @event-click="handleEventClick"
      />
    </MbscPopup>
  </MbscPage>
</template>

<style>
.md-seach-header-bar .mbsc-textfield-wrapper.mbsc-form-control-wrapper {
  width: 400px;
  margin: 12px auto;
}

.md-search-popup .mbsc-popover-list {
  width: 400px;
}

.md-search-popup .mbsc-event-list {
  margin-top: -1px;
  margin-bottom: -1px;
}

.md-search-events .mbsc-ios-dark.mbsc-textfield-box {
  background: #313131;
}
</style>
