<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker :controls="['calendar']" display="inline" calendarType="week" :calendarSize="1" />
  <MbscDatepicker :controls="['calendar']" display="inline" calendarType="week" :calendarSize="2" />
  <MbscDatepicker :controls="['calendar']" display="inline" calendarType="week" :calendarSize="3" />
</template>
