<template>
  <AppLayout>
    <div class="bg-white space-y-5 mb-40">
      <Container>
        <div class="mt-12">
          <!-- Mobile filter dialog -->
          <!-- <JobSearch /> -->
          <TransitionRoot as="template" :show="mobileFiltersOpen">
            <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
              <TransitionChild
                as="template"
                enter="transition-opacity ease-linear duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="fixed inset-0 bg-black bg-opacity-25" />
              </TransitionChild>

              <div class="fixed inset-0 z-40 flex">
                <TransitionChild
                  as="template"
                  enter="transition ease-in-out duration-300 transform"
                  enter-from="translate-x-full"
                  enter-to="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leave-from="translate-x-0"
                  leave-to="translate-x-full"
                >
                  <DialogPanel
                    class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
                  >
                    <div class="flex items-center justify-between px-4">
                      <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                      <button
                        type="button"
                        class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        @click="mobileFiltersOpen = false"
                      >
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <!-- Filters -->
                    <form class="mt-4 border-t border-gray-200" @submit.prevent>
                      <h3 class="sr-only">Categories</h3>
                      <!-- <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                      <li v-for="category in subCategories" :key="category.name">
                        <a :href="category.href" class="block px-2 py-3">{{ category.name }}</a>
                      </li>
                    </ul> -->

                      <Disclosure
                        as="div"
                        v-for="section in filters"
                        :key="section.id"
                        class="border-t border-gray-200 px-4 py-6"
                        v-slot="{ open }"
                      >
                        <h3 class="-mx-2 -my-3 flow-root">
                          <DisclosureButton
                            class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                          >
                            <span class="font-medium text-gray-900">{{ section.name }}</span>
                            <span class="ml-6 flex items-center">
                              <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                              <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel class="pt-6">
                          <div class="space-y-6">
                            <div
                              v-for="(option, optionIdx) in section.options"
                              :key="option.value"
                              class="flex items-center"
                            >
                              <input
                                :id="`filter-mobile-${section.id}-${optionIdx}`"
                                :name="`${section.id}[]`"
                                :value="option.value"
                                type="checkbox"
                                :checked="option.checked"
                                @change="handleChange(section.id, optionIdx)"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                :for="`filter-mobile-${section.id}-${optionIdx}`"
                                class="ml-3 min-w-0 flex-1 text-gray-500"
                                >{{ option.label }}</label
                              >
                            </div>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                      <button
                        @click="handleFiltersClear"
                        class="block align-items-center bg-indigo-600 mt-5 ml-auto py-3 rounded-2xl px-3 text-white font-semibold mb-1"
                      >
                        Clear all filters
                      </button>
                    </form>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </Dialog>
          </TransitionRoot>

          <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
            <div class="flex-1">
              <div
                class="sticky top-0 z-10 bg-white border-b border-gray-200 pb-6 pt-16 lg::max-w-md"
              >
                <div class="lg:flex items-baseline justify-between">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900">Jobs</h1>

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
                        v-model="searchQuery"
                        @input="handleInputSearch"
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
                                  'block px-4 py-2 text-sm'
                                ]"
                              >
                                {{ option.name }}
                              </button>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </transition>
                    </Menu> -->
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
              <div v-if="!apiProgress">
                <section
                  v-if="paginateJobs"
                  aria-labelledby="products-heading"
                  class="pb-24 pt-6 flex"
                >
                  <h2 id="products-heading" class="sr-only">Products</h2>

                  <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    <!-- Filters -->
                    <form class="hidden lg:block" @submit.prevent>
                      <h3 class="sr-only">Categories</h3>
                      <!-- <ul
                  role="list"
                  class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  <li v-for="category in subCategories" :key="category.name">
                    <a :href="category.href">{{ category.name }}</a>
                  </li>
                </ul> -->

                      <Disclosure
                        as="div"
                        v-for="section in filters"
                        :key="section.id"
                        class="border-b border-gray-200 py-6"
                        v-slot="{ open }"
                      >
                        <h3 class="-my-3 flow-root">
                          <DisclosureButton
                            class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                          >
                            <span class="font-medium text-gray-900">{{ section.name }}</span>
                            <span class="ml-6 flex items-center">
                              <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                              <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel class="pt-6">
                          <div class="space-y-4">
                            <div
                              v-for="(option, optionIdx) in section.options"
                              :key="option.value"
                              class="flex items-center"
                            >
                              <input
                                :id="`filter-${section.id}-${optionIdx}`"
                                :name="`${section.id}[]`"
                                :value="option.value"
                                type="checkbox"
                                :checked="option.checked"
                                @change="handleChange(section.id, optionIdx)"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                :for="`filter-${section.id}-${optionIdx}`"
                                class="ml-3 text-sm text-gray-600"
                                >{{ option.label }}</label
                              >
                            </div>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                      <button
                        @click="handleFiltersClear"
                        class="block align-items-center bg-indigo-600 mt-5 ml-auto py-3 rounded-2xl px-3 text-white font-semibold mb-1"
                      >
                        Clear all filters
                      </button>
                      <!-- <button type="submit">Filte apply</button> -->
                    </form>

                    <!-- Product grid -->
                    <div v-if="paginatedJobs.length == 0" class="text-center w-100">
                      <p>No jobs found. <span class="text-indigo-500">Clear Search</span></p>
                    </div>
                    <div class="lg:col-span-3 grid lg:grid-cols-3 gap-y-10 space-x-2" v-if="jobs">
                      <JobCard
                        v-for="job in paginatedJobs"
                        :key="job.data.job_id"
                        :job="job.data"
                        class="max-h-80 max-w-xl"
                      />
                      <!-- <p>sd</p> -->
                    </div>
                  </div>
                </section>
                <p v-else class="text-center my-10 text-gray-500">
                  No jobs found.
                  <router-link to="/jobs" class="text-indigo-500 cursor-pointer"
                    >Go to Jobs</router-link
                  >
                </p>
                <!-- Pagination Start -->
                <div class="flex items-center justify-center mx-auto gap-4">
                  <button
                    @click="prevPage"
                    :disabled="currentPage === 1"
                    class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-indigo-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-indigo-900/10 active:bg-indigo-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      ></path>
                    </svg>
                    Previous
                  </button>
                  <button
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                    class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-indigo-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-indigo-900/10 active:bg-indigo-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div v-else class="flex justify-center items-center mt-20">
                <Spinner giant />
              </div>
              <!-- Pagination End -->
            </div>
          </main>
        </div>
      </Container>
    </div>
  </AppLayout>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import Container from '@/components/Container.vue'
import JobCard from '@/components/JobCard.vue'
import JobSearch from '@/components/JobSearch.vue'
import Spinner from '@/components/Spinner.vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon
} from '@heroicons/vue/20/solid'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const filters = [
  {
    id: 'type',
    name: 'Job Type',
    options: [
      { value: 'Full Time', label: 'Full Time', checked: false },
      { value: 'Part Time', label: 'Part Time', checked: false },
      { value: 'Internship', label: 'Internship', checked: false },
      { value: 'Freelancing', label: 'Freelance', checked: false }
    ]
  },
  {
    id: 'category',
    name: 'Job Category',
    options: [
      { value: 'IT', label: 'IT', checked: false },
      { value: 'Finance', label: 'Finance', checked: false },
      { value: 'Sales', label: 'Sales', checked: false },
      { value: 'Marketing', label: 'Marketing', checked: false },
      { value: 'HR', label: 'HR', checked: false }
    ]
  },
  {
    id: 'salary',
    name: 'Annual Salary',
    options: [
      { value: '2lpa', label: '2Lpa', checked: false },
      { value: '6lpa', label: '6Lpa', checked: false },
      { value: '12lpa', label: '12Lpa', checked: false },
      { value: '18lpa', label: '18Lpa', checked: false },
      { value: '20lpa', label: '20Lpa', checked: false },
      { value: '40lpa', label: '40Lpa', checked: false }
    ]
  },
  {
    id: 'experience',
    name: 'Experience',
    options: [
      { value: 'entry', label: 'Entry', checked: false },
      { value: 'intermediate', label: 'Intermediate', checked: false },
      { value: 'senior', label: 'Senior', checked: false }
    ]
  }
]
const mobileFiltersOpen = ref(false)

const jobs = ref([])
const totalPages = ref(0)
const currentPage = ref(1)
const searchQuery = ref('')
const apiProgress = ref(true)
// const sortOption = ref() sort option
const pageSize = 12

const handleChange = (sectionId, optionIdx) => {
  // Toggle the checked property of the selected option
  filters.find((filter) => filter.id === sectionId).options[optionIdx].checked = !filters.find(
    (filter) => filter.id === sectionId
  ).options[optionIdx].checked

  // Call your filter function or perform any other necessary action here
  fetchData() // Assuming you have a filter function defined
  // currentPage.value = 1
}

const fetchJobs = async () => {
  try {
    const selectedFilters = {}
    filters.forEach((filter) => {
      selectedFilters[filter.id] = filter.options
        .filter((option) => option.checked)
        .map((option) => option.value)
    })

    const params = {
      type: selectedFilters.type,
      category: selectedFilters.category,
      salary: selectedFilters.salary,
      experience: selectedFilters.experience
    }

    const response = await axios.get('/api/jobs', { params })

    jobs.value = response.data.data
    totalPages.value = Math.ceil(jobs.value.length / pageSize)
    apiProgress.value = false
    // console.log(totalPages.value)
  } catch (error) {
    console.log(error)
  }
}

const handleInputSearch = (event) => {
  searchQuery.value = event.target.value.trim().toLowerCase()
  currentPage.value = 1
  // console.log(currentPage.value)
  // console.log(totalPages.value)
}

const paginateJobs = (jobs) => {
  // Paginate jobs based on currentPage and pageSize
  const startIndex = (currentPage.value - 1) * pageSize
  const endIndex = startIndex + pageSize
  return jobs.slice(startIndex, endIndex)
}

const fetchData = async () => {
  await fetchJobs()
  // applySearchQuery()
  //apply sorting
}
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const paginatedJobs = computed(() => {
  let slicedJobs = jobs.value
  if (searchQuery.value) {
    const filteredJobs = jobs.value.filter(
      (job) =>
        job.data.attributes.title.toLowerCase().includes(searchQuery.value) ||
        job.data.attributes.category.toLowerCase().includes(searchQuery.value)
    )
    slicedJobs = filteredJobs
  }
  const startIndex = (currentPage.value - 1) * pageSize
  const endIndex = startIndex + pageSize
  totalPages.value = Math.ceil(slicedJobs.length / pageSize)
  return slicedJobs.slice(startIndex, endIndex)
})

const handleFiltersClear = () => {
  filters.forEach((filter) => {
    filter.options.forEach((option) => {
      option.checked = false
    })
  })
  fetchJobs()
}

watch(currentPage, () => {
  paginateJobs(jobs.value)
})

onMounted(fetchData)
</script>
