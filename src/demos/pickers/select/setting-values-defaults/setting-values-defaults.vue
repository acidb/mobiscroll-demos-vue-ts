<script setup lang="ts">
import { MbscButton, MbscPage, MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myData = [
  {
    text: 'Atlanta',
    value: 'atl'
  },
  {
    text: 'Berlin',
    value: 'ber'
  },
  {
    text: 'Boston',
    value: 'bos'
  },
  {
    text: 'Chicago',
    value: 'chi'
  },
  {
    text: 'London',
    value: 'lon'
  }
]

const myDefaultSelection = 'ber'
const myCustom = ref()

const custom = ref()
const customRef = ref()

const customButtons = [
  {
    text: 'Custom',
    handler: () => {
      customRef.value.instance.setTempVal('chi')
    }
  },
  'set',
  'cancel'
]

const autoButtons = ['close']

function setBoston() {
  myCustom.value = 'bos'
}

function setLondon() {
  myCustom.value = 'lon'
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Controlling the default value</div>
      <MbscSelect
        label="Default"
        inputStyle="outline"
        labelStyle="stacked"
        placeholder="Please select..."
        :data="myData"
      />
      <MbscSelect
        label="Custom default"
        inputStyle="outline"
        labelStyle="stacked"
        placeholder="Please select..."
        :data="myData"
        :defaultSelection="myDefaultSelection"
      />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Setting a custom value</div>
      <div class="mbsc-button-group-block">
        <MbscButton @click="setBoston">Boston</MbscButton>
        <MbscButton @click="setLondon">London</MbscButton>
      </div>
      <MbscSelect :data="myData" v-model="myCustom" display="inline" />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Buttons API</div>
      <MbscSelect
        ref="customRef"
        label="Custom"
        inputStyle="outline"
        labelStyle="stacked"
        placeholder="Please select..."
        v-model="custom"
        :data="myData"
        :buttons="customButtons"
      />
      <MbscSelect
        label="Auto set"
        inputStyle="outline"
        labelStyle="stacked"
        placeholder="Please select..."
        :data="myData"
        :buttons="autoButtons"
      />
    </div>
  </MbscPage>
</template>
