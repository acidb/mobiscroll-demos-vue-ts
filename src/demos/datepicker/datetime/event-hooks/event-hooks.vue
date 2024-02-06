<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

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

function handleInit() {
  // Logic running on component init
}

function handleOpen() {
  // Your custom event handler goes here
}

function handlePageChange() {
  // Your custom event handler goes here
}

function handlePageLoaded() {
  // Use it to inject custom markup & attach custom listeners
}

function handlePageLoading() {
  // Use it to load data on demand
}

function handlePosition() {
  // Logic for component positioning
}

function handleTempChange() {
  // Logic for temporary value change
}
</script>

<template>
  <MbscDatepicker
    :controls="['calendar']"
    label="Date"
    labelStyle="stacked"
    inputStyle="box"
    placeholder="Please select..."
    @cancel="handleCancel"
    @change="handleChange"
    @close="handleClose"
    @destroy="handleDestroy"
    @init="handleInit"
    @open="handleOpen"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-loading="handlePageLoading"
    @position="handlePosition"
    @temp-change="handleTempChange"
  />
</template>
