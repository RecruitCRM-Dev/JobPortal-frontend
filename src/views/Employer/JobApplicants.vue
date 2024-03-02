<template>
  <div>
    <AppHeader />
    <section>
      <div class="container mx-auto py-8">
        <div class="bg-white mt-3">
          <h2 class="text-center mt-12 text-3xl text-gray-900">Job Applicants</h2>
        </div>

        <div class="max-w-4xl mx-auto p-3">
          <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
            <div class="flex-1">
              <div class="sticky top-0 z-10 py-10 w-full m-3 bg-white border-b border-gray-200">
                <div class="lg:flex items-baseline justify-between">
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
                    <!-- <Menu as="div" class="relative inline-block text-left ml-5">
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
                    </Menu> -->
                  </div>
                </div>
              </div>
              <UserTable />
              <BarChart />
              <PieChart :labels="labels" :series="series" />
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
// import EmployerNavigation from '@/components/EmployerNavigation.vue'
import UserTable from '@/components/UserTable.vue'
import BarChart from '@/components/chart/BarChart.vue'
import PieChart from '@/components/chart/PieChart.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
// import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const labels = ref(['Just Applied', 'Resume Viewed', 'Under Consideration', 'Selected', 'Rejected'])
const series = ref([35, 41, 36, 26, 45])

// const sortOptions = [
//   { name: 'Newest', href: '?sort=newest', current: false },
//   { name: 'Oldest', href: '?sort=oldest', current: false }
// ]

// const mobileFiltersOpen = ref(false)

// const sortBy = (option) => {
//   sortOptions.forEach((sortOption) => {
//     sortOption.current = sortOption.name === option
//   })
//   if (option === 'Newest') {
//     jobPosts.value.sort(
//       (a, b) => new Date(b.data.attributes.created_at) - new Date(a.data.attributes.created_at)
//     )
//   } else if (option === 'Oldest') {
//     jobPosts.value.sort(
//       (a, b) => new Date(a.data.attributes.created_at) - new Date(b.data.attributes.created_at)
//     )
//   }
// }

const store = useStore()
const router = useRouter()
const jobPosts = ref()
const apiProgress = ref(true)
const searchTerm = ref('')

onMounted(async () => {
  if (!store.getters.isLoggedIn) {
    router.push('/login')
  }
  try {
    const res = await axios.get(`/api/employer/${store.getters.User.id}/job`)
    // console.log()
    jobPosts.value = res.data.data
    console.log(jobPosts.value)
    apiProgress.value = false
    // console.log(user.role)
  } catch (error) {
    console.log(error)
  }
})

const handleSearch = (event) => {
  searchTerm.value = event.target.value.trim().toLowerCase()
}

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
