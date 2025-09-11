<script setup lang="ts">
import {
  formatDate,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscCheckbox,
  MbscEventcalendar,
  MbscSelect,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventDeletedEvent,
  MbscEventUpdateEvent,
  MbscResource
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Barista',
    icon: '\u2615\uFE0F',
    eventCreation: false,
    children: [
      {
        id: 11,
        name: 'Jude Chester',
        color: '#1dab2f'
      },
      {
        id: 12,
        name: 'Willis Kane',
        color: '#1dab2f'
      },
      {
        id: 13,
        name: 'Ryan Melicent',
        color: '#1dab2f'
      }
    ]
  },
  {
    id: 2,
    name: 'Bartenders',
    icon: '\uD83C\uDF78',
    eventCreation: false,
    children: [
      {
        id: 21,
        name: 'Derek Austyn',
        color: '#4981d6'
      },
      {
        id: 22,
        name: 'Merv Kenny',
        color: '#4981d6'
      },
      {
        id: 23,
        name: 'Theo Calanthia',
        color: '#4981d6'
      }
    ]
  },
  {
    id: 3,
    name: 'Chefs',
    icon: '\uD83D\uDC69\u200D\uD83C\uDF73',
    eventCreation: false,
    children: [
      {
        id: 31,
        name: 'Ford Kaiden',
        color: '#d6d145'
      },
      {
        id: 32,
        name: 'Jewell Ryder',
        color: '#d6d145'
      },
      {
        id: 33,
        name: 'Dory Edie',
        color: '#d6d145'
      }
    ]
  },
  {
    id: 4,
    name: 'Cleaners',
    icon: '\uD83E\uDDF9',
    eventCreation: false,
    children: [
      {
        id: 41,
        name: 'Breanne Lorinda',
        color: '#ff1717'
      },
      {
        id: 42,
        name: 'Jenifer Kalyn',
        color: '#ff1717'
      },
      {
        id: 43,
        name: 'Natalie Racquel',
        color: '#ff1717'
      },
      {
        id: 44,
        name: 'Kaylin Toni',
        color: '#ff1717'
      },
      {
        id: 45,
        name: 'Gray Kestrel',
        color: '#ff1717'
      },
      {
        id: 46,
        name: 'Florence Amy',
        color: '#ff1717'
      }
    ]
  },
  {
    id: 5,
    name: 'Cooks',
    icon: '\uD83C\uDF72',
    eventCreation: false,
    children: [
      {
        id: 51,
        name: 'Meredith Chantelle',
        color: '#f7961e'
      },
      {
        id: 52,
        name: 'Jon Drake',
        color: '#f7961e'
      },
      {
        id: 53,
        name: 'Carlyn Dorothy',
        color: '#f7961e'
      },
      {
        id: 54,
        name: 'Isadora Lyric',
        color: '#f7961e'
      }
    ]
  },
  {
    id: 6,
    name: 'Hosts',
    icon: '\uD83D\uDECE',
    eventCreation: false,
    children: [
      {
        id: 61,
        name: 'Layton Candace',
        color: '#7056ff'
      },
      {
        id: 62,
        name: 'Sylvia Cale',
        color: '#7056ff'
      }
    ]
  },
  {
    id: 7,
    name: 'Managers',
    icon: '\uD83D\uDC69\u200D\uD83D\uDCBC',
    eventCreation: false,
    children: [
      {
        id: 71,
        name: 'Fred Valdez',
        color: '#3a8700'
      },
      {
        id: 72,
        name: 'Antonia Cindra',
        color: '#3a8700'
      },
      {
        id: 73,
        name: 'Gerry Irma',
        color: '#3a8700'
      }
    ]
  },
  {
    id: 8,
    name: 'Servers',
    icon: '\uD83E\uDD35',
    eventCreation: false,
    children: [
      {
        id: 81,
        name: 'Reg Izabelle',
        color: '#e25dd2'
      },
      {
        id: 82,
        name: 'Adrianna Sawyer',
        color: '#e25dd2'
      },
      {
        id: 83,
        name: 'Lou Andie',
        color: '#e25dd2'
      },
      {
        id: 84,
        name: 'Leon Porter',
        color: '#e25dd2'
      }
    ]
  },
  {
    id: 9,
    name: 'Sommeliers',
    icon: '\uD83C\uDF77',
    eventCreation: false,
    children: [
      {
        id: 91,
        name: 'Yancy Dustin',
        color: '#34c8e0'
      },
      {
        id: 92,
        name: 'Sierra Clark',
        color: '#34c8e0'
      }
    ]
  }
]

const allShifts: MbscCalendarEvent[] = [
  //<hide-comment>
  {
    start: 'dyndatetime(y,m,d-2,2)',
    end: 'dyndatetime(y,m,d-2,10)',
    title: 'Derek',
    resource: 21,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-2,2)',
    end: 'dyndatetime(y,m,d-2,10)',
    title: 'Florence',
    resource: 46,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Willis',
    resource: 12,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Jenifer',
    resource: 42,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Jon',
    resource: 52,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Fred',
    resource: 71,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-2,8)',
    end: 'dyndatetime(y,m,d-2,12)',
    title: 'Jude',
    resource: 11,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Jewell',
    resource: 32,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Gray',
    resource: 45,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Isadora',
    resource: 54,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Antonia',
    resource: 72,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Adrianna',
    resource: 82,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Leon',
    resource: 84,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Ryan',
    resource: 13,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Merv',
    resource: 22,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Ford',
    resource: 31,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Dory',
    resource: 33,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Breanne',
    resource: 41,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Carlyn',
    resource: 53,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2, 16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Layton',
    resource: 61,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Gerry',
    resource: 73,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Reg',
    resource: 81,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2, 16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Lou',
    resource: 83,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,16)',
    end: 'dyndatetime(y,m,d-2,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d-2,11)',
    end: 'dyndatetime(y,m,d-2,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d-1,2)',
    end: 'dyndatetime(y,m,d-1,10)',
    title: 'Merv',
    resource: 22,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-1,2)',
    end: 'dyndatetime(y,m,d-1,10)',
    title: 'Florence',
    resource: 46,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Ryan',
    resource: 13,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Florence',
    resource: 46,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Carlyn',
    resource: 53,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Fred',
    resource: 71,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Leon',
    resource: 84,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d-1,8)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'Jude',
    resource: 11,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Ford',
    resource: 31,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Natalie',
    resource: 43,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Carlyn',
    resource: 53,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Gerry',
    resource: 73,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Lou',
    resource: 83,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Leon',
    resource: 84,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Willis',
    resource: 12,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Merv',
    resource: 22,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Jewell',
    resource: 32,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Dory',
    resource: 33,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Gray',
    resource: 45,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Jon',
    resource: 52,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Isadora',
    resource: 54,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1, 16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Layton',
    resource: 61,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Antonia',
    resource: 72,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Reg',
    resource: 81,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1, 16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Lou',
    resource: 83,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,16)',
    end: 'dyndatetime(y,m,d-1,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5
  }, //</hide-comment>
  {
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Derek',
    resource: 21,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Florence',
    resource: 46,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Willis',
    resource: 12,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Jenifer',
    resource: 42,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Jon',
    resource: 52,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Fred',
    resource: 71,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Jude',
    resource: 11,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Jewell',
    resource: 32,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Gray',
    resource: 45,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Isadora',
    resource: 54,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Antonia',
    resource: 72,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Adrianna',
    resource: 82,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Leon',
    resource: 84,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Ryan',
    resource: 13,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Merv',
    resource: 22,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Ford',
    resource: 31,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Dory',
    resource: 33,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Breanne',
    resource: 41,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Carlyn',
    resource: 53,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d, 16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Layton',
    resource: 61,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Gerry',
    resource: 73,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Reg',
    resource: 81,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d, 16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Lou',
    resource: 83,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d,11)',
    end: 'dyndatetime(y,m,d,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5
  }, //<hide-comment>
  {
    start: 'dyndatetime(y,m,d+1,2)',
    end: 'dyndatetime(y,m,d+1,10)',
    title: 'Theo',
    resource: 23,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+1,2)',
    end: 'dyndatetime(y,m,d+1,10)',
    title: 'Jenifer',
    resource: 42,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Jude',
    resource: 11,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Florence',
    resource: 46,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Jon',
    resource: 52,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Gerry',
    resource: 73,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Jude',
    resource: 11,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Dory',
    resource: 33,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Natalie',
    resource: 43,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Meredith',
    resource: 51,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Fred',
    resource: 71,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Lou',
    resource: 83,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Leon',
    resource: 84,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,15)',
    title: 'Sierra',
    resource: 92,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Willis',
    resource: 12,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Derek',
    resource: 21,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Ford',
    resource: 31,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Dory',
    resource: 33,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Kaylin',
    resource: 44,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Isadora',
    resource: 54,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1, 16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Sylvia',
    resource: 62,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Antonia',
    resource: 72,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Reg',
    resource: 81,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1, 16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Lou',
    resource: 83,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,16)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+1,11)',
    end: 'dyndatetime(y,m,d+1,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+2,2)',
    end: 'dyndatetime(y,m,d+2,10)',
    title: 'Merv',
    resource: 22,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+2,2)',
    end: 'dyndatetime(y,m,d+2,10)',
    title: 'Florence',
    resource: 46,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Ryan',
    resource: 13,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Florence',
    resource: 46,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Carlyn',
    resource: 53,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Fred',
    resource: 71,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Leon',
    resource: 84,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+2,8)',
    end: 'dyndatetime(y,m,d+2,12)',
    title: 'Jude',
    resource: 11,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Ford',
    resource: 31,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Natalie',
    resource: 43,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Carlyn',
    resource: 53,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Gerry',
    resource: 73,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Lou',
    resource: 83,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Leon',
    resource: 84,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Willis',
    resource: 12,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Merv',
    resource: 22,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Jewell',
    resource: 32,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Dory',
    resource: 33,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Gray',
    resource: 45,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Jon',
    resource: 52,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Isadora',
    resource: 54,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2, 16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Layton',
    resource: 61,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Antonia',
    resource: 72,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Reg',
    resource: 81,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2, 16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Lou',
    resource: 83,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,16)',
    end: 'dyndatetime(y,m,d+2,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+2,11)',
    end: 'dyndatetime(y,m,d+2,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+3,2)',
    end: 'dyndatetime(y,m,d+3,10)',
    title: 'Derek',
    resource: 21,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+3,2)',
    end: 'dyndatetime(y,m,d+3,10)',
    title: 'Florence',
    resource: 46,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Willis',
    resource: 12,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Jenifer',
    resource: 42,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Jon',
    resource: 52,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Fred',
    resource: 71,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+3,8)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Jude',
    resource: 11,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Jewell',
    resource: 32,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Gray',
    resource: 45,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Isadora',
    resource: 54,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Antonia',
    resource: 72,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Adrianna',
    resource: 82,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Leon',
    resource: 84,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,15)',
    title: 'Yancy',
    resource: 91,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Ryan',
    resource: 13,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Merv',
    resource: 22,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Ford',
    resource: 31,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Dory',
    resource: 33,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Breanne',
    resource: 41,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Carlyn',
    resource: 53,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3, 16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Layton',
    resource: 61,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Gerry',
    resource: 73,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Reg',
    resource: 81,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3, 16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Lou',
    resource: 83,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,16)',
    end: 'dyndatetime(y,m,d+3,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+3,11)',
    end: 'dyndatetime(y,m,d+3,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+4,2)',
    end: 'dyndatetime(y,m,d+4,10)',
    title: 'Theo',
    resource: 23,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+4,2)',
    end: 'dyndatetime(y,m,d+4,10)',
    title: 'Jenifer',
    resource: 42,
    slot: 1
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Jude',
    resource: 11,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Jewell',
    resource: 32,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Florence',
    resource: 46,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Jon',
    resource: 52,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Gerry',
    resource: 73,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Adrianna',
    resource: 82,
    slot: 2
  },
  {
    start: 'dyndatetime(y,m,d+4,8)',
    end: 'dyndatetime(y,m,d+4,12)',
    title: 'Jude',
    resource: 11,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Dory',
    resource: 33,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Natalie',
    resource: 43,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Meredith',
    resource: 51,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Fred',
    resource: 71,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Lou',
    resource: 83,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Leon',
    resource: 84,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,15)',
    title: 'Sierra',
    resource: 92,
    slot: 3
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Willis',
    resource: 12,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Derek',
    resource: 21,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Ford',
    resource: 31,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Dory',
    resource: 33,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Kaylin',
    resource: 44,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Meredith',
    resource: 51,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Isadora',
    resource: 54,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4, 16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Sylvia',
    resource: 62,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Antonia',
    resource: 72,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Reg',
    resource: 81,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4, 16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Lou',
    resource: 83,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,16)',
    end: 'dyndatetime(y,m,d+4,23)',
    title: 'Sierra',
    resource: 92,
    slot: 4
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,11,59)',
    title: 'Derek',
    resource: 21,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,11,59)',
    title: 'Natalie',
    resource: 43,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,11,59)',
    title: 'Kaylin',
    resource: 44,
    slot: 5
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,11,59)',
    title: 'Fred',
    resource: 71,
    slot: 5
  } //</hide-comment>
]

const allSlots = [
  {
    id: 1,
    name: 'Night',
    time: '2AM - 10AM'
  },
  {
    id: 2,
    name: 'Breakfast',
    time: '8AM - 12PM'
  },
  {
    id: 3,
    name: 'Lunch',
    time: '11AM - 3PM'
  },
  {
    id: 4,
    name: 'Dinner',
    time: '4PM - 11PM'
  },
  {
    id: 5,
    name: 'After hours',
    time: '11PM - 1AM'
  }
]

const views = [
  {
    text: 'Day',
    value: 'day'
  },
  {
    text: 'Week',
    value: 'week'
  }
]

const mySlots = ref(allSlots)

const selectedView = ref('week')
const shifts = ref<MbscCalendarEvent[]>(allShifts)
const shiftTimes = ref([
  {
    id: 1,
    name: 'Night',
    checked: true,
    disabled: false
  },
  {
    id: 2,
    name: 'Breakfast',
    checked: true,
    disabled: false
  },
  {
    id: 3,
    name: 'Lunch',
    checked: true,
    disabled: false
  },
  {
    id: 4,
    name: 'Dinner',
    checked: true,
    disabled: false
  },
  {
    id: 5,
    name: 'After hours',
    checked: true,
    disabled: false
  }
])

const myView = ref<MbscEventcalendarView>({
  timeline: {
    type: 'week',
    eventList: true,
    startDay: 1,
    endDay: 5
  }
})

let date: string = ''
let shiftList: number[] = []

function getEmployeeName(event: MbscCalendarEvent) {
  for (let i = 0; i < myResources.length; ++i) {
    for (let j = 0; j < myResources[i].children!.length; ++j) {
      const employee = myResources[i].children![j]
      if (employee.id === event.resource) {
        return employee.name!.substring(0, employee.name!.indexOf(' '))
      }
    }
  }
}

function myDefaultEvent(event: MbscCalendarEvent) {
  return {
    title: getEmployeeName(event)
  }
}

function formatMyDate(date: any) {
  return formatDate('YYYY-MM-DD', new Date(date))
}

function getShiftsNrs(date: string, slotId: number) {
  const shiftList: number[] = []

  for (const shift of shifts.value) {
    // Get slot id from resource id
    const resourceNr = +shift.resource!.toString().charAt(0)
    if (shift.slot === slotId && date === formatMyDate(shift.start)) {
      shiftList[resourceNr - 1] = (shiftList[resourceNr - 1] || 0) + 1
    }
  }
  return shiftList
}

function checkboxChange(ev: any) {
  const value = +ev.target.value
  const checked = ev.target.checked
  let filteredSlots = []
  let updatedTimes = shiftTimes.value.map((cs) => (cs.id === value ? { ...cs, checked } : cs))

  for (const slot of allSlots) {
    if (updatedTimes.find((us) => us.id === slot.id && us.checked)) {
      filteredSlots.push(slot)
    }
  }

  if (filteredSlots.length === 1) {
    updatedTimes = updatedTimes.map((ut) => (ut.checked ? { ...ut, disabled: true } : ut))
  } else {
    updatedTimes = updatedTimes.map((ut) => ({ ...ut, disabled: false }))
  }

  mySlots.value = filteredSlots
  shiftTimes.value = updatedTimes
}

function isDouble(event: any, inst: any) {
  const date = event.start.setHours(0)
  const events: MbscCalendarEvent[] = inst.getEvents(date)
  const ev = events.find(
    (e) =>
      new Date(e.start as string).setHours(0) === date &&
      e.resource === event.resource &&
      e.slot === event.slot
  )
  return ev
}

function handleEventCreate(args: MbscEventCreateEvent, inst: any) {
  if (isDouble(args.event, inst)) {
    return false
  } else {
    setTimeout(() => {
      shifts.value = [...shifts.value, args.event]
    })
  }
}

function handleEventUpdate(args: MbscEventUpdateEvent, inst: any) {
  const event = args.event

  if (isDouble(event, inst)) {
    return false
  } else {
    const newName = getEmployeeName(event)
    if (newName) {
      const index = shifts.value.findIndex((x) => x.id === event.id)
      const newShifts = [...shifts.value]
      newShifts[index].title = newName
      shifts.value = newShifts
    }
  }
}

function handleEventDeleted(args: MbscEventDeletedEvent) {
  shifts.value = shifts.value.filter((item) => item.id !== args.event.id)
}

function handleViewChange() {
  if (selectedView.value === 'day') {
    myView.value = {
      timeline: {
        type: 'day',
        eventList: true
      }
    }
  } else {
    myView.value = {
      timeline: {
        type: 'week',
        eventList: true,
        startDay: 1,
        endDay: 5
      }
    }
  }
}
</script>

<template>
  <MbscEventcalendar
    cssClass="md-shift-management-calendar"
    :view="myView"
    :data="shifts"
    :resources="myResources"
    :slots="mySlots"
    :clickToCreate="true"
    :dragToMove="true"
    :extendDefaultEvent="myDefaultEvent"
    @event-create="handleEventCreate"
    @event-update="handleEventUpdate"
    @event-deleted="handleEventDeleted"
  >
    <template #resource="resource">
      <div
        :class="{ 'md-shift-resource ': resource.children }"
        :style="{ color: resource.children ? resource.children[0].color : '' }"
      >
        <span
          v-if="resource.children"
          class="md-shift-resource-icon"
          :innerHTML="resource.icon"
        ></span>
        {{ resource.name }}
      </div>
    </template>
    <template #slot="args">
      <div
        class="md-shift-header"
        v-if="formatMyDate(args.date)"
        :set="(date = formatMyDate(args.date))"
      >
        <div
          class="md-shift-name"
          v-if="getShiftsNrs(date, args.slot.id)"
          :set="(shiftList = getShiftsNrs(date, args.slot.id))"
        >
          {{ args.slot.name }}
          <span class="md-shift-time">{{ args.slot.time }}</span>
        </div>
        <template v-if="shiftList.length > 0">
          <div :class="'md-shift-counts-' + date + '-' + args.slot.id">
            <template v-for="(shift, i) in shiftList" :key="myResources[i].id">
              <div v-if="shift" class="md-shift-count">
                <span class="md-shift-icon" :innerHTML="myResources[i].icon"></span>
                <span
                  :class="'md-shift-nr md-shift-nr-' + date + '-' + args.slot.id + '-' + (i + 1)"
                >
                  {{ shift }}
                </span>
              </div>
              <br v-if="i === 3" />
            </template>
          </div>
        </template>
        <template v-if="shiftList.length === 0">
          <div class="md-shift-count">{{ '\uD83D\uDE36' }} empty...</div>
        </template>
      </div>
    </template>
    <template #header>
      <MbscCalendarNav />
      <div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
        <template v-for="st in shiftTimes" :key="st.id">
          <MbscCheckbox
            v-model="st.checked"
            :label="st.name"
            :disabled="st.disabled"
            @change="checkboxChange"
            theme="material"
          />
        </template>
      </div>
      <MbscSelect
        :data="views"
        inputStyle="box"
        v-model="selectedView"
        @change="handleViewChange"
      />
      <div>
        <MbscCalendarPrev />
        <MbscCalendarToday />
        <MbscCalendarNext />
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.md-shift-management-calendar .mbsc-schedule-event {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
}

.md-shift-management-calendar .mbsc-timeline-slots {
  height: 94px;
}

.md-shift-management-calendar .mbsc-timeline-header-placeholder {
  height: 120px;
}

.md-shift-management-calendar .mbsc-timeline-resource {
  display: flex;
  align-items: center;
}

.md-shift-management-calendar .mbsc-timeline-slot {
  width: 200px;
}

.md-shift-management-calendar .mbsc-timeline-parent {
  height: 40px;
}

.md-shift-management-calendar .mbsc-checkbox {
  padding: 18px 0 18px 45px;
}

.md-shift-management-calendar .mbsc-textfield-wrapper {
  margin: 12px 12px 12px 28px;
}

.md-shift-management-calendar .mbsc-select.mbsc-textfield {
  height: 32px;
  width: 120px;
}

.md-shift-management-calendar .mbsc-icon.mbsc-select-icon {
  width: 20px;
  height: 20px;
  top: 7px;
}

.md-shift-resource {
  font-size: 18px;
}

.md-shift-resource-icon {
  margin-right: 10px;
}

.md-shift-header {
  margin: 3px 6px;
  display: flex;
  flex-direction: column;
}

.md-shift-name {
  font-size: 15px;
}

.md-shift-time {
  opacity: 0.5;
  font-size: 12px;
  margin-left: 5px;
}

.md-shift-count {
  margin-top: 6px;
  margin-right: 12px;
  display: inline-block;
  width: 26px;
  height: 20px;
}

.md-shift-icon {
  padding-right: 3px;
}
</style>
