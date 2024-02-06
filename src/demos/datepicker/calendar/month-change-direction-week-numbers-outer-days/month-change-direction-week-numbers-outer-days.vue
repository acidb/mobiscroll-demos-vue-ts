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
    :showWeekNumbers="true"
    :showOuterDays="true"
    calendarScroll="horizontal"
    display="inline"
  />
</template>
