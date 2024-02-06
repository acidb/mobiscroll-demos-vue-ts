<script setup lang="ts">
import {
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
    <div class="mbsc-grid">
      <div class="mbsc-row mbsc-justify-content-center">
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Underline inputs with stacked labels</div>
            <MbscInput
              inputStyle="underline"
              labelStyle="stacked"
              startIcon="user4"
              placeholder="Input with label"
              label="Name"
            />
            <MbscInput
              inputStyle="underline"
              labelStyle="stacked"
              startIcon="material-email"
              placeholder="With error styling"
              label="Email"
              :error="true"
            />
            <MbscInput
              inputStyle="underline"
              labelStyle="stacked"
              startIcon="lock2"
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
              :passwordToggle="true"
              :error="true"
            />
            <MbscInput
              inputStyle="underline"
              labelStyle="stacked"
              startIcon="empty"
              placeholder="Without label"
            />
            <MbscTextarea
              inputStyle="underline"
              labelStyle="stacked"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            />
            <MbscDropdown
              inputStyle="underline"
              labelStyle="stacked"
              startIcon="plus"
              endIcon="close"
            >
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </MbscDropdown>
            <MbscInput
              inputStyle="underline"
              labelStyle="stacked"
              type="file"
              placeholder="Select file..."
              label="File upload"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Underline inputs with inline labels</div>
            <MbscInput
              inputStyle="underline"
              labelStyle="inline"
              startIcon="user4"
              placeholder="Input with label"
              label="Name"
            />
            <MbscInput
              inputStyle="underline"
              labelStyle="inline"
              startIcon="material-email"
              placeholder="With error styling"
              label="Email"
              :error="true"
            />
            <MbscInput
              inputStyle="underline"
              labelStyle="inline"
              startIcon="lock2"
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
              :passwordToggle="true"
              :error="true"
            />
            <MbscInput
              inputStyle="underline"
              labelStyle="inline"
              startIcon="empty"
              placeholder="Without label"
            />
            <MbscTextarea
              inputStyle="underline"
              labelStyle="inline"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></MbscTextarea>
            <MbscDropdown
              inputStyle="underline"
              labelStyle="inline"
              startIcon="plus"
              endIcon="close"
            >
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </MbscDropdown>
            <MbscInput
              inputStyle="underline"
              labelStyle="inline"
              type="file"
              placeholder="Select file..."
              label="File upload"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Underline inputs with floating labels</div>
            <MbscInput
              inputStyle="underline"
              labelStyle="floating"
              startIcon="user4"
              placeholder="Input with label"
              label="Name"
            />
            <MbscInput
              inputStyle="underline"
              labelStyle="floating"
              startIcon="material-email"
              placeholder="With error styling"
              error="true"
              label="Email"
            />
            <MbscInput
              inputStyle="underline"
              labelStyle="floating"
              startIcon="lock2"
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
              :passwordToggle="true"
              :error="true"
            />
            <MbscInput
              inputStyle="underline"
              labelStyle="floating"
              startIcon="empty"
              placeholder="Without label"
            />
            <MbscTextarea
              inputStyle="underline"
              labelStyle="floating"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></MbscTextarea>
            <MbscDropdown
              inputStyle="underline"
              labelStyle="floating"
              startIcon="plus"
              endIcon="close"
            >
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </MbscDropdown>
            <MbscInput
              inputStyle="underline"
              labelStyle="floating"
              type="file"
              placeholder="Select file..."
              label="File upload"
            />
          </div>
        </div>
      </div>
      <div class="mbsc-row mbsc-justify-content-center">
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Box inputs with stacked labels</div>
            <MbscInput
              inputStyle="box"
              labelStyle="stacked"
              startIcon="user4"
              placeholder="Input with label"
              label="Name"
            />
            <MbscInput
              inputStyle="box"
              labelStyle="stacked"
              startIcon="material-email"
              placeholder="With error styling"
              label="Email"
              :error="true"
            />
            <MbscInput
              inputStyle="box"
              labelStyle="stacked"
              startIcon="lock2"
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
              :passwordToggle="true"
              :error="true"
            />
            <MbscInput
              inputStyle="box"
              labelStyle="stacked"
              startIcon="empty"
              placeholder="Without label"
            />
            <MbscTextarea
              inputStyle="box"
              labelStyle="stacked"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></MbscTextarea>
            <MbscDropdown inputStyle="box" labelStyle="stacked" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </MbscDropdown>
            <MbscInput
              inputStyle="box"
              labelStyle="stacked"
              type="file"
              placeholder="Select file..."
              label="File upload"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Box inputs with inline labels</div>
            <MbscInput
              inputStyle="box"
              labelStyle="inline"
              startIcon="user4"
              placeholder="Input with label"
              label="Name"
            />
            <MbscInput
              inputStyle="box"
              labelStyle="inline"
              startIcon="material-email"
              placeholder="With error styling"
              label="Email"
              :error="true"
            />
            <MbscInput
              inputStyle="box"
              labelStyle="inline"
              startIcon="lock2"
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
              :passwordToggle="true"
              :error="true"
            />
            <MbscInput
              inputStyle="box"
              labelStyle="inline"
              startIcon="empty"
              placeholder="Without label"
            />
            <MbscTextarea
              inputStyle="box"
              labelStyle="inline"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></MbscTextarea>
            <MbscDropdown inputStyle="box" labelStyle="inline" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </MbscDropdown>
            <MbscInput
              inputStyle="box"
              labelStyle="inline"
              type="file"
              placeholder="Select file..."
              label="File upload"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Box inputs with floating labels</div>
            <MbscInput
              inputStyle="box"
              labelStyle="floating"
              startIcon="user4"
              placeholder="Input with label"
              label="Name"
            />
            <MbscInput
              inputStyle="box"
              labelStyle="floating"
              startIcon="material-email"
              placeholder="With error styling"
              label="Email"
              :error="true"
            />
            <MbscInput
              inputStyle="box"
              labelStyle="floating"
              startIcon="lock2"
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
              :passwordToggle="true"
              :error="true"
            />
            <MbscInput
              inputStyle="box"
              labelStyle="floating"
              startIcon="empty"
              placeholder="Without label"
            />
            <MbscTextarea
              inputStyle="box"
              labelStyle="floating"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></MbscTextarea>
            <MbscDropdown inputStyle="box" labelStyle="floating" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </MbscDropdown>
            <MbscInput
              inputStyle="box"
              labelStyle="floating"
              type="file"
              placeholder="Select file..."
              label="File upload"
            />
          </div>
        </div>
      </div>
      <div class="mbsc-row mbsc-justify-content-center">
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Outline inputs with stacked labels</div>
            <MbscInput
              inputStyle="outline"
              labelStyle="stacked"
              startIcon="user4"
              placeholder="Input with label"
              label="Name"
            />
            <MbscInput
              inputStyle="outline"
              labelStyle="stacked"
              startIcon="material-email"
              placeholder="With error styling"
              label="Email"
              :error="true"
            />
            <MbscInput
              inputStyle="outline"
              labelStyle="stacked"
              startIcon="lock2"
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
              :passwordToggle="true"
              :error="true"
            />
            <MbscInput
              inputStyle="outline"
              labelStyle="stacked"
              startIcon="empty"
              placeholder="Without label"
            />
            <MbscTextarea
              inputStyle="outline"
              labelStyle="stacked"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></MbscTextarea>
            <MbscDropdown
              inputStyle="outline"
              labelStyle="stacked"
              startIcon="plus"
              endIcon="close"
            >
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </MbscDropdown>
            <MbscInput
              inputStyle="outline"
              labelStyle="stacked"
              type="file"
              placeholder="Select file..."
              label="File upload"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Outline inputs with inline labels</div>
            <MbscInput
              inputStyle="outline"
              labelStyle="inline"
              startIcon="user4"
              placeholder="Input with label"
              label="Name"
            />
            <MbscInput
              inputStyle="outline"
              labelStyle="inline"
              startIcon="material-email"
              placeholder="With error styling"
              label="Email"
              :error="true"
            />
            <MbscInput
              inputStyle="outline"
              labelStyle="inline"
              startIcon="lock2"
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
              :passwordToggle="true"
              :error="true"
            />
            <MbscInput
              inputStyle="outline"
              labelStyle="inline"
              startIcon="empty"
              placeholder="Without label"
            />
            <MbscTextarea
              inputStyle="outline"
              labelStyle="inline"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></MbscTextarea>
            <MbscDropdown inputStyle="outline" labelStyle="inline" startIcon="plus" endIcon="close">
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </MbscDropdown>
            <MbscInput
              inputStyle="outline"
              labelStyle="inline"
              type="file"
              placeholder="Select file..."
              label="File upload"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Outline inputs with floating labels</div>
            <MbscInput
              inputStyle="outline"
              labelStyle="floating"
              startIcon="user4"
              placeholder="Input with label"
              label="Name"
            />
            <MbscInput
              inputStyle="outline"
              labelStyle="floating"
              startIcon="material-email"
              placeholder="With error styling"
              label="Email"
              :error="true"
            />
            <MbscInput
              inputStyle="outline"
              labelStyle="floating"
              startIcon="lock2"
              errorMessage="An error occurred"
              type="password"
              placeholder="With icons and error message"
              label="Password"
              :passwordToggle="true"
              :error="true"
            />
            <MbscInput
              inputStyle="outline"
              labelStyle="floating"
              startIcon="empty"
              placeholder="Without label"
            />
            <MbscTextarea
              inputStyle="outline"
              labelStyle="floating"
              startIcon="bubble"
              placeholder="Textarea with left icon"
              label="About me"
            ></MbscTextarea>
            <MbscDropdown
              inputStyle="outline"
              labelStyle="floating"
              startIcon="plus"
              endIcon="close"
            >
              <option>Select with icons</option>
              <option value="Opel">Opel</option>
              <option value="Renault">Renault</option>
              <option value="Citroen">Citroen</option>
              <option value="Lotus">Lotus</option>
            </MbscDropdown>
            <MbscInput
              inputStyle="outline"
              labelStyle="floating"
              type="file"
              placeholder="Select file..."
              label="File upload"
            />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
