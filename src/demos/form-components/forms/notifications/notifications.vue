<script setup lang="ts">
import {
  MbscButton,
  MbscPage,
  MbscSnackbar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isBottomToastOpen = ref<boolean>(false)
const isTopToastOpen = ref<boolean>(false)
const isPrimaryToastOpen = ref<boolean>(false)
const isSecondaryToastOpen = ref<boolean>(false)
const isSuccessToastOpen = ref<boolean>(false)
const isDangerToastOpen = ref<boolean>(false)
const isWarningToastOpen = ref<boolean>(false)
const isInfoToastOpen = ref<boolean>(false)

const isBottomSnackbarOpen = ref<boolean>(false)
const isTopSnackbarOpen = ref<boolean>(false)
const isActionSnackbarOpen = ref<boolean>(false)
const isActionToastOpen = ref<boolean>(false)
const isPrimarySnackbarOpen = ref<boolean>(false)
const isSecondarySnackbarOpen = ref<boolean>(false)
const isSuccessSnackbarOpen = ref<boolean>(false)
const isDangerSnackbarOpen = ref<boolean>(false)
const isWarningSnackbarOpen = ref<boolean>(false)
const isInfoSnackbarOpen = ref<boolean>(false)

const actionButton = {
  text: 'Retry',
  action: () => {
    isActionToastOpen.value = true
  }
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Toast</div>
      <div class="mbsc-button-group-block">
        <MbscToast
          message="Message sent"
          :isOpen="isBottomToastOpen"
          @close="isBottomToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          display="top"
          :isOpen="isTopToastOpen"
          @close="isTopToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="primary"
          :isOpen="isPrimaryToastOpen"
          @close="isPrimaryToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="secondary"
          :isOpen="isSecondaryToastOpen"
          @close="isSecondaryToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="success"
          :isOpen="isSuccessToastOpen"
          @close="isSuccessToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="danger"
          :isOpen="isDangerToastOpen"
          @close="isDangerToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="warning"
          :isOpen="isWarningToastOpen"
          @close="isWarningToastOpen = false"
        />
        <MbscToast
          message="Message sent"
          color="info"
          :isOpen="isInfoToastOpen"
          @close="isInfoToastOpen = false"
        />
        <MbscButton @click="isBottomToastOpen = true">Bottom toast</MbscButton>
        <MbscButton @click="isTopToastOpen = true">Top toast</MbscButton>
        <MbscButton @click="isPrimaryToastOpen = true">Primary toast</MbscButton>
        <MbscButton @click="isSecondaryToastOpen = true">Secondary toast</MbscButton>
        <MbscButton @click="isSuccessToastOpen = true">Success toast</MbscButton>
        <MbscButton @click="isDangerToastOpen = true">Danger toast</MbscButton>
        <MbscButton @click="isWarningToastOpen = true">Warning toast</MbscButton>
        <MbscButton @click="isInfoToastOpen = true">Info toast</MbscButton>
      </div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Snackbar</div>
      <div class="mbsc-button-group-block">
        <MbscSnackbar
          message="Your draft has been discarded"
          :isOpen="isBottomSnackbarOpen"
          @close="isBottomSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          display="top"
          :isOpen="isTopSnackbarOpen"
          @close="isTopSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Connection timed out. Showing limited messages."
          :button="actionButton"
          :isOpen="isActionSnackbarOpen"
          @close="isActionSnackbarOpen = false"
        />
        <MbscToast
          message="Retrying..."
          :isOpen="isActionToastOpen"
          @close="isActionToastOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="primary"
          :isOpen="isPrimarySnackbarOpen"
          @close="isPrimarySnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="secondary"
          :isOpen="isSecondarySnackbarOpen"
          @close="isSecondarySnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="success"
          :isOpen="isSuccessSnackbarOpen"
          @close="isSuccessSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="danger"
          :isOpen="isDangerSnackbarOpen"
          @close="isDangerSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="warning"
          :isOpen="isWarningSnackbarOpen"
          @close="isWarningSnackbarOpen = false"
        />
        <MbscSnackbar
          message="Your draft has been discarded"
          color="info"
          :isOpen="isInfoSnackbarOpen"
          @close="isInfoSnackbarOpen = false"
        />
        <MbscButton @click="isBottomSnackbarOpen = true">Bottom snackbar</MbscButton>
        <MbscButton @click="isTopSnackbarOpen = true">Top snackbar</MbscButton>
        <MbscButton @click="isActionSnackbarOpen = true">Snackbar with action</MbscButton>
        <MbscButton @click="isPrimarySnackbarOpen = true">Primary snackbar</MbscButton>
        <MbscButton @click="isSecondarySnackbarOpen = true">Secondary snackbar</MbscButton>
        <MbscButton @click="isSuccessSnackbarOpen = true">Success snackbar</MbscButton>
        <MbscButton @click="isDangerSnackbarOpen = true">Danger snackbar</MbscButton>
        <MbscButton @click="isWarningSnackbarOpen = true">Warning snackbar</MbscButton>
        <MbscButton @click="isInfoSnackbarOpen = true">Info snackbar</MbscButton>
      </div>
    </div>
  </MbscPage>
</template>
