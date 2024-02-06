<script setup lang="ts">
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <MbscDatepicker
      :controls="['date']"
      label="Date picker"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['date']"
      dateFormat="MM/YYYY"
      dateWheels="MMMM YYYY"
      label="Month & year picker"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
  </MbscPage>
</template>
