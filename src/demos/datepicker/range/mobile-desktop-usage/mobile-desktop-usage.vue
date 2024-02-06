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

const isPickerOpen = ref<boolean>(false)
const week = ref(['dyndatetime(y,m,d)', 'dyndatetime(y,m,d+6)'])

const inputProps = {
  class: 'md-mobile-picker-input',
  placeholder: 'Please Select...'
}

function openPicker() {
  isPickerOpen.value = true
}

function handleClose() {
  isPickerOpen.value = false
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid">
      <div class="mbsc-form-group">
        <div class="mbsc-row">
          <div class="mbsc-col-12">
            <div class="mbsc-txt-muted md-mobile-picker-header">
              Use the picker with any inputs & show on focus/click
            </div>
            <MbscDatepicker inputComponent="input" select="range" :inputProps="inputProps" />
          </div>
        </div>
      </div>
      <div class="mbsc-form-group">
        <div class="mbsc-row">
          <div class="mbsc-col-12 mbsc-txt-muted md-mobile-picker-header">
            Disable <code>onClick/onFocus</code> and only show on button
          </div>
          <div class="mbsc-col-8">
            <MbscDatepicker
              v-model="week"
              inputComponent="input"
              select="range"
              :inputProps="inputProps"
              :showOnClick="false"
              :showOnFocus="false"
              :isOpen="isPickerOpen"
              @close="handleClose"
            />
          </div>
          <div class="mbsc-col-4">
            <MbscButton
              variant="outline"
              color="primary"
              className="md-mobile-picker-button"
              @click="openPicker"
              >Show picker
            </MbscButton>
          </div>
        </div>
      </div>
      <div class="mbsc-form-group">
        <div class="mbsc-row">
          <div class="mbsc-col-12">
            <div class="mbsc-txt-muted md-mobile-picker-header">
              Use the picker with a Mobiscroll input
            </div>
            <MbscDatepicker
              select="range"
              className="md-mobile-picker-box-label"
              inputStyle="box"
              placeholder="Please Select..."
            />
          </div>
        </div>
      </div>
      <div class="mbsc-txt-muted md-mobile-picker-header">Use the picker inline in any page</div>
    </div>
    <div class="md-mobile-picker-inline">
      <MbscDatepicker select="range" display="inline" />
    </div>
  </MbscPage>
</template>

<style>
.md-mobile-picker-header {
  font-size: 14px;
}

input.md-mobile-picker-input {
  color: initial;
  width: 100%;
  padding: 10px;
  margin: 6px 0 12px 0;
  border: 1px solid #ccc;
  border-radius: 0;
  font-family: arial, verdana, sans-serif;
  font-size: 14px;
  box-sizing: border-box;
  -webkit-appearance: none;
}

.md-mobile-picker-button.mbsc-button {
  font-size: 13px;
  padding: 0 15px;
  line-height: 36px;
  float: right;
  margin: 6px 0;
  width: 100%;
}

.mbsc-col-no-padding {
  padding-left: 0;
}

.md-mobile-picker-box-label.mbsc-textfield-wrapper-box,
.md-mobile-picker-box-label .mbsc-textfield-wrapper-box,
.md-mobile-picker-inline {
  margin: 6px 0 12px 0;
}
</style>
