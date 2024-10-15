<script setup lang="ts">
import {
  getJson,
  MbscDropdown,
  MbscEventcalendar,
  MbscPage /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

const myEvents = ref<MbscCalendarEvent[]>([])
const myTheme = ref<string>('material')
const myThemeVariant = ref<'light' | 'dark' | 'auto'>('dark')
const myView: MbscEventcalendarView = { agenda: { type: 'month' } }

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage cssClass="mds-full-height">
    <div class="mds-full-height mbsc-flex-col">
      <div class="mbsc-grid">
        <div class="mbsc-row">
          <div class="mbsc-col-sm-6">
            <MbscDropdown inputStyle="box" label="Theme" labelStyle="stacked" v-model="myTheme">
              <option value="auto">Auto</option>
              <option value="ios">iOS</option>
              <option value="material">Material</option>
              <option value="windows">Windows</option>
            </MbscDropdown>
          </div>
          <div class="mbsc-col-sm-6">
            <MbscDropdown
              inputStyle="box"
              label="Theme variant"
              labelStyle="stacked"
              v-model="myThemeVariant"
            >
              <option value="auto">Auto</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </MbscDropdown>
          </div>
        </div>
      </div>
      <div className="mds-overflow-hidden mbsc-flex-1-1">
        <MbscEventcalendar
          :data="myEvents"
          :theme="myTheme"
          :themeVariant="myThemeVariant"
          :view="myView"
        />
      </div>
    </div>
  </MbscPage>
</template>

<style>
.mds-full-height {
  height: 100%;
}

.mds-overflow-hidden {
  overflow: hidden;
}
</style>
