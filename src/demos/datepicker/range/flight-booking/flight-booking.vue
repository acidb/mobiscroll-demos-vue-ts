<script setup lang="ts">
import {
  MbscDatepicker,
  MbscInput,
  MbscPage,
  MbscRadio,
  MbscRadioGroup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const booking = ref()
const min = now
const max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate())
const myInvalid = [
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'TU,TH'
    }
  },
  new Date(now.getFullYear(), now.getMonth(), 25)
]
const calendarRef = ref<any>(null)
const outboundInput = ref<any>(null)
const returnInput = ref<any>(null)
const outboundInv = ref<any>(null)
const returnInv = ref<any>(null)
const outboundBooking = ref<any>(null)
const returnBooking = ref<any>(null)
const trip = ref<string>('round')
const flightButtons = ref<any>([
  'cancel',
  {
    disabled: true,
    text: 'One way only'
  },
  'set'
])

function changeTripType() {
  const startDate = calendarRef.value.instance.getTempVal()[0]
  flightButtons.value = [
    'cancel',
    {
      disabled: startDate != undefined,
      handler: () => {
        booking.value = [startDate, null]
        calendarRef.value.instance.close()
      },
      text: 'One way only'
    },
    'set'
  ]
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-12">
          <MbscDatepicker
            :controls="['calendar']"
            select="range"
            :min="min"
            :max="max"
            :pages="2"
            :buttons="['set', 'cancel']"
            label="Pick your flight"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please select..."
          />
        </div>
      </div>

      <div class="mbsc-row">
        <div class="mbsc-col-6">
          <MbscDatepicker
            :controls="['calendar']"
            select="range"
            :min="min"
            :max="max"
            :pages="2"
            :startInput="outboundInput"
            :endInput="returnInput"
          />
          <MbscInput
            ref="outboundInput"
            label="Outbound"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
          />
        </div>
        <div class="mbsc-col-6">
          <MbscInput
            ref="returnInput"
            label="Return"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
          />
        </div>
      </div>

      <div class="mbsc-row">
        <div class="mbsc-col-6">
          <MbscDatepicker
            :controls="['calendar']"
            select="range"
            :min="min"
            :max="max"
            :pages="2"
            :invalid="myInvalid"
            :inRangeInvalid="true"
            :startInput="outboundInv"
            :endInput="returnInv"
          />
          <MbscInput
            ref="outboundInv"
            label="Outbound"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
          />
        </div>
        <div class="mbsc-col-6">
          <MbscInput
            ref="returnInv"
            label="Return"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
          />
        </div>
      </div>

      <div class="mbsc-row">
        <MbscRadioGroup
          v-model="trip"
          name="flight-booking-type"
          theme="material"
          themeVariant="light"
        >
          <MbscRadio value="round" label="Round trip" theme="material" themeVariant="light" />
          <MbscRadio value="oneway" label="One way" theme="material" themeVariant="light" />
        </MbscRadioGroup>
      </div>
      <div class="mbsc-row">
        <div class="mbsc-col-6">
          <MbscDatepicker
            :controls="['calendar']"
            :select="trip == 'oneway' ? 'date' : 'range'"
            :min="min"
            :max="max"
            :pages="2"
            :startInput="outboundBooking"
            :endInput="returnBooking"
            label="Outbound"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
          />
          <MbscInput
            ref="outboundBooking"
            label="Outbound"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
            :hidden="trip == 'oneway'"
            :style="{ display: trip == 'oneway' ? 'none' : 'block' }"
          />
        </div>
        <div class="mbsc-col-6">
          <MbscInput
            ref="returnBooking"
            label="Return"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
            :disabled="trip == 'oneway'"
          />
        </div>
      </div>

      <div class="mbsc-row">
        <div class="mbsc-col-12">
          <MbscDatepicker
            ref="calendarRef"
            v-model="booking"
            :controls="['calendar']"
            select="range"
            :buttons="flightButtons"
            :min="min"
            :max="max"
            :pages="2"
            label="Pick your flight"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please select..."
            @temp-change="changeTripType"
          />
        </div>
      </div>
    </div>
  </MbscPage>
</template>
