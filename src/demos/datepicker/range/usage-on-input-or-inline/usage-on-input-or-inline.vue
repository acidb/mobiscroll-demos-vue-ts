<script setup lang="ts">
import { MbscDatepicker, MbscInput, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const inputProps = {
  placeholder: 'Please Select...'
}

const startInput = ref<any>(null)
const endInput = ref<any>(null)
</script>

<template>
  <MbscPage>
    <MbscDatepicker select="range" inputComponent="input" :inputProps="inputProps" />
    <MbscDatepicker
      select="range"
      label="Calendar"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <MbscInput ref="startInput" label="Start" placeholder="Please Select..." />
    <MbscInput ref="endInput" label="End" placeholder="Please Select..." />
    <MbscDatepicker select="range" :startInput="startInput" :endInput="endInput" />
    <MbscDatepicker select="range" display="inline" />
  </MbscPage>
</template>
