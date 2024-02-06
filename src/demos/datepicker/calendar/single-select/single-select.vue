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
      :controls="['calendar']"
      :selectMultiple="false"
      label="Date"
      placeholder="Please Select..."
      inputStyle="box"
      labelStyle="stacked"
    />
    <MbscDatepicker
      :controls="['calendar', 'time']"
      :selectMultiple="false"
      label="Date & Time"
      placeholder="Please Select..."
      inputStyle="box"
      labelStyle="stacked"
    />
    <MbscDatepicker
      :controls="['calendar', 'timegrid']"
      :selectMultiple="false"
      label="Date & Timegrid"
      placeholder="Please Select..."
      inputStyle="box"
      labelStyle="stacked"
    />
  </MbscPage>
</template>
