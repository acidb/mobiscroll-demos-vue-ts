<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker :controls="['date']" display="inline" min="1920-01-01" max="2050-01-01" />
  <MbscDatepicker :controls="['time']" display="inline" min="10:30" max="19:30" />
  <MbscDatepicker :controls="['timegrid']" display="inline" min="10:30" max="19:30" />
  <MbscDatepicker
    :controls="['datetime']"
    display="inline"
    min="2000-01-01T12:00"
    max="2050-01-01T12:00"
  />
</template>
