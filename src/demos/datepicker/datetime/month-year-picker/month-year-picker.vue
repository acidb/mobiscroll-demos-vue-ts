<script setup lang="ts">
import { MbscDatepicker, MbscInput, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const until = new Date(now.getFullYear() + 10, now.getMonth())
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Add a new credit card</div>
      <MbscInput label="Name" placeholder="Required"></MbscInput>
      <MbscInput label="Card" placeholder="Credit card number"></MbscInput>
      <MbscDatepicker
        :controls="['date']"
        dateFormat="MM/YYYY"
        dateWheels="DD MMMM YYYY"
        :max="until"
        label="Expiration"
        placeholder="Required"
        value="12/2025"
      />
      <!-- :min="today" -->
      <MbscInput label="Security" placeholder="3-digit CVV"></MbscInput>
    </div>
  </MbscPage>
</template>
