<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker :controls="['calendar', 'time']" display="inline" />
  <MbscDatepicker :controls="['calendar', 'timegrid']" display="inline" />
</template>
