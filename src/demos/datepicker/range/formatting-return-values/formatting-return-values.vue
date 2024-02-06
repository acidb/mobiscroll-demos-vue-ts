<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const currentWeek = ['dyndatetime(y,m,d)', 'dyndatetime(y,m,d+6)']
const currentTime = ['dyndatetime(y,m,d,h)', 'dyndatetime(y,m,d,h+2)']

const rangeValue = currentWeek
const separatorValue = currentWeek
const monthValue = currentWeek
const dayValue = currentWeek
const atomValue = currentWeek
const cookieValue = currentWeek
const timeValue = currentTime
const h12Value = currentTime
const h24Value = currentTime
const hmsValue = currentTime
const dateTimeValue = currentTime
const dayNameValue = currentTime
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Date</div>
      <MbscDatepicker
        :controls="['calendar']"
        select="range"
        label="Default"
        v-model="rangeValue"
      />
      <MbscDatepicker
        :controls="['calendar']"
        select="range"
        dateFormat="DD.MM.YYYY"
        label="Separator"
        v-model="separatorValue"
      />
      <MbscDatepicker
        :controls="['calendar']"
        select="range"
        dateFormat="D MMMM YYYY"
        label="Month name"
        v-model="monthValue"
      />
      <MbscDatepicker
        :controls="['calendar']"
        select="range"
        dateFormat="DDD DD MMM, YYYY"
        label="Day of week"
        v-model="dayValue"
      />
      <MbscDatepicker
        :controls="['calendar']"
        select="range"
        dateFormat="YYYY-MM-DD"
        label="ATOM"
        v-model="atomValue"
      />
      <MbscDatepicker
        :controls="['calendar']"
        select="range"
        dateFormat="DDD, DD MMM YYYY"
        label="COOKIE"
        v-model="cookieValue"
      />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Time</div>
      <MbscDatepicker
        :controls="['time']"
        select="range"
        label="Default time"
        v-model="timeValue"
      />
      <MbscDatepicker
        :controls="['time']"
        select="range"
        timeFormat="hh:mm A"
        label="12 h"
        v-model="h12Value"
      />
      <MbscDatepicker
        :controls="['time']"
        select="range"
        timeFormat="HH:mm"
        label="24 h"
        v-model="h24Value"
      />
      <MbscDatepicker
        :controls="['time']"
        select="range"
        timeFormat="HH:mm:ss"
        label="Hour, min, sec"
        v-model="hmsValue"
      />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Date & Time</div>
      <MbscDatepicker
        :controls="['calendar', 'time']"
        select="range"
        label="Date & Time"
        v-model="dateTimeValue"
      />
      <MbscDatepicker
        :controls="['calendar', 'time']"
        select="range"
        dateFormat="DDD D MMM, YYYY"
        timeFormat="H:mm"
        dateWheels="|DDD D MMM, YYYY|"
        label="Day name"
        v-model="dayNameValue"
      />
    </div>
  </MbscPage>
</template>
