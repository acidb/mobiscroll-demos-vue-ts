<script setup lang="ts">
import {
  MbscPage,
  MbscSegmented,
  MbscSegmentedGroup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Single select</div>
      <MbscSegmentedGroup name="range">
        <MbscSegmented value="day">Day</MbscSegmented>
        <MbscSegmented value="week">Week</MbscSegmented>
        <MbscSegmented value="month">Month</MbscSegmented>
        <MbscSegmented value="year" :defaultChecked="true">Year</MbscSegmented>
      </MbscSegmentedGroup>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Multiple select</div>
      <MbscSegmentedGroup name="days" select="multiple">
        <MbscSegmented value="sun" disabled>S</MbscSegmented>
        <MbscSegmented value="mon" :defaultChecked="true">M</MbscSegmented>
        <MbscSegmented value="tue">T</MbscSegmented>
        <MbscSegmented value="wed">W</MbscSegmented>
        <MbscSegmented value="thu" :defaultChecked="true">T</MbscSegmented>
        <MbscSegmented value="fri">F</MbscSegmented>
        <MbscSegmented value="sat" disabled>S</MbscSegmented>
      </MbscSegmentedGroup>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Text and icon</div>
      <MbscSegmentedGroup name="app">
        <MbscSegmented value="featured" icon="material-star" :defaultChecked="true"
          >Featured</MbscSegmented
        >
        <MbscSegmented value="explore" icon="material-explore">Explore</MbscSegmented>
        <MbscSegmented value="updates" icon="material-system-update">Updates</MbscSegmented>
      </MbscSegmentedGroup>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Icon</div>
      <MbscSegmentedGroup name="settings">
        <MbscSegmented value="reply" icon="fa-mail-reply" />
        <MbscSegmented value="retweet" icon="fa-retweet" />
        <MbscSegmented value="favorite" icon="star3" :defaultChecked="true" />
        <MbscSegmented value="setting" icon="cogs" />
      </MbscSegmentedGroup>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Disabled</div>
      <MbscSegmentedGroup name="org" disabled>
        <MbscSegmented value="individual" :defaultChecked="true">Idividual</MbscSegmented>
        <MbscSegmented value="team">Team</MbscSegmented>
        <MbscSegmented value="company">Company</MbscSegmented>
      </MbscSegmentedGroup>
    </div>
  </MbscPage>
</template>
