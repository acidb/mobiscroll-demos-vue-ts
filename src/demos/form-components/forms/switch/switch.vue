<script setup lang="ts">
import { MbscPage, MbscSwitch, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Switch</div>
      <MbscSwitch label="Switch Off" description="This is description for Switch" />
      <MbscSwitch
        label="Switch On"
        description="This is description for Switch 2"
        :defaultChecked="true"
      />
      <MbscSwitch label="Disabled Switch Off" :disabled="true" />
      <MbscSwitch label="Disabled Switch On" :disabled="true" :defaultChecked="true" />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Switch colors</div>
      <MbscSwitch label="Primary" color="primary" :defaultChecked="true" />
      <MbscSwitch label="Secondary" color="secondary" :defaultChecked="true" />
      <MbscSwitch label="Success" color="success" :defaultChecked="true" />
      <MbscSwitch label="Danger" color="danger" :defaultChecked="true" />
      <MbscSwitch label="Warning" color="warning" :defaultChecked="true" />
      <MbscSwitch label="Info" color="info" :defaultChecked="true" />
    </div>
  </MbscPage>
</template>
