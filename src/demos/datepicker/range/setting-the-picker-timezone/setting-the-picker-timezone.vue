<script setup lang="ts">
import { dayjsTimezone, MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { ref } from 'vue'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjsTimezone.dayjs = dayjs

setOptions({
  // locale,
  // theme
})

const selected = ref<any>(null)
</script>

<template>
  <MbscDatepicker
    :controls="['calendar', 'time']"
    :timezonePlugin="dayjsTimezone"
    select="range"
    v-model="selected"
    dataTimezone="utc"
    displayTimezone="local"
    label="Select Date &amp; Time in Display Timezone"
    inputStyle="outline"
    labelStyle="stacked"
  />
  <div class="mbsc-padding">
    <p v-if="selected">
      Selected<br />
      <code>From: {{ selected[0] }}</code
      ><br />
      <code>To: {{ selected[1] }}</code>
    </p>
  </div>
</template>
