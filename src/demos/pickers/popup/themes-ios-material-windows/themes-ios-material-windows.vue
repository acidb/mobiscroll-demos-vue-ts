<script setup lang="ts">
import { MbscButton, MbscPage, MbscPopup, setOptions /* localeImport */ } from '@mobiscroll/vue'

import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isPopupOpen = ref<boolean>(false)
const buttonRef = ref<any>(null)
const myAnchor = ref<any>(null)

function openPopup() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isPopupOpen.value = true
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-button-group-block">
      <MbscButton ref="buttonRef" @click="openPopup">Open popup</MbscButton>
    </div>

    <!-- theme: can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform -->
    <!-- themeVariant: can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme -->
    <MbscPopup
      display="anchored"
      :anchor="myAnchor"
      theme="material"
      themeVariant="dark"
      :isOpen="isPopupOpen"
      :buttons="['ok', 'cancel']"
      @close="isPopupOpen = false"
    >
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome to our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>
  </MbscPage>
</template>
