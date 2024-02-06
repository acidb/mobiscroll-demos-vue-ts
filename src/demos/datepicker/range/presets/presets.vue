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

const now = new Date()
const curr = new Date()
const yesterday = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() - 1)
const startWeek = new Date(curr.setDate(curr.getDate() - curr.getDay()))
const endWeek = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6))
const startMonth = new Date(curr.getFullYear(), curr.getMonth() - 1, 1)
const endMonth = new Date(curr.getFullYear(), curr.getMonth(), 0)

const rangeValue = ref<any>(null)
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

function handleToastClose() {
  isToastOpen.value = false
}

function setToday() {
  rangeValue.value = [now, now]
  toastMessage.value = 'Today Selected'
  isToastOpen.value = true
}

function setYesterday() {
  rangeValue.value = [yesterday, yesterday]
  toastMessage.value = 'Yesterday Selected'
  isToastOpen.value = true
}

function setThisWeek() {
  rangeValue.value = [startWeek, endWeek]
  toastMessage.value = 'This Week Selected'
  isToastOpen.value = true
}

function setLastMonth() {
  rangeValue.value = [startMonth, endMonth]
  toastMessage.value = 'Last Month Selected'
  isToastOpen.value = true
}

function clear() {
  rangeValue.value = null
  toastMessage.value = 'Clear Value'
  isToastOpen.value = true
}
</script>

<template>
  <MbscPage>
    <div class="md-range-filter">
      <h4 class="md-header">Filter Results by</h4>
      <div class="mbsc-padding">
        <MbscButton className="mbsc-button-block" @click="setToday">Today</MbscButton>
        <MbscButton className="mbsc-button-block" @click="setYesterday">Yesterday</MbscButton>
        <MbscButton className="mbsc-button-block" @click="setThisWeek">This Week</MbscButton>
        <MbscButton className="mbsc-button-block" @click="setLastMonth">Last Month</MbscButton>
        <MbscButton className="mbsc-button-block" @click="clear">Clear</MbscButton>
      </div>
      <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Or by a custom range</div>
        <MbscDatepicker
          v-model="rangeValue"
          select="range"
          display="inline"
          :controls="['calendar']"
          :showRangeLabels="false"
        />
      </div>
    </div>
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  </MbscPage>
</template>

<style>
.md-range-filter .md-header {
  text-align: center;
  padding: 1em 0.75em 0 0.75em;
  margin: 0;
}
</style>
