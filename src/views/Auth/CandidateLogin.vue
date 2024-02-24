<template>
  <Container>
  <div class="h-screen md:flex">
    <div class="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden pt-5">
      <img src="@/assets/login-img.jpg" alt="" class="object-cover w-full h-full" />
    </div>

    <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <Form @submit="onSubmit" :validation-schema="schema" class="flex flex-col py-10 ml-1">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
        <div class="flex flex-col w-80">
          <div class="mb-4">
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
                name="password"
                placeholder="Password"
                class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
              />
            </div>
            <ErrorMessage name="password" class="text-red-500" />
          </div>
        </div>
        <button
          type="submit"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Login
        </button>
        <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
      </Form>
    </div>
  </div>
</Container>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import Container from '@/components/Container.vue';

import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required((data) => `${data.path} is required`)
    .label('Email'),
  password: yup
    .string()
    .min(5, (data) => `Password must be at least ${data.min} characters`)
    .required((data) => `${data.label} is required`)
    .label('Password')
})

const onSubmit = (values) => {
  console.log(values)
}
</script>
