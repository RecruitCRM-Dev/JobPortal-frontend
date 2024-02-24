<template>
  <div>
    <AppHeader />
    <section>
      <div>
        <div class="container mx-auto py-8">
          <div class="bg-white mt-3">
            <h2 class="text-center mt-12 text-3xl text-gray-900">Applications</h2>
          </div>
          <UserNavigation />

          <!-- all the jobs will be listed here -->
          <Container>
            <div
              v-for="index in 20"
              :key="index"
              class="bg-white shadow-xl shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md mb-2"
            >
              <div>
                <span class="text-purple-800 text-sm">Engineering</span>
                <h3 class="font-bold mt-px">Senior Full Stack Backend Engineer</h3>
                <div class="flex items-center gap-3 mt-2">
                  <span class="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm"
                    >Full-time</span
                  >
                  <span class="text-slate-600 text-sm flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Remote, UK</span
                  >
                </div>
              </div>
              <div class="flex gap-2">
                <div>
                  <button
                    class="bg-red-500 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
                  >
                    Rejected
                  </button>
                </div>
                <div>
                  <button
                    class="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
                  >
                    Apply Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                  <p class="mt-2 italic text-sm text-gray-400">2hours before</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import UserNavigation from '@/components/UserNavigation.vue'
import Container from '@/components/Container.vue'
</script>
