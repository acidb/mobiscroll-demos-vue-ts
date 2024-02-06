<script setup lang="ts">
import {
  hijriCalendar,
  jalaliCalendar,
  localeAr,
  localeFa,
  MbscDatepicker,
  setOptions
} from '@mobiscroll/vue'

setOptions({
  // theme
})
</script>

<template>
  <MbscDatepicker display="inline" :controls="['date']" />
  <MbscDatepicker
    display="inline"
    :controls="['date']"
    :calendarSystem="jalaliCalendar"
    :locale="localeFa"
  />
  <MbscDatepicker
    display="inline"
    :controls="['date']"
    :calendarSystem="hijriCalendar"
    :locale="localeAr"
  />
</template>
