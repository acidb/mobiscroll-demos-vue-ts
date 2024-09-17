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

function handleClose() {
  isPopupOpen.value = false
  // Your custom event handler goes here
}

function handleDestroy() {
  // Your custom event handler goes here
}

function handleInit() {
  // Logic running on component init
}

function handleOpen() {
  // Your custom event handler goes here
}

function handlePosition() {
  // Logic for component positioning
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-button-group-block">
        <MbscButton ref="buttonRef" @click="openPopup">Open popup</MbscButton>
      </div>
    </div>
    <MbscPopup
      display="anchored"
      :anchor="myAnchor"
      :showOverlay="false"
      :isOpen="isPopupOpen"
      :buttons="['ok', 'cancel']"
      @close="handleClose"
      @destroy="handleDestroy"
      @init="handleInit"
      @open="handleOpen"
      @position="handlePosition"
    >
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" alt="Logo" />
        <h4>Welcome to our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>
  </MbscPage>
</template>
