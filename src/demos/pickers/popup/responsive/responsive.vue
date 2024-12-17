<script setup lang="ts">
import { MbscButton, MbscPage, MbscPopup, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscPopupOptions, MbscResponsiveOptions } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isPopupOpen = ref(false)
const buttonRef = ref<any>(null)
const myAnchor = ref<any>(null)

const myResponsive: MbscResponsiveOptions<MbscPopupOptions> = {
  xsmall: {
    display: 'bottom'
  },
  small: {
    display: 'center'
  },
  custom: {
    // Custom breakpoint
    breakpoint: 800,
    display: 'anchored'
    //
    // anchor: myAnchor
  }
}

function openPopup() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isPopupOpen.value = true
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
      :isOpen="isPopupOpen"
      :anchor="myAnchor"
      :responsive="myResponsive"
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
