<script setup lang="ts">
import {
  MbscDatepicker,
  MbscDropdown,
  MbscInput,
  MbscPage,
  MbscTextarea,
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
      <div class="mbsc-form-group-title">Single-line text</div>
      <MbscInput label="Label" placeholder="Text field label" />
      <MbscInput
        label="Password"
        type="password"
        placeholder="Password field with icon"
        startIcon="lock2"
      />
      <MbscInput
        label="Password Toggle"
        type="password"
        placeholder="Password field with icon"
        startIcon="lock2"
        :passwordToggle="true"
      />
      <MbscInput placeholder="Text field with right icon" endIcon="pencil" />
      <MbscInput placeholder="Text field disabled" :disabled="true" />
      <MbscInput placeholder="Text field with error style" :error="true" />
      <MbscInput
        placeholder="Text field with error style and message"
        :error="true"
        errorMessage="Error message!"
      />
      <MbscInput label="File upload" type="file" placeholder="Select file..." />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Multi-line text</div>
      <MbscTextarea label="Label" />
      <MbscTextarea endIcon="pencil" />
      <MbscTextarea label="Label" startIcon="bubble" />
      <MbscTextarea placeholder="disabled" :disabled="true" />
      <MbscTextarea :error="true" errorMessage="Error message!" />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Input fields for date entry</div>
      <MbscInput type="date" label="Date field" placeholder="Please Select..." />
      <MbscDatepicker :controls="['calendar']" label="Calendar" placeholder="Please Select..." />
      <MbscDatepicker :controls="['date']" label="Date scroller" placeholder="Please Select..." />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Input fields for number entry</div>
      <MbscInput label="Number field" type="number" placeholder="Please Select..." />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Select</div>
      <MbscDropdown label="Label">
        <option>Select</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </MbscDropdown>
      <MbscDropdown endIcon="plus">
        <option>Select with right icon</option>
        <option value="opel">Opel</option>
        <option value="renault">Renault</option>
        <option value="Citroen">Citroen</option>
        <option value="Lotus">Lotus</option>
      </MbscDropdown>
      <MbscDropdown startIcon="plus">
        <option>Select with left icon</option>
        <option value="Peugeot">Peugeot</option>
        <option value="Porsche">Porsche</option>
        <option value="Fiat">Fiat</option>
        <option value="Volkswagen">Volkswagen</option>
      </MbscDropdown>
      <MbscDropdown :error="true">
        <option>Select error</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Honda">Honda</option>
        <option value="Suzuki">Suzuki</option>
        <option value="Lamborghini">Lamborghini</option>
      </MbscDropdown>
      <MbscDropdown :disabled="true">
        <option>Select disabled</option>
        <option value="Bentley">Bentley</option>
        <option value="Morgan">Morgan</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Dodge">Dodge</option>
      </MbscDropdown>
    </div>
  </MbscPage>
</template>
