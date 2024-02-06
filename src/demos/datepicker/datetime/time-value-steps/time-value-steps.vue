<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <MbscDatepicker
      :controls="['datetime']"
      :stepMinute="15"
      label="Date & Time (every 15 min)"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['time']"
      :stepMinute="5"
      label="Time (every 5 min)"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['time']"
      :stepHour="2"
      label="Time (every 2 hours)"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['time']"
      :stepSecond="30"
      timeFormat="HH:mm:ss"
      label="Time (every 30 seconds)"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
  </MbscPage>
</template>
