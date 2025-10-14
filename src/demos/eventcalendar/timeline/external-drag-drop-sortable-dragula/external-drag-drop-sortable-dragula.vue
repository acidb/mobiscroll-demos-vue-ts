<script setup lang="ts">
import {
  dragulaDraggable,
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
  MbscItemDragEvent,
  MbscResource,
  MbscResourceDeletedEvent
} from '@mobiscroll/vue'
import dragula, { type Drake } from 'dragula'
import Sortable from 'sortablejs'
import { onMounted, onUnmounted, ref } from 'vue'
import 'dragula/dist/dragula.css'

setOptions({
  // locale,
  // theme
})

const dropCont = ref<HTMLDivElement>()
const dragTaskElements = ref([])
const dragResourceElements = ref([])
const sortableTaskCont = ref<HTMLDivElement>()
const sortableTaskInstance = ref<Sortable>()
const dragulaTaskCont = ref<HTMLDivElement>()
const drake1 = ref<Drake>()
const sortableResourceCont = ref<HTMLDivElement>()
const sortableResourceInstance = ref<Sortable>()
const dragulaResourceCont = ref<HTMLDivElement>()
const drake2 = ref<Drake>()
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myDraggableTasks = ref<MbscCalendarEvent[]>([
  {
    id: 'draggable-1',
    title: 'Task 1',
    color: '#cf4343',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)'
  },
  {
    id: 'draggable-2',
    title: 'Task 2',
    color: '#cf4343',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)'
  },
  {
    id: 'draggable-3',
    title: 'Task 3',
    color: '#cf4343',
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,14)'
  },
  {
    id: 'draggable-4',
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
    color: '#d1891f',
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,9,30)'
  },
  {
    id: 'sortable-2',
    title: 'Task 6',
    color: '#d1891f',
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,15)'
  },
  {
    id: 'sortable-3',
    title: 'Task 7',
    color: '#d1891f',
    start: 'dyndatetime(y,m,d,8,30)',
    end: 'dyndatetime(y,m,d,11)'
  },
  {
    id: 'sortable-4',
    title: 'Task 8',
    color: '#d1891f',
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,21)'
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
    end: 'dyndatetime(y,m,d,20,30)'
  }
])

const myDraggableResources = ref<MbscResource[]>([
  {
    id: 'draggable-1',
    name: 'Resource 1'
  },
  {
    id: 'draggable-2',
    name: 'Resource 2'
  },
  {
    id: 'draggable-3',
    name: 'Resource 3'
  },
  {
    id: 'draggable-4',
    name: 'Resource 4'
  }
])

const mySortableResources = ref<MbscResource[]>([
  {
    id: 'sortable-1',
    name: 'Resource 5'
  },
  {
    id: 'sortable-2',
    name: 'Resource 6'
  },
  {
    id: 'sortable-3',
    name: 'Resource 7'
  },
  {
    id: 'sortable-4',
    name: 'Resource 8'
  }
])

const myDragulaResources = ref<MbscResource[]>([
  {
    id: 'dragula-1',
    name: 'Resource 9'
  },
  {
    id: 'dragula-2',
    name: 'Resource 10'
  },
  {
    id: 'dragula-3',
    name: 'Resource 11'
  },
  {
    id: 'dragula-4',
    name: 'Resource 12'
  }
])

const myResources: MbscResource[] = [
  { name: 'Resource A', id: 'res-1' },
  { name: 'Resource B', id: 'res-2' },
  { name: 'Resource C', id: 'res-3' },
  { name: 'Resource D', id: 'res-4' },
  { name: 'Resource E', id: 'res-5' }
]

const myView: MbscEventcalendarView = {
  timeline: { type: 'day' }
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

function handleResourceCreated(args: MbscResourceDeletedEvent) {
  if (args.type === 'onResourceCreated') {
    myDraggableResources.value = myDraggableResources.value.filter(
      (item) => item.id !== args.resource.id
    )
    mySortableResources.value = mySortableResources.value.filter(
      (item) => item.id !== args.resource.id
    )
    myDragulaResources.value = myDragulaResources.value.filter(
      (item) => item.id !== args.resource.id
    )
    toastMessage.value = args.resource.name + ' added'
    isToastOpen.value = true
  }
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
  if (sortableTaskCont.value) {
    sortableTaskInstance.value = new Sortable(sortableTaskCont.value, {
      animation: 150,
      forceFallback: true
    })

    sortableJsDraggable.init(sortableTaskInstance.value, {
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

  if (sortableResourceCont.value) {
    sortableResourceInstance.value = new Sortable(sortableResourceCont.value, {
      animation: 150,
      forceFallback: true
    })

    sortableJsDraggable.init(sortableResourceInstance.value, {
      cloneSelector: '.sortable-drag',
      type: 'resource'
    })
  }

  if (dragulaTaskCont.value) {
    drake1.value = dragula([dragulaTaskCont.value])
    dragulaDraggable.init(drake1.value, {
      externalDrop: true,
      onExternalDrop: (a: MbscExternalDropEvent) => {
        const dragData = a.dragData
        const newTasks = [...myDraggableTasks.value]
        newTasks.splice(a.position, 0, dragData)
        myDraggableTasks.value = newTasks
      }
    })
  }

  if (dragulaResourceCont.value) {
    drake2.value = dragula([dragulaResourceCont.value])
    dragulaDraggable.init(drake2.value, {
      type: 'resource'
    })
  }
})

onUnmounted(() => {
  if (sortableTaskInstance.value) {
    sortableTaskInstance.value.destroy()
  }
  if (sortableResourceInstance.value) {
    sortableResourceInstance.value.destroy()
  }
  if (drake1.value) {
    drake1.value.destroy()
  }
  if (drake2.value) {
    drake2.value.destroy()
  }
})
</script>

<template>
  <div class="mbsc-grid mbsc-no-padding mds-drag-drop-sort mds-full-height">
    <div class="mbsc-row mds-full-height">
      <div class="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
        <div class="mbsc-txt-muted mds-third-party-title">Mobiscroll draggable</div>
        <div class="mbsc-flex">
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div ref="dropCont" class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
              <div class="mbsc-txt-muted mds-third-party-list-title">Event list</div>
              <MbscDropcontainer :element="dropCont" @item-drop="handleItemDrop($event)">
                <div v-for="(task, i) in myDraggableTasks" :key="task.id">
                  <div
                    ref="dragTaskElements"
                    class="mds-drag-drop-sort-task"
                    :style="{ background: task.color }"
                  >
                    <div>{{ task.title }}</div>
                    <div>{{ getHours(task) }}</div>
                    <MbscDraggable :element="dragTaskElements[i]" :dragData="task" />
                  </div>
                </div>
              </MbscDropcontainer>
            </div>
          </div>
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
              <div class="mds-third-party-list-title mbsc-txt-muted">Resource list</div>
              <div
                v-for="(resource, i) in myDraggableResources"
                :key="resource.id"
                ref="dragResourceElements"
              >
                <div class="mds-drag-drop-sort-task" :style="{ background: '#80808099' }">
                  <div>{{ resource.name }}</div>
                  <MbscDraggable
                    :element="dragResourceElements[i]"
                    :dragData="resource"
                    type="resource"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mbsc-txt-muted mds-third-party-title">SortableJS (externally sortable)</div>
        <div class="mbsc-flex">
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
              <div class="mds-third-party-list-title mbsc-txt-muted">Event list</div>
              <div class="mbsc-flex-col mbsc-flex-1-0" ref="sortableTaskCont">
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
            </div>
          </div>
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
              <div class="mds-third-party-list-title mbsc-txt-muted">Resource list</div>
              <div class="mbsc-flex-col mbsc-flex-1-0" ref="sortableResourceCont">
                <div
                  v-for="resource in mySortableResources"
                  :key="resource.id"
                  class="mds-drag-drop-sort-task"
                  :style="{ background: '#80808099' }"
                  :data-drag-data="JSON.stringify(resource)"
                >
                  <div>{{ resource.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mbsc-txt-muted mds-third-party-title">Dragula (externally sortable)</div>
        <div class="mbsc-flex">
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
              <div class="mds-third-party-list-title mbsc-txt-muted">Event list</div>
              <div class="mbsc-flex-col mbsc-flex-1-0" ref="dragulaTaskCont">
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
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
              <div class="mds-third-party-list-title mbsc-txt-muted">Resource list</div>
              <div class="mbsc-flex-col mbsc-flex-1-0" ref="dragulaResourceCont">
                <div
                  v-for="resource in myDragulaResources"
                  :key="resource.id"
                  class="mds-drag-drop-sort-task"
                  :style="{ background: '#80808099' }"
                  :data-drag-data="JSON.stringify(resource)"
                >
                  <div>{{ resource.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mbsc-col-sm-9 mds-drag-drop-sort-calendar mds-full-height">
        <MbscEventcalendar
          :view="myView"
          :dragToMove="true"
          :dragToCreate="true"
          :externalDrop="true"
          :externalDrag="true"
          :externalResourceDrop="true"
          :resources="myResources"
          @event-created="handleEventCreated"
          @resource-created="handleResourceCreated"
          @event-deleted="handleEventDeleted"
        />
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
  border-left: 1px solid #ccc;
}

.mds-drag-drop-sort .mbsc-timeline-resource-col {
  width: 100px;
}

.mds-drag-drop-sort-container {
  margin: 5px;
}

.mds-drag-drop-sort-container-wrapper {
  overflow: auto;
}

.mds-drag-drop-sort-task {
  margin-top: 5px;
  padding: 10px 12px 10px 12px;
  align-content: center;
  touch-action: none;
  color: #fff;
  border-radius: 8px;
  flex: 0 0 4.2em;
  font-family:
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  font-size: 12px;
}

.mds-third-party-title {
  margin-top: 12px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 600;
}

.mds-third-party-list-title {
  font-weight: 600;
  padding: 0 5px;
  font-size: 12px;
  text-transform: none;
}

.mds-drag-drop-sort-duration {
  font-size: 10px;
}
</style>
