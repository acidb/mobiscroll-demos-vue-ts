<script setup lang="ts">
import {
  MbscDraggable,
  MbscDropcontainer,
  MbscEventcalendar,
  MbscPage,
  MbscSnackbar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscEventcalendarView, MbscItemDragEvent } from '@mobiscroll/vue'
import { reactive, ref } from 'vue'
import { dyndatetime } from '../../../../dyndatetime'

setOptions({
  // locale,
  // theme
})

interface Attendee {
  id: string
  name: string
  avatar: string
  color: string
}

interface Meeting {
  id: string
  title: string
  start: string
  end: string
  resource: number
  color: string
  attendees: Attendee[]
}

const rooms = [
  { id: 1, name: 'Conference Room' },
  { id: 2, name: 'Board Room' },
  { id: 3, name: 'Meeting Room' },
  { id: 4, name: 'Training Room' }
]

const employees: Attendee[] = [
  { id: 'emp1', name: 'Alice Martin', avatar: 'AM', color: '#e74c3c' },
  { id: 'emp2', name: 'Bob Johnson', avatar: 'BJ', color: '#3498db' },
  { id: 'emp3', name: 'Carol Smith', avatar: 'CS', color: '#2ecc71' },
  { id: 'emp4', name: 'David Lee', avatar: 'DL', color: '#f39c12' },
  { id: 'emp5', name: 'Eva Chen', avatar: 'EC', color: '#9b59b6' },
  { id: 'emp6', name: 'Frank Diaz', avatar: 'FD', color: '#1abc9c' },
  { id: 'emp7', name: 'Grace Kim', avatar: 'GK', color: '#e67e22' },
  { id: 'emp8', name: 'Henry Patel', avatar: 'HP', color: '#34495e' },
  { id: 'emp9', name: 'Ivy Torres', avatar: 'IT', color: '#e84393' }
]

const meetings = ref<Meeting[]>([
  {
    id: 'evt1',
    title: 'Sprint Planning',
    start: dyndatetime('y,m,d,9'),
    end: dyndatetime('y,m,d,11'),
    resource: 1,
    color: '#b52db9',
    attendees: [
      { id: 'emp1', name: 'Alice Martin', avatar: 'AM', color: '#e74c3c' },
      { id: 'emp2', name: 'Bob Johnson', avatar: 'BJ', color: '#3498db' }
    ]
  },
  {
    id: 'evt2',
    title: 'Budget Review',
    start: dyndatetime('y,m,d,10'),
    end: dyndatetime('y,m,d,13'),
    resource: 2,
    color: '#669ce2',
    attendees: []
  },
  {
    id: 'evt3',
    title: 'Client Presentation',
    start: dyndatetime('y,m,d,15'),
    end: dyndatetime('y,m,d,18'),
    resource: 2,
    color: '#88bd42',
    attendees: [
      { id: 'emp3', name: 'Carol Smith', avatar: 'CS', color: '#2ecc71' },
      { id: 'emp4', name: 'David Lee', avatar: 'DL', color: '#f39c12' }
    ]
  },
  {
    id: 'evt4',
    title: 'Project Kickoff',
    start: dyndatetime('y,m,d,9'),
    end: dyndatetime('y,m,d,11'),
    resource: 3,
    color: '#b6962f',
    attendees: []
  },
  {
    id: 'evt5',
    title: 'New Hire Orientation',
    start: dyndatetime('y,m,d,13'),
    end: dyndatetime('y,m,d,16'),
    resource: 4,
    color: '#c864f0',
    attendees: []
  },
  {
    id: 'evt6',
    title: 'Design Review',
    start: dyndatetime('y,m,d,13'),
    end: dyndatetime('y,m,d,15'),
    resource: 1,
    color: '#c7682d',
    attendees: []
  },
  {
    id: 'evt7',
    title: 'Product Demo',
    start: dyndatetime('y,m,d+1,9'),
    end: dyndatetime('y,m,d+1,11'),
    resource: 1,
    color: '#ad2b6c',
    attendees: []
  },
  {
    id: 'evt8',
    title: 'Stakeholder Update',
    start: dyndatetime('y,m,d+1,10'),
    end: dyndatetime('y,m,d+1,12'),
    resource: 2,
    color: '#0f60ca',
    attendees: []
  },
  {
    id: 'evt9',
    title: 'Code Review',
    start: dyndatetime('y,m,d+1,10'),
    end: dyndatetime('y,m,d+1,12'),
    resource: 3,
    color: '#56a823',
    attendees: []
  },
  {
    id: 'evt10',
    title: 'Safety Training',
    start: dyndatetime('y,m,d+1,13'),
    end: dyndatetime('y,m,d+1,16'),
    resource: 4,
    color: '#aa36d8',
    attendees: []
  },
  {
    id: 'evt11',
    title: 'Retrospective',
    start: dyndatetime('y,m,d+2,9'),
    end: dyndatetime('y,m,d+2,11'),
    resource: 1,
    color: '#c45f20',
    attendees: []
  },
  {
    id: 'evt12',
    title: 'Board Briefing',
    start: dyndatetime('y,m,d+2,13'),
    end: dyndatetime('y,m,d+2,16'),
    resource: 2,
    color: '#1e58a5',
    attendees: []
  },
  {
    id: 'evt13',
    title: 'Marketing Sync',
    start: dyndatetime('y,m,d+2,10'),
    end: dyndatetime('y,m,d+2,12'),
    resource: 3,
    color: '#549e27',
    attendees: []
  },
  {
    id: 'evt14',
    title: 'API Workshop',
    start: dyndatetime('y,m,d+2,13'),
    end: dyndatetime('y,m,d+2,16'),
    resource: 4,
    color: '#7c1ca1',
    attendees: []
  },
  {
    id: 'evt15',
    title: 'Architecture Review',
    start: dyndatetime('y,m,d+3,9'),
    end: dyndatetime('y,m,d+3,11,30'),
    resource: 1,
    color: '#a7511c',
    attendees: []
  },
  {
    id: 'evt16',
    title: 'Quarterly Planning',
    start: dyndatetime('y,m,d+3,13'),
    end: dyndatetime('y,m,d+3,16'),
    resource: 2,
    color: '#13488d',
    attendees: []
  },
  {
    id: 'evt17',
    title: 'Hiring Debrief',
    start: dyndatetime('y,m,d+3,10'),
    end: dyndatetime('y,m,d+3,12'),
    resource: 3,
    color: '#51ac19',
    attendees: []
  },
  {
    id: 'evt18',
    title: 'Team Standup',
    start: dyndatetime('y,m,d-1,9'),
    end: dyndatetime('y,m,d-1,11'),
    resource: 1,
    color: '#e74c3c',
    attendees: []
  },
  {
    id: 'evt19',
    title: 'Daily Scrum',
    start: dyndatetime('y,m,d-1,10'),
    end: dyndatetime('y,m,d-1,13'),
    resource: 2,
    color: '#3498db',
    attendees: []
  },
  {
    id: 'evt20',
    title: 'Lunch Meeting',
    start: dyndatetime('y,m,d-1,12'),
    end: dyndatetime('y,m,d-1,14'),
    resource: 3,
    color: '#2ecc71',
    attendees: []
  },
  {
    id: 'evt21',
    title: 'Weekly Sync',
    start: dyndatetime('y,m,d-1,14'),
    end: dyndatetime('y,m,d-1,16'),
    resource: 4,
    color: '#f39c12',
    attendees: []
  },
  {
    id: 'evt22',
    title: 'Morning Briefing',
    start: dyndatetime('y,m,d-2,9'),
    end: dyndatetime('y,m,d-2,11'),
    resource: 1,
    color: '#9b59b6',
    attendees: []
  },
  {
    id: 'evt23',
    title: 'Status Update',
    start: dyndatetime('y,m,d-2,11'),
    end: dyndatetime('y,m,d-2,14'),
    resource: 2,
    color: '#1abc9c',
    attendees: []
  },
  {
    id: 'evt24',
    title: 'Client Call',
    start: dyndatetime('y,m,d-2,13'),
    end: dyndatetime('y,m,d-2,15'),
    resource: 3,
    color: '#e67e22',
    attendees: []
  },
  {
    id: 'evt25',
    title: 'End of Day Review',
    start: dyndatetime('y,m,d-2,16'),
    end: dyndatetime('y,m,d-2,18'),
    resource: 4,
    color: '#34495e',
    attendees: []
  }
])

const myView: MbscEventcalendarView = {
  scheduler: {
    type: 'week',
    startDay: 1,
    endDay: 5,
    startTime: '08:00',
    endTime: '18:00',
    timeCellStep: 30,
    timeLabelStep: 30,
    virtualScroll: false
  }
}

const isExternalDragging = ref(false)
const dropStateMap = reactive<{ [key: string]: string }>({})
const eventRefs = reactive<{ [key: string]: HTMLElement }>({})
const dragElements = ref<HTMLElement[]>([])

const toastMessage = ref('')
const toastColor = ref<'success' | 'danger'>('success')
const isToastOpen = ref(false)

const snackbarMessage = ref('')
const snackbarButton = ref<{ text: string; action: () => void } | undefined>(undefined)
const isSnackbarOpen = ref(false)

function getAssignmentCount(empId: string): number {
  let count = 0
  for (const m of meetings.value) {
    count += m.attendees.filter((a) => a.id === empId).length
  }
  return count
}

function findConflict(empId: string, targetEventId: string): Meeting | null {
  const target = meetings.value.find((m) => m.id === targetEventId)
  if (!target) return null
  const tStart = new Date(target.start).getTime()
  const tEnd = new Date(target.end).getTime()
  for (const m of meetings.value) {
    if (m.id === targetEventId || !m.attendees.some((a) => a.id === empId)) continue
    const mStart = new Date(m.start).getTime()
    const mEnd = new Date(m.end).getTime()
    if (mStart < tEnd && mEnd > tStart) return m
  }
  return null
}

function handleEventDrop(e: MbscItemDragEvent, eventId: string): void {
  const employee = e.data as Attendee
  const meetingIdx = meetings.value.findIndex((m) => m.id === eventId)
  if (meetingIdx === -1) return
  const meeting = meetings.value[meetingIdx]

  dropStateMap[eventId] = ''

  if (meeting.attendees.some((a) => a.id === employee.id)) {
    toastMessage.value = employee.name + ' is already assigned'
    toastColor.value = 'danger'
    isToastOpen.value = true
    return
  }

  const conflict = findConflict(employee.id, eventId)
  if (conflict) {
    toastMessage.value = employee.name + ' already has a ' + conflict.title + ' on this timeslot'
    toastColor.value = 'danger'
    isToastOpen.value = true
    return
  }

  meetings.value = meetings.value.map((m) =>
    m.id === eventId
      ? {
          ...m,
          attendees: [
            ...m.attendees,
            { id: employee.id, name: employee.name, avatar: employee.avatar, color: employee.color }
          ]
        }
      : m
  )

  toastMessage.value = employee.name + ' assigned to ' + meeting.title
  toastColor.value = 'success'
  isToastOpen.value = true
}

function handleEventDragEnter(e: MbscItemDragEvent, eventId: string): void {
  const emp = e.data as Attendee
  const meeting = meetings.value.find((m) => m.id === eventId)
  if (emp && meeting) {
    if (meeting.attendees.some((a) => a.id === emp.id) || findConflict(emp.id, eventId)) {
      dropStateMap[eventId] = 'conflict'
    } else {
      dropStateMap[eventId] = 'active'
    }
  } else {
    dropStateMap[eventId] = 'active'
  }
}

function handleEventDragLeave(eventId: string): void {
  dropStateMap[eventId] = ''
}

function removeAttendee(eventId: string, empId: string): void {
  const meetingIdx = meetings.value.findIndex((m) => m.id === eventId)
  if (meetingIdx === -1) return
  const meeting = meetings.value[meetingIdx]
  const idx = meeting.attendees.findIndex((a) => a.id === empId)
  if (idx === -1) return

  const removedAtt = meeting.attendees[idx]

  meetings.value = meetings.value.map((m) =>
    m.id === eventId
      ? { ...m, attendees: [...m.attendees.slice(0, idx), ...m.attendees.slice(idx + 1)] }
      : m
  )

  snackbarMessage.value = removedAtt.name + ' removed from ' + meeting.title
  snackbarButton.value = {
    text: 'Undo',
    action: () => {
      meetings.value = meetings.value.map((m) =>
        m.id === eventId
          ? {
              ...m,
              attendees: [...m.attendees.slice(0, idx), removedAtt, ...m.attendees.slice(idx)]
            }
          : m
      )
      isSnackbarOpen.value = false
      toastMessage.value = 'Assignment restored'
      toastColor.value = 'success'
      isToastOpen.value = true
    }
  }
  isSnackbarOpen.value = true
}

function handleEmployeePointerDown(): void {
  function onMove() {
    isExternalDragging.value = true
    document.removeEventListener('pointermove', onMove)
  }
  function onUp() {
    isExternalDragging.value = false
    document.removeEventListener('pointermove', onMove)
    document.removeEventListener('pointerup', onUp)
  }
  document.addEventListener('pointermove', onMove)
  document.addEventListener('pointerup', onUp)
}
</script>

<template>
  <MbscPage
    :cssClass="`mds-drop-on-events${
      isExternalDragging ? ' mds-drop-on-events-external-dragging' : ''
    }`"
  >
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-3 mbsc-flex-col mds-drop-on-events-sidebar">
          <div class="mbsc-form-group-title">Team Members</div>
          <div class="mds-drop-on-events-employee-list mbsc-flex">
            <div
              v-for="(emp, i) in employees"
              :key="emp.id"
              :ref="
                (el) => {
                  if (el) dragElements[i] = el as HTMLElement
                }
              "
              class="mds-drop-on-events-employee-item mbsc-flex"
              @pointerdown="handleEmployeePointerDown"
            >
              <div
                class="mds-drop-on-events-employee-avatar mbsc-flex"
                :style="{ background: emp.color }"
              >
                {{ emp.avatar }}
              </div>
              <div class="mds-drop-on-events-employee-info mbsc-flex">
                <div class="mds-drop-on-events-employee-name">{{ emp.name }}</div>
                <div class="mds-drop-on-events-employee-count">
                  {{
                    getAssignmentCount(emp.id) > 0
                      ? getAssignmentCount(emp.id) +
                        ' meeting' +
                        (getAssignmentCount(emp.id) > 1 ? 's' : '')
                      : 'No assignments'
                  }}
                </div>
              </div>
              <MbscDraggable :element="dragElements[i]" :dragData="emp" />
            </div>
          </div>
        </div>
        <div class="mbsc-col-sm-9 mds-drop-on-events-calendar-wrapper">
          <MbscEventcalendar
            :view="myView"
            :data="meetings"
            :resources="rooms"
            :dragToCreate="false"
            :dragToMove="false"
            :dragToResize="false"
            :clickToCreate="false"
            :eventDelete="false"
            :showEventTooltip="false"
          >
            <template #schedulerEvent="data">
              <div
                :ref="
                  (el) => {
                    if (el) eventRefs[data.original.id] = el as HTMLElement
                  }
                "
                class="mds-drop-on-events-custom-event mbsc-flex"
                :class="{
                  'mds-drop-active': dropStateMap[data.original.id] === 'active',
                  'mds-drop-conflict': dropStateMap[data.original.id] === 'conflict'
                }"
                :style="{ borderLeft: '4px solid ' + data.original.color }"
              >
                <MbscDropcontainer
                  :element="eventRefs[data.original.id]"
                  @item-drop="handleEventDrop($event, data.original.id)"
                  @item-drag-enter="handleEventDragEnter($event, data.original.id)"
                  @item-drag-leave="handleEventDragLeave(data.original.id)"
                >
                  <div class="mds-drop-on-events-event-header mbsc-flex">
                    <div class="mds-drop-on-events-event-title">{{ data.title }}</div>
                    <div class="mds-drop-on-events-event-time">
                      {{ data.start }} - {{ data.end }}
                    </div>
                  </div>
                  <div
                    v-if="data.original.attendees && data.original.attendees.length > 0"
                    class="mds-drop-on-events-event-attendees mbsc-flex"
                  >
                    <span
                      v-for="att in data.original.attendees"
                      :key="att.id"
                      class="mds-drop-on-events-attendee-chip"
                      :style="{ background: att.color }"
                      :title="att.name + ' (click to remove)'"
                      @click.stop="removeAttendee(data.original.id, att.id)"
                    >
                      {{ att.avatar }}
                      <span class="mds-drop-on-events-attendee-remove">&times;</span>
                    </span>
                  </div>
                  <div class="mds-drop-on-events-event-drop-hint">Drop people to assign</div>
                </MbscDropcontainer>
              </div>
            </template>
          </MbscEventcalendar>
        </div>
      </div>
    </div>
    <MbscToast
      :message="toastMessage"
      :color="toastColor"
      :isOpen="isToastOpen"
      @close="isToastOpen = false"
    />
    <MbscSnackbar
      :message="snackbarMessage"
      :button="snackbarButton"
      :isOpen="isSnackbarOpen"
      @close="isSnackbarOpen = false"
    />
  </MbscPage>
</template>

<style>
.mds-drop-on-events,
.mds-drop-on-events .mbsc-grid,
.mds-drop-on-events .mbsc-row {
  height: 100%;
}
.mds-drop-on-events-sidebar {
  overflow-y: auto;
}
.mds-drop-on-events-employee-list {
  padding: 8px;
  flex-direction: column;
  gap: 4px;
}
.mds-drop-on-events-employee-item {
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: grab;
  user-select: none;
  background: rgba(128, 128, 128, 0.5);
  margin: 0 5px 5px 5px;
  touch-action: none;
  transition:
    background 0.15s,
    box-shadow 0.2s,
    transform 0.15s;
}
.mds-drop-on-events-employee-item:hover {
  background: rgba(128, 128, 128, 0.4);
  transform: translateY(-1px);
}
.mds-drop-on-events-employee-item:active {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.mds-drop-on-events-employee-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  letter-spacing: 0.5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}
.mds-drop-on-events-employee-info {
  flex-direction: column;
  overflow: hidden;
}
.mds-drop-on-events-employee-name {
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mds-drop-on-events-employee-count {
  font-size: 13px;
  opacity: 0.55;
}
.mds-drop-on-events-calendar-wrapper {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
/* Drag clone is appended to body, outside the root — keep unscoped */
.mds-drop-on-events-employee-item.mbsc-drag-clone {
  opacity: 0.8;
}
.mds-drop-on-events-custom-event {
  background: #cccccc;
  border-radius: 6px;
  padding: 6px 8px;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
  outline: 2px solid transparent;
  transition: background 0.15s;
  position: relative;
}
.mds-drop-on-events-event-header {
  flex-direction: column;
  gap: 1px;
}
.mds-drop-on-events-event-title {
  font-size: 14px;
  font-weight: 600;
  color: #181818;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mds-drop-on-events-event-time {
  font-size: 12px;
  color: #545454;
}
.mds-drop-on-events-event-attendees {
  flex-wrap: wrap;
  gap: 3px;
}
/* Drop hint - hidden by default, shown only during external drag */
.mds-drop-on-events-event-drop-hint {
  display: none;
  font-size: 11px;
  font-style: italic;
  color: #686868;
}
/* Show drop hints and dashed borders on events during external drag */
.mds-drop-on-events-external-dragging .mds-drop-on-events-event-drop-hint {
  display: block;
}
.mds-drop-on-events-external-dragging .mds-drop-on-events-custom-event {
  outline: 2px dashed #b9b9b9;
}
.mds-drop-on-events-attendee-chip {
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  position: relative;
}
.mds-drop-on-events-attendee-remove {
  display: none;
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
}
.mds-drop-on-events-attendee-chip:hover .mds-drop-on-events-attendee-remove {
  display: flex;
}
.mds-drop-on-events-custom-event.mds-drop-active {
  cursor: copy;
  outline: 2px solid rgba(54, 133, 43, 0.8);
  background: rgba(180, 223, 173, 0.8);
}
.mds-drop-on-events-custom-event.mds-drop-conflict {
  cursor: not-allowed;
  outline: 2px solid rgba(145, 34, 34, 0.8);
  background: rgba(235, 194, 194, 0.8);
}
.mds-drop-on-events .mbsc-scheduler-event {
  min-height: 80px;
}
.mds-drop-on-events .mbsc-schedule-event-inner {
  height: 100%;
}
</style>
