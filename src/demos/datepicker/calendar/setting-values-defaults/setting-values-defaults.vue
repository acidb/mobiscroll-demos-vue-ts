<script setup lang="ts">
import {
  MbscButton,
  MbscDatepicker,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myDefaultSelection = new Date(2020, 11, 24)
const myCustom = ref()

const now = ref()
const nowRef = ref()
const custom = ref()
const customRef = ref()

const nowButtons = [
  {
    text: 'Now',
    handler: () => {
      now.value = new Date()
      nowRef.value.instance.close()
    }
  }
]

const customButtons = [
  {
    text: '05 Jan 2020',
    handler: () => {
      custom.value = new Date(2020, 0, 5)
      customRef.value.instance.close()
    }
  },
  'set',
  'cancel'
]

const autoButtons = ['close']

function setValue() {
  myCustom.value = new Date(2020, 0, 2)
}

function setToday() {
  myCustom.value = new Date()
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Controlling the default value</div>
      <MbscDatepicker label="Default" placeholder="Please select..." :controls="['calendar']" />
      <MbscDatepicker
        label="Custom default"
        placeholder="Please select..."
        :controls="['calendar']"
        :defaultSelection="myDefaultSelection"
      />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Setting a custom value</div>
      <div class="mbsc-button-group-block">
        <MbscButton @click="setValue">02-01-2020</MbscButton>
        <MbscButton @click="setToday">Today</MbscButton>
      </div>
      <MbscDatepicker :controls="['calendar']" v-model="myCustom" display="inline" />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Buttons API</div>
      <MbscDatepicker
        ref="nowRef"
        label="Now"
        placeholder="Please select..."
        v-model="now"
        :controls="['calendar']"
        :buttons="nowButtons"
      />
      <MbscDatepicker
        ref="customRef"
        label="Custom"
        placeholder="Please select..."
        v-model="custom"
        :controls="['calendar']"
        :buttons="customButtons"
      />
      <MbscDatepicker
        label="Auto set"
        placeholder="Please select..."
        :controls="['calendar']"
        :buttons="autoButtons"
      />
    </div>
  </MbscPage>
</template>
