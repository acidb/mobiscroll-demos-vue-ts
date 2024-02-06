<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Date</div>
      <MbscDatepicker :controls="['date']" label="Default" :defaultValue="now" />
      <MbscDatepicker
        :controls="['date']"
        dateFormat="DD.MM.YYYY"
        label="Separator"
        :defaultValue="now"
      />
      <MbscDatepicker
        :controls="['date']"
        dateFormat="MMMM"
        label="Month only"
        :defaultValue="now"
      />
      <MbscDatepicker
        :controls="['date']"
        dateFormat="D MMMM YYYY"
        label="Month name"
        :defaultValue="now"
      />
      <MbscDatepicker
        :controls="['date']"
        dateFormat="MM/YYYY"
        label="Month/year"
        :defaultValue="now"
      />
      <MbscDatepicker
        :controls="['date']"
        dateFormat="DDD DD MMM, YYYY"
        label="Day of week"
        :defaultValue="now"
      />
      <MbscDatepicker
        :controls="['date']"
        dateFormat="YYYY-MM-DD"
        label="ATOM"
        :defaultValue="now"
      />
      <MbscDatepicker
        :controls="['date']"
        dateFormat="DDD, DD MMM YYYY"
        label="COOKIE"
        :defaultValue="now"
      />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Time</div>
      <MbscDatepicker :controls="['time']" label="Default time" :defaultValue="now" />
      <MbscDatepicker :controls="['time']" timeFormat="hh:mm A" label="12 h" :defaultValue="now" />
      <MbscDatepicker :controls="['time']" timeFormat="HH:mm" label="24 h" :defaultValue="now" />
      <MbscDatepicker
        :controls="['time']"
        timeFormat="HH:mm:ss"
        label="Hour, min, sec"
        :defaultValue="now"
      />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Date & Time</div>
      <MbscDatepicker :controls="['date', 'time']" label="Date & Time" :defaultValue="now" />
      <MbscDatepicker
        :controls="['date', 'time']"
        dateFormat="DDD D MMM, YYYY"
        timeFormat="H:mm"
        dateWheels="|DDD D MMM, YYYY|"
        label="Day name"
        :defaultValue="now"
      />
    </div>
  </MbscPage>
</template>
