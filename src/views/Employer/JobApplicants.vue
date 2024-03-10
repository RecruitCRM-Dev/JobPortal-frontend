<template>
  <div>
    <AppHeader />
    <section>
      <div class="container mx-auto py-8 flex flex-col items-center">
        <div class="max-w-3xl bg-white mt-3 w-full flex">
          <div class="lg:ml-0 ml-10 mt-12 w-16 flex items-center">
            <router-link
              :to="`/employer/${$route.params.employer_id}/jobs`"
              class="text-indigo-600 text-opacity-100 font-medium"
            >
              <span>← </span>
              Back
            </router-link>
          </div>
          <div class="flex-grow">
            <h2 class="text-center w-full mt-12 text-3xl text-gray-900">Job Applicants</h2>
          </div>
        </div>

        <div class="max-w-4xl w-full mx-auto p-3">
          <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
            <div class="flex-1">
              <div class="sticky top-0 z-10 py-10 w-full m-3 bg-white border-b border-gray-200">
                <h3 class="font-bold text-gray-700">
                  Total job applications: {{ totalApplications }}
                </h3>
                <div class="lg:flex items-baseline justify-between mt-5">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900">Applicants</h1>

                  <div class="flex items-center mt-5 lg:mt-0">
                    <div class="relative">
                      <div
                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="w-5 h-5 text-blue-700"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        class="bg-gray-50 rounded h-10 border-r-1 focus:ring-0 border-gray-200 text-gray-900 text-sm block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow"
                        placeholder="Search here..."
                        v-model="searchTerm"
                        @input="handleSearch"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!apiProgress">
                <div v-if="jobPosts.length==0" class="mt-5 text-center">No applicants have applied to this job yet!</div>
                <UserTable v-else :applicants="filteredJobApplicants" />
              </div>
              <div v-else class="flex justify-center items-center mt-20">
                <Spinner medium />
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import Spinner from '@/components/Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import UserTable from '@/components/UserTable.vue'

const store = useStore()
const router = useRouter()
const jobPosts = ref()
const apiProgress = ref(true)
const totalApplications = ref()
const searchTerm = ref('')
const route = useRoute()

onMounted(async () => {
  if (!store.getters.isLoggedIn) {
    router.push('/login')
  }
  try {
    const res = await axios.get(
      `/api/employer/${store.getters.User.id}/jobs/${route.params.job_id}`
    )
    jobPosts.value = res.data.users
    console.log(res.data)
    totalApplications.value = res.data.job_application_count
    // console.log(jobPosts.value)
    apiProgress.value = false
  } catch (error) {
    router.back()
    console.log(error)
    apiProgress.value = false
  }
})

const handleSearch = (event) => {
  searchTerm.value = event.target.value.trim().toLowerCase()
}

const filteredJobApplicants = computed(() => {
  if (!searchTerm.value) {
    return jobPosts.value
  } else {
    return jobPosts.value.filter(
      (jobPost) =>
        jobPost.user.name.toLowerCase().includes(searchTerm.value) ||
        jobPost.user.email.toLowerCase().includes(searchTerm.value)
    )
  }
})

// const filteredJobPosts = computed(() => {
//   if (!searchTerm.value) {
//     return jobPosts.value
//   } else {
//     return jobPosts.value.filter((jobPost) =>
//       jobPost.data.attributes.title.toLowerCase().includes(searchTerm.value)
//     )
//   }
// })
</script>
