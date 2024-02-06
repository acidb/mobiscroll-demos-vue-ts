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
    rangeStartLabel="Outbound"
    rangeEndLabel="Return"
    rangeStartHelp="Set dates"
    rangeEndHelp="Set dates"
    :controls="['calendar']"
    :rangeHighlight="true"
    :showRangeLabels="true"
  />
  <MbscDatepicker
    select="range"
    display="inline"
    rangeStartLabel="Outbound"
    rangeEndLabel="Return"
    rangeStartHelp="Set dates"
    rangeEndHelp="Set dates"
    :controls="['date']"
    :rangeHighlight="true"
    :showRangeLabels="true"
  />
</template>
