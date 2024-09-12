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

const myCalendarType = ref<'month' | 'week'>('week')
</script>

<template>
  <MbscDatepicker
    display="inline"
    :controls="['calendar']"
    :calendarType="myCalendarType"
    :calendarSize="1"
  >
    <template #header>
      <MbscCalendarNav class="custom-view-nav" />
      <div class="custom-view">
        <MbscSegmentedGroup v-model="myCalendarType">
          <MbscSegmented value="week" icon="material-date-range"></MbscSegmented>
          <MbscSegmented value="month" icon="material-event-note"></MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev />
      <MbscCalendarNext />
    </template>
  </MbscDatepicker>
</template>

<style>
.custom-view .mbsc-segmented .mbsc-icon {
  font-size: 20px;
}
</style>
