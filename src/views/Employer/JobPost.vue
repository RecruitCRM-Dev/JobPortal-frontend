<template>
  <div>
    <AppHeader />

    <section>
      <div class="max-w-2xl mx-auto py-16">
        <div class="mt-3">
          <h2 class="text-center text-3xl text-gray-900">Post a Job</h2>
        </div>
        <EmployerNavigation />
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          class="flex flex-col py-10 ml-1 lg:px-0 px-5"
          enctype="multipart/form-data"
          name="jobPost"
        >
          <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 items-center">
            <!--  Name -->
            <h1 class="text-gray-900 inline-block float-right font-bold text-2xl mb-3">
              <!--<span class="text-indigo-500 inline-block float-left font-bold text-xl">2.&nbsp;</span>-->The
              Role
            </h1>

            <!--  Job Title -->
            <div class="sm:col-span-2">
              <div>
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900"
                  >Job Title</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="title"
                    v-model="formData.title"
                    placeholder=""
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="title" class="text-red-500" />
              </div>
            </div>
            <div class="w-full">
              <div>
                <label for="salary" class="block mb-2 text-sm font-medium text-gray-900"
                  >Salary</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="salary"
                    v-model="formData.salary"
                    placeholder=""
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="salary" class="text-red-500" />
              </div>
            </div>
            <div class="w-full">
              <label for="experience" class="block mb-2 text-sm font-medium text-gray-900"
                >Experience</label
              >
              <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                <Field
                  id="experience"
                  name="experience"
                  v-model="formData.experience"
                  as="input"
                  type="text"
                  class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  rules="numeric"
                >
                </Field>
              </div>
              <ErrorMessage name="experience" class="text-red-500" />
            </div>

            <div>
              <label for="type" class="block mb-2 text-sm font-medium text-gray-900"
                >Job Type</label
              >
              <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                <Field
                  id="type"
                  name="type"
                  as="select"
                  v-model="formData.type"
                  class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelancing">Freelancing</option>
                </Field>
              </div>
              <ErrorMessage name="type" class="text-red-500" />
            </div>

            <div>
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900"
                >Category</label
              >
              <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                <Field
                  id="category"
                  name="category"
                  v-model="formData.category"
                  as="select"
                  class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                >
                  <option value="IT" selected>IT</option>
                  <option value="Finance">Finance</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                </Field>
              </div>
              <ErrorMessage name="category" class="text-red-500" />
            </div>

            <div class="sm:col-span-2">
              <div>
                <label for="location" class="block mb-2 text-sm font-medium text-gray-900"
                  >Location</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="location"
                    v-model="formData.location"
                    placeholder=""
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="location" class="text-red-500" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <div>
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900"
                  >The Role</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="description"
                    v-model="formData.description"
                    placeholder=""
                    as="textarea"
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="description" class="text-red-500" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <div>
                <label for="responsibilities" class="block mb-2 text-sm font-medium text-gray-900"
                  >Responsibilities</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="responsibilities"
                    v-model="formData.responsibilities"
                    placeholder=""
                    as="textarea"
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="responsibilities" class="text-red-500" />
              </div>
            </div>
          </div>
          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="apiProgress"
            class="block bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            <ButtonSpinner v-if="apiProgress" />
            Post
          </button>
        </Form>
      </div>
    </section>
  </div>
</template>
  
  <script setup>
import { computed, onMounted, reactive, ref } from 'vue'

import Multiselect from '@vueform/multiselect'

import AppHeader from '@/components/AppHeader.vue'
import EmployerNavigation from '@/components/EmployerNavigation.vue'
import ButtonSpinner from '@/components/ButtonSpinner.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useForm } from 'vee-validate'
import { useStore } from 'vuex'
import axios from '@/api'
import router from '@/router'
import * as yup from 'yup'
import { useRoute } from 'vue-router'

const store = useStore()
const apiProgress = ref(false)
const route = useRoute()

const { resetForm } = useForm()

const skillOptions = ref([
  'HTML5',
  'Javascript',
  'Vue',
  'Laravel',
  'ReactJS',
  'Python',
  'Java',
  'Django'
])
const Job = {
  category: ['IT', 'Finance', 'Sales', 'Marketing', 'HR'],
  jobType: ['Full Time', 'Part Time', 'Internship', 'Freelancing']
}
// console.log(user)
const schema = yup.object().shape({
  title: yup.string().required('Title is required').max(255),
  description: yup.string().required('Description is required'),
  responsibilities: yup.string().required('Responsibilities are required'),
  category: yup.string().required('Category is required').oneOf(Job.category), // Assuming Job.category holds the list of categories
  experience: yup.number().required('Experience is required').max(30),
  salary: yup.number().required('Salary is required').min(5000),
  location: yup.string().required('Location is required'),
  type: yup.string().required('Type is required').oneOf(Job.jobType) // Assuming Job.jobType holds the list of job types
})

// Assuming Job is an object containing the categories and job types

const handleProfilePicChange = (event) => {
  formData.profile_pic = event.target.files[0]
  console.log(event.target.files[0])
}

const handleFileChange = (event) => {
  formData.resume = event.target.files[0]
}

const formData = reactive({
  // profile_pic: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
  title: '',
  description: '',
  responsibilities: '',
  category: '',
  salary: null,
  experience: null,
  location: '',
  status: '',
  type: ''
})

const onSubmit = async (values) => {
  apiProgress.value = true
  try {
    await axios.post(`/api/employer/${route.params.id}/jobs`, values)

    apiProgress.value = false

    toast('Job Posted Successfully!', {
      type: 'success',
      autoClose: 1000,
      dangerouslyHTMLString: true
    })

    setTimeout(() => {
      router.push(`/employer/${store.getters.User.id}/jobs`)
    }, 2000)
  } catch (error) {
    if (error.response?.status === 400) {
      toast('Please check input fields', {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    } else {
      toast('Please try again!', {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    }
    apiProgress.value = false
  }
}

onMounted(async () => {
  if (!store.getters.isLoggedIn) {
    router.push('/login')
  }
})
</script>
  
  <style src="@vueform/multiselect/themes/default.css"></style>
  