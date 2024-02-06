<script setup lang="ts">
import {
  MbscButton,
  MbscPage,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscStepper,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const primary = ref<number>(100)
const secondary = ref<number>(100)
const success = ref<number>(100)
const danger = ref<number>(100)
const warning = ref<number>(100)
const info = ref<number>(100)
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Button colors</div>
      <div class="mbsc-mbsc-button-group">
        <MbscButton color="primary">Primary</MbscButton>
        <MbscButton color="secondary">Secondary</MbscButton>
        <MbscButton color="success">Success</MbscButton>
        <MbscButton color="danger">Danger</MbscButton>
        <MbscButton color="warning">Warning</MbscButton>
        <MbscButton color="info">Info</MbscButton>
        <MbscButton color="light">Light</MbscButton>
        <MbscButton color="dark">Dark</MbscButton>
      </div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Segmented colors</div>
      <MbscSegmentedGroup name="groupPrimary" color="primary">
        <MbscSegmented value="desktop" icon="home" :defaultChecked="true">Desktop</MbscSegmented>
        <MbscSegmented value="mobile" icon="mobile">Mobile</MbscSegmented>
        <MbscSegmented value="cloud" icon="cloud-upload">Cloud</MbscSegmented>
      </MbscSegmentedGroup>
      <MbscSegmentedGroup name="groupSecondary" color="secondary">
        <MbscSegmented value="desktop" icon="home" :defaultChecked="true">Desktop</MbscSegmented>
        <MbscSegmented value="mobile" icon="mobile">Mobile</MbscSegmented>
        <MbscSegmented value="cloud" icon="cloud-upload">Cloud</MbscSegmented>
      </MbscSegmentedGroup>
      <MbscSegmentedGroup name="groupSuccess" color="success">
        <MbscSegmented value="desktop" icon="home" :defaultChecked="true">Desktop</MbscSegmented>
        <MbscSegmented value="mobile" icon="mobile">Mobile</MbscSegmented>
        <MbscSegmented value="cloud" icon="cloud-upload">Cloud</MbscSegmented>
      </MbscSegmentedGroup>
      <MbscSegmentedGroup name="groupDanger" color="danger">
        <MbscSegmented value="desktop" icon="home" :defaultChecked="true">Desktop</MbscSegmented>
        <MbscSegmented value="mobile" icon="mobile">Mobile</MbscSegmented>
        <MbscSegmented value="cloud" icon="cloud-upload">Cloud</MbscSegmented>
      </MbscSegmentedGroup>
      <MbscSegmentedGroup name="groupWarning" color="warning">
        <MbscSegmented value="desktop" icon="home" :defaultChecked="true">Desktop</MbscSegmented>
        <MbscSegmented value="mobile" icon="mobile">Mobile</MbscSegmented>
        <MbscSegmented value="cloud" icon="cloud-upload">Cloud</MbscSegmented>
      </MbscSegmentedGroup>
      <MbscSegmentedGroup name="groupInfo" color="info">
        <MbscSegmented value="desktop" icon="home" :defaultChecked="true">Desktop</MbscSegmented>
        <MbscSegmented value="mobile" icon="mobile">Mobile</MbscSegmented>
        <MbscSegmented value="cloud" icon="cloud-upload">Cloud</MbscSegmented>
      </MbscSegmentedGroup>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Stepper colors</div>
      <MbscStepper
        label="Primary"
        color="primary"
        v-model="primary"
        :min="-500"
        :max="500"
        :step="100"
      />
      <MbscStepper
        label="Secondary"
        color="secondary"
        v-model="secondary"
        :min="-500"
        :max="500"
        :step="100"
      />
      <MbscStepper
        label="Success"
        color="success"
        v-model="success"
        :min="-500"
        :max="500"
        :step="100"
      />
      <MbscStepper
        label="Danger"
        color="danger"
        v-model="danger"
        :min="-500"
        :max="500"
        :step="100"
      />
      <MbscStepper
        label="Warning"
        color="warning"
        v-model="warning"
        :min="-500"
        :max="500"
        :step="100"
      />
      <MbscStepper label="Info" color="info" v-model="info" :min="-500" :max="500" :step="100" />
    </div>
  </MbscPage>
</template>
