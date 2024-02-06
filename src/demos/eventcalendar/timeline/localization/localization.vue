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
  {
    id: 1,
    name: 'Ryan',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#ff4600'
  },
  {
    id: 3,
    name: 'John',
    color: '#ff0101'
  },
  {
    id: 4,
    name: 'Mark',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Sharon',
    color: '#8f1ed6'
  },
  {
    id: 6,
    name: 'Ashley',
    color: '#01adff'
  }
])
const myView: MbscEventcalendarView = {
  timeline: { type: 'day' }
}
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
  { name: 'Roman', value: 'ro' },
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

const localeStr = ref<string>('en')
const localeAll = locale

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
  <MbscPage>
    <div class="md-localization">
      <div class="mbsc-grid">
        <div class="mbsc-row mbsc-justify-content-center">
          <div class="mbsc-col-sm-8">
            <MbscDropdown v-model="localeStr" input-style="box">
              <option v-for="l of languages" :key="l.value" :value="l.value">
                {{ l.name }}
              </option>
            </MbscDropdown>
          </div>
        </div>
      </div>
      <MbscEventcalendar
        :data="myEvents"
        :resources="myResources"
        :view="myView"
        :locale="localeAll[localeStr]"
      />
    </div>
  </MbscPage>
</template>
