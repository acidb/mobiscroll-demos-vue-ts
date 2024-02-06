<script setup lang="ts">
import { getJson, MbscPage, MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myData = ref<any>([])

onMounted(() => {
  getJson('https://trial.mobiscroll.com/content/countries.json', (resp: any) => {
    const countries = []
    for (let i = 0; i < resp.length; ++i) {
      const country = resp[i]
      countries.push({ text: country.text, value: country.value })
    }
    myData.value = countries
  })
})
</script>

<template>
  <MbscPage>
    <MbscSelect
      :data="myData"
      :itemHeight="40"
      label="Countries"
      display="anchored"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please select..."
    >
      <template #item="item">
        <div class="md-country-picker-item">
          <img
            class="md-country-picker-flag"
            :src="'https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png'"
          />
          {{ item.display }}
        </div>
      </template>
    </MbscSelect>
  </MbscPage>
</template>

<style>
.md-country-picker-item {
  position: relative;
  line-height: 20px;
  padding: 10px 0 10px 40px;
}

.md-country-picker-flag {
  position: absolute;
  left: 0;
  height: 20px;
}

.mbsc-scroller-wheel-item-2d .md-country-picker-item {
  transform: scale(1.1);
}
</style>
