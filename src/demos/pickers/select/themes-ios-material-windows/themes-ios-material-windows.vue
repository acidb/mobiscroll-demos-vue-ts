<script setup lang="ts">
import { MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale
})

const myData = [
  {
    value: 1,
    text: 'Books'
  },
  {
    value: 2,
    text: 'Movies, Music & Games'
  },
  {
    value: 3,
    text: 'Electronics & Computers'
  },
  {
    value: 4,
    text: 'Home, Garden & Tools'
  },
  {
    value: 5,
    text: 'Health & Beauty'
  },
  {
    value: 6,
    text: 'Toys, Kids & Baby'
  },
  {
    value: 7,
    text: 'Clothing & Jewelry'
  },
  {
    value: 8,
    text: 'Sports & Outdoors'
  },
  {
    value: 9,
    text: 'Automotive & Industrial'
  }
]
</script>

<template>
  <!-- theme: can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform -->
  <!-- themeVariant: can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme -->
  <MbscSelect :data="myData" display="inline" theme="material" themeVariant="dark" />
</template>
