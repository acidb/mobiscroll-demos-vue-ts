<script setup lang="ts">
import {
  dragulaDraggable,
  getJson,
  MbscDraggable,
  MbscDropcontainer,
  MbscEventcalendar,
  MbscToast,
  setOptions,
  sortableJsDraggable /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscExternalDropEvent,
  MbscItemDragEvent
} from '@mobiscroll/vue'
import dragula, { type Drake } from 'dragula'
import Sortable from 'sortablejs'
import { onMounted, onUnmounted, ref } from 'vue'
import 'dragula/dist/dragula.css'

setOptions({
  // locale,
  // theme
})

const dragElements = ref([])
const dropCont = ref<HTMLDivElement>()
const sortableCont = ref<HTMLDivElement>()
const sortableInstance = ref<Sortable>()
const dragulaCont = ref<HTMLDivElement>()
const drake = ref<Drake>()
const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myDraggableTasks = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    title: 'Task 1',
    color: '#cf4343',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)'
  },
  {
    id: 2,
    title: 'Task 2',
    color: '#cf4343',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)'
  },
  {
    id: 3,
    title: 'Task 3',
    color: '#cf4343',
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,14)'
  },
  {
    id: 4,
    title: 'Task 4',
    color: '#cf4343',
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,18)'
  }
])

const mySortableTasks = ref<MbscCalendarEvent[]>([
  {
    id: 'sortable-1',
    title: 'Task 5',
    color: '#e49516',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)'
  },
  {
    id: 'sortable-2',
    title: 'Task 6',
    color: '#e49516',
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,15)'
  },
  {
    id: 'sortable-3',
    title: 'Task 7',
    color: '#e49516',
    start: 'dyndatetime(y,m,d,8,30)',
    end: 'dyndatetime(y,m,d,11)'
  },
  {
    id: 'sortable-4',
    title: 'Task 8',
    color: '#e49516',
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,17)'
  }
])

const myDragulaTasks = ref<MbscCalendarEvent[]>([
  {
    id: 'dragula-1',
    title: 'Task 9',
    color: '#1ca11a',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)'
  },
  {
    id: 'dragula-2',
    title: 'Task 10',
    color: '#1ca11a',
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,15)'
  },
  {
    id: 'dragula-3',
    title: 'Task 11',
    color: '#1ca11a',
    start: 'dyndatetime(y,m,d,8,30)',
    end: 'dyndatetime(y,m,d,11)'
  },
  {
    id: 'dragula-4',
    title: 'Task 12',
    color: '#1ca11a',
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,17)'
  }
])

const myView: MbscEventcalendarView = {
  schedule: { type: 'week' }
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  if (args.action === 'externalDrop') {
    myDraggableTasks.value = myDraggableTasks.value.filter((item) => item.id !== args.event.id)
    mySortableTasks.value = mySortableTasks.value.filter((item) => item.id !== args.event.id)
    myDragulaTasks.value = myDragulaTasks.value.filter((item) => item.id !== args.event.id)
    toastMessage.value = args.event.title + ' added'
    isToastOpen.value = true
  }
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  toastMessage.value = args.event.title + ' unscheduled'
  isToastOpen.value = true
}

function handleItemDrop(args: MbscItemDragEvent) {
  if (args.data) {
    myDraggableTasks.value = [...myDraggableTasks.value, args.data]
  }
}

function getHours(event: any) {
  const eventLength = Math.round(
    Math.abs(new Date(event.end).getTime() - new Date(event.start).getTime()) / (60 * 60 * 1000)
  )
  return eventLength + ' hour' + (eventLength > 1 ? 's' : '')
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/drag-drop-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
  if (sortableCont.value) {
    sortableInstance.value = new Sortable(sortableCont.value, {
      animation: 150,
      forceFallback: true
    })

    sortableJsDraggable.init(sortableInstance.value, {
      cloneSelector: '.sortable-drag',
      externalDrop: true,
      onExternalDrop: (a: MbscExternalDropEvent) => {
        const dragData = a.dragData
        const newTasks = [...mySortableTasks.value]
        newTasks.splice(a.position, 0, dragData)
        mySortableTasks.value = newTasks
      }
    })
  }

  if (dragulaCont.value) {
    drake.value = dragula([dragulaCont.value])
    dragulaDraggable.init(drake.value, {
      externalDrop: true,
      onExternalDrop: (a: MbscExternalDropEvent) => {
        const dragData = a.dragData
        const newTasks = [...myDraggableTasks.value]
        newTasks.splice(a.position, 0, dragData)
        myDraggableTasks.value = newTasks
      }
    })
  }

  onUnmounted(() => {
    if (sortableInstance.value) {
      sortableInstance.value.destroy()
    }
    if (drake.value) {
      drake.value.destroy()
    }
  })
})
</script>

<template>
  <div class="mbsc-grid mbsc-no-padding mds-full-height">
    <div class="mbsc-row mds-full-height">
      <div class="mbsc-col-sm-9 mds-drag-drop-sort-calendar mds-full-height">
        <MbscEventcalendar
          :view="myView"
          :data="myEvents"
          :dragToMove="true"
          :dragToCreate="true"
          :externalDrop="true"
          :externalDrag="true"
          @event-created="handleEventCreated"
          @event-deleted="handleEventDeleted"
        />
      </div>
      <div class="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
        <div class="mbsc-txt-muted mds-third-party-title">Mobiscroll draggable</div>
        <div ref="dropCont" class="mds-drag-drop-sort-container">
          <MbscDropcontainer :element="dropCont" @item-drop="handleItemDrop($event)">
            <div v-for="(task, i) in myDraggableTasks" :key="task.id">
              <div
                ref="dragElements"
                class="mds-drag-drop-sort-task"
                :style="{ background: task.color }"
              >
                <div>{{ task.title }}</div>
                <div>{{ getHours(task) }}</div>
                <MbscDraggable :element="dragElements[i]" :dragData="task" />
              </div>
            </div>
          </MbscDropcontainer>
        </div>
        <div class="mbsc-txt-muted mds-third-party-title">
          SortableJS list (externally draggable)
        </div>
        <div class="mds-drag-drop-sort-container" ref="sortableCont">
          <div
            v-for="task in mySortableTasks"
            :key="task.id"
            class="mds-drag-drop-sort-task"
            :style="{ background: task.color }"
            :data-drag-data="JSON.stringify(task)"
          >
            <div>{{ task.title }}</div>
            <div>{{ getHours(task) }}</div>
          </div>
        </div>
        <div class="mbsc-txt-muted mds-third-party-title">Dragula list (externally draggable)</div>
        <div class="mds-drag-drop-sort-container" ref="dragulaCont">
          <div
            v-for="task in myDragulaTasks"
            :key="task.id"
            class="mds-drag-drop-sort-task"
            :style="{ background: task.color }"
            :data-drag-data="JSON.stringify(task)"
          >
            <div>{{ task.title }}</div>
            <div>{{ getHours(task) }}</div>
          </div>
        </div>
      </div>
    </div>
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  </div>
</template>

<style>
.mds-full-height {
  height: 100%;
}

.mds-drag-drop-sort-calendar {
  border-right: 1px solid #ccc;
}

.mds-drag-drop-sort-container {
  margin: 10px;
}

.mds-drag-drop-sort-container-wrapper {
  overflow: auto;
}

.mds-third-party-title {
  margin-top: 12px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 600;
}

.mds-drag-drop-sort-task {
  margin: 10px;
  padding: 10px;
  touch-action: none;
  color: #fff;
  border-radius: 8px;
  font-family:
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
}
</style>
