<script setup lang="ts">
import {
  formatDate,
  MbscButton,
  MbscEventcalendar,
  MbscPopup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageChangeEvent,
  MbscResource,
  MbscResourceHoverEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myResources = ref<MbscResource[]>([
  {
    id: 'res1',
    name: 'Adam Miller',
    color: '#F39C12',
    profession: 'Mason',
    avatar: 'https://img.mobiscroll.com/demos/m1.png',
    cost: '15'
  },
  {
    id: 'res2',
    name: 'Emily Carter',
    color: '#76e083',
    profession: 'Electrician',
    avatar: 'https://img.mobiscroll.com/demos/f1.png',
    cost: '20'
  },
  {
    id: 'res3',
    name: 'James Brown',
    color: '#b13f49',
    profession: 'Carpenter',
    avatar: 'https://img.mobiscroll.com/demos/m2.png',
    cost: '18'
  },
  {
    id: 'res4',
    name: 'Daniel Wilson',
    color: '#e25dd2',
    profession: 'Welder',
    avatar: 'https://img.mobiscroll.com/demos/m3.png',
    cost: '22'
  },
  {
    id: 'res5',
    name: 'Benjamin Harris',
    color: '#7056ff',
    profession: 'Plumber',
    avatar: 'https://img.mobiscroll.com/demos/m4.png',
    cost: '20'
  },
  {
    id: 'res6',
    name: 'Olivia Anderson',
    color: '#56aaff',
    profession: 'Concrete Finisher',
    avatar: 'https://img.mobiscroll.com/demos/f2.png',
    cost: '15'
  },
  {
    id: 'res7',
    name: 'Emma Thompson',
    color: '#84852f',
    profession: 'Steelworker',
    avatar: 'https://img.mobiscroll.com/demos/f3.png',
    cost: '18'
  },
  {
    id: 'res8',
    name: 'Natalie Roberts',
    color: '#ff6e56',
    profession: 'Painter',
    avatar: 'https://img.mobiscroll.com/demos/f4.png',
    cost: '25'
  }
])

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Repoint Brick Facade',
    resource: 'res1'
  },
  {
    start: 'dyndatetime(y,m,d-1,9)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Install Custom Wood Trim',
    resource: 'res3'
  },
  {
    start: 'dyndatetime(y,m,d-1,14)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: 'Repair Steel Stair Treads',
    resource: 'res4'
  },
  {
    start: 'dyndatetime(y,m,d-1,10)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: 'Pour and Finish Driveway Slab',
    resource: 'res6'
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,16)',
    title: 'Paint Interior Drywall',
    resource: 'res8'
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Block Wall Construction',
    resource: 'res1'
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Task 2',
    resource: 'Paver Installation'
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Install ceiling fan',
    resource: 'res2'
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Roof Beam Replacement',
    resource: 'res3'
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Custom Metalworks Creation',
    resource: 'res4'
  },
  {
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Pipe Welding',
    resource: 'res4'
  },
  {
    start: 'dyndatetime(y,m,10,8)',
    end: 'dyndatetime(y,m,11,20)',
    title: 'Leak Detection & Repair',
    resource: 'res5'
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Faucet & Sink Fitting',
    resource: 'res5'
  },
  {
    start: 'dyndatetime(y,m,d,18)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Drainage System Setup',
    resource: 'res5'
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Surface Polishing',
    resource: 'res6'
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Structural Steel Inspections',
    resource: 'res7'
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Metal Structure Assembly',
    resource: 'res7'
  },
  {
    start: 'dyndatetime(y,m,d,17)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Heavy Steel Beam Placement',
    resource: 'res7'
  },
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Exterior House Painting',
    resource: 'res8'
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Deck Staining & Sealing',
    resource: 'res8'
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Troubleshoot Faulty Breaker',
    resource: 'res2'
  },
  {
    start: 'dyndatetime(y,m,d+1,10)',
    end: 'dyndatetime(y,m,d+1,13)',
    title: 'Frame Interior Partitions',
    resource: 'res3'
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,20)',
    title: 'Weld Structural Beam Connections',
    resource: 'res4'
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Apply Smooth Trowel Finish to Basement Floor',
    resource: 'res6'
  }
])

const resourceAvatar = ref<string>('')
const resourceName = ref<string | undefined>('')
const resourceCost = ref<string>('')
const resourceDate = ref<string>('')
const resourceTotal = ref<string>('')
const currentResource = ref<MbscResource>()
const tooltipAnchor = ref<HTMLElement>()
const isTooltipOpen = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')

const tooltipRef = ref<typeof MbscPopup>()
const calRef = ref<typeof MbscEventcalendar>()
const hoveredResourceElmRef = ref<HTMLElement>()
const mySelectedDate = ref<Date>(new Date())
const openTimer = ref<ReturnType<typeof setTimeout>>()
const closeTimer = ref<ReturnType<typeof setTimeout>>()

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'day',
    startTime: '07:00',
    endTime: '22:00'
  }
}

function getTotalHoursForResource(resourceId: string | number) {
  return calRef
    .value!.instance.getEvents()
    .filter((e: MbscCalendarEvent) => e.resource === resourceId)
    .reduce((sum: number, e: MbscCalendarEvent) => {
      const start = new Date(e.start as Date)
      const end = new Date(e.end as Date)
      const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60)
      return sum + hours
    }, 0)
}
// Handles both Mobiscroll hover and native mouse events
function openTooltip(resource: MbscResource, target: HTMLElement) {
  clearTimeout(closeTimer.value)
  clearTimeout(openTimer.value)

  openTimer.value = setTimeout(() => {
    const totalHours = getTotalHoursForResource(resource.id)

    currentResource.value = resource
    hoveredResourceElmRef.value = target

    resourceAvatar.value = resource.avatar
    resourceName.value = resource.name
    resourceCost.value = '$' + resource.cost
    resourceDate.value = formatDate('D DDD MMM YYYY', mySelectedDate.value)
    resourceTotal.value = totalHours + 'h, $' + totalHours * resource.cost
    target.classList.add('mds-resource-info-hover')

    tooltipAnchor.value = target
    isTooltipOpen.value = true

    openTimer.value = undefined
  }, 100)
}

function closeTooltip() {
  clearTimeout(openTimer.value)
  clearTimeout(closeTimer.value)

  closeTimer.value = setTimeout(() => {
    isTooltipOpen.value = false
    closeTimer.value = undefined
  }, 200)
}

// Mobiscroll resource hover events
function handleResourceHoverIn(args: MbscResourceHoverEvent) {
  openTooltip(args.resource, args.target)
}

function handleResourceHoverOut(resource: MbscResourceHoverEvent) {
  resource.target.classList.remove('mds-resource-info-hover')
  closeTooltip()
}

function handlePageChange(args: MbscPageChangeEvent) {
  mySelectedDate.value = args.firstDay
}

// Native mouse events for the popup
function handlePopupMouseEnter() {
  clearTimeout(closeTimer.value)
}

function handlePopupMouseLeave() {
  closeTooltip()
}

function handlePay() {
  isTooltipOpen.value = false
  toastMessage.value = currentResource.value!.name + ' paid'
  isToastOpen.value = true
}

function handleTooltipClose() {
  isTooltipOpen.value = false
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar
    ref="calRef"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
    @resource-hover-in="handleResourceHoverIn"
    @resource-hover-out="handleResourceHoverOut"
    @page-change="handlePageChange"
  >
    <template #resource="resource">
      <div class="mbsc-flex">
        <img class="mds-resource-info-avatar" :src="resource.avatar" alt="Avatar" />
        <div class="mds-resource-info-details">
          <div class="mds-resource-info-title">{{ resource.name }}</div>
          <div class="mds-resource-info-profession">{{ resource.profession }}</div>
        </div>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscPopup
    ref="tooltipRef"
    display="anchored"
    :anchor="tooltipAnchor"
    :showOverlay="false"
    :touchUi="false"
    :width="280"
    :isOpen="isTooltipOpen"
    @close="handleTooltipClose"
  >
    <div @mouseenter="handlePopupMouseEnter" @mouseleave="handlePopupMouseLeave">
      <div class="mbsc-flex mbsc-align-items-center mds-resource-info-header">
        <img class="mds-resource-info-avatar" :src="resourceAvatar" alt="Avatar" />
        <div class="mds-resource-info-name mbsc-flex-1-0">{{ resourceName }}</div>
        <MbscButton
          color="success"
          variant="outline"
          cssClass="mds-resource-info-pay mbsc-button-xs"
          @click="handlePay"
        >
          Pay
        </MbscButton>
      </div>
      <div class="mds-resource-info-cont">
        <div>
          <span class="mbsc-txt-muted">Hourly rate </span>
          <span class="mds-resource-info-detail">{{ resourceCost }}</span>
        </div>
        <div>
          <span class="mbsc-txt-muted">{{ resourceDate }}</span>
          <span class="mds-resource-info-detail">{{ resourceTotal }}</span>
        </div>
      </div>
    </div>
  </MbscPopup>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>

<style>
.mds-resource-info-avatar {
  width: 40px;
  height: 40px;
}
.mds-resource-info-details {
  margin: 0 8px;
}
.mds-resource-info-title {
  line-height: 24px;
}
.mds-resource-info-profession {
  font-size: 12px;
  opacity: 0.5;
  line-height: 18px;
}
.mds-resource-info-hover.mbsc-timeline-resource {
  text-decoration: underline;
}
.mds-resource-info-header {
  height: 35px;
}
.mds-resource-info-name {
  font-size: 18px;
  padding: 16px 10px;
}
.mds-resource-info-pay.mbsc-button {
  font-size: 12px;
  width: 40px;
  height: 22px;
  margin: 0;
}
.mds-resource-info-cont {
  font-size: 14px;
  line-height: 22px;
  padding-top: 23px;
}
.mbsc-ltr .mds-resource-info-detail {
  float: right;
}
.mbsc-rtl .mds-resource-info-detail {
  float: left;
}
</style>
