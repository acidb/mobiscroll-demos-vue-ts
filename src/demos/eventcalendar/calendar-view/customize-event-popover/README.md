To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-vue-ts?tab=readme-ov-file#mobiscroll-vue-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/vue/eventcalendar/customize-event-popover#).

## Demo description

The events listed in the popover can be customized in two ways:

- **Full event customization** *(like in this example)* - The calendar handles the rendering of events in the correct order. Styling the content, colors and everything else is your responsibility.
- **Content customization** - The calendar prints the `start` and `end` times, `allDay` and sets the appropriate `color`. Content like title and other fields can be shown.

You can provide styling to the `title` field and any other custom fields like `description`, `location`, `participants` ...

Create an event content template and pass it to the `popoverEventContent` template. All original event fields along with computed fields like `isMultiDay`, `lastDay` are passed to the template. For a fully custom event rendering use the `popoverEvent` template.

If you add custom markup you will want to add styling too. Use the `popoverClass` under the `view` option to tell the calendar what CSS class it should append to the popover container so that you can write specific CSS rules.
