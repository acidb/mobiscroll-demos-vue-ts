<script setup lang="ts">
import { MbscDatepicker, MbscInput, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const startInput = ref<any>(null)
const endInput = ref<any>(null)
</script>

<template>
  <MbscPage>
    <MbscDatepicker
      :controls="['calendar']"
      :pages="2"
      select="range"
      display="inline"
      calendarType="month"
    />
    <MbscDatepicker :controls="['date']" select="range" display="inline" />
    <MbscDatepicker
      :controls="['calendar']"
      select="range"
      label="Range"
      inputStyle="outline"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <MbscDatepicker
      :controls="['calendar']"
      :startInput="startInput"
      :endInput="endInput"
      select="range"
    />
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-6">
          <MbscInput
            ref="startInput"
            label="Start"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
          />
        </div>
        <div class="mbsc-col-6">
          <MbscInput
            ref="endInput"
            label="End"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please Select..."
          />
        </div>
      </div>
    </div>
  </MbscPage>
</template>
