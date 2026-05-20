To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-vue-ts?tab=readme-ov-file#mobiscroll-vue-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/vue/eventcalendar/customize-label-look-and-feel#).

## Demo description

You can customize the look of the labels and show additional content besides the `event.title`. There are two approaches you can take:

- **Only customize the content of the labels** - For this you will want to use the `calendarEventContent` template. The `color` and positioning of the label will be handled by the calendar. The `title` and any other custom fields you want to show in the template is your responsibility.
- **Fully customize how the labels look** *(like in this example)* - Use the `calendarEvent` template. All original event fields along with computed fields like `isMultiDay`, `lastDay` can be leveraged for constructing the template. With the `calendarEvent` template you will have full control over how the labels are styled including things like `color`, `title` and any custom fields.
