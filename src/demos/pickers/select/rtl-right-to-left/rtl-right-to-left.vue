<script setup lang="ts">
import { MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myData = [
  {
    text: 'Atlanta',
    value: 'atl'
  },
  {
    text: 'Berlin',
    value: 'ber'
  },
  {
    text: 'Boston',
    value: 'bos'
  },
  {
    text: 'Chicago',
    value: 'chi'
  },
  {
    text: 'London',
    value: 'lon'
  },
  {
    text: 'Los Angeles',
    value: 'la'
  },
  {
    text: 'New York',
    value: 'ny'
  },
  {
    text: 'Paris',
    value: 'par'
  },
  {
    text: 'San Francisco',
    value: 'sf'
  }
]
</script>

<template>
  <MbscSelect
    :rtl="true"
    :data="myData"
    label="Select"
    display="bottom"
    inputStyle="outline"
    labelStyle="stacked"
    placeholder="Please select..."
  />
</template>
