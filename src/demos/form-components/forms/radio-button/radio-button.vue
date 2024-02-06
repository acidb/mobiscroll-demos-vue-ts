<script setup lang="ts">
import { MbscPage, MbscRadio, MbscRadioGroup, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const radio = ref('1')
const color = ref('success')
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Radio buttons</div>
      <MbscRadioGroup v-model="radio" name="group">
        <MbscRadio value="1" label="Radio Option 1" description="This is description for radio 1" />
        <MbscRadio value="2" label="Radio Option 2" description="This is description for radio 2" />
        <MbscRadio value="3" label="Radio Option 3" />
        <MbscRadio value="4" label="Disabled" :disabled="true" />
      </MbscRadioGroup>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Radio button colors</div>
      <MbscRadioGroup v-model="color" name="colors">
        <MbscRadio value="primary" label="Primary" color="primary" />
        <MbscRadio value="secondary" label="Secondary" color="secondary" />
        <MbscRadio value="success" label="Success" color="success" />
        <MbscRadio value="danger" label="Danger" color="danger" />
        <MbscRadio value="warning" label="Warning" color="warning" />
        <MbscRadio value="info" label="Info" color="info" />
      </MbscRadioGroup>
    </div>
  </MbscPage>
</template>
