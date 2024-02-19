<script setup lang="ts">
import { MbscPage } from '@mobiscroll/vue'
import { RouterLink } from 'vue-router'
import { demos } from '../demos'
</script>

<template>
  <MbscPage>
    <div class="app-home mbsc-padding">
      <div v-for="main in demos" :key="main.unique">
        <h2>{{ main.name }}</h2>
        <div v-for="sub in main.items" :key="sub.unique">
          <h3>{{ sub.name }}</h3>
          <div v-for="group in sub.items" :key="group.name">
            <h4>{{ group.name }}</h4>
            <ul>
              <li v-for="demo in group.items" :key="demo.unique">
                <RouterLink :to="'/' + main.unique + '/' + sub.unique + '/' + demo.unique">
                  {{ demo.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
