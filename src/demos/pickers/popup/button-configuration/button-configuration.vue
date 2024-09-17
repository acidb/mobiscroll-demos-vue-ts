<script setup lang="ts">
import {
  MbscButton,
  MbscPage,
  MbscPopup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isNoBtnOpen = ref<boolean>(false)
const isPredefinedBtnOpen = ref<boolean>(false)
const isCustomBtnOpen = ref<boolean>(false)

const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)
</script>

<template>
  <MbscPage>
    <div class="mbsc-align-center">
      <div class="mbsc-note">Customize popup buttons depending on your context.</div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-button-group-block">
        <MbscButton @click="isNoBtnOpen = true">No Buttons</MbscButton>
        <MbscButton @click="isPredefinedBtnOpen = true">Predefined buttons</MbscButton>
        <MbscButton @click="isCustomBtnOpen = true">Custom button</MbscButton>
      </div>
    </div>

    <MbscPopup display="center" :isOpen="isNoBtnOpen" @close="isNoBtnOpen = false">
      <div class="mbsc-align-center mbsc-padding">
        <h3 class="md-text-center">Hi there!</h3>
        <p class="md-text-center">This is the default with no buttons.</p>
      </div>
    </MbscPopup>

    <MbscPopup
      display="center"
      :isOpen="isPredefinedBtnOpen"
      :buttons="['ok', 'cancel']"
      @close="isPredefinedBtnOpen = false"
    >
      <div class="mbsc-align-center mbsc-padding">
        <h3 class="md-text-center">Hi again!</h3>
        <p class="md-text-center">This is a popup with predefined buttons.</p>
      </div>
    </MbscPopup>

    <MbscPopup
      display="center"
      :isOpen="isCustomBtnOpen"
      :buttons="[
        {
          text: 'Custom',
          handler: () => {
            toastMessage = 'Custom button clicked'
            isToastOpen = true
          }
        }
      ]"
      @close="isCustomBtnOpen = false"
    >
      <div class="mbsc-align-center mbsc-padding">
        <h3 class="md-text-center">Hi again!</h3>
        <p class="md-text-center">This is a popup with a custom button.</p>
      </div>
    </MbscPopup>

    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
  </MbscPage>
</template>
