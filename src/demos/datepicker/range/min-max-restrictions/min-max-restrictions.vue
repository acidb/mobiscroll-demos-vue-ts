<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker
    :controls="['calendar']"
    select="range"
    display="inline"
    min="1920-01-01"
    max="2050-01-01"
  />
  <MbscDatepicker
    :controls="['calendar', 'time']"
    select="range"
    display="inline"
    min="2000-01-01T12:00"
    max="2050-01-01T12:00"
  />
</template>
