<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents: MbscCalendarEvent[] = [
  {
    recurring: {
      repeat: 'daily', // possible values: 'daily', 'weekly', 'monthly', 'yearly'
      from: '2021-06-01', // the start date of the occurrences
      until: '2021-07-20' // the end date of the occurrences
    },
    recurringException: ['2021-07-05', new Date(2021, 6, 6)], // can contain string or date object
    recurringExceptionRule: {
      repeat: 'monthly',
      day: 1
    },
    title: 'Holiday',
    allDay: true,
    color: 'green'
  },
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'SA', // comma separated list of the week days, possible values: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'
      interval: 2 // the time interval for the rule (every 2 weeks in this example)
    },
    title: 'Shopping day',
    color: 'orange'
  },
  {
    recurring: {
      repeat: 'monthly',
      day: 15,
      count: 12 // the number of occurrences
    },
    title: 'Pay day',
    color: 'red'
  },
  {
    recurring: {
      repeat: 'yearly',
      day: 1,
      month: 1
    },
    title: "New Year's Eve",
    color: 'blue'
  }
]

const myView: MbscEventcalendarView = {
  agenda: { type: 'month' }
}
</script>

<template>
  <MbscEventcalendar :data="myEvents" :view="myView" />
</template>
