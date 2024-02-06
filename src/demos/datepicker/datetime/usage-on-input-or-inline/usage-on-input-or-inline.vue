<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <MbscDatepicker :controls="['date']" inputComponent="input" placeholder="Please Select..." />
    <MbscDatepicker
      :controls="['date']"
      label="Calendar"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <MbscDatepicker :controls="['date']" display="inline" />
  </MbscPage>
</template>
