<script setup lang="ts">
import { MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myData = ref([
  {
    text: 'Mercury – Act 1',
    year: '2021',
    artist: 'Imagine Dragons',
    value: '56243',
    img: 'Mercury_Act_1'
  },
  {
    text: 'Divide',
    year: '2017',
    artist: 'Ed Sheeran',
    value: '18659',
    img: 'Divide'
  },
  {
    text: 'Evolution',
    year: '2018',
    artist: 'Disturbed',
    value: '88459',
    img: 'Evolution'
  },
  {
    text: 'Future Nostalgia',
    year: '2020',
    artist: 'Dua Lipa',
    value: '65422',
    img: 'Future_Nostalgia'
  },
  {
    text: 'Blue Banisters',
    year: '2021',
    artist: 'Lana Del Rey',
    value: '67111',
    img: 'Blue_Banisters'
  },
  {
    text: 'Human',
    year: '2021',
    artist: 'OneRepublic',
    value: '60589',
    img: 'Human'
  },
  {
    text: 'Kamikaze',
    year: '2018',
    artist: 'Eminem',
    value: '42122',
    img: 'Kamikaze'
  },
  {
    text: 'Simulation Theory',
    year: '2018',
    artist: 'Muse',
    value: '80040',
    img: 'Simulation_Theory'
  },
  {
    text: 'The Nothing',
    year: '2019',
    artist: 'Korn',
    value: '46611',
    img: 'Nothing'
  }
])
</script>

<template>
  <MbscSelect
    :data="myData"
    :itemHeight="64"
    label="Albums"
    display="anchored"
    inputStyle="box"
    labelStyle="stacked"
    placeholder="Please select..."
  >
    <template #item="item">
      <div class="md-item-template">
        <img
          class="md-item-template-img"
          :src="'https://img.mobiscroll.com/demos/' + item.data.img + '.png'"
          alt="Cover"
        />
        <div class="md-item-template-title">
          <span>{{ item.data.text }}</span>
          <span class="md-item-template-year">{{ ' (' + item.data.year + ')' }}</span>
        </div>
        <div class="md-item-template-artist">{{ 'by ' + item.data.artist }}</div>
      </div>
    </template>
  </MbscSelect>
</template>

<style>
.md-item-template {
  padding: 10px 10px 10px 55px;
  position: relative;
  text-align: left;
  line-height: normal;
}

.md-item-template-img {
  position: absolute;
  left: 0;
  width: 45px;
  height: 45px;
}

.md-item-template-title {
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
}

.md-item-template-artist {
  font-size: 14px;
  opacity: 0.8;
}

.mbsc-scroller-wheel-item-2d .md-item-template {
  transform: scale(1.1);
}
</style>
