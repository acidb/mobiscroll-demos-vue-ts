<script setup lang="ts">
import { getJson, MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const minDate = 'dyndatetime(y,m,d)'
const maxDate = 'dyndatetime(y,m+6,d)'
const multiple = ref(['dyndatetime(y,m,11)', 'dyndatetime(y,m,16)', 'dyndatetime(y,m,17)'])
const singleLabels = ref([])
const singleInvalid = ref([])
const datetimeLabels = ref([])
const datetimeInvalid = ref([])
const multipleLabels = ref([])
const multipleInvalid = ref([])

function handlePageLoadingSingle(event: any) {
  getPrices(event.firstDay, (bookings: any) => {
    singleLabels.value = bookings.labels
    singleInvalid.value = bookings.invalid
  })
}

function handlePageLoadingDatetime(event: any) {
  getDatetimes(event.firstDay, (bookings: any) => {
    datetimeLabels.value = bookings.labels
    datetimeInvalid.value = bookings.invalid
  })
}

function handlePageLoadingMultiple(event: any) {
  getBookings(event.firstDay, (bookings: any) => {
    multipleLabels.value = bookings.labels
    multipleInvalid.value = bookings.invalid
  })
}

function getPrices(d: Date, callback: any) {
  let invalid: any[] = []
  let labels: any[] = []

  getJson(
    'https://trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
    (bookings) => {
      for (let i = 0; i < bookings.length; ++i) {
        const booking = bookings[i]
        const d = new Date(booking.d)

        if (booking.price > 0) {
          labels.push({
            start: d,
            title: '$' + booking.price,
            textColor: '#e1528f'
          })
        } else {
          invalid.push(d)
        }
      }
      callback({ labels: labels, invalid: invalid })
    },
    'jsonp'
  )
}

function getDatetimes(d: Date, callback: any) {
  let invalid: any[] = []
  let labels: any[] = []

  getJson(
    'https://trial.mobiscroll.com/getbookingtime/?year=' +
      d.getFullYear() +
      '&month=' +
      d.getMonth(),
    (bookings) => {
      for (let i = 0; i < bookings.length; ++i) {
        const booking = bookings[i]
        const bDate = new Date(booking.d)

        if (booking.nr > 0) {
          labels.push({
            start: bDate,
            title: booking.nr + ' SPOTS',
            textColor: '#e1528f'
          })
          invalid = [...invalid, ...booking.invalid]
        } else {
          invalid.push(d)
        }
      }
      callback({ labels: labels, invalid: invalid })
    },
    'jsonp'
  )
}

function getBookings(d: Date, callback: any) {
  let invalid: any[] = []
  let labels: any[] = []

  getJson(
    'https://trial.mobiscroll.com/getbookings/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
    (bookings) => {
      for (let i = 0; i < bookings.length; ++i) {
        const booking = bookings[i]
        const d = new Date(booking.d)

        if (booking.nr > 0) {
          labels.push({
            start: d,
            title: booking.nr + ' SPOTS',
            textColor: '#e1528f'
          })
        } else {
          invalid.push(d)
        }
      }
      callback({ labels: labels, invalid: invalid })
    },
    'jsonp'
  )
}
</script>

<template>
  <MbscPage>
    <div class="dms-calendar-booking">
      <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Single date & appointment booking</div>
        <MbscDatepicker
          display="inline"
          pages="auto"
          :controls="['calendar']"
          :min="minDate"
          :max="maxDate"
          :labels="singleLabels"
          :invalid="singleInvalid"
          @page-loading="handlePageLoadingSingle"
        />
      </div>
      <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Select date & time</div>
        <MbscDatepicker
          display="inline"
          minTime="08:00"
          maxTime="19:59"
          cssClass="booking-datetime"
          :controls="['calendar', 'timegrid']"
          :min="minDate"
          :max="maxDate"
          :stepMinute="60"
          :labels="datetimeLabels"
          :invalid="datetimeInvalid"
          @page-loading="handlePageLoadingDatetime"
        />
      </div>
      <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Booking multiple appointments</div>
        <MbscDatepicker
          display="inline"
          pages="auto"
          cssClass="booking-datetime"
          v-model="multiple"
          :controls="['calendar']"
          :min="minDate"
          :max="maxDate"
          :stepMinute="60"
          :selectMultiple="true"
          :labels="multipleLabels"
          :invalid="multipleInvalid"
          @page-loading="handlePageLoadingMultiple"
        />
      </div>
    </div>
  </MbscPage>
</template>

<style>
.md-calendar-booking .mbsc-calendar-text {
  text-align: center;
}

.md-calendar-booking .booking-datetime .mbsc-datepicker-tab-calendar {
  flex: 1 1 0;
  min-width: 300px;
}

.md-calendar-booking .mbsc-timegrid-item {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.md-calendar-booking .mbsc-timegrid-container {
  top: 30px;
}
</style>
