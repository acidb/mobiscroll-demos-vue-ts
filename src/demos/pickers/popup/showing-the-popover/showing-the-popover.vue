<script setup lang="ts">
import { MbscButton, MbscPage, MbscPopup, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isPopupOpen = ref<boolean>(false)
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-button-group-block">
        <MbscButton @click="isPopupOpen = true">Open popup</MbscButton>
      </div>
    </div>

    <MbscPopup display="center" :isOpen="isPopupOpen" @close="isPopupOpen = false">
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome to our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
      <div class="mbsc-button-group-block">
        <MbscButton @click="isPopupOpen = false">Close</MbscButton>
      </div>
    </MbscPopup>
  </MbscPage>
</template>
