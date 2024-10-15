<script setup lang="ts">
import {
  MbscButton,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isToastOpen = ref(false)

const myEvents: MbscCalendarEvent[] = [
  {
    title: 'Zumba Class',
    start: 'dyndatetime(y,m,d-7,17)',
    end: 'dyndatetime(y,m,d-7,19)'
  },
  {
    title: 'Silent Party',
    start: 'dyndatetime(y,m,d-7,21)',
    end: 'dyndatetime(y,m,d-7,23)'
  },
  {
    title: 'Garbage Collection',
    start: 'dyndatetime(y,m,d+7,15)',
    end: 'dyndatetime(y,m,d+7,17)'
  },
  {
    title: 'Karaoke Night',
    start: 'dyndatetime(y,m,d+7,20)',
    end: 'dyndatetime(y,m,d+7,22)'
  }
]

const myView: MbscEventcalendarView = {
  calendar: { type: 'week' },
  agenda: { type: 'week' }
}
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents">
    <template #agendaEmpty>
      <div class="mbsc-align-center mbsc-padding">
        <img
          class="mds-empty-img"
          src="https://img.mobiscroll.com/demos/smart-empty-tin-can.png"
          alt="Empty can"
          style="width: 150px; margin: 50px 0"
        />
        <div class="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">
          Looks like this can is empty
        </div>
        <MbscButton color="primary" variant="outline" @click="isToastOpen = true">
          Add something to it
        </MbscButton>
        <div class="mds-empty-txt mbsc-txt-xs">
          Illustration by &nbsp;<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
            >Icons 8</a
          >
          &nbsp;from&nbsp;<a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast message="Add button clicked" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-empty-img {
  width: 150px;
  margin: 50px 0;
}

.mds-empty-txt {
  padding-top: 150px;
}
</style>
