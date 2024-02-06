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
      :controls="['time']"
      label="Time picker"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['time']"
      timeFormat="HH:mm"
      label="24 hour picker"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['time']"
      timeFormat="h:mm A"
      label="12 hour picker with AM/PM"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['time']"
      timeFormat="HH:mm:ss"
      headerText="Time: {value}"
      label="Hour, Min, Sec"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
  </MbscPage>
</template>
