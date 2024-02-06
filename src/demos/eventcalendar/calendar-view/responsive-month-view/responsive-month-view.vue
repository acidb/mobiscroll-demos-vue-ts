<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myResponsive = {
  xsmall: {
    view: {
      calendar: {
        type: 'week'
      },
      agenda: {
        type: 'day'
      }
    }
  },
  custom: {
    // Custom breakpoint
    breakpoint: 600,
    view: {
      calendar: {
        labels: true
      }
    }
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :data="myEvents" :responsive="myResponsive" />
</template>
