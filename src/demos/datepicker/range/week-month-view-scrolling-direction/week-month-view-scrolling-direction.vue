<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker
    select="range"
    display="inline"
    calendarType="month"
    :controls="['calendar']"
    :pages="2"
    :showWeekNumbers="true"
    :showOuterDays="true"
  />
  <MbscDatepicker
    select="range"
    display="inline"
    calendarType="week"
    calendarScroll="vertical"
    :controls="['calendar']"
    :calendarSize="2"
    :showWeekNumbers="true"
  />
</template>
