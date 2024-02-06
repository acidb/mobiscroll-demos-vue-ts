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
    value: 'chi',
    disabled: true
  },
  {
    text: 'London',
    value: 'lon',
    disabled: true
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
  <MbscSelect :data="myData" display="inline" />
</template>
