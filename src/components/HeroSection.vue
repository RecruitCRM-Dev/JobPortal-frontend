<template>
  <div class="relative" id="home">
    <div
      aria-hidden="true"
      class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div
        class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
      ></div>
      <div
        class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
      ></div>
    </div>
    <Container>
      <div class="relative pt-36 ml-auto">
        <div class="lg:w-2/3 text-center mx-auto">
          <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            Where opportunities <span class="text-primary dark:text-white">meet aspirations.</span>
          </h1>
          <p class="mt-8 text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed
            eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem
            harum omnis beatae ipsum soluta!
          </p>
          <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a
              href="#"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span class="relative text-base font-semibold text-white">Get started</span>
            </a>
            <a
              href="#"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span class="relative text-base font-semibold text-primary dark:text-white"
                >Learn more</span
              >
            </a>
          </div>
        </div>
        <div
            class="lg:w-5/6 text-center mx-auto hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"
          >
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                Customizable Filters
              </h6>
              <p class="mt-2 text-gray-500">Tailor job searches with precision.</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                Seamless Application Process
              </h6>
              <p class="mt-2 text-gray-500">Effortless apply-to opportunities.</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                Candidate Profile Insights
              </h6>
              <p class="mt-2 text-gray-500">Detailed analytics for improved matching.</p>
            </div>
          </div>

        <div></div>

        <div class="mt-12">
          <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Trusted by
          </h2>
        </div>
        <div class="mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/microsoft.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/airbnb.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/google.svg"
              class="h-9 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/rcrm_logo.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/netflix.svg"
              class="h-8 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/Amazon_logo.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<script setup>
import Container from './Container.vue'
</script>
