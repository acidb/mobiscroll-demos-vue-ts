<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <MbscDatepicker :controls="['calendar']" select="range" display="inline" />
    <MbscDatepicker
      :controls="['calendar']"
      select="range"
      display="anchored"
      label="Anchored"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['calendar']"
      select="range"
      display="top"
      label="Top"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['calendar']"
      select="range"
      display="bottom"
      label="Bottom"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['calendar']"
      select="range"
      display="center"
      label="Center"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
  </MbscPage>
</template>
