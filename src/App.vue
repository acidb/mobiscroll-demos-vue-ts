<script setup lang="ts">
import '@mobiscroll/vue/dist/css/mobiscroll.min.css'
import {
  localeAr,
  localeBg,
  localeCa,
  localeCs,
  localeDa,
  localeDe,
  localeEl,
  localeEn,
  localeEnGB,
  localeEs,
  localeFa,
  localeFi,
  localeFr,
  localeHe,
  localeHi,
  localeHr,
  localeHu,
  localeIt,
  localeJa,
  localeKo,
  localeLt,
  localeNl,
  localeNo,
  localePl,
  localePtBR,
  localePtPT,
  localeRo,
  localeRu,
  localeRuUA,
  localeSk,
  localeSr,
  localeSv,
  localeTh,
  localeTr,
  localeUa,
  localeVi,
  localeZh,
  type MbscLocale,
  MbscSelect,
  setOptions
} from '@mobiscroll/vue'
import { onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { demoTitleMap } from './demos'

const route = useRoute()

const theme = ref<string>('auto')
const themeVariant = ref<'auto' | 'light' | 'dark'>('auto')
const locale = shallowRef<MbscLocale>(localeEn)

const footerRef = ref<HTMLElement | null>(null)
const pathRef = ref<HTMLElement | null>(null)

const themes = [
  { value: 'ios', text: 'iOS' },
  { value: 'material', text: 'Material' },
  { value: 'windows', text: 'Windows' },
  { value: 'auto', text: 'Auto' }
]

const themeVariants = [
  { value: 'light', text: 'Light' },
  { value: 'dark', text: 'Dark' },
  { value: 'auto', text: 'Auto' }
]

const locales = [
  { value: localeEn, text: 'English' },
  { value: localeAr, text: 'Arabic' },
  { value: localeBg, text: 'Bulgarian' },
  { value: localeCa, text: 'Català' },
  { value: localeCs, text: 'Cestina' },
  { value: localeZh, text: 'Chinese' },
  { value: localeHr, text: 'Croatian' },
  { value: localeDa, text: 'Dansk' },
  { value: localeDe, text: 'Deutsch' },
  { value: localeEnGB, text: 'English (UK)' },
  { value: localeEs, text: 'Español' },
  { value: localeFr, text: 'Français' },
  { value: localeEl, text: 'Greek' },
  { value: localeHi, text: 'Hindi' },
  { value: localeIt, text: 'Italiano' },
  { value: localeJa, text: 'Japanese' },
  { value: localeKo, text: 'Korean' },
  { value: localeLt, text: 'Lietuvių' },
  { value: localeHu, text: 'Magyar' },
  { value: localeNl, text: 'Nederlands' },
  { value: localeNo, text: 'Norsk' },
  { value: localePl, text: 'Polski' },
  { value: localePtPT, text: 'Português Europeu' },
  { value: localePtBR, text: 'Pt. Brasileiro' },
  { value: localeRo, text: 'Română' },
  { value: localeSr, text: 'Serbian' },
  { value: localeSk, text: 'Slovencina' },
  { value: localeFi, text: 'Suomi' },
  { value: localeSv, text: 'Svenska' },
  { value: localeTh, text: 'Thai' },
  { value: localeTr, text: 'Türkçe' },
  { value: localeUa, text: 'Ukrainian' },
  { value: localeVi, text: 'Vietnamese' },
  { value: localeRu, text: 'Русский' },
  { value: localeRuUA, text: 'Русский (UA)' },
  { value: localeHe, text: 'עברית' },
  { value: localeFa, text: 'فارسی' }
]

function updatePath() {
  const footer = footerRef.value
  const pathEl = pathRef.value
  if (footer && pathEl) {
    pathEl.style.display = ''
    pathEl.style.display = footer.scrollWidth > footer.clientWidth ? 'none' : ''
  }
}

function setGlobalOptions() {
  setOptions({
    theme: theme.value,
    themeVariant: themeVariant.value,
    locale: locale.value
  })
}

watch(route, () => {
  setTimeout(updatePath)
})

watch([theme, themeVariant, locale], setGlobalOptions)

onMounted(() => {
  window.addEventListener('resize', updatePath)
  setGlobalOptions()
  updatePath()
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePath)
})
</script>

<template>
  <div class="app-header mbsc-font">
    <div v-if="route.path !== '/'" class="app-back">
      <RouterLink to="/">
        <span class="mbsc-icon mbsc-font-icon mbsc-icon-ion-ios7-arrow-back"></span>
      </RouterLink>
    </div>
    <div class="app-title">
      <h1>{{ demoTitleMap[route.path] || 'Mobiscroll Vue Demos' }}</h1>
    </div>
  </div>
  <div class="app-page">
    <RouterView />
  </div>
  <div
    class="app-footer mbsc-font mbsc-flex mbsc-justify-content-between mbsc-align-items-center"
    ref="footerRef"
  >
    <div class="app-footer-controls mbsc-flex mbsc-align-items-center">
      <div class="app-footer-select app-footer-theme-select">
        <MbscSelect
          v-model="theme"
          :data="themes"
          :touchUi="false"
          theme="ios"
          inputStyle="box"
          labelStyle="stacked"
          label="Theme"
        />
      </div>
      <div class="app-footer-select app-footer-theme-variant-select">
        <MbscSelect
          v-model="themeVariant"
          :data="themeVariants"
          :touchUi="false"
          theme="ios"
          inputStyle="box"
          labelStyle="stacked"
          label="Mode"
        />
      </div>
      <div class="app-footer-select app-footer-locale-select">
        <MbscSelect
          v-model="locale"
          :data="locales"
          :touchUi="false"
          theme="ios"
          inputStyle="box"
          labelStyle="stacked"
          label="Locale"
        />
      </div>
    </div>
    <div class="app-path" ref="pathRef">
      {{ route.path !== '/' ? './src/demos' + route.path : '' }}
    </div>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.app-page {
  height: 100%;
  padding-top: 44px;
  padding-bottom: 60px;
  box-sizing: border-box;
}

.app-header,
.app-footer {
  padding: 4px;
  background: #011742;
  color: #fff;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
}

.app-header {
  top: 0;
  height: 44px;
}

.app-footer {
  bottom: 0;
  height: 60px;
}

.app-title {
  text-align: center;
  padding: 0 36px;
}

.app-title h1 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 36px;
}

.app-footer-controls {
  flex-shrink: 0;
  gap: 0 16px;
  flex-wrap: wrap;
  padding: 0 12px;
}

.app-footer-controls .mbsc-form-control-wrapper {
  margin: 0;
}

.app-footer-select .mbsc-select.mbsc-textfield {
  height: 44px;
}

.app-footer-select .mbsc-select-icon.mbsc-ios {
  font-size: 13px;
}

.app-footer-theme-select .mbsc-select,
.app-footer-theme-variant-select .mbsc-select {
  width: clamp(90px, 27vw, 140px);
}

.app-footer-locale-select .mbsc-select {
  width: clamp(90px, 27vw, 180px);
}

.app-path {
  font-size: 12px;
  line-height: 36px;
  padding: 0 12px;
  flex-shrink: 0;
  white-space: nowrap;
}

.app-back {
  width: 36px;
  height: 36px;
  line-height: 36px;
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 4px;
  left: 4px;
}

.app-back a {
  display: block;
  color: #fff;
  text-decoration: none;
  border-radius: 50%;
  transition: background-color 200ms ease-in-out;
}

.app-back a:hover {
  background: rgba(255, 255, 255, 0.15);
}

.app-back a:active {
  background: rgba(255, 255, 255, 0.3);
}

.app-back .mbsc-icon {
  display: block;
}

.app-home {
  padding-bottom: 60px;
  background: inherit;
}

.app-home div {
  background: inherit;
}

.app-home h2 {
  position: sticky;
  top: 44px;
  z-index: 2;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  padding: 10px 0;
  margin: 0;
  background: inherit;
  border-bottom: 4px solid;
}

.app-home h3 {
  position: sticky;
  top: 94px;
  z-index: 1;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  padding: 10px 0;
  margin: 0;
  background: inherit;
}

.app-home h4 {
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  padding: 20px 0 10px 0;
  margin: 0;
  opacity: 0.65;
}

.app-home ul {
  margin-left: 0;
}

.app-home li {
  list-style: none;
}

.app-home a {
  display: block;
  padding: 0 10px;
  font-size: 15px;
  line-height: 36px;
  color: inherit;
  opacity: 0.8;
}

.app-home a:hover {
  background: rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.mbsc-ios-dark .app-home a:hover,
.mbsc-material-dark .app-home a:hover,
.mbsc-windows-dark .app-home a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.app-datepicker h2 {
  border-color: #3f98f6;
}

.app-datepicker h3 {
  color: #3f98f6;
}

.app-eventcalendar h2 {
  border-color: #9c3ff6;
}

.app-eventcalendar h3 {
  color: #9c3ff6;
}

.app-form-components h2 {
  border-color: #f6a33f;
}

.app-form-components h3 {
  color: #f6a33f;
}

.app-pickers h2 {
  border-color: #f63fa1;
}

.app-pickers h3 {
  color: #f63fa1;
}
</style>
