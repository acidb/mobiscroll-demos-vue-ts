<script setup lang="ts">
import { MbscPage, MbscStepper, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Passengers</div>
      <MbscStepper
        label="Adults"
        description="From 14 years"
        :min="1"
        :defaultValue="1"
        :max="15"
      />
      <MbscStepper label="Children" description="2-14 years" inputPosition="start" :max="15" />
      <MbscStepper label="Infant" description="0-2 years" inputPosition="start" :max="10" />
    </div>
  </MbscPage>
</template>
