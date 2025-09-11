<script setup lang="ts">
import {
  MbscDraggable,
  MbscEventcalendar,
  MbscInput,
  MbscPage,
  MbscPopup,
  MbscSelect,
  MbscTextarea,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myTasks = ref<MbscCalendarEvent[]>([
  {
    title: 'Small wrap',
    color: '#637e57',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+1)',
    length: '2 days'
  },
  {
    title: 'Full-size wrap',
    color: '#50789d',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    length: '3 days'
  },
  {
    title: 'Mid-size wrap',
    color: '#6c5d45',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    length: '3 days'
  },
  {
    title: 'Roadster wrap',
    color: '#9da721',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+2)',
    length: '3 days'
  },
  {
    title: 'SUV wrap',
    color: '#cd6957',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+3)',
    length: '4 days'
  },
  {
    title: 'Hypercar wrap',
    color: '#7a5886',
    start: 'dyndatetime(y,m,d)',
    end: 'dyndatetime(y,m,d+4)',
    length: '5 days'
  }
])

const myData = ref([
  { value: '1', text: 'Roly Chester' },
  { value: '2', text: 'Tucker Wayne' },
  { value: '3', text: 'Baker Brielle' },
  { value: '4', text: 'Jami Walter' },
  { value: '5', text: 'Patrick Toby' },
  { value: '6', text: 'Tranter Logan' },
  { value: '7', text: 'Payton Sinclair' }
])

const myView: MbscEventcalendarView = {
  calendar: { labels: true }
}

const myInvalid = [
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'SA,SU'
    }
  }
]

const dragElements = ref<any>([])
const title = ref<string>('')
const details = ref<string>('')
const technician = ref<string>('')
const popupAnchor = ref<any>(null)
const isPopupOpen = ref<boolean>(false)
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

function fillDialog(args: any) {
  const event = args.event
  title.value = event.title
  details.value = event.details
  technician.value = event.technician
  popupAnchor.value = args.target
  isPopupOpen.value = true
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  fillDialog(args)
}

function handleEventCreateFailed() {
  toastMessage.value = "Can't create event on this date"
  isToastOpen.value = true
}

function handleEventUpdateFailed() {
  toastMessage.value = "Can't add event on this date"
  isToastOpen.value = true
}

function handlePopupClose() {
  isPopupOpen.value = false
  toastMessage.value = 'New task added'
  isToastOpen.value = true
}

function handleSelectChange(event: any) {
  technician.value = event.value
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-9 external-event-calendar">
          <MbscEventcalendar
            :view="myView"
            :invalid="myInvalid"
            :dragToMove="true"
            :externalDrop="true"
            @event-created="handleEventCreated"
            @event-create-failed="handleEventCreateFailed"
            @event-update-failed="handleEventUpdateFailed"
          />
        </div>
        <div class="mbsc-col-sm-3">
          <div class="mbsc-form-group-title">Available tasks</div>
          <div v-for="(task, i) in myTasks" :key="task.id">
            <div ref="dragElements" class="external-event-task" :style="{ background: task.color }">
              <div>{{ task.title }}</div>
              <div>{{ task.length }}</div>
              <MbscDraggable :element="dragElements[i]" :dragData="task" />
            </div>
          </div>
        </div>
        <MbscPopup
          display="anchored"
          headerText="Assign task"
          :width="400"
          :contentPadding="false"
          :touchUi="false"
          :buttons="['ok']"
          :anchor="popupAnchor"
          :isOpen="isPopupOpen"
          @close="handlePopupClose"
        >
          <div class="mbsc-form-group">
            <MbscInput label="Task" :defaultValue="title" readOnly></MbscInput>
            <MbscTextarea
              label="Details"
              :defaultValue="details"
              placeholder="Add description..."
            ></MbscTextarea>
            <MbscSelect
              display="anchored"
              label="Technician"
              placeholder="Please select..."
              :data="myData"
              :value="technician"
              :touchUi="false"
              @change="handleSelectChange"
            />
          </div>
        </MbscPopup>
      </div>
      <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
    </div>
  </MbscPage>
</template>

<style>
.external-event-calendar {
  border-right: 1px solid #ccc;
}

.external-event-task {
  color: #fff;
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  font-family:
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
}

.demo-external-event-presets.demo-wrapper,
.demo-external-event-presets .mbsc-grid,
.demo-external-event-presets .mbsc-row,
.demo-external-event-presets .external-event-calendar {
  height: 100%;
}
</style>
