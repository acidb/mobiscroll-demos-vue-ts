<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker :controls="['calendar']" display="inline" calendarType="month" :pages="1" />
  <MbscDatepicker :controls="['calendar']" display="inline" calendarType="month" :pages="2" />
  <MbscDatepicker :controls="['calendar']" display="inline" calendarType="month" :pages="3" />
  <MbscDatepicker :controls="['calendar']" display="inline" calendarType="month" pages="auto" />
</template>
