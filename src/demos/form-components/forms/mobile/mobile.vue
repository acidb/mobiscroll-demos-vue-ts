<script setup lang="ts">
import { MbscInput, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">User Data</div>
      <MbscInput label="First name" placeholder="First Name" />
      <MbscInput label="Last name" placeholder="Last Name" />
      <MbscInput label="User name" placeholder="User Name" />
      <MbscInput label="Company" placeholder="Company Name" />
      <MbscInput label="Email" placeholder="Email Address" />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Phone Number</div>
      <MbscInput label="Home" placeholder="Home" />
      <MbscInput label="Business" placeholder="Business" />
      <MbscInput label="Fax" placeholder="Fax" />
    </div>
  </MbscPage>
</template>
