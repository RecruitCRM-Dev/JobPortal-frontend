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
        <div class="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 class="text-4xl font-semibold leadi text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div class="relative isolate overflow-hidden py-16 sm:py-24 lg:py-8">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto">
              <dl class="grid grid-cols-4 gap-x-8 gap-y-10 lg:pt-2">
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
