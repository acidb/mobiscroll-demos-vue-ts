<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

function handleActiveDateChange() {
  // Logic for the active date change
}

function handleCancel() {
  // Logic for cancel button click
}

function handleCellClick() {
  // Logic for event click
}

function handleCellHoverIn() {
  // Logic for handling cell hover in
}

function handleCellHoverOut() {
  // Logic for handling cell hover out
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

function handleLabelClick() {
  // Logic for label click
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
    select="range"
    label="Range"
    labelStyle="stacked"
    inputStyle="outline"
    placeholder="Please select..."
    @active-date-change="handleActiveDateChange"
    @cancel="handleCancel"
    @cell-click="handleCellClick"
    @cell-hover-in="handleCellHoverIn"
    @cell-hover-out="handleCellHoverOut"
    @change="handleChange"
    @close="handleClose"
    @destroy="handleDestroy"
    @init="handleInit"
    @label-click="handleLabelClick"
    @open="handleOpen"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-loading="handlePageLoading"
    @position="handlePosition"
    @temp-change="handleTempChange"
  />
</template>
