<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscDatepickerOptions, MbscResponsiveOptions } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const responsiveDrop: MbscResponsiveOptions<MbscDatepickerOptions> = {
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

const responsiveCal: MbscResponsiveOptions<MbscDatepickerOptions> = {
  xsmall: {
    controls: ['date'],
    display: 'bottom',
    touchUi: true
  },
  small: {
    controls: ['date'],
    display: 'anchored',
    touchUi: true
  },
  custom: {
    // Custom breakpoint
    breakpoint: 800,
    controls: ['calendar'],
    display: 'anchored',
    touchUi: false
  }
}
</script>

<template>
  <MbscPage>
    <MbscDatepicker
      :controls="['date']"
      :responsive="responsiveDrop"
      labelStyle="stacked"
      inputStyle="box"
    />
    <MbscDatepicker
      :controls="['date']"
      :responsive="responsiveCal"
      labelStyle="stacked"
      inputStyle="box"
    />
  </MbscPage>
</template>
