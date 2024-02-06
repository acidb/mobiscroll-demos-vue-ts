<script setup lang="ts">
import {
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

let cat: any

const myEvents = ref<MbscCalendarEvent[]>([])

const myResponsive: any = ref({
  xsmall: {
    view: {
      schedule: {
        type: 'day'
      }
    }
  },
  medium: {
    view: {
      schedule: {
        type: 'week'
      }
    }
  }
})

const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  calendar: { labels: true }
}

function handleToastClose() {
  isToastOpen.value = false
}

function edit() {
  isToastOpen.value = true
}

function getCategory(id: number) {
  switch (id) {
    case 1:
      return {
        name: 'Project X',
        color: '#ff825d'
      }
    case 2:
      return {
        name: 'Stakeholder Mtg.',
        color: '#bd75d0'
      }
    case 3:
      return {
        name: 'Status Update',
        color: '#7f9230'
      }
    case 4:
      return {
        name: 'Information Sharing',
        color: '#f14590'
      }
    case 5:
      return {
        name: 'Team Building',
        color: '#64cad4'
      }
    default:
      return {
        name: 'No category',
        color: '#5ac8fa'
      }
  }
}

function getParticipant(id: number) {
  switch (id) {
    case 1:
      return {
        name: 'Lisa',
        img: 'https://img.mobiscroll.com/demos/f1.png'
      }
    case 2:
      return {
        name: 'Sharon',
        img: 'https://img.mobiscroll.com/demos/f2.png'
      }
    case 3:
      return {
        name: 'Emily',
        img: 'https://img.mobiscroll.com/demos/f3.png'
      }
    case 4:
      return {
        name: 'Rose',
        img: 'https://img.mobiscroll.com/demos/f4.png'
      }
    case 5:
      return {
        name: 'Matt',
        img: 'https://img.mobiscroll.com/demos/m1.png'
      }
    case 6:
      return {
        name: 'Rick',
        img: 'https://img.mobiscroll.com/demos/m2.png'
      }
    case 7:
      return {
        name: 'John',
        img: 'https://img.mobiscroll.com/demos/m3.png'
      }
    case 8:
      return {
        name: 'Ethan',
        img: 'https://img.mobiscroll.com/demos/m4.png'
      }
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/multi-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :responsive="myResponsive"
    className="md-custom-event"
  >
    <template #scheduleEvent="data">
      <div
        v-if="data.allDay"
        :style="{ background: getCategory(data.original.category).color }"
        class="md-custom-event-allday-title"
      >
        {{ data.title }}
      </div>
      <div
        v-if="!data.allDay"
        class="md-custom-event-cont"
        :set="(cat = getCategory(data.original.category))"
        :style="{
          borderLeft: '5px solid ' + cat.color,
          background: cat.color
        }"
      >
        <div class="md-custom-event-wrapper">
          <div :style="{ background: cat.color }" class="md-custom-event-category">
            {{ cat.name }}
          </div>
          <div class="md-custom-event-details">
            <div class="md-custom-event-title">{{ data.title }}</div>
            <div class="md-custom-event-time">{{ data.start }} - {{ data.end }}</div>
            <MbscButton
              className="md-custom-event-btn"
              color="dark"
              variant="outline"
              @click="edit()"
              >Edit</MbscButton
            >
            <div class="md-cutom-event-img-cont">
              <img
                v-for="p in data.original.participants"
                :key="p.name"
                class="md-custom-event-img"
                :src="getParticipant(p)!.img"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast message="Edit clicked" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-custom-event-cont {
  font-size: 12px;
  font-weight: 600;
  height: 100%;
  background: #fff;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 0 10px 10px 0;
  overflow: hidden;
}

.md-custom-event-wrapper {
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  height: 100%;
  min-height: 135px;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
  transition: background-color 0.15s ease-in-out;
}

.mbsc-schedule-event-hover .md-custom-event-cont .md-custom-event-wrapper {
  background: rgba(255, 255, 255, 0.3);
}

.mbsc-schedule-event-active .md-custom-event-cont .md-custom-event-wrapper {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12),
    0 1px 3px -1px rgba(0, 0, 0, 0.2);
}

.mbsc-schedule-event-hover .md-custom-event-allday-title {
  opacity: 0.8;
}

.mbsc-schedule-event-active .md-custom-event-allday-title {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12),
    0 1px 3px -1px rgba(0, 0, 0, 0.2);
}

.md-custom-event-category {
  display: inline-block;
  max-width: 100%;
  color: #eee;
  border-radius: 10px;
  margin: 10px;
  padding: 2px 10px;
  white-space: nowrap;
  overflow: hidden;
}

.md-custom-event-details {
  padding: 0 10px;
}

.md-custom-event-title {
  color: initial;
}

.md-custom-event-time {
  font-size: 10px;
  color: #666;
  padding-top: 3px;
}

.md-custom-event-allday-title {
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  padding: 2px 10px;
  border-radius: 10px;
  opacity: 0.7;
}

.md-custom-event-btn.mbsc-button {
  margin: 5px 0;
  line-height: 20px;
  padding-top: 0;
  padding-bottom: 0;
}

.md-cutom-event-img-cont {
  position: absolute;
  bottom: 5px;
  left: 10px;
  white-space: nowrap;
}

.md-custom-event-img {
  width: 25px;
  height: 25px;
  margin: 0 2px;
}
</style>
