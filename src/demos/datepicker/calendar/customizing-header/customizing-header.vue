<script setup lang="ts">
import {
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
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

const myCalendarType = ref('week')
</script>

<template>
  <MbscDatepicker :controls="['calendar']" :calendarSize="2" display="inline" calendarType="week" />

  <MbscDatepicker :controls="['calendar']" display="inline">
    <template #header>
      <MbscCalendarPrev cssClass="custom-prev" />
      <MbscCalendarNav cssClass="custom-nav" />
      <MbscCalendarNext cssClass="custom-next" />
    </template>
  </MbscDatepicker>

  <MbscDatepicker :controls="['calendar']" display="inline">
    <template #header>
      <MbscCalendarNav />
      <div class="custom-buttons">
        <MbscCalendarPrev />
        <MbscCalendarToday />
        <MbscCalendarNext />
      </div>
    </template>
  </MbscDatepicker>

  <MbscDatepicker
    :controls="['calendar']"
    :calendarSize="2"
    :calendarType="myCalendarType"
    display="inline"
  >
    <template #header>
      <MbscCalendarNav cssClass="custom-view-nav" />
      <div class="custom-view">
        <MbscSegmentedGroup v-model="myCalendarType">
          <MbscSegmented value="week" icon="material-date-range"></MbscSegmented>
          <MbscSegmented value="month" icon="material-event-note"></MbscSegmented>
        </MbscSegmentedGroup>
      </div>
    </template>
  </MbscDatepicker>

  <MbscDatepicker
    :controls="['calendar']"
    :calendarSize="2"
    display="inline"
    calendarType="week"
    headerText="You selected {value}"
  />
</template>

<style>
.custom-buttons,
.custom-view,
.custom-nav {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1 0 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}

.custom-buttons {
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.custom-view,
.custom-nav {
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.custom-view-nav .mbsc-calendar-title.mbsc-material {
  font-size: 16px;
}

.custom-view .mbsc-segmented {
  margin: 0;
}

.custom-view .mbsc-segmented.mbsc-material,
.custom-view .mbsc-segmented.mbsc-windows {
  padding: 0 2px;
}

.custom-view .mbsc-segmented .mbsc-segmented-button {
  padding: 0 1px;
}

.custom-view .mbsc-segmented .mbsc-icon {
  font-size: 20px;
}

.custom-view .mbsc-segmented-button.mbsc-windows {
  border: 0;
}
</style>
