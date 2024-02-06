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
    :controls="['calendar']"
    :minRange="3"
    :maxRange="10"
  />
  <MbscDatepicker
    select="range"
    display="inline"
    :controls="['date']"
    :minRange="3"
    :maxRange="10"
  />
</template>
