<script setup lang="ts">
import { MbscPage } from '@mobiscroll/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <MbscPage>
    <div className="mbsc-padding">
      <h1>Mobiscroll VUE-TS Demos</h1>

      <h2>Event Calendar</h2>

      <h3>Agenda</h3>

      <ul>
        <li>
          <RouterLink to="/agenda/daily-agenda-with-week-calendar"
            >Compact daily schedule</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/agenda/basic-usage">How to initialize</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/daily-weekly-monthly-annual-agenda"
            >Customize the range</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/agenda/printing-the-view">Print mode</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/synchronized-views">Synchronized views</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/custom-event-sort">Custom event order</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/setting-the-timezone">Timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/searching-events-in-popup">Event search with popup</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/event-content-customization">Content customization</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/full-event-customization">Full event customization</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/customizing-header">Customizing the header</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/custom-event-tooltip">Custom event tooltip</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/resource-filtering-in-header">In-header filtering</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/empty-state">Empty state</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/event-data-structure">Event properties</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/date-object-ISO-8601-moment">Supported date formats</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/recurring-events">Recurrence rules</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/load-inline-data">Loading inline data</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/load-events-from-remote-api">Events from a remote API</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/load-events-on-demand">Loading events on demand</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/sync-events-google-calendar"
            >Sync events to google calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/agenda/sync-events-outlook-calendar"
            >Sync events to outlook calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/agenda/load-events-from-google-calendar"
            >Load events from public google calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/agenda/event-bulk-actions-edit-delete-update"
            >Multiple select & bulk operations</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/agenda/themes-ios-material-windows">Theming capabilities</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/event-hooks">Lifecycle events</RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/gregorian-jalali-hijri">Calendar systems </RouterLink>
        </li>
        <li>
          <RouterLink to="/agenda/localization">Localization</RouterLink>
        </li>
      </ul>

      <h3>Event Calendar</h3>

      <ul>
        <li>
          <RouterLink to="/eventcalendar/mobile-month-view">Mobile month view</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/desktop-month-view">Desktop month view</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/responsive-month-view">Responsive</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/printing-the-view">Print mode</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/event-labels">Events as labels</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/event-popover">Events in popover</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/custom-event-sort">Custom event order</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/setting-the-timezone">Timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/multiple-timezone-support">Switching timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/searching-events-in-popup"
            >Event search with popup</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/searching-events-in-sidebar"
            >Event search with sidebar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/month-week-view">Month or week view</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/quarter-year-view">Multi-month or year view</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/show-more-all-labels">Displaying labels</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/colored-cell-background">Colored backgrounds</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/switching-day-week-month-view">Switching views</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/customize-label-look-and-feel"
            >Custom event labels</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/customize-event-popover"
            >Custom events in popover</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/customizing-header">Customizing the header</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/custom-event-tooltip">Custom event tooltip</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/move-resize-drag-drop-to-create-events"
            >Move, resize & create</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/conditional-move-resize"
            >Conditional move & resize per event or globally</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/drag-drop-between-calendar-instances"
            >Drag & drop between calendars</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/blocked-days-ranges">Manage blocked out dates</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/prevent-double-booking-events"
            >Prevent event overlap</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/external-drag-drop-schedule-unschedule"
            >External drag and drop</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/external-event-presets">External d&d presets</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/resource-filtering-in-header"
            >In-header filtering</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/event-data-structure">Event properties</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/date-object-ISO-8601-moment"
            >Supported date formats</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/recurring-events">Recurrence rules</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/load-inline-data">Loading inline data</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/load-events-from-remote-api"
            >Events from remote API
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/load-events-on-demand"
            >Loading events on demand</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/sync-events-google-calendar"
            >Sync events to google calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/sync-events-outlook-calendar"
            >Sync events to outlook calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/load-events-from-google-calendar"
            >Load events from public google calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/create-read-update-delete-CRUD"
            >Add/edit/delete events</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/recurring-event-add-edit-dialog"
            >Recurring event editor</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/disallow-past-event-creation"
            >Disable past event creation</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/event-bulk-actions-edit-delete-update"
            >Multiple select & bulk operations</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/cut-copy-paste-events-between-calendars"
            >Move events between calendars</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/themes-ios-material-windows"
            >Theming capabilities</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/eventcalendar/localization">Localization</RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/gregorian-jalali-hijri">Calendar systems </RouterLink>
        </li>
        <li>
          <RouterLink to="/eventcalendar/event-hooks">Lifecycle events</RouterLink>
        </li>
      </ul>

      <h3>Scheduler</h3>

      <ul>
        <li>
          <RouterLink to="/scheduler/mobile-day-view">Mobile daily schedule</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/desktop-day-view">Desktop daily schedule</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/mobile-week-view">Mobile weekly schedule</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/desktop-week-view">Desktop weekly schedule</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/responsive-day-week-schedule">Responsive behavior</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/printing-the-view">Print mode</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/work-week-hours">Work calendar</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/doctors-appointment">Doctor's appointment</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/custom-range-view">Custom range view</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/control-number-of-concurrently-shown-events"
            >Set event stack size</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/display-multiple-days-weeks">Customize view range</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/disable-all-day-events">Show/hide all-day events</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/colored-cell-background">Colored backgrounds</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/colors-invalids-css-class"
            >CSS class for colors and invalids</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/switching-calendar-scheduler-agenda"
            >Switching views</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/show-hide-hours-days">Visible hours and days</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/setting-the-timezone">Timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/multiple-timezone-support">Switching timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/show-multiple-timezones"
            >Display time for multiple timezones</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/searching-events-in-sidebar"
            >Event search with sidebar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/custom-event-tooltip">Custom event tooltip</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/customizing-events">Event customization</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/date-header-template">Date header template</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/custom-resource-header-template">Resource template</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/customizing-header">Customizing the header</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/move-resize-drag-drop-to-create-events"
            >Move, resize & create</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/conditional-move-resize"
            >Conditional move & resize per event, resource or globally</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/drag-drop-between-calendar-instances"
            >Drag & drop between schedulers</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/time-off-blocked-ranges">Blocked out times</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/prevent-double-booking-events"
            >Prevent event overlap</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/external-drag-drop-schedule-unschedule"
            >External drag and drop</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/external-event-presets">External d&d presets</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/resource-view">Multiple resources</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/group-by-resource-by-day">Resource grouping</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/shared-events-across-resources">Shared events</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/dynamic-add-remove-resources-filter"
            >Show/hide resources</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/resource-data-structure">Resource properties</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/event-data-structure">Event properties</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/date-object-ISO-8601-moment"
            >Supported date formats</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/recurring-events">Recurrence rules</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/load-inline-data">Loading inline data</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/load-events-from-remote-api"
            >Events from remote API
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/load-events-on-demand">Loading events on demand</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/sync-events-google-calendar"
            >Sync events to google calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/sync-events-outlook-calendar"
            >Sync events to outlook calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/load-events-from-google-calendar"
            >Load events from public google calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/create-read-update-delete-CRUD"
            >Add/edit/delete events</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/event-bulk-actions-edit-delete-update"
            >Multiple select & bulk operations</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/recurring-event-add-edit-dialog"
            >Recurring event editor</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/disallow-past-event-creation"
            >Disable past event creation</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/resource-filtering-in-header"
            >Custom component in header</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/scheduler/themes-ios-material-windows">Theming capabilities</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/gregorian-jalali-hijri">Calendar systems </RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/event-hooks">Lifecycle events</RouterLink>
        </li>
        <li>
          <RouterLink to="/scheduler/localization">Localization</RouterLink>
        </li>
      </ul>

      <h3>Timeline</h3>

      <ul>
        <li>
          <RouterLink to="/timeline/month-view">Monthly timeline</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/timeline-time-grid">Timeline vs time grid</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/printing-the-view">Print mode</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/employee-shifts">Employee shift planning</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/work-order-scheduling">Work order scheduling</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/timezone-meeting-planner"
            >Meeting planner across timezones</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/restaurant-shift-management"
            >Restaurant shift management</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/meal-planner">Weekly meal planner</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/dynamically-color-and-invalidate"
            >Dynamically color & invalidate</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/multi-classroom-timetable"
            >Multiple classroom scheduling</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/monthly-timetable-vertical-days-horizontal-times"
            >Single resource timetable</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/compare-resources-fixed-at-top">Compare resources</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/assign-unassign-work-orders-fixed-top-row"
            >Assign/unassign work orders</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/flight-scheduling-two-synchronized-timelines"
            >Flight scheduling with two timelines</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/daily-weekly-monthly-yearly-timeline"
            >Configure the timeline</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/multiple-days-weeks-months-quarters-years-variable-resolution"
            >Configure the page, size, resolution</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/control-number-of-concurrently-shown-events"
            >Set event stack size</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/custom-range-view">View with custom range picker</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/colors-invalids-css-class"
            >CSS class for colors and invalids</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/timeline-resource-height">Equal row height</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/event-listing">Daily event summary</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/switching-day-week-work-week-timeline"
            >Day, week, work week</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/setting-the-timezone">Timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/multiple-timezone-support">Switching timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/searching-events-in-sidebar"
            >Event search with sidebar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/timeline-custom-event-rendering"
            >Timeline event template</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/hour-day-week-month-quarter-year-header-footer-template"
            >Hour, day, week, month, year header and footer template</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/shift-template">Time slot template</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/resource-header-template">Resource header template</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/custom-event-tooltip">Custom event tooltip</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/setting-row-height">Controlling the row height</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/move-resize-drag-drop-to-create-events"
            >Move, resize & create</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/conditional-move-resize"
            >Conditional move & resize per event, resource or globally</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/drag-drop-between-calendar-instances"
            >Drag & drop between timelines</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/prevent-double-booking-events"
            >Prevent event overlap</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/timeline-resource-details-side-panel-footer"
            >Resource grid</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/resource-grouping-hierarchy"
            >Resource grouping & hierarchy</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/resource-data-structure">Resource properties</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/event-data-structure">Event properties</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/connecting-linking-events-arrows">Event connections</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/date-object-ISO-8601-moment">Supported date formats</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/recurring-events">Recurrence rules</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/load-inline-data">Loading inline data</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/load-events-from-remote-api"
            >Events from remote API
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/load-events-on-demand">Loading events on demand</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/load-resources-on-demand"
            >Loading resources on demand</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/loading-big-data-sets">Working with large data sets</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/sync-events-google-calendar"
            >Sync events to google calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/sync-events-outlook-calendar"
            >Sync events to outlook calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/load-events-from-google-calendar"
            >Load events from public google calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/create-read-update-delete-CRUD"
            >Add/edit/delete events</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/disallow-past-event-creation"
            >Disable past event creation</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/event-bulk-actions-edit-delete-update"
            >Multiple select & bulk operations</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/timeline/themes-ios-material-windows">Theming capabilities</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/gregorian-jalali-hijri">Calendar systems </RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/event-hooks">Lifecycle events</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/localization">Localization</RouterLink>
        </li>
        <li>
          <RouterLink to="/timeline/rtl-right-to-left">RTL mode</RouterLink>
        </li>
      </ul>

      <h2>Date & time pickers</h2>

      <h3>Calendar</h3>

      <ul>
        <li>
          <RouterLink to="/calendar/mobile-desktop-usage">Mobile & Desktop usage</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/usage-on-input-or-inline">Initializing the picker</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/responsive">Responsive behavior</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/mobile-desktop-display">Understanding display modes</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/appointment-booking">Appointment booking</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/activity-calendar">Activity calendar</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/date-picker">Date selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/date-time-picker">Date & Time picker</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/week-view">Variable week view</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/multiple-months">Multi month view</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/quarter-year-view">Quarter or year view</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/week-to-month">Switching views</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/dots-colors-labels">Marked, colored & labels</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/month-change-direction-week-numbers-outer-days"
            >Customizing the view</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/calendar/single-select">Single value selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/multiple-select">Multiple date selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/week-select">Week selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/range-select">Start-end selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/date-object-ISO-8601-moment">Date types</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/formatting-return-values">Formatting values</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/setting-values-defaults">Setting values</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/setting-the-picker-timezone">Timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/min-max-restrictions">Min & max values</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/disabled-invalid-values">Disabled values</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/recurring-values">Recurring values</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/themes-ios-material-windows">Theming capabilities</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/customizing-header">Customizing the header</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/customize-marked-day-shapes">Marked day classes</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/half-day-styling">Half days</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/event-hooks">Lifecycle events</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/gregorian-jalali-hijri">Calendar systems </RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/localization">Localization</RouterLink>
        </li>
        <li>
          <RouterLink to="/calendar/rtl-right-to-left">RTL mode</RouterLink>
        </li>
      </ul>

      <h3>Date & Time</h3>

      <ul>
        <li>
          <RouterLink to="/datetime/mobile-desktop-usage">Mobile & Desktop usage</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/usage-on-input-or-inline">Initializing the picker</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/responsive">Responsive behavior</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/mobile-desktop-display">Understanding display modes</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/date-picker">Date selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/time-picker">Time selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/date-time-picker">Date & time selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/time-value-steps">Setting time select steps</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/single-select">Single value selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/range-select">Start-end selection</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/date-object-ISO-8601-moment">Date types</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/formatting-return-values">Formatting values</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/month-year-picker">Credit card expiration</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/setting-values-defaults">Setting values</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/setting-the-picker-timezone">Timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/min-max-restrictions">Min & max values</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/disabled-invalid-values">Disabled values</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/recurring-values">Recurring values</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/themes-ios-material-windows">Theming capabilities</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/event-hooks">Lifecycle events</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/gregorian-jalali-hijri">Calendar systems </RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/localization">Localization</RouterLink>
        </li>
        <li>
          <RouterLink to="/datetime/rtl-right-to-left">RTL mode</RouterLink>
        </li>
      </ul>

      <h3>Range</h3>

      <ul>
        <li>
          <RouterLink to="/range/mobile-desktop-usage">Mobile & Desktop usage</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/usage-on-input-or-inline">Initializing the picker</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/responsive">Responsive behavior</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/calendar-scroller-dropdown">Understanding the controls</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/mobile-desktop-display">Understanding display modes</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/date-filtering-with-predefined-ranges"
            >Date filtering with presets</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/range/flight-booking">Flight booking</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/book-rental-months-ahead"
            >Vacation property availability</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/range/adding-event-start-end">New event creation</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/date-range">Date range</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/time-range">Time range</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/date-time-range">Date & time range</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/week-month-view-scrolling-direction"
            >Customizing the calendar</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/range/customizing-labels-selection">Customizing the range</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/dots-colors-labels">Marked, colored & labels</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/presets">Presets</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/date-object-ISO-8601-moment">Date types</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/formatting-return-values">Formatting values</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/setting-the-picker-timezone">Timezones</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/min-max-length">Setting the allowed range length</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/min-max-restrictions">Min & max values</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/disabled-invalid-values">Disabled values</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/recurring-values">Recurring values</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/themes-ios-material-windows">Theming capabilities</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/customize-marked-day-shapes">Marked day classes</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/half-day-styling">Half days</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/event-hooks">Lifecycle events</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/gregorian-jalali-hijri">Calendar systems </RouterLink>
        </li>
        <li>
          <RouterLink to="/range/localization">Localization</RouterLink>
        </li>
        <li>
          <RouterLink to="/range/rtl-right-to-left">RTL mode</RouterLink>
        </li>
      </ul>

      <h2>Pickers & Dropdowns</h2>

      <h3>Select</h3>

      <ul>
        <li>
          <RouterLink to="/select/mobile-desktop-usage">Mobile & Desktop usage</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/responsive">Responsive behavior</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/mobile-desktop-display">Understanding display modes</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/data-sources">Populating the picker</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/item-templating">Templating</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/country-picker">Country Dropdown</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/image-text">Image & text</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/multiple-lines">Multiline select</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/single-select">Single select</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/multiple-select">Multiple select</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/group-options">Group options</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/filtering-values">Filtering</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/linked-hierarchical-pickers">Multi level hierarchy</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/setting-values-defaults">Setting values</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/disabled-invalid-values">Disabled values</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/themes-ios-material-windows">Theming capabilities</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/event-hooks">Event hooks</RouterLink>
        </li>
        <li>
          <RouterLink to="/select/localization">Localization </RouterLink>
        </li>
        <li>
          <RouterLink to="/select/rtl-right-to-left">RTL support</RouterLink>
        </li>
      </ul>

      <h2>Form components</h2>

      <h3>Forms</h3>

      <ul>
        <li>
          <RouterLink to="/forms/mobile">Mobile form</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/desktop">Inline desktop form</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/responsive">Responsive form</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/popup">Inside a modal</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/alert-confirm-prompt">Alert, confirm & prompt</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/notifications">Toast & snackbar</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/buttons">Buttons</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/segmented">Segmented</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/stepper">Stepper</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/button-segmented-stepper-colors">Colors</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/inputs-text-areas-date-fields">Field types</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/input-label-types">Customize the input</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/checkbox">Checkbox</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/switch">Switch</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/radio-button">Radio buttons</RouterLink>
        </li>
        <li>
          <RouterLink to="/forms/themes-ios-material-windows">Theming capabilities</RouterLink>
        </li>
      </ul>
    </div>
  </MbscPage>
</template>
