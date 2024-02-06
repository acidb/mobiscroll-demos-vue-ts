<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myColors = [
  { date: 'dyndatetime(y,m,12)', cellCssClass: 'check-in' },
  { date: 'dyndatetime(y,m,16)', cellCssClass: 'check-out' },
  { start: 'dyndatetime(y,m,13)', end: 'dyndatetime(y,m,15)', background: '#46c4f3' }
]
</script>

<template>
  <MbscDatepicker :colors="myColors" select="range" display="inline" />
</template>

<style>
.mbsc-datepicker .mbsc-ltr.check-in {
  background: linear-gradient(to left top, #46c4f3 50%, transparent 50%) no-repeat;
}

.mbsc-datepicker .mbsc-ltr.check-out {
  background: linear-gradient(to left top, transparent 50%, #46c4f3 50%) no-repeat;
}

.mbsc-datepicker .mbsc-rtl.check-in {
  background: linear-gradient(to right bottom, #46c4f3 50%, transparent 50%) no-repeat;
}

.mbsc-datepicker .mbsc-rtl.check-out {
  background: linear-gradient(to right bottom, transparent 50%, #46c4f3 50%) no-repeat;
}

.mbsc-datepicker .mbsc-ltr.check-out,
.mbsc-datepicker .mbsc-rtl.check-in {
  border-color: #46c4f3;
}

.mbsc-datepicker .mbsc-windows.check-in,
.mbsc-datepicker .mbsc-windows.check-out {
  border-color: transparent;
}
</style>
