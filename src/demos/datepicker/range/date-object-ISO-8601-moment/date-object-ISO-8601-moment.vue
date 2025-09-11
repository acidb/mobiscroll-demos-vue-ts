<script setup lang="ts">
import {
  MbscButton,
  MbscDatepicker,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import moment from 'moment'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const date = ref<any>()
const iso = ref<any>()
const momentJs = ref<any>()

function setDate() {
  date.value = [new Date(2020, 10, 15), new Date(2020, 10, 21)]
}

function setISO() {
  iso.value = ['2020-05-20', '2020-05-26']
}

function setMoment() {
  // Make sure that moment js is loaded
  momentJs.value = [moment([2020, 2, 6]), moment([2020, 2, 12])]
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Controlling the default value</div>
      <div class="MbscButton-group-block">
        <MbscButton @click="setDate">Set: Sun Nov 15 2020 - Sat Nov 21 2020</MbscButton>
      </div>
      <MbscDatepicker
        :controls="['calendar']"
        select="range"
        v-model="date"
        returnFormat="jsdate"
        label="Date object"
      />
    </div>
    <div class="mbsc-padding">Return value: {{ date }}</div>

    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Working with Date strings</div>
      <div class="MbscButton-group-block">
        <MbscButton @click="setISO()">Set: 2020-05-20 - 2020-05-26</MbscButton>
      </div>
      <div>
        <MbscDatepicker
          :controls="['calendar']"
          select="range"
          v-model="iso"
          returnFormat="iso8601"
          label="ISO string"
        />
      </div>
    </div>
    <div class="mbsc-padding">Return value: {{ iso }}</div>

    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Working with Moment JS Objects</div>
      <div class="MbscButton-group-block">
        <MbscButton @click="setMoment()">Set: 2020-03-06 - 2020-03-12</MbscButton>
      </div>
      <div>
        <MbscDatepicker
          :controls="['calendar']"
          select="range"
          v-model="momentJs"
          returnFormat="moment"
          label="Moment JS"
        />
      </div>
    </div>
    <div class="mbsc-padding">
      Return value: {{ momentJs ? momentJs[0].format() + ' - ' + momentJs[1].format() : '' }}
    </div>
  </MbscPage>
</template>
