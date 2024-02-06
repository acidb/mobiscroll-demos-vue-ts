<script setup lang="ts">
import { MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'

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
  },
  {
    text: 'Los Angeles',
    value: 'la'
  },
  {
    text: 'New York',
    value: 'ny'
  },
  {
    text: 'Paris',
    value: 'par'
  },
  {
    text: 'San Francisco',
    value: 'sf'
  }
]

function handleCancel() {
  // Logic for cancel button click
}

function handleChange() {
  // Logic for value change
}

function handleClose() {
  // Your custom event handler goes here
}

function handleDestroy() {
  // Your custom event handler goes here
}

function handleFilter() {
  // Your custom event handler goes here
}

function handleInit() {
  // Logic running on component init
}

function handleOpen() {
  // Your custom event handler goes here
}

function handlePosition() {
  // Logic for component positioning
}

function handleTempChange() {
  // Logic for temporary value change
}
</script>

<template>
  <MbscSelect
    label="Select"
    labelStyle="stacked"
    inputStyle="outline"
    :data="myData"
    :filter="true"
    placeholder="Please select..."
    @cancel="handleCancel"
    @change="handleChange"
    @close="handleClose"
    @destroy="handleDestroy"
    @filter="handleFilter"
    @init="handleInit"
    @open="handleOpen"
    @position="handlePosition"
    @temp-change="handleTempChange"
  />
</template>
