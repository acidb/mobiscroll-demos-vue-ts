<script setup lang="ts">
import {
  formatDate,
  MbscButton,
  MbscDatepicker,
  MbscInput,
  MbscPage,
  MbscPopup,
  MbscSelect,
  type MbscSelectChangeEvent,
  options,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscPopupOptions, MbscResponsiveOptions } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const day = now.getDay()
const monday = now.getDate() - day + (day === 0 ? -6 : 1)
const startDate = 'dyndatetime(y,m,d)'
const endDate = 'dyndatetime(y,m,d + 6)'

const startInput = ref<any>(null)
const endInput = ref<any>(null)
const dateInput = ref<string>('')
const selected = ref<string>('custom')
const selectedDate = ref<any>([startDate, endDate])
const disableInput = ref<boolean>(false)
const isPopupOpen = ref<boolean>(false)

const respPopup: MbscResponsiveOptions<MbscPopupOptions> = {
  xsmall: {
    display: 'bottom',
    touchUi: true,
    buttons: [
      {
        text: 'Apply',
        handler: () => {
          const date = selectedDate.value

          changeInputValue(date[0], date[1] || date[0])
          isPopupOpen.value = true
        }
      },
      'cancel'
    ]
  },
  custom: {
    breakpoint: 559,
    buttons: [],
    display: 'anchored',
    anchor: document.querySelector('.date-filter-input') as HTMLInputElement,
    anchorAlign: 'start',
    touchUi: false,
    scrollLock: false,
    showArrow: false,
    maxWidth: 920
  }
}

const respSelect = {
  xsmall: {
    touchUi: true
  },
  small: {
    touchUi: false
  }
}

const myData = [
  {
    value: 'custom',
    text: 'Custom'
  },
  {
    value: 'today',
    text: 'Today'
  },
  {
    value: 'yesterday',
    text: 'Yesterday'
  },
  {
    value: 'last-week',
    text: 'Last week'
  },
  {
    value: 'last-month',
    text: 'Last month'
  },
  {
    value: 'last-7-days',
    text: 'Last 7 days'
  },
  {
    value: 'last-30-days',
    text: 'Last 30 days'
  }
]

function handleSelectChange(event: MbscSelectChangeEvent) {
  const s = event.value

  if (s === 'custom') {
    disableInput.value = false
  } else {
    disableInput.value = true

    switch (s) {
      case 'today':
        selectedDate.value = ['2021-09-15T00:00', '2021-09-15T00:00']
        break
      case 'yesterday':
        selectedDate.value = ['2021-09-14T00:00', '2021-09-14T00:00']
        break
      case 'last-week':
        selectedDate.value = [
          new Date(now.getFullYear(), now.getMonth(), monday - 7),
          new Date(now.getFullYear(), now.getMonth(), monday - 1)
        ]
        break
      case 'last-month':
        selectedDate.value = ['2021-08-01T00:00', '2021-08-31T00:00']
        break
      case 'last-7-days':
        selectedDate.value = ['2021-09-09T00:00', '2021-09-15T00:00']
        break
      case 'last-30-days':
        selectedDate.value = ['2021-08-17T00:00', '2021-09-15T00:00']
        break
      default:
        break
    }
  }
  selected.value = s
}

function handleCalendarChange() {
  disableInput.value = false
}

function handleInputClick() {
  isPopupOpen.value = true
}

function changeInputValue(start: string, end: string) {
  const locale = options.locale || {}
  const dateFormat = locale.dateFormat || 'DD/MM/YYYY'

  dateInput.value =
    formatDate(dateFormat, new Date(start)) + ' - ' + formatDate(dateFormat, new Date(end))
}

function applyClick() {
  const date = selectedDate.value

  changeInputValue(date[0], date[1] || date[0])
  isPopupOpen.value = false
}

function cancelClick() {
  isPopupOpen.value = false
}

function handlePopupClose() {
  isPopupOpen.value = false
}

onMounted(() => {
  changeInputValue(startDate, endDate)
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <MbscInput
        v-model="dateInput"
        inputStyle="box"
        labelStyle="stacked"
        @click="handleInputClick"
      />
    </div>
    <MbscPopup
      className="demo-date-filtering-popup"
      :responsive="respPopup"
      :isOpen="isPopupOpen"
      @close="handlePopupClose"
    >
      <div class="mbsc-grid mbsc-no-padding">
        <div class="mbsc-row">
          <div class="mbsc-col-sm-4 mbsc-push-sm-8 demo-date-filtering-dates">
            <div class="demo-date-filtering-inputs">
              <MbscSelect
                v-model="selected"
                :data="myData"
                :responsive="respSelect"
                label="Date range"
                inputStyle="box"
                labelStyle="stacked"
                @change="handleSelectChange"
              />
              <MbscInput
                ref="startInput"
                label="Start"
                inputStyle="box"
                labelStyle="stacked"
                :disabled="disableInput"
              />
              <MbscInput
                ref="endInput"
                label="End"
                inputStyle="box"
                labelStyle="stacked"
                :disabled="disableInput"
              />
            </div>
            <div class="demo-date-filtering-desktop-buttons mbsc-button-group-justified">
              <MbscButton className="apply-button" @click="applyClick">Apply</MbscButton>
              <MbscButton className="cancel-button" @click="cancelClick">Cancel</MbscButton>
            </div>
          </div>
          <div class="mbsc-col-sm-8 mbsc-pull-sm-4">
            <MbscDatepicker
              v-model="selectedDate"
              select="range"
              display="inline"
              pages="auto"
              returnFormat="iso8601"
              :startInput="startInput"
              :endInput="endInput"
              :controls="['calendar']"
              :showRangeLabels="false"
              :showOnClick="false"
              :showOnFocus="false"
              @change="handleCalendarChange"
            />
          </div>
        </div>
      </div>
    </MbscPopup>
  </MbscPage>
</template>

<style>
.demo-date-filtering-popup .mbsc-ios.mbsc-datepicker-inline {
  border: none;
  border-radius: 4px;
  overflow: hidden;
}

.demo-date-filtering-popup .mbsc-textfield-wrapper-box {
  margin-top: 0;
  margin-right: 0;
}

.demo-date-filtering-dates {
  display: flex;
  flex-direction: column;
}

.demo-date-filtering-inputs {
  flex: 1;
}

.demo-date-filtering-desktop-buttons.mbsc-button-group-justified,
.demo-date-filtering-desktop-buttons.mbsc-button-group-justified button {
  margin-bottom: 0;
}

@media (max-width: 575px) {
  .demo-date-filtering-desktop-buttons {
    display: none;
  }
  .demo-date-filtering-popup .mbsc-textfield-wrapper-box {
    margin-left: 0;
  }
}
</style>
