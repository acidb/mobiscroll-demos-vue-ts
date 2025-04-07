<script setup lang="ts">
import {
  formatDate,
  MbscButton,
  MbscDatepicker,
  MbscEventcalendar,
  MbscInput,
  MbscPopup,
  MbscRadio,
  MbscRadioGroup,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscSelect,
  MbscSwitch,
  MbscTextarea,
  setOptions,
  updateRecurringEvent /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscDatepickerControl,
  MbscDatepickerOptions,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventCreateEvent,
  MbscEventDeletedEvent,
  MbscEventUpdateEvent,
  MbscPopupButton,
  MbscPopupOptions,
  MbscRecurrenceRule,
  MbscResponsiveOptions,
  MbscSelectedDateChangeEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const days = [
  {
    name: 'Sunday',
    short: 'SU',
    checked: true
  },
  {
    name: 'Monday',
    short: 'MO',
    checked: false
  },
  {
    name: 'Tuesday',
    short: 'TU',
    checked: false
  },
  {
    name: 'Wednesday',
    short: 'WE',
    checked: false
  },
  {
    name: 'Thursday',
    short: 'TH',
    checked: false
  },
  {
    name: 'Friday',
    short: 'FR',
    checked: false
  },
  {
    name: 'Saturday',
    short: 'SA',
    checked: false
  }
]
const ordinalList: { [key: number]: string } = { 1: 'first', 2: 'second', 3: 'third', 4: 'fourth' }
const popupEventTitle = ref<string>('')
const popupEventDescription = ref<string>('')
const popupEventAllDay = ref<boolean>(true)
const popupEventDates = ref<any>(null)
const calendarSelectedDate = ref<any>(new Date())
const myEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    start: '10:00',
    end: '12:00',
    title: 'Take vitamins',
    color: '#67ab0d',
    recurring: { repeat: 'daily', weekDays: 'MO,TU,WE,TH,FR,SA,SU' }
  },
  {
    id: 2,
    start: '18:00',
    end: '20:00',
    recurring: { repeat: 'weekly', weekDays: 'MO' },
    title: 'Football training',
    color: '#fd966a'
  },
  {
    id: 3,
    start: '17:00',
    end: '18:00',
    recurring: { repeat: 'monthly', day: 10 },
    title: 'Rent payment',
    color: '#3ea39e'
  },
  {
    id: 4,
    recurring: { repeat: 'yearly', day: 6, month: 6 },
    title: 'Dexter BD',
    allDay: true,
    color: '#d00f0f'
  }
])
const myView: MbscEventcalendarView = {
  schedule: { type: 'week' }
}
const repeatData = ref([
  {
    value: 'norepeat',
    text: 'Does not repeat'
  },
  {
    value: 'daily',
    text: 'Daily'
  },
  {
    value: 'weekly',
    text: 'Weekly'
  },
  {
    value: 'monthly',
    text: 'Monthly'
  },
  {
    value: 'monthly-pos',
    text: 'Monthly'
  },
  {
    value: 'yearly',
    text: 'Yearly'
  },
  {
    value: 'yearly-pos',
    text: 'Yearly'
  },
  {
    value: 'weekday',
    text: 'Every weekday (Monday to Friday)'
  },
  {
    value: 'custom',
    text: 'Custom'
  }
])
const selectedRepeat = ref<string>('norepeat')
const selectResponsive = {
  xsmall: {
    touchUi: true
  },
  small: {
    touchUi: false
  }
}
const responsivePopup: MbscResponsiveOptions<MbscPopupOptions> = {
  medium: {
    display: 'anchored',
    width: 510,
    fullScreen: false,
    touchUi: false
  }
}
const weekDays = ref<string[]>(['SU'])
const showCustomRepeat = ref<boolean>(false)
const repeatType = ref<'daily' | 'weekly' | 'monthly' | 'yearly'>('daily')
const repeatNr = ref<number>(1)
const monthlyDays = ref<number[]>([1])
const monthlyDay = ref<number>(1)
const yearlyDays = ref<number[]>([1])
const yearlyDay = ref<number>(1)
const months = [
  {
    value: 1,
    text: 'January'
  },
  {
    value: 2,
    text: 'February'
  },
  {
    value: 3,
    text: 'March'
  },
  {
    value: 4,
    text: 'April'
  },
  {
    value: 5,
    text: 'May'
  },
  {
    value: 6,
    text: 'June'
  },
  {
    value: 7,
    text: 'July'
  },
  {
    value: 8,
    text: 'August'
  },
  {
    value: 9,
    text: 'September'
  },
  {
    value: 10,
    text: 'October'
  },
  {
    value: 11,
    text: 'November'
  },
  {
    value: 12,
    text: 'December'
  }
]
const selectedMonth = ref<number>(1)
const untilDate = ref<any>(null)
const occurrences = ref<number>(10)
const condition = ref<string>('never')
const tempEvent = ref<any>({})
const recurringEditMode = ref<any>('current')
const newEvent = ref<object>({})
const originalRecurringEvent = ref<any>({})
const eventOccurrence = ref<any>({})
const isEdit = ref<boolean>(false)
const editFromPopup = ref<boolean>(false)
const recurringDelete = ref<boolean>(false)
const recurringActionText = ref<string>('Edit')
const isPopupOpen = ref<boolean>(false)
const popupHeaderText = ref<string>('')
const isRecurringEditOpen = ref<boolean>(false)
const popupAnchor = ref<any>(null)
const startRef = ref<any>(null)
const endRef = ref<any>(null)
const popupAddButtons = [
  'cancel',
  {
    handler: () => {
      saveEvent()
    },
    keyCode: 'enter',
    text: 'Add',
    cssClass: 'mbsc-popup-button-primary'
  }
]
const popupEditButtons = [
  'cancel',
  {
    handler: () => {
      if (Object.keys(originalRecurringEvent.value).length !== 0) {
        editFromPopup.value = true
        recurringActionText.value = 'Edit'
        recurringDelete.value = false
        isRecurringEditOpen.value = true
      } else {
        saveEvent()
      }
    },
    keyCode: 'enter',
    text: 'Save',
    cssClass: 'mbsc-popup-button-primary'
  }
]
const datePickerControls: MbscDatepickerControl[] = ['date']
const datePickerResponsive: MbscResponsiveOptions<MbscDatepickerOptions> = {
  medium: {
    controls: ['calendar'],
    touchUi: false
  }
}
const datetimePickerControls: MbscDatepickerControl[] = ['datetime']
const datetimePickerResponsive: MbscResponsiveOptions<MbscDatepickerOptions> = {
  medium: {
    controls: ['calendar', 'time'],
    touchUi: false
  }
}
const popupButtons = ref<any>([])
const recurringEditButtons: Array<MbscPopupButton | string> = [
  'cancel',
  {
    text: 'Ok',
    keyCode: 'enter',
    handler: () => {
      if (recurringDelete.value) {
        deleteRecurringEvent()
      } else {
        if (editFromPopup.value) {
          setTempEvent()
        }

        if (recurringEditMode.value === 'current') {
          delete tempEvent.value.id
          delete tempEvent.value.recurring
          delete tempEvent.value.recurringException
        }

        const events = updateRecurringEvent(
          originalRecurringEvent.value,
          eventOccurrence.value,
          editFromPopup.value ? null : newEvent.value,
          editFromPopup.value ? tempEvent.value : null,
          recurringEditMode.value
        )

        // update event
        let newEventList = [...myEvents.value]
        const index = newEventList.findIndex((x) => x.id === events.updatedEvent.id)
        newEventList[index] = events.updatedEvent

        // add new event
        if (events.newEvent) {
          newEventList = [...newEventList, events.newEvent]
        }

        myEvents.value = newEventList

        isPopupOpen.value = false
        isRecurringEditOpen.value = false
      }
    },
    cssClass: 'mbsc-popup-button-primary'
  }
]

function getWeekDayNum(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  let count = 0

  for (let d = firstDayOfMonth; d < lastDayOfMonth; d.setDate(d.getDate() + 7)) {
    if (date >= d) {
      count++
    } else {
      break
    }
  }

  return Math.max(1, count)
}

function deleteRecurringEvent() {
  let currentExceptions: any = []
  let followingExceptions: any = []
  switch (recurringEditMode.value) {
    case 'current':
    default:
      currentExceptions = tempEvent.value.recurringException || []
      currentExceptions = [...currentExceptions, tempEvent.value.start]
      originalRecurringEvent.value.recurringException = currentExceptions
      myEvents.value = [...myEvents.value]
      break
    case 'following':
      followingExceptions = tempEvent.value.recurringException || []
      followingExceptions = [...followingExceptions, tempEvent.value.start]
      originalRecurringEvent.value.recurringException = followingExceptions
      originalRecurringEvent.value.recurring.until = tempEvent.value.start
      myEvents.value = [...myEvents.value]
      break
    case 'all':
      myEvents.value = myEvents.value.filter((item) => item.id !== tempEvent.value.id)
      break
  }
  isPopupOpen.value = false
  isRecurringEditOpen.value = false
}

function loadPopupForm(event: any) {
  const startDate = new Date(event.start)
  popupEventTitle.value = event.title
  popupEventDescription.value = event['description']
  popupEventDates.value = [startDate, event.end]
  untilDate.value = formatDate(
    'YYYY-MM-DD',
    new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1)
  )
  popupEventAllDay.value = event.allDay || false
  updateCustomForm()
}

function getCustomRule() {
  let recurringRule: MbscRecurrenceRule = {}
  const d = editFromPopup.value ? popupEventDates.value[0] : new Date(tempEvent.value.start)
  const weekday = d.getDay()
  const monthday = d.getDate()
  const weekNr = getWeekDayNum(d)

  if (editFromPopup.value && tempEvent.value.start && tempEvent.value.recurring) {
    switch (selectedRepeat.value) {
      default:
      case 'daily':
        recurringRule = {
          repeat: 'daily'
        }
        break
      case 'weekly':
        recurringRule = {
          repeat: 'weekly',
          weekDays: days[weekday].short
        }
        break
      case 'monthly':
        recurringRule = {
          repeat: 'monthly',
          day: monthday
        }
        break
      case 'monthly-pos':
        recurringRule = {
          repeat: 'monthly',
          weekDays: days[weekday].short,
          pos: weekNr
        }
        break
      case 'yearly':
        recurringRule = {
          repeat: 'yearly',
          day: monthday,
          month: d.getMonth() + 1
        }
        break
      case 'yearly-pos':
        recurringRule = {
          repeat: 'yearly',
          month: d.getMonth() + 1,
          weekDays: days[weekday].short,
          pos: weekNr
        }
        break
    }
  } else {
    switch (selectedRepeat.value) {
      case 'daily':
        recurringRule = { repeat: 'daily' }
        break
      case 'weekly':
        recurringRule = { repeat: 'weekly', weekDays: days[d.getDay()].short }
        break
      case 'monthly':
        recurringRule = { repeat: 'monthly', day: d.getDate() }
        break
      case 'monthly-pos':
        recurringRule = { repeat: 'monthly', weekDays: days[weekday].short, pos: weekNr }
        break
      case 'yearly':
        recurringRule = { repeat: 'yearly', month: d.getMonth() + 1 }
        break
      case 'yearly-pos':
        recurringRule = {
          repeat: 'yearly',
          month: d.getMonth() + 1,
          weekDays: days[weekday].short,
          pos: weekNr
        }
        break
      case 'weekday':
        recurringRule = { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' }
        break
      case 'custom':
      case 'custom-value':
        recurringRule = {
          repeat: repeatType.value,
          interval: repeatNr.value
        }
        switch (repeatType.value) {
          case 'weekly':
            recurringRule.weekDays = weekDays.value.join(',')
            break
          case 'monthly':
            recurringRule.day = monthlyDay.value
            break
          case 'yearly':
            recurringRule.day = yearlyDay.value
            recurringRule.month = selectedMonth.value
            break
        }

        switch (condition.value) {
          case 'until':
            recurringRule.until = untilDate.value
            break
          case 'count':
            recurringRule.count = occurrences.value
            break
        }
        break
    }
  }
  return recurringRule
}

function setTempEvent() {
  tempEvent.value.title = popupEventTitle.value
  tempEvent.value.description = popupEventDescription.value
  tempEvent.value.start = popupEventDates.value[0]
  tempEvent.value.end = popupEventDates.value[1]
  tempEvent.value.allDay = popupEventAllDay.value
  tempEvent.value.recurring = getCustomRule()
}

function saveEvent() {
  setTempEvent()

  if (isEdit.value) {
    // update the event in the list
    myEvents.value = [...myEvents.value]
    // here you can update the event in your storage as well
    // ...
  } else {
    // add the new event to the list
    myEvents.value = [...myEvents.value, tempEvent.value]
    // here you can add the event to your storage as well
    // ...
  }
  // navigate the calendar
  navigateTo()
  // close the popup
  isPopupOpen.value = false
}

function deleteEvent(event: MbscCalendarEvent) {
  myEvents.value = myEvents.value.filter((item) => item.id !== event.id)
}

// set custom values to default
function resetCustomValues() {
  repeatType.value = 'daily'
  repeatNr.value = 1
  condition.value = 'never'
  occurrences.value = 10
  selectedMonth.value = 1
  monthlyDay.value = 1
  yearlyDay.value = 1
  weekDays.value = ['SU']
  selectedRepeat.value = 'norepeat'
  showCustomRepeat.value = false
  repeatData.value = repeatData.value.filter((item) => item.value !== 'custom-value')
}

function updateCustomForm() {
  const d = new Date(tempEvent.value.start)
  const weekday = d.getDay()
  const monthday = d.getDate()
  const newData = [...repeatData.value]
  const weekNr = getWeekDayNum(d)

  // update select texts by selected date
  for (const item of newData) {
    switch (item.value) {
      case 'weekly':
        item.text = 'Weekly on ' + days[weekday].name
        break
      case 'monthly':
        item.text = 'Monthly on day ' + monthday
        break
      case 'yearly':
        item.text = 'Annually on ' + months[d.getMonth()].text + ' ' + monthday
        break
      case 'monthly-pos':
        item.text = 'Monthly on the ' + ordinalList[weekNr] + ' ' + days[weekday].name
        break
      case 'yearly-pos':
        item.text =
          'Annually on the ' +
          ordinalList[weekNr] +
          ' ' +
          days[weekday].name +
          ' of ' +
          months[d.getMonth()].text
        break
      default:
    }
  }

  repeatData.value = newData

  const rec = tempEvent.value.recurring

  if (rec) {
    repeatType.value = rec.repeat
    weekDays.value = rec.repeat === 'weekly' ? rec.weekDays.split(',') : ['SU']
    if (rec.interval) {
      // set custom text
      let customText = ''

      repeatNr.value = rec.interval

      switch (rec.repeat) {
        case 'daily':
          customText = repeatNr.value > 1 ? 'Every ' + repeatNr.value + ' days' : 'Daily'
          break
        case 'weekly':
          customText = repeatNr.value > 1 ? 'Every ' + repeatNr.value + ' weeks' : 'Weekly'
          customText += ' on ' + rec.weekDays
          break
        case 'monthly':
          monthlyDay.value = rec.day
          customText = repeatNr.value > 1 ? 'Every ' + repeatNr.value + ' months' : 'Monthly'
          customText += ' on day ' + monthlyDay.value
          break
        case 'yearly':
          yearlyDay.value = rec.day
          selectedMonth.value = rec.month
          customText = repeatNr.value > 1 ? 'Every ' + repeatNr.value + ' years' : 'Annualy'
          customText += ' on ' + months[selectedMonth.value - 1].text + ' ' + yearlyDay.value
          break
      }

      if (rec.until) {
        condition.value = 'until'
        untilDate.value = rec.until
        customText += ' until ' + formatDate('MMMM D, YYYY', new Date(untilDate.value))
      } else if (rec.count) {
        condition.value = 'count'
        occurrences.value = rec.count
        customText += ', ' + occurrences.value + ' times'
      } else {
        condition.value = 'never'
      }

      // add custom value
      repeatData.value = [...repeatData.value, { value: 'custom-value', text: customText }]
      // set custom value
      selectedRepeat.value = 'custom-value'
    } else if (rec.weekDays === 'MO,TU,WE,TH,FR') {
      selectedRepeat.value = 'weekday'
    } else {
      selectedRepeat.value = rec.repeat
    }
  } else {
    resetCustomValues()
  }
  showCustomRepeat.value =
    selectedRepeat.value === 'custom' || selectedRepeat.value === 'custom-value'
}

// populate data for months
function populateMonthDays(month: number, type: string) {
  const day30 = [2, 4, 6, 9, 11]
  const newValues = []

  for (let i = 1; i <= 31; i++) {
    if (!(i === 31 && day30.includes(month)) && !(i === 30 && month === 2)) {
      newValues.push(i)
    }
  }

  if (type === 'monthly') {
    monthlyDays.value = newValues
    monthlyDay.value = 1
  } else {
    yearlyDays.value = newValues
    yearlyDay.value = 1
  }
}

function monthChange(ev: any) {
  selectedMonth.value = ev.value
  yearlyDay.value = 1
  populateMonthDays(ev.value, 'yearly')
}

function navigateTo() {
  const rec = tempEvent.value.recurring
  const d = new Date(tempEvent.value.start)
  let nextYear = 0

  // navigate the calendar to the correct view
  if (rec && rec.repeat === 'yearly') {
    if (d.getMonth() + 1 > +rec.month && d.getDay() > +rec.day) {
      nextYear = 1
    }
    calendarSelectedDate.value = new Date(d.getFullYear() + nextYear, rec.month - 1, rec.day)
  } else {
    calendarSelectedDate.value = d
  }
}

function handleEventClick(args: MbscEventClickEvent) {
  const event = args.event
  isEdit.value = true
  tempEvent.value = event

  // recurring event
  if (event.recurring) {
    originalRecurringEvent.value = event.original
    eventOccurrence.value = { ...event }

    // fill popup form with event data
    loadPopupForm(event)
  } else {
    originalRecurringEvent.value = {}
    // fill popup form with event data
    loadPopupForm(event)
  }

  // set popup options
  popupHeaderText.value = 'Edit event'
  popupButtons.value = popupEditButtons
  popupAnchor.value = args.domEvent.currentTarget
  // open the popup
  isPopupOpen.value = true
}

function handleEventUpdate(args: MbscEventUpdateEvent) {
  const event = args.event
  if (event.recurring) {
    originalRecurringEvent.value = args.oldEvent
    // we need this on delete
    tempEvent.value = event
    eventOccurrence.value = args.oldEventOccurrence
    if (args.domEvent.keyCode === 46) {
      recurringActionText.value = 'Delete'
      recurringDelete.value = true
      isRecurringEditOpen.value = true
    } else {
      recurringActionText.value = 'Edit'
      recurringDelete.value = false
      isRecurringEditOpen.value = true
    }
    return false
  } else {
    return true
  }
}

function handleEventCreate(args: MbscEventCreateEvent) {
  const originEvent = args.originEvent
  if (originEvent && originEvent.recurring) {
    newEvent.value = args.event
    return false
  } else {
    return true
  }
}

function handleEventCreated(args: MbscEventCreatedEvent) {
  isEdit.value = false
  tempEvent.value = args.event
  // fill popup form with event data
  loadPopupForm(args.event)
  // set popup options
  popupHeaderText.value = 'New Event'
  popupButtons.value = popupAddButtons
  popupAnchor.value = args.target
  resetCustomValues()
  // open the popup
  isPopupOpen.value = true
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  deleteEvent(args.event)
}

function handleEventUpdated() {
  // here you can update the event in your storage as well, after drag & drop or resize
  // ...
}

function handleDelete() {
  if (tempEvent.value.recurring) {
    recurringActionText.value = 'Delete'
    recurringDelete.value = true
    isRecurringEditOpen.value = true
  } else {
    deleteEvent(tempEvent.value)
    isPopupOpen.value = false
  }
}

function handleSelectedDateChange(args: MbscSelectedDateChangeEvent) {
  calendarSelectedDate.value = args.date
}

onMounted(() => {
  populateMonthDays(1, 'monthly')
  populateMonthDays(1, 'yearly')
})
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    clickToCreate="double"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :selectedDate="calendarSelectedDate"
    @selected-date-change="handleSelectedDateChange"
    @event-click="handleEventClick"
    @event-update="handleEventUpdate"
    @event-create="handleEventCreate"
    @event-created="handleEventCreated"
    @event-deleted="handleEventDeleted"
    @event-updated="handleEventUpdated"
  />
  <MbscPopup
    cssClass="md-recurring-event-editor-popup"
    display="bottom"
    :contentPadding="false"
    :fullScreen="true"
    :scrollLock="false"
    :height="500"
    :headerText="popupHeaderText"
    :anchor="popupAnchor"
    :buttons="popupButtons"
    :isOpen="isPopupOpen"
    :responsive="responsivePopup"
    @close="isPopupOpen = false"
  >
    <div class="mbsc-form-group">
      <MbscInput label="Title" v-model="popupEventTitle" />
      <MbscTextarea label="Description" v-model="popupEventDescription" />
    </div>
    <div class="mbsc-form-group">
      <MbscSwitch label="All-day" v-model="popupEventAllDay" />
      <MbscInput ref="startRef" label="Starts" />
      <MbscInput ref="endRef" label="Ends" />
      <MbscDatepicker
        v-model="popupEventDates"
        select="range"
        :touchUi="true"
        :startInput="startRef"
        :endInput="endRef"
        :showRangeLabels="false"
        :controls="popupEventAllDay ? datePickerControls : datetimePickerControls"
        :responsive="popupEventAllDay ? datePickerResponsive : datetimePickerResponsive"
      />
      <MbscSelect
        v-model="selectedRepeat"
        label="Repeats"
        :data="repeatData"
        :responsive="selectResponsive"
      />
    </div>
    <div class="mbsc-form-group">
      <div v-if="selectedRepeat === 'custom' || selectedRepeat === 'custom-value'">
        <div>
          <MbscSegmentedGroup v-model="repeatType">
            <MbscSegmented value="daily">Daily</MbscSegmented>
            <MbscSegmented value="weekly">Weekly</MbscSegmented>
            <MbscSegmented value="monthly">Monthly</MbscSegmented>
            <MbscSegmented value="yearly">Yearly</MbscSegmented>
          </MbscSegmentedGroup>

          <div class="md-recurrence-options">
            <span>Repeat every</span>
            <span class="md-recurrence-input md-recurrence-input-nr">
              <MbscInput :min="1" v-model="repeatNr" inputStyle="outline" />
            </span>
            <span v-if="repeatType === 'daily'">days</span>
            <span v-if="repeatType === 'weekly'">weeks</span>
            <span v-if="repeatType === 'monthly'">
              month(s) on day
              <span class="md-recurrence-input md-recurrence-input-nr">
                <MbscSelect
                  :data="monthlyDays"
                  v-model="monthlyDay"
                  className="md-recurrence-input"
                  inputStyle="outline"
                />
              </span>
            </span>
            <span v-if="repeatType === 'yearly'">
              year(s) <br />on day
              <span class="md-recurrence-input md-recurrence-input-nr">
                <MbscSelect
                  :data="yearlyDays"
                  v-model="yearlyDay"
                  className="md-recurrence-input"
                  inputStyle="outline"
                />
              </span>
              <span>of</span>
              <span class="md-recurrence-input">
                <MbscSelect
                  :data="months"
                  v-model="selectedMonth"
                  className="md-recurrence-input"
                  inputStyle="outline"
                  @change="monthChange"
                />
              </span>
            </span>

            <p v-if="repeatType === 'daily'" class="md-recurrence-desc">
              The event will be repeated every day or every x days, depending on the value
            </p>
            <p v-if="repeatType === 'weekly'" class="md-recurrence-desc">
              The event will be repeated every x weeks on specific weekdays
            </p>
            <p v-if="repeatType === 'monthly'" class="md-recurrence-desc">
              The event will be repeated every x month on specific day of the month
            </p>
            <p v-if="repeatType === 'yearly'" class="md-recurrence-desc">
              The event will be repeated every x years on specific day of a specific month
            </p>
          </div>

          <MbscSegmentedGroup v-model="weekDays" v-if="repeatType === 'weekly'" select="multiple">
            <MbscSegmented value="SU">Sun</MbscSegmented>
            <MbscSegmented value="MO">Mon</MbscSegmented>
            <MbscSegmented value="TU">Tue</MbscSegmented>
            <MbscSegmented value="WE">Wed</MbscSegmented>
            <MbscSegmented value="TH">Thu</MbscSegmented>
            <MbscSegmented value="FR">Fri</MbscSegmented>
            <MbscSegmented value="SA">Sat</MbscSegmented>
          </MbscSegmentedGroup>

          <div class="md-recurrence-ends">Ends</div>

          <div class="mbsc-form-group">
            <MbscRadioGroup v-model="condition">
              <MbscRadio
                label="Never"
                position="start"
                description="The event will repeat indefinitely"
                value="never"
              />
              <MbscRadio value="until" position="start" @click="condition = 'until'">
                Until
                <span class="md-recurrence-input">
                  <MbscDatepicker
                    :controls="['calendar']"
                    display="anchored"
                    :touchUi="false"
                    dateFormat="YYYY-MM-DD"
                    returnFormat="iso8601"
                    v-model="untilDate"
                    inputStyle="outline"
                  />
                </span>
                <span class="mbsc-description">
                  The event will run until it reaches a specific date
                </span>
              </MbscRadio>
              <MbscRadio value="count" position="start">
                After
                <span class="md-recurrence-input md-recurrence-input-nr">
                  <MbscInput
                    inputStyle="outline"
                    v-model="occurrences"
                    @click="condition = 'count'"
                  />
                  occurrences
                  <span class="mbsc-description">
                    The event will repeat until it reaches a certain amount of occurrences
                  </span>
                </span>
              </MbscRadio>
            </MbscRadioGroup>
          </div>
        </div>
      </div>
      <div v-if="isEdit" class="mbsc-button-group">
        <MbscButton
          className="mbsc-button-block"
          color="danger"
          variant="outline"
          @click="handleDelete"
        >
          Delete event
        </MbscButton>
      </div>
    </div>
  </MbscPopup>
  <MbscPopup
    display="bottom"
    :contentPadding="false"
    :buttons="recurringEditButtons"
    :isOpen="isRecurringEditOpen"
    @close="isRecurringEditOpen = false"
  >
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">{{ recurringActionText }} recurring event</div>
      <MbscRadioGroup v-model="recurringEditMode">
        <MbscRadio label="This event only" value="current" />
        <MbscRadio label="This and following events" value="following" />
        <MbscRadio label="All events" value="all" />
      </MbscRadioGroup>
    </div>
  </MbscPopup>
</template>

<style>
.md-recurring-event-editor-popup .md-recurrence-input .mbsc-textfield-wrapper {
  display: inline-block;
  margin: 3px;
  z-index: 3;
  line-height: normal;
}

.md-recurring-event-editor-popup .md-recurrence-input .mbsc-textfield {
  width: 140px;
  height: 32px;
}

.md-recurring-event-editor-popup .md-recurrence-input-nr .mbsc-textfield {
  width: 90px;
}

.md-recurring-event-editor-popup .md-recurrence-input .mbsc-select-icon {
  top: 50%;
  height: 1.5em;
  margin-top: -0.75em;
}

.md-recurrence-options {
  padding: 0 1em;
  margin: 1em 0;
}

.md-recurrence-ends {
  padding: 0 1em;
  margin: 1.25em 0 -1.25em 0;
}

.md-recurrence-desc {
  font-size: 12px;
  font-weight: normal;
  color: #555;
  margin: 1em 0;
}

.md-hide-elm {
  display: none;
}
</style>
