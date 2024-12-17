<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscInput,
  MbscPopup,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscSnackbar,
  MbscTextarea,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPopupOptions,
  MbscResource,
  MbscResponsiveOptions
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const types: MbscResource[] = [
  {
    id: 1,
    name: 'Breakfast',
    color: '#e20f0f',
    kcal: '300 - 400 kcal',
    icon: '🍳'
  },
  {
    id: 2,
    name: 'Elevenses',
    color: '#157d13',
    kcal: '100 - 200 kcal',
    icon: '🍌'
  },
  {
    id: 3,
    name: 'Lunch',
    color: '#32a6de',
    kcal: '500 - 700 kcal',
    icon: '🍜'
  },
  {
    id: 4,
    name: 'Dinner',
    color: '#e29d1d',
    kcal: '400 - 600 kcal',
    icon: '🥙'
  },
  {
    id: 5,
    name: 'Snack',
    color: '#68169c',
    kcal: '100 - 200 kcal',
    icon: '🥨'
  }
]

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    eventList: true
  }
}

const responsivePopup: MbscResponsiveOptions<MbscPopupOptions> = {
  medium: {
    display: 'center',
    width: 400,
    fullScreen: false,
    touchUi: false,
    showOverlay: false
  }
}

const popupAddButtons = [
  'cancel',
  {
    handler: () => {
      saveEvent()
    },
    keyCode: 'enter',
    text: 'Add',
    cssClass: 'mbsc-popup-button-primary'
  }
]

const popupEditButtons = [
  'cancel',
  {
    handler: () => {
      saveEvent()
    },
    keyCode: 'enter',
    text: 'Save',
    cssClass: 'mbsc-popup-button-primary'
  }
]

const myMeals = ref<MbscCalendarEvent[]>([])
const tempMeal = ref<MbscCalendarEvent | null>(null)
const isPopupOpen = ref<boolean>(false)
const isEdit = ref<boolean>(false)
const name = ref<string>('')
const calories = ref<string>('')
const notes = ref<string>('')
const headerText = ref<string>('')
const type = ref<number>(1)
const popupButtons = ref<any>([])
const isSnackbarOpen = ref<boolean>(false)
const snackbarButton = ref<any>({})

function myDefaultEvent() {
  return {
    title: 'New meal',
    allDay: true
  }
}

function saveEvent() {
  tempMeal.value!.title = name.value
  tempMeal.value!.calories = calories.value
  tempMeal.value!.notes = notes.value
  tempMeal.value!.allDay = true
  tempMeal.value!.resource = type.value
  if (isEdit.value) {
    // update the event in the list
    myMeals.value = [...myMeals.value]
  } else {
    // add the new event to the list
    myMeals.value = [...myMeals.value, tempMeal.value!]
  }
  // close the popup
  isPopupOpen.value = false
}

function loadPopupForm(event: MbscCalendarEvent) {
  name.value = event.title || ''
  calories.value = event.calories
  notes.value = event.notes
}

function deleteEvent(event: any) {
  myMeals.value = myMeals.value.filter((item) => item.id !== event.id)
  snackbarButton.value = {
    action: () => {
      myMeals.value = [...myMeals.value, event]
    },
    text: 'Undo'
  }
  isSnackbarOpen.value = true
}

function handleEventClick(args: any) {
  const event = args.event
  isEdit.value = true
  tempMeal.value = event
  // fill popup form with event data
  loadPopupForm(event)
  // set popup options
  popupButtons.value = popupEditButtons
  headerText.value =
    '<div>New meal</div><div class="md-meal-type">' +
    formatDate('DDDD, DD MMMM YYYY', new Date(event.start)) +
    '</div>'
  type.value = event.resource
  // open the popup
  isPopupOpen.value = true
}

function handleEventCreated(args: any) {
  const event = args.event
  const resource = args.resourceObj!
  isEdit.value = false
  tempMeal.value = event
  // fill popup form with event data
  loadPopupForm(event)
  // set popup options
  popupButtons.value = popupAddButtons
  headerText.value =
    '<div>' +
    resource!.name +
    '</div><div class="md-meal-type">' +
    formatDate('DDDD, DD MMMM YYYY', new Date(event.start)) +
    '</div>'
  type.value = event.resource
  // open the popup
  isPopupOpen.value = true
}

function handleEventDeleted(args: any) {
  deleteEvent(args.event)
}

function handleDelete() {
  deleteEvent(tempMeal)
  isPopupOpen.value = false
}

function handlePopupClose() {
  isPopupOpen.value = false
}

function handleSnackbarClose() {
  isSnackbarOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/meal-planner/',
    (events: MbscCalendarEvent[]) => {
      myMeals.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    cssClass="md-meal-planner-calendar"
    :view="myView"
    :data="myMeals"
    :resources="types"
    :dragToCreate="false"
    :dragToResize="false"
    :dragToMove="true"
    :clickToCreate="true"
    :extendDefaultEvent="myDefaultEvent"
    @event-click="handleEventClick"
    @event-created="handleEventCreated"
    @event-deleted="handleEventDeleted"
  >
    <template #resource="resource">
      <div class="md-meal-planner-cont">
        <div class="md-meal-planner-title" :style="{ color: resource.color }">
          <span class="md-meal-planner-icon">{{ resource.icon }}</span>
          {{ resource.name }}
        </div>
        <div class="md-meal-planner-kcal">{{ resource.kcal }}</div>
      </div>
    </template>
    <template #scheduleEventContent="args">
      <div class="md-meal-planner-event">
        <div class="md-meal-planner-event-title">{{ args.original.title }}</div>
        <div v-if="args.original.calories" class="md-meal-planner-event-desc">
          Calories {{ args.original.calories }} kcal
        </div>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscPopup
    cssClass="md-meal-planner-popup"
    display="bottom"
    :fullScreen="true"
    :contentPadding="false"
    :headerText="headerText"
    :buttons="popupButtons"
    :isOpen="isPopupOpen"
    :responsive="responsivePopup"
    @close="handlePopupClose"
  >
    <MbscSegmentedGroup v-model="type">
      <template v-for="t in types" :key="t.id">
        <MbscSegmented :value="t.id">{{ t.name }}</MbscSegmented>
      </template>
    </MbscSegmentedGroup>
    <div class="mbsc-form-group">
      <MbscInput label="Name" v-model="name" />
      <MbscInput label="Calories" v-model="calories" />
      <MbscTextarea label="Notes" v-model="notes" />
    </div>
    <div v-if="isEdit" class="mbsc-button-group">
      <MbscButton
        className="mbsc-button-block"
        color="danger"
        variant="outline"
        @click="handleDelete"
      >
        Delete meal
      </MbscButton>
    </div>
  </MbscPopup>
  <MbscSnackbar
    message="Event deleted"
    :button="snackbarButton"
    :isOpen="isSnackbarOpen"
    @close="handleSnackbarClose"
  />
</template>

<style>
.md-meal-type {
  font-size: 14px;
  font-weight: 600;
  opacity: 0.6;
}

.md-meal-planner-popup .mbsc-popup .mbsc-popup-header {
  padding-top: 8px;
  padding-bottom: 8px;
}

.md-meal-planner-cont {
  position: relative;
  padding-left: 34px;
  text-align: left;
}

.md-meal-planner-title {
  font-size: 20px;
}

.md-meal-planner-kcal {
  color: #929292;
}

.md-meal-planner-icon {
  position: absolute;
  left: 0;
}

.md-meal-planner-calendar.mbsc-calendar .mbsc-schedule-event-all-day-inner {
  height: 40px;
  display: flex;
  align-items: center;
}

.md-meal-planner-calendar .md-meal-planner-event-title {
  font-size: 12px;
}

.md-meal-planner-calendar .md-meal-planner-event-desc {
  opacity: 0.6;
}

.md-meal-planner-popup .mbsc-segmented-item:first-child .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:first-child .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:first-child .mbsc-segmented-selectbox-inner {
  background: #f08786;
}

.md-meal-planner-popup .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(2) .mbsc-segmented-selectbox-inner {
  background: #8abe89;
}

.md-meal-planner-popup .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(3) .mbsc-segmented-selectbox-inner {
  background: #99d3ef;
}

.md-meal-planner-popup .mbsc-segmented-item:nth-child(4) .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(4) .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:nth-child(4) .mbsc-segmented-selectbox-inner {
  background: #f0ce8e;
}

.md-meal-planner-popup .mbsc-segmented-item:last-child .mbsc-selected.mbsc-material,
.md-meal-planner-popup .mbsc-segmented-item:last-child .mbsc-selected.mbsc-windows,
.md-meal-planner-popup .mbsc-segmented-item:last-child .mbsc-segmented-selectbox-inner {
  background: #b48bce;
}
</style>
