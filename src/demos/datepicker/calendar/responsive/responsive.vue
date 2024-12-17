<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscDatepickerOptions, MbscResponsiveOptions } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myResponsive: MbscResponsiveOptions<MbscDatepickerOptions> = {
  xsmall: {
    display: 'bottom'
  },
  small: {
    display: 'anchored'
  },
  custom: {
    // Custom breakpoint
    breakpoint: 800,
    display: 'anchored',
    touchUi: false
  }
}
</script>

<template>
  <MbscDatepicker
    :controls="['calendar']"
    :responsive="myResponsive"
    labelStyle="stacked"
    inputStyle="box"
  />
</template>
