<template>
  <AppLayout>
    <div class="pt-20">
      <Container>
        <div class="lg:flex lg:justify-between" v-if="!apiProgress">
          <!-- side menu -->
          <div class="lg:w-72 lg:ml-20 md:flex-shrink-0 order-1">
            <div class="top-8 sticky">
              <div class="p-5 abc border-2 rounded-xl relative">
                <div class="text-center mb-6">
                  <img
                    class="inline-flex mb-2"
                    :src="
                      companyLogo
                        ? companyLogo
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMy48opkiA5UkBbnwDGXkqV9uDcORBTDo1uiqfHxIo-w&s'
                    "
                    width="72"
                    height="72"
                    alt=""
                  />
                  <h2 class="font-bold text-xl">
                    {{ job.attributes.posted_by.data.attributes.name }}
                  </h2>
                </div>
                <div class="lg:justify-start flex mb-5 justify-center">
                  <ul class="flex-col inline-flex">
                    <li class="items-center flex text-opacity-100 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 mr-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>

                      <span class="abc">{{ jobPostedDate }}</span>
                    </li>
                    <li class="items-center flex text-opacity-100 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 mr-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      <span class="abc">{{ job.attributes.location }}</span>
                    </li>
                    <li class="items-center flex text-opacity-100 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 mr-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <span class="abc">{{ job.attributes.salary.toLocaleString('en-IN') }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    :disabled="isApplied || isEmployer()"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-gray-500"
                    @click="handleApplyNow"
                  >
                    <span v-if="!isApplied">Apply Now</span>
                    <span v-else>Already Applied</span>
                  </button>
                  <TransitionRoot as="template" :show="open">
                    <Dialog as="div" class="relative z-10" @close="open = false">
                      <TransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                      >
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </TransitionChild>

                      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div
                          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                        >
                          <TransitionChild
                            as="template"
                            enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <DialogPanel
                              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                            >
                              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                  <div
                                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
                                  >
                                    <CheckCircleIcon
                                      class="h-6 w-6 text-green-600"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle
                                      as="h3"
                                      class="text-base font-semibold leading-6 text-gray-900"
                                      >Are you sure?</DialogTitle
                                    >
                                    <div class="mt-2">
                                      <p class="text-sm text-gray-500">
                                        The details in your profile is submitted to the employer.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                  type="button"
                                  class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                  @click="handleJobApply"
                                >
                                  Apply
                                </button>
                                <router-link :to="`/candidate/${store.getters.User.id}/update`">
                                  <button
                                    type="button"
                                    class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                                    @click="open = false"
                                  >
                                    Update Profile
                                  </button>
                                </router-link>
                                <button
                                  type="button"
                                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                  @click="open = false"
                                  ref="cancelButtonRef"
                                >
                                  Cancel
                                </button>
                              </div>
                            </DialogPanel>
                          </TransitionChild>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>
                </div>
                <div class="text-center"></div>
              </div>
            </div>
          </div>
          <!-- Main Content -->
          <div class="pt-8">
            <!-- Job Description -->
            <div class="mb-8">
              <div class="mb-4">
                <router-link
                  to="/jobs"
                  class="text-indigo-600 items-center text-opacity-100 font-medium"
                >
                  <span>← </span>
                  All Jobs
                </router-link>
              </div>
              
              <h1 class="font-extrabold text-4xl mb-10">{{ job.attributes.title }}
                <span
                v-if="job.attributes.status == 'Expired'"
                class="bg-red-100 text-red-700 font-normal rounded-full px-3 py-1 text-sm"
                >Expired</span
              ></h1>
             
              <div class="mb-8">
                <div class="mb-10">
                  <h3 class="font-bold text-xl mb-5 text-gray-900 text-opacity-100">
                    About the role
                  </h3>
                  <div class="text-gray-700 text-opacity-100">
                    <p class="mb-4">
                      {{ job.attributes.description }}
                    </p>
                  </div>
                </div>
                <div class="mb-10">
                  <h3 class="text-gray-800 opacity-100 font-bold text-xl mb-5">About company</h3>
                  <div class="text-gray-700 opacity-100">
                    <p class="mb-4">
                      {{ job.attributes.posted_by.data.attributes.description }}
                    </p>
                  </div>
                </div>
                <div class="mb-10">
                  <h3 class="text-gray-800 opacity-100 font-bold text-xl mb-5">Responsibilities</h3>
                  <div class="text-dynamic-color">
                    <p class="mb-4">
                      {{ job.attributes.responsibilities }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- Social Share -->
              <button
                type="button"
                :disabled="isApplied || isEmployer()"
                @click="handleApplyNow"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-bold disabled:bg-gray-400"
              >
                <span v-if="!isApplied">Apply Now →</span>
                <span v-else>Already applied</span>
              </button>
              <TransitionRoot as="template" :show="open">
                <Dialog as="div" class="relative z-10" @close="open = false">
                  <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                  >
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </TransitionChild>

                  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div
                      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                    >
                      <TransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <DialogPanel
                          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                        >
                          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                              <div
                                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
                              >
                                <CheckCircleIcon
                                  class="h-6 w-6 text-green-600"
                                  aria-hidden="true"
                                />
                              </div>
                              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle
                                  as="h3"
                                  class="text-base font-semibold leading-6 text-gray-900"
                                  >Are you sure?</DialogTitle
                                >
                                <div class="mt-2">
                                  <p class="text-sm text-gray-500">
                                    The details in your profile is submitted to the employer.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                              @click="handleJobApply"
                            >
                              Apply
                            </button>
                            <router-link :to="`/candidate/${store.getters.User.id}/update`">
                              <button
                                type="button"
                                class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                                @click="open = false"
                              >
                                Update Profile
                              </button>
                            </router-link>
                            <button
                              type="button"
                              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              @click="open = false"
                              ref="cancelButtonRef"
                            >
                              Cancel
                            </button>
                          </div>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </TransitionRoot>
            </div>
          </div>
        </div>
        <div class="text-center w-full flex justify-center" v-else>
          <Spinner giant />
        </div>
      </Container>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import Container from '../components/Container.vue'
import Spinner from '@/components/Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex'

const open = ref(false)
const store = useStore()
const job = ref(null)
const jobPostedDate = ref(null)
const route = useRoute()
const apiProgress = ref(true)
const isApplied = ref(false)
const router = useRouter()

const handleApplyNow = () => {
  if (!store.getters.isLoggedIn) {
    router.push('/login')
  } else {
    open.value = !open.value
  }
}

const companyLogo = computed(() => {
  return job.value.attributes.posted_by.data.attributes.profile_pic
})
onMounted(async () => {
  try {
    const res = await axios.get(`/api/jobs/${route.params.id}`)
    job.value = res.data.data
    console.log(res.data.data)
    jobPostedDate.value = convertToLocalDate(res.data.data.attributes.created_at)

    apiProgress.value = false
    await axios.get(`/api/user/${store.getters.User.id}/jobs/${route.params.id}`)
  } catch (error) {
    if (error.response && error.response.status === 409) {
      // Handle the conflict case without logging
      isApplied.value = true
    } else {
      // Log other unexpected errors
      console.error(error)
    }
    apiProgress.value = false
  }
})

const isEmployer = () => {
  // console.log(store.getters.isRole==='employer')
  return store.getters.isRole === 'employer'
}

const convertToLocalDate = (jobDate) => {
  const dateString = jobDate
  const date = new Date(dateString)

  const options = { day: '2-digit', month: 'long', year: 'numeric' }
  return date.toLocaleDateString('en-GB', options)
}

const handleJobApply = async () => {
  try {
    open.value = false
    await axios.post(`/api/user/${store.getters.User.id}/jobs`, {
      job_id: job.value.job_id,
      user_id: store.getters.User.id,
      status: 'Just_Applied'
    })
    isApplied.value = true
    toast('Applied Successfully!', {
      type: 'success',
      autoClose: 1000,
      dangerouslyHTMLString: true
    })
  } catch (error) {
    if (error.response?.status === 422) {
      toast('Invalid input data, please try again', {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    } else {
      toast('Internal Server Error', {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    }
  }
}
</script>
<style>
.abc {
  @apply bg-[rgb(249_250_251/var(--tw-bg-opacity))];
  --tw-bg-opacity: 1;
}
.text-dynamic-color {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.social > :not([hidden]) ~ :not([hidden]) {
  margin-right: 1rem; /* Adjust according to your design */
  margin-left: 0;
}
</style>