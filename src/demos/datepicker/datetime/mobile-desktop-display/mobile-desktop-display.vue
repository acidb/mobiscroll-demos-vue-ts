<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <MbscDatepicker :controls="['date']" display="inline" />
    <MbscDatepicker
      :controls="['date']"
      display="anchored"
      label="Anchored"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['date']"
      display="top"
      label="Top"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['date']"
      display="bottom"
      label="Bottom"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['date']"
      display="center"
      label="Center"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
  </MbscPage>
</template>
