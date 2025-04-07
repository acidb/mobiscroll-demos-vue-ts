<script setup lang="ts">
import {
  getJson,
  locale,
  MbscDropdown,
  MbscEventcalendar,
  MbscPage,
  setOptions
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myResources = ref<MbscResource[]>([
  { id: 1, name: 'Ryan', color: '#fdf500' },
  { id: 2, name: 'Kate', color: '#ff4600' },
  { id: 3, name: 'John', color: '#ff0101' },
  { id: 4, name: 'Mark', color: '#239a21' },
  { id: 5, name: 'Sharon', color: '#8f1ed6' },
  { id: 6, name: 'Ashley', color: '#01adff' }
])

const myView: MbscEventcalendarView = {
  timeline: { type: 'day' }
}

const localeStr = ref<string>('en')

const languages = ref<any[]>([
  { name: 'Arabic', value: 'ar' },
  { name: 'Bulgarian', value: 'bg' },
  { name: 'Catala', value: 'ca' },
  { name: 'Cestina', value: 'cs' },
  { name: 'Dansk', value: 'da' },
  { name: 'Deutsch', value: 'de' },
  { name: 'Greek', value: 'el' },
  { name: 'English', value: 'en' },
  { name: 'English-UK', value: 'en-GB' },
  { name: 'Espanol', value: 'es' },
  { name: 'Farsi', value: 'fa' },
  { name: 'Suomi', value: 'fi' },
  { name: 'Français', value: 'fr' },
  { name: 'Hebrew', value: 'he' },
  { name: 'Hindi', value: 'hi' },
  { name: 'Croatian', value: 'hr' },
  { name: 'Magyar', value: 'hu' },
  { name: 'Italiano', value: 'it' },
  { name: 'Japanese', value: 'ja' },
  { name: 'Korean', value: 'ko' },
  { name: 'Lietuviu', value: 'lt' },
  { name: 'Nederlands', value: 'nl' },
  { name: 'Norsk', value: 'no' },
  { name: 'Polski', value: 'pl' },
  { name: 'Português Brasileiro', value: 'pt-BR' },
  { name: 'Português Europeu', value: 'pt-PT' },
  { name: 'Română', value: 'ro' },
  { name: 'Russian UA', value: 'ru-UA' },
  { name: 'Russian', value: 'ru' },
  { name: 'Slovencina', value: 'sk' },
  { name: 'Serbian', value: 'sr' },
  { name: 'Svenska', value: 'sv' },
  { name: 'Thai', value: 'th' },
  { name: 'Türkçe', value: 'tr' },
  { name: 'Ukrainian', value: 'ua' },
  { name: 'Vietnamese', value: 'vi' },
  { name: 'Chinese', value: 'zh' }
])

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage cssClass="mds-full-height">
    <div class="mds-locale-cont mds-full-height mbsc-flex-col">
      <div class="mbsc-grid">
        <div class="mbsc-row">
          <div class="mbsc-col-sm-8">
            <MbscDropdown v-model="localeStr" inputStyle="box" label="Locale" labelStyle="stacked">
              <option v-for="lang of languages" :key="lang.value" :value="lang.value">
                {{ lang.name }}
              </option>
            </MbscDropdown>
          </div>
        </div>
      </div>
      <div class="mds-overflow-hidden mbsc-flex-1-1">
        <MbscEventcalendar
          :data="myEvents"
          :locale="locale[localeStr]"
          :resources="myResources"
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

.mds-locale-cont .mbsc-col-sm-8 {
  margin: 0 auto;
}

.mds-overflow-hidden {
  overflow: hidden;
}
</style>
