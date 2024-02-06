<script setup lang="ts">
import {
  MbscButton,
  MbscCheckbox,
  MbscDropdown,
  MbscInput,
  MbscPage,
  MbscRadio,
  MbscRadioGroup,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscStepper,
  MbscSwitch,
  MbscTextarea,
  setOptions /* localeImport */
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <MbscInput label="Input field" placeholder="Input with label" />
      <MbscTextarea label="Textarea" placeholder="Textarea with label" />
      <MbscDropdown label="Select">
        <option value="Opel">Opel</option>
        <option value="Renault">Renault</option>
        <option value="Citroen">Citroen</option>
        <option value="Lotus">Lotus</option>
      </MbscDropdown>
      <MbscSwitch label="Switch" :defaultChecked="true" />
      <MbscCheckbox label="Checkbox" :defaultChecked="true" />
      <MbscRadioGroup name="rad">
        <MbscRadio value="1" label="Radio 1" :defaultChecked="true" />
        <MbscRadio value="2" label="Radio 2" />
      </MbscRadioGroup>
      <MbscStepper label="Stepper" />
      <div class="mbsc-button-group-block">
        <MbscButton>Button</MbscButton>
      </div>
      <MbscSegmentedGroup name="segmented-group">
        <MbscSegmented>Segmented 1</MbscSegmented>
        <MbscSegmented>Segmented 2</MbscSegmented>
      </MbscSegmentedGroup>
    </div>
  </MbscPage>
</template>
