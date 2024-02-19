<script setup lang="ts">
import '@mobiscroll/vue/dist/css/mobiscroll.min.css'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { demoTitleMap } from './demos'

const route = useRoute()
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
  <div class="app-footer mbsc-font">
    <div v-if="route.path !== '/'" class="app-path">{{ './src/demos' + route.path }}</div>
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
  padding: 44px 0;
  box-sizing: border-box;
}

.app-header,
.app-footer {
  height: 44px;
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
}

.app-footer {
  bottom: 0;
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

.app-path {
  font-size: 12px;
  line-height: 36px;
  padding: 0 12px;
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
  padding-bottom: 44px;
}
</style>
