<script setup lang="ts">
import { getJson, MbscPage, MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const remoteData = ref<any>([])
const names = [
  { text: 'Abigail Hodges', value: 1 },
  { text: 'Adam Robertson', value: 2 },
  { text: 'Blake Nolan', value: 3 },
  { text: 'Dylan Manning', value: 4 },
  { text: 'Jane Clarkson', value: 5 },
  { text: 'Julian Parr', value: 6 },
  { text: 'Lily Blake', value: 7 },
  { text: 'Luke Wright', value: 8 },
  { text: 'Nathan Poole', value: 9 },
  { text: 'Olivia Vance', value: 10 },
  { text: 'Paul Hudson', value: 11 },
  { text: 'Rose Taylor', value: 12 },
  { text: 'Samantha Martin', value: 13 },
  { text: 'Steven Cameron', value: 14 },
  { text: 'Wanda Mills', value: 15 }
]

function remoteFiltering(filterText: string) {
  getJson(
    'https://trial.mobiscroll.com/airports/' + encodeURIComponent(filterText),
    (data) => {
      const airports = []
      for (const item of data) {
        airports.push({ text: item.name, value: item.code })
      }
      remoteData.value = airports
    },
    'jsonp'
  )
}

function handleFilter(ev: any) {
  remoteFiltering(ev.filterText)
  return false
}

onMounted(() => {
  remoteFiltering('')
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-grid mbsc-form-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-6">
          <MbscSelect
            :data="names"
            :filter="true"
            :buttons="undefined"
            display="center"
            label="Local data"
            labelStyle="stacked"
            inputStyle="box"
            placeholder="Please select..."
          />
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-6">
          <MbscSelect
            :data="remoteData"
            :filter="true"
            display="anchored"
            label="Remote data"
            labelStyle="stacked"
            inputStyle="box"
            placeholder="Please select..."
            @filter="handleFilter"
          />
        </div>
      </div>
    </div>
  </MbscPage>
</template>
