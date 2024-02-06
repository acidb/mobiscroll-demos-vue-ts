<script setup lang="ts">
import { getJson, MbscPage, MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const remoteData = ref([])
const myData = [
  {
    text: 'Atlanta',
    value: 'atl'
  },
  {
    text: 'Berlin',
    value: 'ber'
  },
  {
    text: 'Boston',
    value: 'bos'
  },
  {
    text: 'Chicago',
    value: 'chi'
  },
  {
    text: 'London',
    value: 'lon'
  },
  {
    text: 'Los Angeles',
    value: 'la'
  },
  {
    text: 'New York',
    value: 'ny'
  },
  {
    text: 'Paris',
    value: 'par'
  },
  {
    text: 'San Francisco',
    value: 'sf'
  }
]

onMounted(() => {
  getJson('https://trial.mobiscroll.com/content/languages.json', (resp) => {
    remoteData.value = resp
  })
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid mbsc-form-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-6">
          <MbscSelect
            :data="myData"
            label="Data object"
            labelStyle="stacked"
            inputStyle="box"
            placeholder="Please select..."
          />
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-6">
          <MbscSelect
            :data="remoteData"
            label="Remote data"
            labelStyle="stacked"
            inputStyle="box"
            placeholder="Please select..."
          />
        </div>
      </div>
    </div>
  </MbscPage>
</template>
