<template>
  <div class="h-screen md:flex">
    <div class="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden">
      <img src="@/assets/forgot.jpg" alt="" class="object-cover w-full h-full" />
    </div>

    <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <Form @submit="onSubmit" :validation-schema="schema" class="flex flex-col py-10 ml-1">
        <router-link to="/">
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" class="mb-5">
            <path fill="#6366f1" d="M13.853 18.14 1 10.643 31 1l-.019.058z"></path>
            <path fill="#a5b4fc" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z"></path>
          </svg>
        </router-link>
        <h1 class="font-bold text-3xl mb-5">Forgot Password</h1>
        <h1 class="text-gray-800 font-bold text-2xl mb-1"></h1>
        <p class="text-sm font-normal text-gray-600 mb-7"></p>
        <div class="flex flex-col w-80">
          <div class="mb-4">
            <!-- Role Checkbox -->
            <p class="text-gray-500">Are you?</p>
            <div class="mb-3">
              <div class="flex gap-x-5">
                <div class="flex items-center border-2 py-2 px-3 w-full rounded-2xl">
                  <Field
                    id="candidate"
                    name="role"
                    type="radio"
                    value="candidate"
                    v-model="userRole"
                  />
                  <label for="candidate" class="ml-2">Candidate</label>
                </div>
                <div class="flex items-center border-2 py-2 px-3 w-full rounded-2xl">
                  <Field
                    id="employer"
                    name="role"
                    type="radio"
                    value="employer"
                    v-model="userRole"
                  />
                  <label for="employer" class="ml-2">Employer</label>
                </div>
              </div>
              <ErrorMessage name="role" class="text-red-500" />
            </div>

            <!-- Email -->
            <div class="flex items-center border-2 py-2 px-3 w-full rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>

              <Field
                name="email"
                placeholder="Email"
                class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
              />
            </div>
            <ErrorMessage name="email" class="text-red-500" />
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Reset Password
        </button>
        <!-- <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> -->
        <p class="text-sm text-gray-400">
          Don't have an account?
          <span class="text-indigo-500 text-sm"><a href="/login">Login</a></span>
        </p>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { ref } from 'vue'
import { useStore } from 'vuex'
import * as yup from 'yup'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
import { onMounted } from 'vue'
import axios from 'axios'

const userRole = ref(null)
const store = useStore()

onMounted(async () => {
  await axios.get('sanctum/csrf-cookie')
  await store.dispatch('tryLogIn')

  if (store.getters.isLoggedIn) {
    router.push('/')
  }
})

const schema = yup.object().shape({
  role: yup.string().required('Please select a role'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required((data) => `${data.path} is required`)
    .label('Email')
})

const onSubmit = async (values) => {
  try {
    await store.dispatch('login', values)
    //Showing message to user
    toast('Logged In Successfully!', {
      type: 'success',
      autoClose: 1000,
      dangerouslyHTMLString: true
    })

    setTimeout(() => {
      router.push('/')
    }, 2000)
  } catch (error) {
    if (error.response?.status === 401) {
      toast('Invalid credentials', {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    } else {
      toast('Internal Server Error', {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    }
  }
}
</script>
