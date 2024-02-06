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
      :controls="['datetime']"
      label="Compact date & time picker"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['date', 'time']"
      label="Expanded date & time picker"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-6">
          <MbscDatepicker
            :controls="['date']"
            label="Date"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
          />
        </div>
        <div class="mbsc-col-6">
          <MbscDatepicker
            :controls="['time']"
            label="Time"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
          />
        </div>
      </div>
    </div>
  </MbscPage>
</template>
