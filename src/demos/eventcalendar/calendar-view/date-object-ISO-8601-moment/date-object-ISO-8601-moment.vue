<script setup lang="ts">
import {
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscDateType, MbscEventcalendarView } from '@mobiscroll/vue'
import moment from 'moment'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const selectedDateObj = ref<MbscDateType>(new Date(2020, 4, 19))
const selectedDateISO = ref<MbscDateType>('2020-05-20')
const selectedDateMoment = ref<MbscDateType>(moment([2020, 4, 21]))

const dateObjEvents = ref<MbscCalendarEvent[]>([
  {
    start: new Date(2020, 4, 19, 7),
    end: new Date(2020, 4, 19, 8),
    title: 'General orientation',
    color: '#35bb5a'
  }
])

const dateISOEvents = ref<MbscCalendarEvent[]>([
  {
    start: '2020-05-20T07:00:00',
    end: '2020-05-20T08:00:00',
    title: 'Clever Conference',
    color: '#a71111'
  }
])

const dateMomentEvents = ref<MbscCalendarEvent[]>([
  {
    start: moment([2020, 4, 21, 7]),
    end: moment([2020, 4, 21, 8]),
    title: 'Product team mtg.',
    color: '#913aa7'
  }
])

const myView: MbscEventcalendarView = {
  calendar: {
    type: 'month',
    popover: true,
    count: true
  }
}

function addDateObjEvent() {
  const newEvent = {
    start: new Date(2020, 4, 19, 10, 45),
    end: new Date(2020, 4, 19, 11, 45),
    text: 'New Event'
  }
  dateObjEvents.value = [...dateObjEvents.value, newEvent]
  selectedDateObj.value = new Date(2020, 4, 19)
}

function addDateISOEvent() {
  const newEvent = {
    start: '2020-05-20T12:30:00',
    end: '2020-05-20T13:00:00',
    text: 'New Event'
  }
  dateISOEvents.value = [...dateISOEvents.value, newEvent]
  selectedDateISO.value = '2020-05-20'
}

function addDateMomentEvent() {
  const newEvent = {
    start: moment([2020, 4, 21, 11]),
    end: moment([2020, 4, 21, 14]),
    text: 'New Event'
  }
  dateMomentEvents.value = [...dateMomentEvents.value, newEvent]
  selectedDateMoment.value = moment([2020, 4, 21])
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Date object</div>
            <div class="mbsc-button-group-block">
              <MbscButton @click="addDateObjEvent">
                start: new Date(2020, 4, 19, 10, 45) <br />
                end: new Date(2020, 4, 19, 11, 45)
              </MbscButton>
            </div>
            <!-- dragOptions -->
            <MbscEventcalendar
              :data="dateObjEvents"
              :view="myView"
              :selectedDate="selectedDateObj"
              @selected-date-change="selectedDateObj = $event.date"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">ISO 8601 date string</div>
            <div class="mbsc-button-group-block">
              <MbscButton @click="addDateISOEvent">
                start: 2020-05-20T12:30:00 <br />
                end: 2020-05-20T13:00:00
              </MbscButton>
            </div>
            <!-- dragOptions -->
            <MbscEventcalendar
              :data="dateISOEvents"
              :view="myView"
              :selectedDate="selectedDateISO"
              @selected-date-change="selectedDateISO = $event.date"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Moment.js object</div>
            <div class="mbsc-button-group-block">
              <MbscButton @click="addDateMomentEvent">
                start: moment([2020, 4, 21, 11]) <br />
                end: moment([2020, 4, 21, 14])
              </MbscButton>
            </div>
            <!-- dragOptions -->
            <MbscEventcalendar
              :data="dateMomentEvents"
              :view="myView"
              :selectedDate="selectedDateMoment"
              @selected-date-change="selectedDateMoment = $event.date"
            />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
