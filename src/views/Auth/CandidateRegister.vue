<template>
  <div class="h-screen md:flex">
    <div class="flex md:w-1/2 justify-center py-10 items-center">
      <Form @submit="onSubmit" :validation-schema="schema" class="flex flex-col py-10 ml-1">
        <router-link to="/">
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" class="mb-5">
            <path fill="#6366f1" d="M13.853 18.14 1 10.643 31 1l-.019.058z"></path>
            <path fill="#a5b4fc" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z"></path>
          </svg>
        </router-link>
        <h1 class="font-bold text-3xl mb-5 text-center">Candidate Registration Form</h1>
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello There!</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Welcome</p>
        <div class="flex flex-col px-5 lg:px-0">
          <!-- Full Name -->
          <div class="mb-3">
            <div class="flex items-center border-2 py-2 px-3 w-full rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>

              <Field
                name="name"
                placeholder="Full name"
                class="pl-2 outline-none border-none w-full py-0.5 focus:ring-0"
              />
            </div>
            <ErrorMessage name="name" class="text-red-500" />
          </div>

          <!-- Email -->
          <div class="mb-3">
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
                class="pl-2 outline-none border-none w-full py-0.5 focus:ring-0"
              />
            </div>
            <ErrorMessage name="email" class="text-red-500" />
          </div>

          <!-- Password -->
          <div class="mb-3">
            <div class="flex items-center border-2 py-2 px-3 w-full rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                class="pl-2 outline-none border-none w-full py-0.5 focus:ring-0"
              />
            </div>
            <ErrorMessage name="password" class="text-red-500" />
          </div>

          <!-- Confirm Password -->
          <div>
            <div class="flex items-center border-2 py-2 px-3 w-full rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <Field
                name="password_confirmation"
                type="password"
                placeholder="Confirm password"
                class="pl-2 outline-none border-none w-full py-0.5 focus:ring-0"
              />
            </div>
            <ErrorMessage name="password_confirmation" class="text-red-500" />
          </div>
        </div>

        <!-- Register -->
        <button
          type="submit" :disabled="apiProgress"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
        <ButtonSpinner v-if="apiProgress"/>
          Register
        </button>
        <p class="text-sm text-gray-400 mb-2">
          Are you employer?
          <span class="text-indigo-500 text-sm"
            ><a href="/employer/register">Employer Signup</a></span
          >
        </p>
        <p class="text-sm text-gray-400">
          Already have an account?
          <span class="text-indigo-500 text-sm"><a href="/login">Login</a></span>
        </p>
      </Form>
    </div>
    <div class="overflow-hidden md:flex w-1/2 justify-around items-center hidden">
      <img src="../../assets/register-img.jpg" alt="" class="object-cover w-full h-full" />
    </div>
  </div>
</template>

<script setup>
import ButtonSpinner from '@/components/ButtonSpinner.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useStore } from 'vuex'
import * as yup from 'yup'
import router from '@/router'
import { onMounted, ref } from 'vue'

const store = useStore()
const apiProgress = ref(false)

onMounted(async () => {
  // await axios.get('sanctum/csrf-cookie')
  // await store.dispatch('tryLogIn')

  if (store.getters.isLoggedIn) {
    router.push('/')
  }
})

const schema = yup.object().shape({
  name: yup
    .string()
    .required((data) => `${data.path} is required`)
    .label('Full name'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required((data) => `${data.path} is required`)
    .label('Email'),
  password: yup
    .string()
    .min(5, (data) => `Password must be at least ${data.min} characters`)
    .required((data) => `${data.label} is required`)
    .label('Password'),
  password_confirmation: yup
    .string()
    .required(() => `Field is required`)
    .label('Confirm password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

const onSubmit = async (values) => {
  apiProgress.value = true
  try {
    await store.dispatch('candidateRegister', values)
    //Showing message to user
    apiProgress.value = false
    toast('Registered Successfully and verified mail sent to your mail!', {
      type: 'success',
      autoClose: 1000,
      dangerouslyHTMLString: true
    })

  } catch (error) {
    if (error.response?.status === 400) {
      toast(error.response.data.data.email, {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    } else if(error.response?.status === 401){
      toast(error.response.data.error, {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    } 
    else {
      toast('Internal Server Error', {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    }
    apiProgress.value = false
  }
}
</script>
