<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker
    display="inline"
    select="preset-range"
    :controls="['calendar']"
    :firstSelectDay="1"
    :selectSize="14"
  />
</template>
