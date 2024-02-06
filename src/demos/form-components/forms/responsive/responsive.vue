<script setup lang="ts">
import { MbscButton, MbscInput, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid mbsc-form-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
          <MbscInput
            label="Email"
            inputStyle="box"
            labelStyle="floating"
            placeholder="Enter your email address"
          />
        </div>
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
          <MbscInput
            label="Password"
            inputStyle="box"
            labelStyle="floating"
            placeholder="Set a password"
            :passwordToggle="true"
          />
        </div>
        <div class="mbsc-col-12 mbsc-col-lg-6">
          <MbscInput
            label="Address"
            inputStyle="box"
            labelStyle="floating"
            placeholder="What is your address?"
          />
        </div>
      </div>
      <div class="mbsc-row">
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
          <MbscInput
            label="Town"
            inputStyle="box"
            labelStyle="floating"
            placeholder="Enter your town"
          />
        </div>
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
          <MbscInput
            label="State"
            inputStyle="box"
            labelStyle="floating"
            placeholder="Select your state"
          />
        </div>
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
          <MbscInput
            label="Zip"
            inputStyle="box"
            labelStyle="floating"
            placeholder="What is your zip code"
          />
        </div>
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
          <MbscInput
            label="Country"
            inputStyle="box"
            labelStyle="floating"
            placeholder="Select your country"
          />
        </div>
      </div>
      <div class="mbsc-row">
        <div class="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
          <div class="mbsc-button-group-block">
            <MbscButton color="success"> Create account </MbscButton>
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>

<style>
.mbsc-ios .mbsc-form-grid .mbsc-textfield-wrapper {
  margin: 0.75em 1em;
}
</style>
