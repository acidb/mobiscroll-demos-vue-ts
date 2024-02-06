<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale
})
</script>

<template>
  <!-- theme: can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform -->
  <!-- themeVariant: can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme -->
  <MbscDatepicker :controls="['calendar']" display="inline" theme="material" themeVariant="dark" />
</template>
