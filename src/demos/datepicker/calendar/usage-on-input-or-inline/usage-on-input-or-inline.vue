<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const inputProps = {
  placeholder: 'Please Select...'
}
</script>

<template>
  <MbscPage>
    <MbscDatepicker :controls="['calendar']" inputComponent="input" :inputProps="inputProps" />
    <MbscDatepicker
      :controls="['calendar']"
      label="Calendar"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <MbscDatepicker :controls="['calendar']" display="inline" />
  </MbscPage>
</template>
