To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-vue-ts?tab=readme-ov-file#mobiscroll-vue-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/vue/timeline/resource-filtering-search#).

## Demo description

When dealing with numerous resources, filtering and search are essential tools. Using the [resourceHeader](https://docs.mobiscroll.com/vue/eventcalendar/timeline#slot-resourceHeader)
slot you can customize the resource header and fit a search input and filter button. Having full control over what you render in the resource header, you can implement live search and filering with a flyout, allowing users to quickly locate specific resources based on selected filters.

To handle cases where no search results are found, use the `resourceEmpty`
slot to craft a custom placeholder with specific call-to-action buttons eg. clearing all search terms and resetting filters. The placeholder appears when an empty resource array is passed to the calendar.
