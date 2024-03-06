<template>
  <header class="bg-red-500">
    <nav
      className="h-16 fixed z-20 w-[100%] backdrop-filter backdrop-blur-sm bg-opacity-100"
      style="background-color: #ffffff80"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div
          class="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative"
        >
          <input
            aria-hidden="true"
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            class="hidden peer"
          />
          <div class="relative z-20 w-full flex justify-between lg:w-max md:px-0">
            <a href="/" aria-label="logo" class="flex space-x-2 items-center">
              <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#6366f1" d="M13.853 18.14 1 10.643 31 1l-.019.058z"></path>
                <path fill="#a5b4fc" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z"></path>
              </svg>
              <span class="text-2xl font-bold text-gray-900 dark:text-white">Job Portal</span>
            </a>

            <div class="relative flex items-center lg:hidden max-h-10">
              <label
                role="button"
                for="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                class="relative p-6 -mr-6"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  class="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
          </div>
          <div
            aria-hidden="true"
            class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
          ></div>
          <div
            class="lg:space-x-3 flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
              <ul
                class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0"
              >
                <li>
                  <router-link to="/jobs" class="block md:px-4 transition hover:text-primary">
                    <span>All Jobs</span>
                  </router-link>
                </li>
              </ul>
            </div>

            <div v-if="!store.getters.isLoggedIn" class="mt-12 lg:mt-0">
              <router-link
                to="/candidate/register"
                class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-sm font-semibold text-white">Candidate Signup</span>
              </router-link>
            </div>
            <div v-if="!store.getters.isLoggedIn" class="mt-12 lg:mt-0">
              <router-link
                to="/employer/register"
                class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-sm font-semibold text-white">Employer Signup</span>
              </router-link>
            </div>
            <div v-if="!store.getters.isLoggedIn" class="mt-12 lg:mt-0">
              <router-link
                to="/login"
                class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-sm font-semibold text-white">Login</span>
              </router-link>
            </div>

            <div
              v-else
              :class="store.getters.isRole === 'candidate' ? 'min-320px:flex-row-reverse' : ''"
              class="min-[320px]:justify-between lg:flex-row lg:w-30 flex mt-5 lg:mt-0 items-center"
            >
              <div v-if="store.getters.isRole === 'candidate'" class="lg:mt-0 lg:mr-10 lg:pt-1">
                <button class="inline-block relative" @click="notifMenu()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span v-if="notificationsToShow.length>0"
                    class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-purple-400 bg-purple-600"
                  ></span>
                </button>

                <div
                  v-if="openNotifMenu"
                  class="min-[320px]:right-26 min-[320px]:top-20 min-[320px]:mt-10 min-[320px]:w-2/3 drop-down md:w-[380px] max-h-[400px] overflow-auto flex flex-col items-center bg-white rounded-md shadow absolute md:mt-0 md:top-12 lg:mr-10 lg:right-12"
                >
                  <!-- <div class="flex items-center justify-between my-4 px-8">
                  <p class="text-xs text-blue-500 cursor-pointer">Clear all</p>
                </div> -->
                  <ul class="divide-y">
                    
                    <li
                    
                    v-for="(notification, index) in notificationsToShow"
                    :key="index"
                    
                    class="py-4 px-2 flex items-center hover:bg-gray-50 text-black text-sm "
                    >
                    <!-- <router-link :to="`/job/${notification.job_id}/apply`"> -->
                      <!-- <img src="https://readymadeui.com/profile_2.webp" class="w-12 h-12 rounded-full shrink-0" /> -->
                      <div class="ml-6">
                        <router-link :to="`/job/${notification.data.job_id}/apply`" class="cursor-pointer">
                        <h3 class="text-sm text-[#333] font-semibold">
                          Your have a new message, for the job role
                          {{ notification.data.job_title }}
                        </h3>
                      </router-link>
                        <p class="text-xs text-gray-700 mt-2">{{ notification.data.message }}</p>
                      <div class="flex flex-row justify-between">
                        <p class="text-xs text-indigo-500 leading-3 mt-2">
                          {{ notification.data.created_at }}
                        </p>
                        <button
                          class='min-w-2 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-blue-800'
                          @click="markAsRead(notification.data.id)"
                          > Mark As Read
                        </button>
                      </div>
                      </div>
                      <!-- </router-link> -->

                    </li>
                  </ul>
                  <p v-if="!notificationsToShow.length>0"
                  class="text-sm px-4 mt-6 mb-4 inline-block text-blue-500 cursor-pointer items-center">
                    No Notifications yet!
                </p>
                <p v-else-if="notificationsToShow.length>4 && !view"
                class="text-sm px-4 mt-6 mb-4 inline-block text-blue-500 cursor-pointer items-center"
                @click="viewAll()">
                  View all Notifications
                </p>
                </div>
              </div>
              <div @click="userMenu()">
                <img
                  :src="`${userPic}`"
                  class="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center"
                />
                <div
                  v-if="openUserMenu"
                  class="drop-down w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 lg:right-3"
                >
                  <ul>
                    <li class="px-3 py-3 text-sm font-medium hover:bg-slate-400">
                      <router-link
                        :to="
                          store.getters.isRole === 'employer'
                            ? `/employer/${store.getters.User.id}`
                            : `/candidate/${store.getters.User.id}`
                        "
                        class="flex space-x-2 items-center"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                          </svg>
                        </span>
                        <span> User Dashboard </span>
                      </router-link>
                    </li>
                    <li class="px-3 py-3 text-sm font-medium hover:bg-slate-400">
                      <router-link
                        :to="
                          store.getters.isRole === 'employer'
                            ? `/employer/${store.getters.User.id}/jobs`
                            : `/candidate/${store.getters.User.id}/applications`
                        "
                        class="flex space-x-2 items-center"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                            />
                          </svg>
                        </span>
                        <span v-if="store.getters.isRole === 'employer'">Posted Jobs</span>
                        <span v-else> Applied Jobs </span>
                      </router-link>
                    </li>
                    <li
                      @click="handleLogout"
                      class="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400 cursor-pointer"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </span>
                      <span> Logout </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useRouter } from 'vue-router'
import axios from 'axios'

const store = useStore()
const route = useRouter()

const userPic = computed(() => {
  console.log(' I was called', `'${store.getters.User.profile_pic}'`)
  return store.getters.User.profile_pic
    ? `${store.getters.User.profile_pic}`
    : 'https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png'
})

const openUserMenu = ref(false)
const openNotifMenu = ref(false)
const notifications = ref([])
const apiProgress = ref(true)
const view = ref(false)
const newNotif = ref(false)
onMounted(async () => {
  try {
    const res = await axios.get(`/api/user/${store.getters.User.id}/notifications`)
    // console.log(res)
    notifications.value = res.data.notifications
      console.log(notifications.value)
    apiProgress.value = false
    // console.log(user.role)
  } catch (error) {
    throw error
  }
})

const viewAll = function () {
  view.value = !view.value
}

const notificationsToShow = computed(() => {
  if (view.value) {
    return notifications.value
  } else {
    return notifications.value.slice(0, 5)
  }
})

const notifMenu = function () {
  openNotifMenu.value = !openNotifMenu.value
  if (!openNotifMenu.value) {
    view.value = false
  } else {
    openUserMenu.value = false
  }
}

const userMenu = function () {
  openUserMenu.value = !openUserMenu.value
  if (openUserMenu.value) {
    openNotifMenu.value = false
  }
}

const markAsRead = async(notificationId)=>{
    try {
        const response = await axios.put(`/api/user/${store.getters.User.id}/notification/${notificationId}`);
        console.log(response.data); // Log the response if needed
        // Update the UI to reflect the read status
        // For example, remove the notification from the list
        notifications.value.splice(notificationId, 1)
    } catch (error) {
        console.error(error); // Handle errors if necessary
    }
}

const handleLogout = async () => {
  try {
    await store.dispatch('logout')
    //Showing message to user
    toast('Logged Out Successfully!', {
      type: 'success',
      autoClose: 1000,
      dangerouslyHTMLString: true
    })

    setTimeout(() => {
      route.push('/login')
    }, 2000)
  } catch (error) {
    toast('Internal Server Error', {
      type: 'error',
      autoClose: 1000,
      dangerouslyHTMLString: true
    })
  }
}
</script>
