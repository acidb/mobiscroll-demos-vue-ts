<script setup lang="ts">
import { MbscButton, MbscPage, MbscPopup, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isAnchoredOpen = ref(false)
const isCenterOpen = ref(false)
const isBottomOpen = ref(false)
const isTopOpen = ref(false)
const buttonRef = ref<any>(null)
const myAnchor = ref<any>(null)

function openAnchored() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isAnchoredOpen.value = true
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Try different display modes</div>
      <div class="mbsc-form-group mbsc-button-group-block">
        <MbscButton ref="buttonRef" @click="openAnchored">Try anhored display mode</MbscButton>
        <MbscButton @click="isTopOpen = true">Try top display mode</MbscButton>
        <MbscButton @click="isCenterOpen = true">Try center display mode</MbscButton>
        <MbscButton @click="isBottomOpen = true">Try bottom display mode</MbscButton>
      </div>
    </div>

    <MbscPopup
      display="anchored"
      :anchor="myAnchor"
      :isOpen="isAnchoredOpen"
      @close="isAnchoredOpen = false"
    >
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome to our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>

    <MbscPopup display="top" :isOpen="isTopOpen" @close="isTopOpen = false">
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome to our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>

    <MbscPopup display="center" :isOpen="isCenterOpen" @close="isCenterOpen = false">
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome to our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>

    <MbscPopup display="bottom" :isOpen="isBottomOpen" @close="isBottomOpen = false">
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome to our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>
  </MbscPage>
</template>
