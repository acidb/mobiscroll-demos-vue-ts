<script setup lang="ts">
import {
  MbscAlert,
  MbscButton,
  MbscConfirm,
  MbscPage,
  MbscPrompt,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isAlertOpen = ref<boolean>(false)
const isConfirmOpen = ref<boolean>(false)
const isPromptOpen = ref<boolean>(false)
</script>

<template>
  <MbscPage>
    <MbscAlert
      title="Cellular Data is Turned Off for 'Safari'"
      message="You can turn on cellular data for this app in Settings."
      :isOpen="isAlertOpen"
      @close="isAlertOpen = true"
    />
    <MbscConfirm
      title="Use location service?"
      message="Help apps determine location. This means sending anonymous location data, even when no apps are running."
      okText="Agree"
      cancelText="Disagree"
      :isOpen="isConfirmOpen"
      @close="isConfirmOpen = true"
    />
    <MbscPrompt
      title="Sign in to iTunes Store"
      message="Enter the Apple ID password for 'hello@mobiscroll.com'."
      placeholder="placeholder"
      inputType="password"
      :isOpen="isPromptOpen"
      @close="isPromptOpen = true"
    />
    <MbscButton @click="isAlertOpen = true">Alert</MbscButton>
    <MbscButton @click="isConfirmOpen = true">Confirm</MbscButton>
    <MbscButton @click="isPromptOpen = true">Prompt</MbscButton>
  </MbscPage>
</template>
