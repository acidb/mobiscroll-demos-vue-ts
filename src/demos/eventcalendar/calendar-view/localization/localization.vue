<script setup lang="ts">
import {
  getJson,
  locale,
  MbscDropdown,
  MbscEventcalendar,
  MbscPage,
  setOptions
} from '@mobiscroll/vue'
import type { MbscCalendarEvent } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
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
      <!-- dragOptions -->
      <MbscEventcalendar :data="myEvents" :locale="localeAll[localeStr]" />
    </div>
  </MbscPage>
</template>

<style>
.md-localization span.flag {
  min-width: 22px;
  height: 15px;
  position: relative;
  left: 0;
  margin-right: 1em;
  z-index: 1;
  top: 10px;
  display: inline-block;
  vertical-align: top;
}

.mbsc-rtl .md-localization span.flag {
  margin-right: 0;
  margin-left: 1em;
}

.mbsc-ios .md-localization span.flag {
  top: 15px;
  left: 1em;
}

.mbsc-rtl.mbsc-ios .md-localization span.flag {
  right: 1em;
}

.mbsc-windows .md-localization span.flag {
  top: 8px;
}

.md-localization img.flag {
  width: 30px;
}

.md-localization .flag {
  background: url(https://img.mobiscroll.com/demos/flags/flags_responsive.png) no-repeat;
  background-size: 100%;
}

.md-localization .flag-en {
  background-position: 0 93.38843%;
}

.md-localization .flag-ar {
  background-position: 0 76.033058%;
}

.md-localization .flag-bg {
  background-position: 0 9.090909%;
}

.md-localization .flag-ca {
  background-position: 0 14.876033%;
}

.md-localization .flag-cs {
  background-position: 0 21.900826%;
}

.md-localization .flag-zh {
  background-position: 0 19.008264%;
}

.md-localization .flag-hr {
  background-position: 0 38.429752%;
}

.md-localization .flag-da {
  background-position: 0 23.140496%;
}

.md-localization .flag-de {
  background-position: 0 22.31405%;
}

.md-localization .flag-en-UK,
.md-localization .flag-en-GB {
  background-position: 0 92.561983%;
}

.md-localization .flag-es {
  background-position: 0 26.859504%;
}

.md-localization .flag-fr {
  background-position: 0 29.752066%;
}

.md-localization .flag-el {
  background-position: 0 34.710744%;
}

.md-localization .flag-in {
  background-position: 0 40.909091%;
}

.md-localization .flag-it {
  background-position: 0 42.975207%;
}

.md-localization .flag-ja {
  background-position: 0 44.214876%;
}

.md-localization .flag-ko {
  background-position: 0 47.520661%;
}

.md-localization .flag-lt {
  background-position: 0 52.066116%;
}

.md-localization .flag-hu {
  background-position: 0 39.256198%;
}

.md-localization .flag-nl {
  background-position: 0 65.289256%;
}

.md-localization .flag-no {
  background-position: 0 65.702479%;
}

.md-localization .flag-pl {
  background-position: 0 70.661157%;
}

.md-localization .flag-pt-PT {
  background-position: 0 72.31405%;
}

.md-localization .flag-pt-BR {
  background-position: 0 11.983471%;
}

.md-localization .flag-ro {
  background-position: 0 74.380165%;
}

.md-localization .flag-sr {
  background-position: 0 74.793388%;
}

.md-localization .flag-sk {
  background-position: 0 79.752066%;
}

.md-localization .flag-fi {
  background-position: 0 27.68595%;
}

.md-localization .flag-sv {
  background-position: 0 77.68595%;
}

.md-localization .flag-th {
  background-position: 0 85.950413%;
}

.md-localization .flag-tr {
  background-position: 0 89.256198%;
}

.md-localization .flag-ua {
  background-position: 0 91.735537%;
}

.md-localization .flag-vi {
  background-position: 0 96.694215%;
}

.md-localization .flag-ru {
  background-position: 0 75.206612%;
}

.md-localization .flag-ru-UA {
  background-position: 0 10.743802%;
}

.md-localization .flag-he {
  background-position: 0 40.495868%;
}

.md-localization .flag-fa {
  background-position: 0 42.14876%;
}
</style>
