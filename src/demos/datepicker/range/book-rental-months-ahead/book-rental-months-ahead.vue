<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscDatepicker,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const monthColors = [
  {
    background: '#b2f1c080',
    start: 'dyndatetime(y,1,1)',
    end: 'dyndatetime(y,1,31)',
    cellCssClass: 'md-book-rental-bg-off',
    recurring: {
      repeat: 'yearly',
      month: 1,
      day: 1
    }
  },
  {
    background: '#b2f1c080',
    start: 'dyndatetime(y,2,1)',
    end: 'dyndatetime(y,2,28)',
    cellCssClass: 'md-book-rental-bg-off',
    recurring: {
      repeat: 'yearly',
      month: 2,
      day: 1
    }
  },
  {
    background: '#b2f1c080',
    cellCssClass: 'md-book-rental-bg-off',
    recurring: {
      repeat: 'yearly',
      month: 2,
      day: 29
    }
  },
  {
    background: '#a3cdff80',
    start: 'dyndatetime(y,3,1)',
    end: 'dyndatetime(y,3,31,23,59)',
    cellCssClass: 'md-book-rental-bg-pre',
    recurring: {
      repeat: 'yearly',
      month: 3,
      day: 1
    }
  },
  {
    background: '#a3cdff80',
    start: 'dyndatetime(y,4,1)',
    end: 'dyndatetime(y,4,30)',
    cellCssClass: 'md-book-rental-bg-pre',
    recurring: {
      repeat: 'yearly',
      month: 4,
      day: 1
    }
  },
  {
    background: '#a3cdff80',
    start: 'dyndatetime(y,5,1)',
    end: 'dyndatetime(y,5,31)',
    cellCssClass: 'md-book-rental-bg-pre',
    recurring: {
      repeat: 'yearly',
      month: 5,
      day: 1
    }
  },
  {
    background: '#f7f7bb80',
    start: 'dyndatetime(y,6,1)',
    end: 'dyndatetime(y,6,30)',
    cellCssClass: 'md-book-rental-bg-in',
    recurring: {
      repeat: 'yearly',
      month: 6,
      day: 1
    }
  },
  {
    background: '#f7f7bb80',
    start: 'dyndatetime(y,7,1)',
    end: 'dyndatetime(y,7,31)',
    cellCssClass: 'md-book-rental-bg-in',
    recurring: {
      repeat: 'yearly',
      month: 7,
      day: 1
    }
  },
  {
    background: '#f7f7bb80',
    start: 'dyndatetime(y,8,1)',
    end: 'dyndatetime(y,8,31)',
    cellCssClass: 'md-book-rental-bg-in',
    recurring: {
      repeat: 'yearly',
      month: 8,
      day: 1
    }
  },
  {
    background: '#f7f7bb80',
    start: 'dyndatetime(y,9,1)',
    end: 'dyndatetime(y,9,30)',
    cellCssClass: 'md-book-rental-bg-in',
    recurring: {
      repeat: 'yearly',
      month: 9,
      day: 1
    }
  },
  {
    background: '#f7f7bb80',
    start: 'dyndatetime(y,10,1)',
    end: 'dyndatetime(y,10,31,23,59)',
    cellCssClass: 'md-book-rental-bg-in',
    recurring: {
      repeat: 'yearly',
      month: 10,
      day: 1
    }
  },
  {
    background: '#b2f1c080',
    start: 'dyndatetime(y,11,1)',
    end: 'dyndatetime(y,11,30)',
    cellCssClass: 'md-book-rental-bg-off',
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 1
    }
  },
  {
    background: '#b2f1c080',
    start: 'dyndatetime(y,12,1)',
    end: 'dyndatetime(y,12,31)',
    cellCssClass: 'md-book-rental-bg-off',
    recurring: {
      repeat: 'yearly',
      month: 12,
      day: 1
    }
  }
]

const myMin = 'dyndatetime(y,m,d)'
const myLabels = ref()
const myInvalid = ref()
const myColors = ref()

function getColors(start: Date, end: Date) {
  return [
    {
      date: start,
      cellCssClass: 'vacation-check-in'
    },
    {
      date: end,
      cellCssClass: 'vacation-check-out'
    },
    {
      start: new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1),
      end: new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1),
      background: '#ffbaba80',
      cellCssClass: 'vacation-booked'
    }
  ]
}

onMounted(() => {
  const y = now.getFullYear()
  const m = now.getMonth()
  getJson(
    'https://trial.mobiscroll.com/getrentals/?year=' + y + '&month=' + m,
    (data) => {
      const prices = data.prices
      const bookings = data.bookings
      const labels = []
      const invalids = []
      let colors: any[] = []
      let endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0)

      for (const price of prices) {
        const booked = bookings.find(
          (b: any) => formatDate('YYYY-M-D', new Date(b.checkIn)) === price.date
        )
        if (booked) {
          const checkIn = new Date(booked.checkIn)
          const checkOut = new Date(booked.checkOut)
          const newCheckOut = new Date(
            checkOut.getFullYear(),
            checkOut.getMonth(),
            checkOut.getDate() - 1
          )
          colors = [...colors, ...getColors(checkIn, checkOut)]
          labels.push({
            start: checkIn,
            end: newCheckOut,
            text: 'booked',
            textColor: '#1e1e1ecc'
          })
          invalids.push({
            start: checkIn,
            end: newCheckOut
          })
          endDate = checkOut
        } else if (new Date(price.date) >= endDate) {
          labels.push({
            date: new Date(price.date),
            text: price.text,
            textColor: price.textColor
          })
        }
      }
      myLabels.value = labels
      myInvalid.value = invalids
      myColors.value = [...colors, ...monthColors]
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscDatepicker
    className="md-book-rental"
    select="range"
    display="inline"
    calendarType="month"
    :calendarSize="6"
    :controls="['calendar']"
    :min="myMin"
    :labels="myLabels"
    :invalid="myInvalid"
    :colors="myColors"
    :showRangeLabels="false"
    :inRangeInvalid="false"
    :rangeEndInvalid="true"
  >
    <template #header>
      <MbscCalendarNav />
      <div class="md-book-rental-header">
        <div class="md-book-rental-zone md-book-rental-pre">pre-season</div>
        <div class="md-book-rental-zone md-book-rental-in">in-season</div>
        <div class="md-book-rental-zone md-book-rental-off">off-season</div>
        <div class="md-book-rental-zone md-book-rental-booked">booked</div>
      </div>
      <MbscCalendarPrev />
      <MbscCalendarNext />
    </template>
  </MbscDatepicker>
</template>

<style>
.mbsc-datepicker .md-book-rental-bg-off.vacation-check-in.mbsc-ltr {
  background: linear-gradient(to left top, #ffbaba80 50%, #b2f1c080 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-pre.vacation-check-in.mbsc-ltr {
  background: linear-gradient(to left top, #ffbaba80 50%, #a3cdff80 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-in.vacation-check-in.mbsc-ltr {
  background: linear-gradient(to left top, #ffbaba80 50%, #f7f7bb80 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-off.vacation-check-out.mbsc-ltr {
  background: linear-gradient(to left top, #b2f1c080 50%, #ffbaba80 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-pre.vacation-check-out.mbsc-ltr {
  background: linear-gradient(to left top, #a3cdff80 50%, #ffbaba80 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-in.vacation-check-out.mbsc-ltr {
  background: linear-gradient(to left top, #f7f7bb80 50%, #ffbaba80 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-off.vacation-check-in.mbsc-rtl {
  background: linear-gradient(to right bottom, #ffbaba80 50%, #b2f1c080 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-pre.vacation-check-in.mbsc-rtl {
  background: linear-gradient(to right bottom, #ffbaba80 50%, #a3cdff80 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-in.vacation-check-in.mbsc-rtl {
  background: linear-gradient(to right bottom, #ffbaba80 50%, #f7f7bb80 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-off.vacation-check-out.mbsc-rtl {
  background: linear-gradient(to right bottom, #b2f1c080 50%, #ffbaba80 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-pre.vacation-check-out.mbsc-rtl {
  background: linear-gradient(to right bottom, #a3cdff80 50%, #ffbaba80 50%) no-repeat;
}

.mbsc-datepicker .md-book-rental-bg-in.vacation-check-out.mbsc-rtl {
  background: linear-gradient(to right bottom, #f7f7bb80 50%, #ffbaba80 50%) no-repeat;
}

.mbsc-datepicker .vacation-check-out,
.mbsc-datepicker .vacation-check-in {
  color: initial;
}

.mbsc-datepicker .vacation-check-in.mbsc-calendar-cell.mbsc-calendar-day-empty,
.mbsc-datepicker .vacation-check-out.mbsc-calendar-cell.mbsc-calendar-day-empty {
  background: transparent;
}

.md-book-rental-header {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-left: auto;
  flex: 1 1;
  overflow: hidden;
}

.md-book-rental-zone {
  font-size: 12px;
  padding: 3px 6px;
  margin: 0 5px;
  border-radius: 16px;
  color: #1e1e1ecc;
}

.md-book-rental .mbsc-calendar-label-text {
  text-align: center;
  font-weight: bold;
}

.md-book-rental-in {
  background: #f7f7bb80;
}

.md-book-rental-pre {
  background: #a3cdff80;
}

.md-book-rental-off {
  background: #b2f1c080;
}

.md-book-rental-booked {
  background: #ffbaba80;
}
</style>
