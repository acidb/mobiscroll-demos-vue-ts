<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker
    :controls="['datetime']"
    select="range"
    display="inline"
    :showRangeLabels="true"
    rangeStartLabel="Outbound"
    rangeEndLabel="Return"
    :minRange="3"
    :maxRange="10"
  />
</template>
