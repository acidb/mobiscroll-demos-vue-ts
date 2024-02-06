<script setup lang="ts">
import { localeEs, MbscDatepicker, setOptions } from '@mobiscroll/vue'

setOptions({
  // theme
})
</script>

<template>
  <MbscDatepicker :locale="localeEs" :controls="['calendar']" select="range" display="inline" />
</template>
