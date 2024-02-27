<template>
  <div>
    <AppHeader />
    <section>
      <div class="max-w-2xl mx-auto py-16">
        <div class="mt-3">
          <h2 class="text-center text-3xl text-gray-900">Edit your profile</h2>
        </div>
        <UserNavigation />
        <Form @submit="onSubmit" class="flex flex-col py-10 ml-1">
          <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 items-center">
            <!-- Avtar -->
            <div class="flex flex-col md:flex-row sm:col-span-2 items-center justify-center">
              <div class="h-36 w-full -mr-24">
                <img class="h-full rounded-full" :src="formData.avtar" alt="Rounded avatar" />
              </div>
              <div class="w-full mr-2">
                <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input"
                  >Upload avatar</label
                >
                <input
                  class="m-0 block min-w-0 flex-auto border-solid w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2.5"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                />
                <p class="mt-1 text-sm text-gray-500" id="file_input_help">
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
                <button
                  type="button"
                  class="text-red-400 inline-flex items-center hover:text-white border border-red-400 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                >
                  <svg
                    class="w-5 h-5 mr-1 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </div>

            <!--  Name -->
            <div class="sm:col-span-2">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
                  >Full Name</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="name"
                    v-model="formData.name"
                    placeholder=""
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="name" class="text-red-500" />
              </div>
            </div>

            <!--  About -->
            <div class="sm:col-span-2">
              <div>
                <label for="about" class="block mb-2 text-sm font-medium text-gray-900"
                  >About</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="about"
                    v-model="formData.about"
                    placeholder=""
                    as="textarea"
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="about" class="text-red-500" />
              </div>
            </div>

            <!-- Gender -->
            <div class="w-full">
              <div>
                <label for="gender" class="block mb-2 text-sm font-medium text-gray-900"
                  >Gender identity</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    id="gender"
                    v-model="formData.gender"
                    name="gender"
                    as="select"
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </Field>
                </div>
              </div>
            </div>

            <!-- Contact Number -->
            <div class="w-full">
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900"
                  >Contact Number</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="phone"
                    v-model="formData.phone"
                    placeholder=""
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="name" class="text-red-500" />
              </div>
            </div>

            <!-- Role -->
            <div>
              <label for="role" class="block mb-2 text-sm font-medium text-gray-900"
                >Select Your primary role</label
              >
              <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                <Field
                  id="role"
                  name="role"
                  as="select"
                  v-model="formData.role"
                  class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                >
                  <option value="EC">Electronics</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </Field>
              </div>
            </div>

            <!-- Years of experience -->
            <div>
              <label for="experience" class="block mb-2 text-sm font-medium text-gray-900"
                >Years of experience</label
              >
              <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                <Field
                  id="experience"
                  name="experience"
                  v-model="formData.experience"
                  as="select"
                  class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                >
                  <option value="EC" selected>Electronics</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </Field>
              </div>
            </div>

            <!--  Education -->
            <div class="sm:col-span-2">
              <div>
                <label for="education" class="block mb-2 text-sm font-medium text-gray-900"
                  >Education</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="education"
                    v-model="formData.education"
                    placeholder=""
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
              </div>
            </div>

            <!--  Address -->
            <div class="sm:col-span-2">
              <div>
                <label for="address" class="block mb-2 text-sm font-medium text-gray-900"
                  >Address</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="address"
                    v-model="formData.address"
                    placeholder=""
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
              </div>
            </div>

            <!-- Skills -->
            <div class="sm:col-span-2">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
                  >Skills</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="skills"
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  >
                    <Multiselect
                      mode="tags"
                      v-model="formData.skills"
                      placeholder="Choose your stack"
                      :close-on-select="false"
                      :min-chars="1"
                      :delay="0"
                      :options="skillOptions"
                    />
                  </Field>
                </div>
              </div>
            </div>

            <!-- Resume -->
            <div class="w-full sm:col-span-2">
              <label for="resume" class="block mb-2 text-sm font-medium text-gray-900"
                >Resume</label
              >
              <div class="flex items-center justify-center w-full sm:col-span-2">
                <label
                  for="resume"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500">
                      <span class="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="resume" name="resume" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="block bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Update
          </button>
        </Form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

import Multiselect from '@vueform/multiselect'

import AppHeader from '@/components/AppHeader.vue'
import UserNavigation from '@/components/UserNavigation.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'

import { useForm } from 'vee-validate'
useForm({
  initialValues: {
    name: 'Divyanshu Upreti',
    gender: 'male'
  }
})

const skillOptions = ref(['Vue Js', 'Laravel', 'More to Come', 'Html', 'CSS'])

const formData = reactive({
  avtar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
  name: 'Divyanshu',
  about: '',
  address: '',
  gender: '',
  role: '',
  experience: '',
  phone: '',
  resume: '',
  skills: []
})

const onSubmit = () => {
  console.log(formData)
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
