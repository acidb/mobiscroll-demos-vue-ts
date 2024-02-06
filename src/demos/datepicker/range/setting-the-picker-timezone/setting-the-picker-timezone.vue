<script setup lang="ts">
import { MbscDatepicker, momentTimezone, setOptions /* localeImport */ } from '@mobiscroll/vue'
import * as moment from 'moment-timezone'
import { ref } from 'vue'

momentTimezone.moment = moment

setOptions({
  // locale,
  // theme
})

const selected = ref<any>(null)
</script>

<template>
  <MbscDatepicker
    :controls="['calendar', 'time']"
    :timezonePlugin="momentTimezone"
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
