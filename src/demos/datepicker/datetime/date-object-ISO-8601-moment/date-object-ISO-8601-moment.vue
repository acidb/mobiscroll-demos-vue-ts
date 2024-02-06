<script setup lang="ts">
import {
  MbscButton,
  MbscDatepicker,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import moment from 'moment'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const date = ref<Date>()
const iso = ref<string>()
const momentJs = ref<any>()

function setDate() {
  date.value = new Date(2020, 10, 15, 10, 45)
}

function setISO() {
  iso.value = '2020-05-20T12:30:00'
}

function setMoment() {
  // make sure that moment js is loaded
  momentJs.value = moment([2020, 2, 6, 15, 30])
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Controlling the default value</div>
      <div class="MbscButton-group-block">
        <MbscButton @click="setDate">Set: Sun Nov 15 2020 03:24:00 GMT</MbscButton>
      </div>
      <MbscDatepicker
        :controls="['date']"
        v-model="date"
        returnFormat="jsdate"
        label="Date object"
      />
    </div>
    <div class="mbsc-padding">Return value: {{ date }}</div>

    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Working with Date strings</div>
      <div class="MbscButton-group-block">
        <MbscButton @click="setISO()">Set: 2020-05-20T12:30:00</MbscButton>
      </div>
      <div>
        <MbscDatepicker
          :controls="['date']"
          v-model="iso"
          returnFormat="iso8601"
          label="ISO string"
        />
      </div>
    </div>
    <div class="mbsc-padding">Return value: {{ iso }}</div>

    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Working with Moment JS Objects</div>
      <div class="MbscButton-group-block">
        <MbscButton @click="setMoment()">Set: 2020-03-06T15:30:00+02:00</MbscButton>
      </div>
      <div>
        <MbscDatepicker
          :controls="['date']"
          v-model="momentJs"
          returnFormat="moment"
          label="Moment JS"
        />
      </div>
    </div>
    <div class="mbsc-padding">Return value: {{ momentJs ? momentJs.format() : '' }}</div>
  </MbscPage>
</template>
