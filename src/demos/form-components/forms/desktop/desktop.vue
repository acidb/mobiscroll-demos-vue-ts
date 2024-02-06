<script setup lang="ts">
import {
  MbscButton,
  MbscDropdown,
  MbscInput,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid mbsc-grid-fixed">
      <div class="mbsc-form-group">
        <div class="mbsc-row mbsc-justify-content-center">
          <div class="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
            <div class="mbsc-form-group-title">Multiple columns grid</div>
            <div class="mbsc-row">
              <div class="mbsc-col-md-6 mbsc-col-12">
                <MbscInput
                  label="Email"
                  inputStyle="box"
                  labelStyle="floating"
                  placeholder="Email"
                ></MbscInput>
              </div>
              <div class="mbsc-col-md-6 mbsc-col-12">
                <MbscInput
                  label="Password"
                  inputStyle="box"
                  labelStyle="floating"
                  placeholder="Password"
                  type="password"
                  :passwordToggle="true"
                ></MbscInput>
              </div>
            </div>
            <div class="mbsc-row">
              <div class="mbsc-col-12">
                <MbscInput
                  label="Address"
                  inputStyle="box"
                  labelStyle="floating"
                  placeholder="Address"
                ></MbscInput>
              </div>
            </div>
            <div class="mbsc-row">
              <div class="mbsc-col-md-6 mbsc-col-12">
                <MbscInput
                  label="City"
                  inputStyle="box"
                  labelStyle="floating"
                  placeholder="City"
                ></MbscInput>
              </div>
              <div class="mbsc-col-md-4 mbsc-col-6">
                <MbscDropdown label="State" inputStyle="box" labelStyle="floating">
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois Indiana">Illinois Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana Nebraska">Montana Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania Rhode Island">Pennsylvania Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyomin">Wyomin</option>
                </MbscDropdown>
              </div>
              <div class="mbsc-col-md-2 mbsc-col-6">
                <MbscInput
                  label="Zip"
                  inputStyle="box"
                  labelStyle="floating"
                  placeholder="Zip"
                ></MbscInput>
              </div>
            </div>
            <MbscButton>Sign in</MbscButton>
          </div>
        </div>
      </div>
    </div>
    <div class="mbsc-grid">
      <div class="mbsc-row mbsc-justify-content-center">
        <div class="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Single column grid</div>
            <MbscInput label="First Name" placeholder="First Name"></MbscInput>
            <MbscInput label="Last Name" placeholder="Last Name"></MbscInput>
            <MbscInput label="User Name" placeholder="User Name"></MbscInput>
            <MbscInput label="Company" placeholder="Company Name"></MbscInput>
            <MbscInput label="Email" placeholder="Email Address"></MbscInput>
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
