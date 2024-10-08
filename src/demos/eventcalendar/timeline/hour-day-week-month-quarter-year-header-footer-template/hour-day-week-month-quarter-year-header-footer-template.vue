<script setup lang="ts">
import { formatDate, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myHourView: MbscEventcalendarView = {
  timeline: {
    type: 'day'
  }
}

const hourlyEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Event 1',
    resource: 1
  },
  {
    id: 2,
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Event 2',
    resource: 1
  },
  {
    id: 3,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Event 3',
    resource: 2
  },
  {
    id: 4,
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Event 4',
    resource: 3
  },
  {
    id: 5,
    start: 'dyndatetime(y,m,d,3)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Event 5',
    resource: 4
  },
  {
    id: 6,
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Event 6',
    resource: 4
  },
  {
    id: 7,
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Event 7',
    resource: 5
  },
  {
    id: 8,
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Event 8',
    resource: 5
  },
  {
    id: 9,
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,17)',
    title: 'Event 9',
    resource: 6
  },
  {
    id: 10,
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Event 10',
    resource: 7
  },
  {
    id: 11,
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Event 11',
    resource: 7
  },
  {
    id: 12,
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Event 12',
    resource: 8
  }
])

const myDayView: MbscEventcalendarView = {
  timeline: {
    type: 'month'
  }
}

const dailyEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    start: 'dyndatetime(y,m,2)',
    end: 'dyndatetime(y,m,10)',
    title: 'Event 1',
    resource: 1
  },
  {
    id: 2,
    start: 'dyndatetime(y,m,16)',
    end: 'dyndatetime(y,m,24)',
    title: 'Event 2',
    resource: 1
  },
  {
    id: 3,
    start: 'dyndatetime(y,m,8)',
    end: 'dyndatetime(y,m,15)',
    title: 'Event 3',
    resource: 2
  },
  {
    id: 4,
    start: 'dyndatetime(y,m,4)',
    end: 'dyndatetime(y,m,11)',
    title: 'Event 4',
    resource: 3
  },
  {
    id: 5,
    start: 'dyndatetime(y,m,7)',
    end: 'dyndatetime(y,m,15)',
    title: 'Event 5',
    resource: 4
  },
  {
    id: 6,
    start: 'dyndatetime(y,m,21)',
    end: 'dyndatetime(y,m,27)',
    title: 'Event 6',
    resource: 4
  },
  {
    id: 7,
    start: 'dyndatetime(y,m,10)',
    end: 'dyndatetime(y,m,19)',
    title: 'Event 7',
    resource: 5
  },
  {
    id: 8,
    start: 'dyndatetime(y,m,24)',
    end: 'dyndatetime(y,m,30)',
    title: 'Event 8',
    resource: 5
  },
  {
    id: 9,
    start: 'dyndatetime(y,m,8)',
    end: 'dyndatetime(y,m,17)',
    title: 'Event 9',
    resource: 6
  },
  {
    id: 10,
    start: 'dyndatetime(y,m,5)',
    end: 'dyndatetime(y,m,13)',
    title: 'Event 10',
    resource: 7
  },
  {
    id: 11,
    start: 'dyndatetime(y,m,17)',
    end: 'dyndatetime(y,m,26)',
    title: 'Event 11',
    resource: 7
  },
  {
    id: 12,
    start: 'dyndatetime(y,m,9)',
    end: 'dyndatetime(y,m,20)',
    title: 'Event 12',
    resource: 8
  }
])

const myWeekView: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    resolutionHorizontal: 'week',
    size: 6
  }
}

const weeklyEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    start: 'dyndatetime(y,m,10)',
    end: 'dyndatetime(y,m,24)',
    title: 'Event 1',
    resource: 1
  },
  {
    id: 2,
    start: 'dyndatetime(y,m+1,2)',
    end: 'dyndatetime(y,m+1,18)',
    title: 'Event 2',
    resource: 1
  },
  {
    id: 3,
    start: 'dyndatetime(y,m,27)',
    end: 'dyndatetime(y,m+1,13)',
    title: 'Event 3',
    resource: 2
  },
  {
    id: 4,
    start: 'dyndatetime(y,m+1,4)',
    end: 'dyndatetime(y,m+1,27)',
    title: 'Event 4',
    resource: 3
  },
  {
    id: 5,
    start: 'dyndatetime(y,m,24)',
    end: 'dyndatetime(y,m+1,2)',
    title: 'Event 5',
    resource: 4
  },
  {
    id: 6,
    start: 'dyndatetime(y,m+1,10)',
    end: 'dyndatetime(y,m+1,24)',
    title: 'Event 6',
    resource: 4
  },
  {
    id: 7,
    start: 'dyndatetime(y,m,20)',
    end: 'dyndatetime(y,m+1,3)',
    title: 'Event 7',
    resource: 5
  },
  {
    id: 8,
    start: 'dyndatetime(y,m+1,8)',
    end: 'dyndatetime(y,m+1,19)',
    title: 'Event 8',
    resource: 5
  },
  {
    id: 9,
    start: 'dyndatetime(y,m,28)',
    end: 'dyndatetime(y,m+1,15)',
    title: 'Event 9',
    resource: 6
  },
  {
    id: 10,
    start: 'dyndatetime(y,m,9)',
    end: 'dyndatetime(y,m,23)',
    title: 'Event 10',
    resource: 7
  },
  {
    id: 11,
    start: 'dyndatetime(y,m+1,5)',
    end: 'dyndatetime(y,m+1,22)',
    title: 'Event 11',
    resource: 7
  },
  {
    id: 12,
    start: 'dyndatetime(y,m,24)',
    end: 'dyndatetime(y,m+1,13)',
    title: 'Event 12',
    resource: 8
  }
])

const myMonthView: MbscEventcalendarView = {
  timeline: {
    type: 'month',
    resolutionHorizontal: 'month',
    size: 6
  }
}

const monthlyEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    start: 'dyndatetime(y,m-1,10)',
    end: 'dyndatetime(y,m+1,7)',
    title: 'Event 1',
    resource: 1
  },
  {
    id: 2,
    start: 'dyndatetime(y,m+3,1)',
    end: 'dyndatetime(y,m+4,8)',
    title: 'Event 2',
    resource: 1
  },
  {
    id: 3,
    start: 'dyndatetime(y,m+1,27)',
    end: 'dyndatetime(y,m+2,23)',
    title: 'Event 3',
    resource: 2
  },
  {
    id: 4,
    start: 'dyndatetime(y,m,25)',
    end: 'dyndatetime(y,m+1,19)',
    title: 'Event 4',
    resource: 3
  },
  {
    id: 5,
    start: 'dyndatetime(y,m+1,10)',
    end: 'dyndatetime(y,m+2,18)',
    title: 'Event 5',
    resource: 4
  },
  {
    id: 6,
    start: 'dyndatetime(y,m+4,24)',
    end: 'dyndatetime(y,m+5,27)',
    title: 'Event 6',
    resource: 4
  },
  {
    id: 7,
    start: 'dyndatetime(y,m+2,2)',
    end: 'dyndatetime(y,m+3,13)',
    title: 'Event 7',
    resource: 5
  },
  {
    id: 8,
    start: 'dyndatetime(y,m+4,8)',
    end: 'dyndatetime(y,m+5,6)',
    title: 'Event 8',
    resource: 5
  },
  {
    id: 9,
    start: 'dyndatetime(y,m+2,20)',
    end: 'dyndatetime(y,m+3,17)',
    title: 'Event 9',
    resource: 6
  },
  {
    id: 10,
    start: 'dyndatetime(y,m,1)',
    end: 'dyndatetime(y,m+1,14)',
    title: 'Event 10',
    resource: 7
  },
  {
    id: 11,
    start: 'dyndatetime(y,m+4,14)',
    end: 'dyndatetime(y,m+5,20)',
    title: 'Event 11',
    resource: 7
  },
  {
    id: 12,
    start: 'dyndatetime(y,m+1,24)',
    end: 'dyndatetime(y,m+2,20)',
    title: 'Event 12',
    resource: 8
  }
])

const myQuarterView: MbscEventcalendarView = {
  timeline: {
    type: 'year',
    resolutionHorizontal: 'quarter',
    size: 6
  }
}

const quarterEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    start: 'dyndatetime(y,m-1,10)',
    end: 'dyndatetime(y,m+1,7)',
    title: 'Event 1',
    resource: 1
  },
  {
    id: 2,
    start: 'dyndatetime(y,m+3,1)',
    end: 'dyndatetime(y,m+4,8)',
    title: 'Event 2',
    resource: 1
  },
  {
    id: 3,
    start: 'dyndatetime(y,m+1,27)',
    end: 'dyndatetime(y,m+2,23)',
    title: 'Event 3',
    resource: 2
  },
  {
    id: 4,
    start: 'dyndatetime(y,m,25)',
    end: 'dyndatetime(y,m+1,19)',
    title: 'Event 4',
    resource: 3
  },
  {
    id: 5,
    start: 'dyndatetime(y,m+1,10)',
    end: 'dyndatetime(y,m+2,18)',
    title: 'Event 5',
    resource: 4
  },
  {
    id: 6,
    start: 'dyndatetime(y,m+4,24)',
    end: 'dyndatetime(y,m+5,27)',
    title: 'Event 6',
    resource: 4
  },
  {
    id: 7,
    start: 'dyndatetime(y,m+2,2)',
    end: 'dyndatetime(y,m+3,13)',
    title: 'Event 7',
    resource: 5
  },
  {
    id: 8,
    start: 'dyndatetime(y,m+4,8)',
    end: 'dyndatetime(y,m+5,6)',
    title: 'Event 8',
    resource: 5
  },
  {
    id: 9,
    start: 'dyndatetime(y,m+2,20)',
    end: 'dyndatetime(y,m+3,17)',
    title: 'Event 9',
    resource: 6
  },
  {
    id: 10,
    start: 'dyndatetime(y,m,1)',
    end: 'dyndatetime(y,m+1,14)',
    title: 'Event 10',
    resource: 7
  },
  {
    id: 11,
    start: 'dyndatetime(y,m+4,14)',
    end: 'dyndatetime(y,m+5,20)',
    title: 'Event 11',
    resource: 7
  },
  {
    id: 12,
    start: 'dyndatetime(y,m+1,24)',
    end: 'dyndatetime(y,m+2,20)',
    title: 'Event 12',
    resource: 8
  }
])

const myYearView: MbscEventcalendarView = {
  timeline: {
    type: 'year',
    resolutionHorizontal: 'year',
    size: 6
  }
}

const yearlyEvents = ref<MbscCalendarEvent[]>([
  {
    id: 1,
    start: 'dyndatetime(y+1,4,10)',
    end: 'dyndatetime(y+2,8,7)',
    title: 'Event 1',
    resource: 1
  },
  {
    id: 2,
    start: 'dyndatetime(y+3,6,1)',
    end: 'dyndatetime(y+4,9,8)',
    title: 'Event 2',
    resource: 1
  },
  {
    id: 3,
    start: 'dyndatetime(y+2,3,27)',
    end: 'dyndatetime(y+3,10,23)',
    title: 'Event 3',
    resource: 2
  },
  {
    id: 4,
    start: 'dyndatetime(y+2,8,25)',
    end: 'dyndatetime(y+3,11,19)',
    title: 'Event 4',
    resource: 3
  },
  {
    id: 5,
    start: 'dyndatetime(y+1,9,10)',
    end: 'dyndatetime(y+3,4,18)',
    title: 'Event 5',
    resource: 4
  },
  {
    id: 6,
    start: 'dyndatetime(y+4,1,24)',
    end: 'dyndatetime(y+5,5,27)',
    title: 'Event 6',
    resource: 4
  },
  {
    id: 7,
    start: 'dyndatetime(y-1,4,2)',
    end: 'dyndatetime(y,8,13)',
    title: 'Event 7',
    resource: 5
  },
  {
    id: 8,
    start: 'dyndatetime(y+2,4,8)',
    end: 'dyndatetime(y+3,11,6)',
    title: 'Event 8',
    resource: 5
  },
  {
    id: 9,
    start: 'dyndatetime(y+2,1,20)',
    end: 'dyndatetime(y+3,8,17)',
    title: 'Event 9',
    resource: 6
  },
  {
    id: 10,
    start: 'dyndatetime(y,10,1)',
    end: 'dyndatetime(y+1,11,14)',
    title: 'Event 10',
    resource: 7
  },
  {
    id: 11,
    start: 'dyndatetime(y+3,10,14)',
    end: 'dyndatetime(y+4,11,20)',
    title: 'Event 11',
    resource: 7
  },
  {
    id: 12,
    start: 'dyndatetime(y+3,2,24)',
    end: 'dyndatetime(y+5,4,20)',
    title: 'Event 12',
    resource: 8
  }
])

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Resource A',
    color: '#e20000'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#d6d145'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#4981d6'
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#e25dd2'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#1dab2f'
  },
  {
    id: 6,
    name: 'Resource F',
    color: '#430404'
  },
  {
    id: 7,
    name: 'Resource G',
    color: '#f7961e'
  },
  {
    id: 8,
    name: 'Resource H',
    color: '#34c8e0'
  }
]

function getOccuppancy(events: any) {
  let occuppancy = 0
  if (events) {
    let resourceIds: number[] = []
    let nr = 0
    for (const event of events) {
      if (resourceIds.indexOf(event.resource) < 0) {
        nr++
        resourceIds = [...resourceIds, event.resource]
      }
    }
    occuppancy = (nr * 100) / myResources.length
  }
  return occuppancy.toFixed(0)
}

function getEventOccurrence(args: any) {
  let eventOccurrence = 'none'

  if (args.events) {
    const eventNr = args.events.length
    if (eventNr === 0) {
      eventOccurrence = 'none'
    } else if (eventNr === 1) {
      eventOccurrence = 'one'
    } else if (eventNr < 4) {
      eventOccurrence = 'few'
    } else {
      eventOccurrence = 'more'
    }
  }
  return eventOccurrence
}
</script>

<template>
  <div class="md-date-header-template">
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Hourly header template</div>
      <MbscEventcalendar :view="myHourView" :data="hourlyEvents" :resources="myResources">
        <template #hour="day">
          <div
            :class="
              'md-date-header md-date-header-hour md-date-header-events-' + getEventOccurrence(day)
            "
          >
            {{ formatDate('h:mm A', day.date) }}
          </div>
        </template>
        <template #hourFooter="day">
          <div class="md-date-footer">{{ getOccuppancy(day.events) }}</div>
        </template>
      </MbscEventcalendar>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Daily header template</div>
      <MbscEventcalendar :view="myDayView" :data="dailyEvents" :resources="myResources">
        <template #day="day">
          <div
            :class="
              'md-date-header md-date-header-day md-date-header-events-' + getEventOccurrence(day)
            "
          >
            <div class="md-date-header-day-name">{{ formatDate('DDD', day.date) }}</div>
            <div class="md-date-header-day-nr">{{ formatDate('DD', day.date) }}</div>
          </div>
        </template>
        <template #dayFooter="day">
          <div class="md-date-footer">{{ getOccuppancy(day.events) }}</div>
        </template>
      </MbscEventcalendar>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Weekly header template</div>
      <MbscEventcalendar :view="myWeekView" :data="weeklyEvents" :resources="myResources">
        <template #week="day">
          <div
            :class="
              'md-date-header md-date-header-week md-date-header-events-' + getEventOccurrence(day)
            "
          >
            {{ formatDate('MMM DD', day.startDate) + ' - ' + formatDate('MMM DD', day.endDate) }}
          </div>
        </template>
        <template #weekFooter="day">
          <div class="md-date-footer">{{ getOccuppancy(day.events) }}</div>
        </template>
      </MbscEventcalendar>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Monthly header template</div>
      <MbscEventcalendar :view="myMonthView" :data="monthlyEvents" :resources="myResources">
        <template #month="day">
          <div
            :class="
              'md-date-header md-date-header-month md-date-header-events-' + getEventOccurrence(day)
            "
          >
            {{ formatDate('MMM', day.date) }}
          </div>
        </template>
        <template #monthFooter="day">
          <div class="md-date-footer">{{ getOccuppancy(day.events) }}</div>
        </template>
      </MbscEventcalendar>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Quarter header template</div>
      <MbscEventcalendar :view="myQuarterView" :data="quarterEvents" :resources="myResources">
        <template #quarter="day">
          <div
            :class="
              'md-date-header md-date-header-quarter md-date-header-events-' +
              getEventOccurrence(day)
            "
          >
            Quarter {{ day.date.getMonth() / 3 + 1 }}
          </div>
        </template>
        <template #quarterFooter="day">
          <div class="md-date-footer">{{ getOccuppancy(day.events) }}</div>
        </template>
      </MbscEventcalendar>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Yearly header template</div>
      <MbscEventcalendar :view="myYearView" :data="yearlyEvents" :resources="myResources">
        <template #year="day">
          <div
            :class="
              'md-date-header md-date-header-year md-date-header-events-' + getEventOccurrence(day)
            "
          >
            {{ formatDate('YYYY', day.date) }}
          </div>
        </template>
        <template #yearFooter="day">
          <div class="md-date-footer">{{ getOccuppancy(day.events) }}</div>
        </template>
      </MbscEventcalendar>
    </div>
  </div>
</template>

<style>
.md-date-header-template .mbsc-timeline-header-week-text {
  display: block;
}

.md-date-header {
  text-align: center;
  border-radius: 8px;
  line-height: 20px;
}

.md-date-header-day {
  padding: 3px;
  margin: 4px;
}

.md-date-header-hour {
  font-size: 12px;
  padding: 0;
  margin: 3px;
  color: #000;
  font-weight: 600;
}

.md-date-header-week,
.md-date-header-month,
.md-date-header-quarter,
.md-date-header-year {
  padding: 0 8px;
  margin: 3px;
  color: initial;
  font-weight: 600;
}

.md-date-header-template .mbsc-timeline-footer-week {
  text-align: center;
}

.md-date-header-day-name {
  font-size: 13px;
  font-weight: 600;
}

.md-date-header-day-nr {
  font-size: 14px;
}

.md-date-header-events-one {
  background: #e9f5e4;
}

.md-date-header-events-few {
  background: #d0e3c6;
}

.md-date-header-events-more {
  background: #8ca77e;
}

.md-date-footer {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  line-height: 26px;
}
</style>
