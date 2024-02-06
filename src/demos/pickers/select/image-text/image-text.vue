<script setup lang="ts">
import { MbscPage, MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myValue = ref(['42976', '47883'])
const myData = [
  {
    text: 'Barry Lyon',
    value: '42976',
    avatar: 'm1'
  },
  {
    text: 'Hortense Tinker',
    value: '45290',
    avatar: 'f1'
  },
  {
    text: 'Carl Hambledon',
    value: '76208',
    avatar: 'm2'
  },
  {
    text: 'Arlene Sharman',
    value: '47883',
    avatar: 'f2'
  },
  {
    text: 'Keila Delores',
    value: '33379',
    avatar: 'f3'
  },
  {
    text: 'Paula Bush',
    value: '16076',
    avatar: 'f4'
  },
  {
    text: 'Gene Cortez',
    value: '62551',
    avatar: 'm3'
  },
  {
    text: 'Pete Nichols',
    value: '20929',
    avatar: 'm4'
  }
]
</script>

<template>
  <MbscPage>
    <MbscSelect
      :data="myData"
      :itemHeight="50"
      :selectMultiple="true"
      v-model="myValue"
      label="Users"
      display="anchored"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please select..."
    >
      <template #item="item">
        <div class="md-image-text-item">
          <img
            class="md-image-text-avatar"
            :src="'https://img.mobiscroll.com/demos/' + item.data.avatar + '.png'"
          />
          <div class="md-image-text-name">{{ item.display }}</div>
        </div>
      </template>
    </MbscSelect>
  </MbscPage>
</template>

<style>
.md-image-text-item {
  position: relative;
  padding: 15px 0 15px 50px;
  text-align: left;
  line-height: normal;
}

.md-image-text-avatar {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 5px;
}
</style>
