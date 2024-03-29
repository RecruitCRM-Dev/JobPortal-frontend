<template>
  <div>
    <AppHeader />
    <section>
      <div class="container mx-auto py-8">
        <div class="bg-white mt-3">
          <h2 class="text-center mt-12 text-3xl text-gray-900">Your Applications</h2>
        </div>
        <UserNavigation />

        <!-- all the jobs will be listed here -->

        <div class="max-w-4xl mx-auto">
          <main class="mx-auto sm:px-6 lg:px-8 flex">
            <div class="flex-1 w-full">
              <div class="sticky top-0 z-10 py-10 w-full m-3 bg-white border-b border-gray-200">
                <div class="lg:flex items-baseline justify-between">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900">Applied Jobs</h1>

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
                    <Menu as="div" class="relative inline-block text-left ml-5">
                      <div>
                        <MenuButton
                          class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                          Sort
                          <ChevronDownIcon
                            class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>

                      <transition
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                      >
                        <MenuItems
                          class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <div class="py-1">
                            <MenuItem
                              v-for="option in sortOptions"
                              :key="option.name"
                              v-slot="{ active }"
                            >
                              <button
                                @click="sortBy(option.name)"
                                :class="[
                                  option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm w-full'
                                ]"
                              >
                                {{ option.name }}
                              </button>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </transition>
                    </Menu>

                    <button
                      type="button"
                      class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                      @click="mobileFiltersOpen = true"
                    >
                      <span class="sr-only">Filters</span>
                      <FunnelIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div v-if="!apiProgress">
            <div
              v-for="jobApplication in filteredApplications"
              :key="jobApplication.id"
              class="bg-white shadow-xl shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md mb-2"
            >
              <div>
                <span class="text-purple-800 text-sm">{{ jobApplication.job.category }}</span>

                <router-link
                  :to="`/job/${jobApplication.job.id}/apply`"
                  class="text-black"
                  :class="{
                    'border-b-4 border-indigo-300':
                      $route.path === `/candidate/${store.getters.User.id} `
                  }"
                >
                  <h3 class="font-bold mt-px">{{ jobApplication.job.title }}</h3>
                </router-link>

                <div class="flex items-center gap-3 mt-2">
                  <span class="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm"
                    >Exp. {{ jobApplication.job.experience }} year</span
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
                    {{ jobApplication.job.location }}</span
                  >
                  <span
                    v-if="jobApplication.job.status == 'Expired'"
                    class="bg-red-100 text-red-700 rounded-full px-3 py-1 text-sm"
                    >Expired</span
                  >
                </div>
              </div>
              <div>
                <button
                  class="text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
                  :class="getStatusColorClass(jobApplication.status)"
                >
                  {{ getStatusLabel(jobApplication.status) }}
                </button>
              </div>
            </div>
            <div v-if="filteredApplications?.length == 0" class="text-center mt-5">
              No Jobs found
            </div>
          </div>
          <div v-else class="flex justify-center items-center mt-20">
            <Spinner medium />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import UserNavigation from '@/components/UserNavigation.vue'
import Spinner from '@/components/Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const sortOptions = [
  { name: 'Newest', href: '?sort=newest', current: false },
  { name: 'Oldest', href: '?sort=oldest', current: false }
]

const sortBy = (option) => {
  console.log(jobApplications.value)
  sortOptions.forEach((sortOption) => {
    sortOption.current = sortOption.name === option
  })
  if (option === 'Newest') {
    jobApplications.value.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    )
  } else if (option === 'Oldest') {
    jobApplications.value.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )
  }
}

const mobileFiltersOpen = ref(false)
const jobApplications = ref()
const apiProgress = ref(true)
const store = useStore()
const router = useRouter()

const getStatusColorClass = (status) => {
  switch (status) {
    case 'Selected':
      return 'text-green-800 bg-green-500'
    case 'Rejected':
      return 'text-red-800 bg-red-500'
    case 'ResumeViewed':
      return 'text-yellow-800 bg-yellow-500'
    case 'Just_Applied':
      return 'text-pink-800 bg-pink-500'
    case 'Underconsideration':
      return 'text-indigo-800 bg-indigo-500'
    default:
      return 'default-class'
  }
}

const getStatusLabel = computed(() => {
  return (status) => {
    switch (status) {
      case 'Selected':
        return 'Selected'
      case 'Rejected':
        return 'Rejected'
      case 'ResumeViewed':
        return 'Resume Viewed'
      case 'Just_Applied':
        return 'Just Applied'
      case 'Underconsideration':
        return 'Under Consideration'
      default:
        return 'Unknown Status'
    }
  }
})

const route = useRoute()
onMounted(async () => {
  if (!store.getters.isLoggedIn) {
    router.push('/login')
  }
  try {
    const res = await axios.get(`/api/user/${route.params.id}/jobs`)
    // console.log()
    jobApplications.value = res.data.job_applications
    console.log(res.data.job_applications)
    apiProgress.value = false
  } catch (error) {
    router.back()
    apiProgress.value = false
  }
})

const searchTerm = ref('')
const handleSearch = (event) => {
  searchTerm.value = event.target.value.trim().toLowerCase()
}

const filteredApplications = computed(() => {
  if (!searchTerm.value) {
    return jobApplications.value
  } else {
    return jobApplications.value.filter((application) =>
      application.job.title.toLowerCase().includes(searchTerm.value)
    )
  }
})
</script>
