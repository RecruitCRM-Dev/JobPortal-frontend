<template>
  <div id="features">
    <Container>
      <div class="md:w-2/3 lg:w-1/2">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-secondary">
        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
      </svg> -->

        <h2 class="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
          Latest Jobs
        </h2>
        <!-- <p class="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi minima aspernatur, quidem nulla cupiditate nam consequatur eligendi magni adipisci.</p> -->
      </div>
      <div v-if="!apiProgress">
        <div
          v-for="job in jobs"
          :key="job.data.job_id"
          class="bg-white shadow-xl shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md mb-2"
        >
          <div>
            <span class="text-purple-800 text-sm">{{ job.data.attributes.category }}</span>
            <h3 class="font-bold mt-px">{{ job.data.attributes.title }}</h3>
            <div class="flex items-center gap-3 mt-2">
              <span class="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm"
                >Exp: {{ job.data.attributes.experience }}years</span
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
                {{ job.data.attributes.location }}</span
              >
            </div>
          </div>
          <div>
            <router-link :to="`/job/${job.data.job_id}/apply`">
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
            </router-link>
            <p class="mt-2 italic text-sm text-gray-400">{{ job.data.attributes.posted_at }}</p>
          </div>
        </div>
      </div>
      <div v-else class="flex justify-center items-center mt-20">
        <Spinner medium />
      </div>
    </Container>
  </div>
</template>
<script setup>
import { array } from 'yup'
import Container from './Container.vue'
import Spinner from './Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'

const jobs = ref(null)
const apiProgress = ref(true)

onMounted(async () => {
  const res = await axios.get('/api/jobs/latest')
  jobs.value = res.data.data
  apiProgress.value = false
})
</script>
