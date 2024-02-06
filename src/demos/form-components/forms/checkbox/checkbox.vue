<script setup lang="ts">
import { MbscCheckbox, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const option1 = ref(true)
const option2 = ref(false)
const option3 = ref(false)
const option4 = ref(true)

const primary = ref(true)
const secondary = ref(true)
const success = ref(true)
const danger = ref(true)
const warning = ref(true)
const info = ref(true)
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Checkbox</div>
      <MbscCheckbox v-model="option1" label="Option 1" description="Checked checkbox" />
      <MbscCheckbox v-model="option2" label="Option 2" description="Empty checkbox" />
      <MbscCheckbox
        v-model="option3"
        label="Option 3"
        description="Disabled checkbox"
        :disabled="true"
      />
      <MbscCheckbox
        v-model="option4"
        label="Option 4"
        description="Disabled and checked checkbox"
        :disabled="true"
      />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Checkbox colors</div>
      <MbscCheckbox v-model="primary" label="Primary" color="primary" />
      <MbscCheckbox v-model="secondary" label="Secondary" color="secondary" />
      <MbscCheckbox v-model="success" label="Success" color="success" />
      <MbscCheckbox v-model="danger" label="Danger" color="danger" />
      <MbscCheckbox v-model="warning" label="Warning" color="warning" />
      <MbscCheckbox v-model="info" label="Info" color="info" />
    </div>
  </MbscPage>
</template>
