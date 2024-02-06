<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <MbscDatepicker :controls="['calendar']" :selectMultiple="true" display="inline" />
    <MbscDatepicker
      :controls="['calendar']"
      :selectMultiple="true"
      :selectMax="5"
      display="inline"
      headerText="Pick up to 5 days"
    />
    <MbscDatepicker
      :controls="['calendar']"
      :selectMultiple="true"
      :selectCounter="true"
      display="inline"
    />
  </MbscPage>
</template>
