<template>
  <div class="h-screen md:flex">
    <div class="flex md:w-1/2 justify-center py-10 items-center">
      <Form @submit="onSubmit" :validation-schema="schema" class="flex flex-col py-10 ml-1">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello There!</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Welcome</p>
        <div class="flex flex-col w-80">
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
                class="pl-2 outline-none border-none w-full"
              />
            </div>
            <ErrorMessage name="name" class="text-red-500" />
          </div>

          <div class="mb-3">
            <div class="flex items-center border-2 py-2 px-3 w-full rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"
                />
              </svg>

              <Field
                name="phone"
                placeholder="Contact number"
                class="pl-2 outline-none border-none w-full"
              />
            </div>
            <ErrorMessage name="phone" class="text-red-500" />
          </div>

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
                class="pl-2 outline-none border-none w-full"
              />
            </div>
            <ErrorMessage name="email" class="text-red-500" />
          </div>

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
                placeholder="Password"
                class="pl-2 outline-none border-none w-full"
              />
            </div>
            <ErrorMessage name="password" class="text-red-500" />
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
                name="confirm_password"
                placeholder="Confirm password"
                class="pl-2 outline-none border-none w-full"
              />
            </div>
            <ErrorMessage name="confirm_password" class="text-red-500" />
          </div>
        </div>
        <button
          type="submit"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Register
        </button>
        <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
      </Form>
    </div>
    <div class="overflow-hidden md:flex w-1/2 justify-around items-center hidden">
      <img src="../assets/register-img.jpg" alt="" class="object-cover w-full h-full" />
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup
    .string()
    .required((data) => `${data.path} is required`)
    .label('Full name'),
  phone: yup
    .string()
    .required((data) => `${data.path} is required`)
    .matches(/^\+?[0-9]+$/, 'Invalid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number can be at most 15 digits')
    .label('Contact Number'),
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
  confirm_password: yup
    .string()
    .required(() => `Field is required`)
    .label('Confirm password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

const onSubmit = (values) => {
  console.log(values)
}
</script>
