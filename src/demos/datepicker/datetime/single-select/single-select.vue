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
      :controls="['date']"
      :selectMultiple="false"
      label="Date"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['time']"
      :selectMultiple="false"
      label="Time"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['date', 'time']"
      :selectMultiple="false"
      label="Date & Time"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
  </MbscPage>
</template>
