<script setup lang="ts">
import {
  formatDate,
  MbscButton,
  MbscCheckbox,
  MbscDatepicker,
  MbscEventcalendar,
  MbscInput,
  MbscPopup,
  MbscSnackbar,
  MbscTextarea,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    startDay: 1,
    endDay: 5
  }
}

const myResources = ref<MbscResource[]>([
  {
    id: 'contractors',
    name: 'Contractors',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 'builders',
        name: 'Builders',
        eventCreation: false,
        children: [
          {
            id: 'b1',
            name: 'Jude Chester'
          },
          {
            id: 'b2',
            name: 'Willis Kane'
          }
        ]
      },
      {
        id: 'carpenters',
        name: 'Carpenters',
        eventCreation: false,
        children: [
          {
            id: 'c1',
            name: 'Derek Austyn'
          },
          {
            id: 'c2',
            name: 'Merv Kenny'
          }
        ]
      }
    ]
  },
  {
    id: 'employees',
    name: 'Employees',
    eventCreation: false,
    children: [
      {
        id: 'cement_masons',
        name: 'Cement masons',
        eventCreation: false,
        children: [
          {
            id: 'ce1',
            name: 'Ford Kaiden'
          },
          {
            id: 'ce2',
            name: 'Jewell Ryder'
          }
        ]
      },
      {
        id: 'divers',
        name: 'Drivers',
        eventCreation: false,
        children: [
          {
            id: 'd1',
            name: 'Fred Valdez'
          },
          {
            id: 'd2',
            name: 'Jon Drake'
          },
          {
            id: 'd3',
            name: 'Lou Andie'
          },
          {
            id: 'd4',
            name: 'Leon Porter'
          }
        ]
      }
    ]
  },
  {
    id: 'equipment',
    name: 'Equipment',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 'concrete_mixers',
        name: 'Concrete mixers',
        eventCreation: false,
        children: [
          {
            id: 'cm1',
            name: 'AL 45 RFT'
          },
          {
            id: 'cm2',
            name: 'KQ 62 PVZ'
          },
          {
            id: 'cm3',
            name: 'RG 91 ZAL'
          },
          {
            id: 'cm4',
            name: 'XF 83 GFM'
          }
        ]
      },
      {
        id: 'concrete_pumps',
        name: 'Concrete pumps',
        eventCreation: false,
        children: [
          {
            id: 'cp1',
            name: 'GF 61 BVM'
          },
          {
            id: 'cp2',
            name: 'YC 55 ECT'
          }
        ]
      }
    ]
  }
])

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-4,6)',
    end: 'dyndatetime(y,m,d-4,14)',
    title: 'Farmhouse TPH',
    location: '3339 Spruce Drive',
    resource: ['d2', 'cm2', 'd4', 'cp1', 'cm2', 'ce2', 'b1'],
    color: '#12ca6c',
    cost: 48000
  },
  {
    start: 'dyndatetime(y,m,d-3,8)',
    end: 'dyndatetime(y,m,d-3,18)',
    title: 'Block of flats KXT',
    location: '4698 Mercer Street',
    resource: ['d1', 'cm1', 'd3', 'cp1', 'cm3', 'ce2', 'b2'],
    color: '#c170c3',
    cost: 36000
  },
  {
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,20)',
    title: 'Apartment house UGL',
    location: '3647 Tavern Place',
    resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
    color: '#03c9d2',
    cost: 50000
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,19)',
    title: 'Detached house WKB',
    location: '956 Dovetail Estates',
    resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
    color: '#ff1515',
    cost: 55000
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Apartment house XAZ',
    location: '4919 Jett Lane, Inglewood',
    resource: ['d1', 'cm4', 'd4', 'cp1', 'cm2', 'c2', 'b2'],
    color: '#12ca6c',
    cost: 62000
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Block of flats DRG',
    location: '486 Sycamore Fork Road',
    resource: ['d2', 'cm1', 'd3', 'cp2', 'ce2', 'c1', 'b1'],
    color: '#efd414',
    cost: 39000
  },
  {
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,17)',
    title: 'Farmhouse YQK',
    location: '1563 Retreat Avenue',
    resource: ['d2', 'cm4', 'd4', 'cm2', 'cp1', 'c2', 'b2'],
    color: '#cf49d8',
    cost: 45000
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Apartment house SWP',
    location: '628 Daylene Drive',
    resource: ['d2', 'cm3', 'd3', 'cm1', 'cp2', 'c1', 'b1'],
    color: '#c170c3',
    cost: 53000
  },
  {
    start: 'dyndatetime(y,m,d+3,10)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: 'Detached house OZL',
    location: '1830 Rinehart Road',
    resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
    color: '#ff1515',
    cost: 47000
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,19)',
    title: 'Farmhouse PSZ',
    location: '2410 Union Street',
    resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
    color: '#ff1515',
    cost: 64000
  }
])

const responsivePopup = {
  medium: {
    display: 'anchored',
    width: 520,
    fullScreen: false,
    touchUi: false
  }
}

const popupEventTitle = ref<string>('')
const popupEventLocation = ref<string>('')
const popupEventBill = ref<number>(0)
const popupEventNotes = ref<string>('')
const popupEventDates = ref<any>(null)
const tempEvent = ref<MbscCalendarEvent | null>(null)
const isEdit = ref<boolean>(false)
const popupHeaderText = ref<string>('')
const popupAnchor = ref<any>(null)
const popupButtons = ref<any>([])
const isPopupOpen = ref<boolean>(false)
const snackbarButton = ref<any>([])
const isSnackbarOpen = ref<boolean>(false)
const startInput = ref<any>(null)
const endInput = ref<any>(null)
const calInst = ref<typeof MbscEventcalendar>()

function getCostString(cost: number) {
  return cost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function getRevenue(args: any) {
  const events = args.events
  let costs = 0

  if (events) {
    for (const event of events) {
      costs += event.cost
    }
  }
  return 'Total revenue: $' + getCostString(costs)
}

function setCheckboxes(resource: any) {
  for (const resources of myResources.value) {
    if (resources.children) {
      for (const res of resources.children) {
        for (const r of res.children!) {
          r.checked = resource.indexOf(r.id) !== -1
        }
      }
    }
  }
}
function getCheckedResources() {
  const checkedResources = []
  const startResource = tempEvent.value!.resource
  for (const resources of myResources.value) {
    if (resources.children) {
      for (const res of resources.children) {
        for (const r of res.children!) {
          if (r.checked) {
            checkedResources.push(r.id)
          }
        }
      }
    }
  }
  return checkedResources.findIndex((e) => e === startResource) === -1
    ? [...checkedResources, tempEvent.value!.resource as string]
    : checkedResources
}

function loadPopupForm(event: MbscCalendarEvent) {
  popupEventTitle.value = event.title || ''
  popupEventLocation.value = event.location
  popupEventBill.value = +event.cost || 0
  popupEventNotes.value = event.notes
  popupEventDates.value = [event.start, event.end]
  setCheckboxes(event.resource)
}

function saveEvent() {
  const tempEv = tempEvent.value!
  tempEv.title = popupEventTitle.value
  tempEv.location = popupEventLocation.value
  tempEv.cost = +popupEventBill.value || 0
  tempEv.notes = popupEventNotes.value
  tempEv.start = popupEventDates.value[0]
  tempEv.end = popupEventDates.value[1]
  tempEv.resource = getCheckedResources()
  if (isEdit.value) {
    // update the event in the list
    myEvents.value = [...myEvents.value]
    // here you can update the event in your storage as well
    // ...
  } else {
    // add the new event to the list
    myEvents.value = [...myEvents.value, tempEvent.value!]
    // here you can add the event to your storage as well
    // ...
  }
  // navigate the calendar
  calInst.value?.instance.navigateToEvent(tempEv)
  // close the popup
  isPopupOpen.value = false
}

function deleteEvent(event: MbscCalendarEvent) {
  myEvents.value = myEvents.value.filter((item) => item.id !== event.id)
  snackbarButton.value = {
    action: () => {
      myEvents.value = [...myEvents.value, event]
    },
    text: 'Undo'
  }
  isSnackbarOpen.value = true
  // here you can delete the event from your storage as well
  // ...
}

function handleEventClick(args: MbscEventClickEvent) {
  isEdit.value = true
  tempEvent.value = args.event
  // fill popup form with event data
  loadPopupForm(args.event)
  // set popup options
  popupHeaderText.value = 'Edit event'
  popupButtons.value = [
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
  popupAnchor.value = args.domEvent.currentTarget
  // open the popup
  isPopupOpen.value = true
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  setTimeout(() => {
    isEdit.value = false
    tempEvent.value = args.event
    // fill popup form with event data
    loadPopupForm(args.event)
    // set popup options
    popupHeaderText.value = 'New work order'
    popupButtons.value = [
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
    popupAnchor.value = args.target
    // open the popup
    isPopupOpen.value = true
  })
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  setTimeout(() => {
    deleteEvent(args.event)
  })
}

function handleEventUpdated() {
  // here you can update the event in your storage as well, after drag & drop or resize
  // ...
}

function handlePopupClose() {
  if (!isEdit.value) {
    // refresh the list, if add popup was canceled, to remove the temporary event
    myEvents.value = [...myEvents.value]
  }
  isPopupOpen.value = false
}

function handleDelete() {
  deleteEvent(tempEvent.value!)
  isPopupOpen.value = false
}

function myDefaultEvent() {
  return {
    title: 'Work order',
    cost: 0
  }
}
</script>

<template>
  <MbscEventcalendar
    class="md-work-order-scheduling"
    clickToCreate="double"
    ref="calInst"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :dragTimeStep="30"
    :extendDefaultEvent="myDefaultEvent"
    @event-click="handleEventClick"
    @event-created="handleEventCreated"
    @event-deleted="handleEventDeleted"
    @event-updated="handleEventUpdated"
  >
    <template #day="day">
      <div class="md-work-order-date">{{ formatDate('DD DDD MMM YYYY', day.date) }}</div>
      <div class="md-work-order-date-title">{{ getRevenue(day) }}</div>
    </template>
    <template #scheduleEventContent="event">
      <div>
        {{ event.title }}
        <span class="md-work-order-price-tag">${{ getCostString(event.original.cost) }}</span>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscPopup
    display="bottom"
    :fullScreen="true"
    :contentPadding="false"
    :headerText="popupHeaderText"
    :anchor="popupAnchor"
    :buttons="popupButtons"
    :isOpen="isPopupOpen"
    :responsive="responsivePopup"
    @close="handlePopupClose"
  >
    <div class="mbsc-form-group">
      <MbscInput label="Title" v-model="popupEventTitle" />
      <MbscInput label="Location" v-model="popupEventLocation" />
      <MbscInput label="Bill to customer ($)" v-model="popupEventBill" />
      <MbscTextarea label="Notes" v-model="popupEventNotes" />
    </div>
    <div class="mbsc-form-group">
      <MbscInput ref="startInput" label="Starts" />
      <MbscInput ref="endInput" label="Ends" />
      <MbscDatepicker
        v-model="popupEventDates"
        select="range"
        :controls="['time']"
        :touchUi="true"
        :showRangeLabels="false"
        :startInput="startInput"
        :endInput="endInput"
      />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-grid mbsc-no-padding">
        <div class="mbsc-row">
          <template v-for="resources in myResources" :key="resources.id">
            <template v-for="res in resources.children" :key="res.id">
              <div class="mbsc-col-sm-4">
                <div class="mbsc-form-group-title">{{ res.name }}</div>
                <template v-for="r in res.children" :key="r.id">
                  <MbscCheckbox
                    v-model="r.checked"
                    className="md-work-order-checkbox-label"
                    theme="material"
                  >
                    {{ r.name }}
                  </MbscCheckbox>
                </template>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div class="mbsc-form-group">
      <div v-if="isEdit" class="mbsc-button-group">
        <MbscButton
          className="mbsc-button-block"
          color="danger"
          variant="outline"
          @click="handleDelete"
        >
          Delete event
        </MbscButton>
      </div>
    </div>
  </MbscPopup>
  <MbscSnackbar
    message="Event deleted"
    :button="snackbarButton"
    :isOpen="isSnackbarOpen"
    @close="isSnackbarOpen = false"
  />
</template>

<style>
.md-work-order-checkbox-label.mbsc-checkbox {
  padding-top: 5px;
  padding-bottom: 5px;
}

.md-work-order-date {
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  padding: 5px 10px;
}

.md-work-order-date-title {
  font-size: 13px;
  color: #959595;
  padding: 5px 10px;
  line-height: 18px;
}

.md-work-order-price-tag {
  display: inline-block;
  font-size: 11px;
  line-height: 16px;
  vertical-align: middle;
  border: 1px solid #959595;
  color: #959595;
  border-radius: 5px;
  margin: 0 10px;
  padding: 0px 5px;
}

.md-work-order-scheduling .mbsc-timeline-parent {
  height: 32px;
}
</style>
