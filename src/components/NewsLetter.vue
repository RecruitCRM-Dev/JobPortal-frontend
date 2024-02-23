<template>
  <div class="relative py-16">
    <div
      aria-hidden="true"
      class="absolute inset-0 h-max w-full m-auto lg:grid lg:grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div
        class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
      ></div>
      <div
        class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
      ></div>
    </div>
    <Container>
      <div class="relative">
        <div class="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
            >
              <div class="max-w-xl lg:max-w-lg">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                  Subscribe to our newsletter.
                </h2>
                <p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis
                  tempor incididunt dolore.
                </p>
                <div class="mt-6 flex max-w-md gap-x-4">
                  <label for="email-address" class="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    class="flex-none rounded-md bg-primary px-3.5 text-white py-2.5 text-sm font-semibold shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <BriefcaseIcon class="h-6 w-6" aria-hidden="true" />
                  </div>

                  <dt class="mt-4 font-semibold">Job updates</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis
                    commodo amet.
                  </dd>
                </div>
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <BellAlertIcon class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <dt class="mt-4 font-semibold">No spam</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate
                    incididunt anim.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div
            class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { BriefcaseIcon, BellAlertIcon } from '@heroicons/vue/24/outline'
import Container from './Container.vue'
</script>
