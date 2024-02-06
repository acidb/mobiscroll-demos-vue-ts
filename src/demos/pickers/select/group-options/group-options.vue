<script setup lang="ts">
import { MbscPage, MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // theme
})

const singleData = [
  { text: 'Atlanta', group: 'US', value: 'atl' },
  { text: 'Boston', group: 'US', value: 'bos' },
  { text: 'Bath', group: 'UK', value: 'bat' },
  { text: 'Bristol', group: 'UK', value: 'bri' },
  { text: 'Berlin', group: 'DE', value: 'ber' },
  { text: 'Duisburg', group: 'DE', value: 'dus' },
  { text: 'Cologne', group: 'DE', value: 'col' },
  { text: 'Paris', group: 'FR', value: 'par' },
  { text: 'Lyon', group: 'FR', value: 'lyo' }
]
const groupData = [
  { text: 'Atlanta', group: 'US', value: 'atl' },
  { text: 'Boston', group: 'US', value: 'bos' },
  { text: 'Bath', group: 'UK', value: 'bat' },
  { text: 'Bristol', group: 'UK', value: 'bri' }
]

const multipleData = [
  { text: 'Camera & Photo', group: 'Electronics', value: 1 },
  { text: 'Cell Phones & Accessories', group: 'Electronics', value: 2 },
  { text: 'GPS & Navigation', group: 'Electronics', value: 3 },
  { text: 'Plugs and Outlets', group: 'Smart Home', value: 4 },
  { text: 'Heating and Cooling', group: 'Smart Home', value: 5 },
  { text: 'Detectors and Sensors', group: 'Smart Home', value: 6 }
]
</script>

<template>
  <MbscPage>
    <MbscSelect
      :data="singleData"
      label="Single select"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please select..."
    />
    <MbscSelect
      :data="groupData"
      :selectMultiple="true"
      label="Group wheel"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please select..."
    />
    <MbscSelect
      :data="multipleData"
      :selectMultiple="true"
      label="Multi-select"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please select..."
    />
  </MbscPage>
</template>
