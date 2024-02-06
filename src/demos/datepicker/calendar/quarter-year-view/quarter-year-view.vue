<script setup lang="ts">
import {
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscDatepicker,
  MbscSegmented,
  MbscSegmentedGroup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const viewType = ref<string>('q4')
const calType = ref<any>('month')
const selectedDate = ref<any>(new Date())
const activeDate = ref<any>(new Date())

function changeView() {
  const year = activeDate.value.getFullYear()
  let date: any
  switch (viewType.value) {
    case 'q1':
      calType.value = 'month'
      date = new Date(year, 1, 1)
      break
    case 'q2':
      calType.value = 'month'
      date = new Date(year, 4, 1)
      break
    case 'q3':
      calType.value = 'month'
      date = new Date(year, 7, 1)
      break
    case 'q4':
      calType.value = 'month'
      date = new Date(year, 10, 1)
      break
    case 'year':
      calType.value = 'year'
      date = new Date(year, selectedDate.value.getMonth(), 1)
      break
  }
  selectedDate.value = date
  activeDate.value = date
}

function handlePageChange(args: any) {
  let type = ''
  if (calType.value === 'year') {
    type = 'year'
  } else {
    const month = args.firstDay.getMonth()
    if (month < 3) {
      type = 'q1'
    } else if (month < 6) {
      type = 'q2'
    } else if (month < 9) {
      type = 'q3'
    } else {
      type = 'q4'
    }
  }
  viewType.value = type
  activeDate.value = args.firstDay
}
</script>

<template>
  <MbscDatepicker
    v-model="selectedDate"
    display="inline"
    :controls="['calendar']"
    :calendarSize="3"
    :calendarType="calType"
    :showWeekNumbers="true"
    @page-change="handlePageChange"
  >
    <template #header>
      <MbscCalendarNav />
      <div class="quarter-year-header-picker">
        <MbscSegmentedGroup v-model="viewType" @change="changeView">
          <MbscSegmented value="q1">Q1</MbscSegmented>
          <MbscSegmented value="q2">Q2</MbscSegmented>
          <MbscSegmented value="q3">Q3</MbscSegmented>
          <MbscSegmented value="q4">Q4</MbscSegmented>
          <MbscSegmented value="year">Year</MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev />
      <MbscCalendarNext />
    </template>
  </MbscDatepicker>
</template>

<style>
.mbsc-datepicker .quarter-year-header-picker .mbsc-segmented {
  max-width: 280px;
  margin: 0 auto;
}

.quarter-year-header-picker {
  flex: 1 0 auto;
}
</style>
