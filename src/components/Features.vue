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
        <div class="container mx-auto flex flex-col items-center mb-4 md:px-12">
          <h1 class="text-4xl font-semibold leadi text-center">
            Why us?
          </h1>
        </div>
        <div class="relative isolate overflow-hidden py-16 sm:py-24 lg:py-8">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto">
              <dl class="grid lg:grid-cols-4 gap-x-8 gap-y-10 lg:pt-2">
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <MagnifyingGlassIcon data-testid="magnifying-glass-icon" class="h-6 w-6" aria-hidden="true" />
                  </div>

                  <dt class="mt-4 font-semibold">Streamlined Job Search</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    Effortlessly find relevant job opportunities using our powerful search filters and advanced search functionality.
                  </dd>
                </div>
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <UserCircleIcon class="h-6 w-6" aria-hidden="true" />
                  </div>

                  <dt class="mt-4 font-semibold">Manage Your Profile</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    Easily create, update, and manage your professional profile, allowing employers to discover you and your qualifications effortlessly.
                  </dd>
                </div>
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <DocumentTextIcon class="h-6 w-6" aria-hidden="true" />
                  </div>

                  <dt class="mt-4 font-semibold">Track Your Applications</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    Stay organized with our application tracking system, enabling you to monitor the status of your job applications and manage your job search effectively
                  </dd>
                </div>
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <PresentationChartLineIcon class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <dt class="mt-4 font-semibold">Application Analytics</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    Gain insights into your job application activities, including the number of applications submitted to optimize your job search strategy.
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
import { MagnifyingGlassIcon, UserCircleIcon, PresentationChartLineIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
import Container from './Container.vue'
</script>
