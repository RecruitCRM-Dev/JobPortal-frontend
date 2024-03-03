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
            
            <div v-else class="flex mt-5 lg:mt-0 lg:items-center">
              <div v-if="store.getters.isRole==='candidate'" class="mt-12 lg:mt-0 lg:mr-10">
                <button type="button"
                  @click="openNotifMenu = !openNotifMenu"
                  class="w-10 h-10 hover:ring flex items-center justify-center rounded-full text-white text-sm font-semibold border-none outline-none bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-600 ring-indigo-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer fill-[#fff]"
                    viewBox="0 0 371.263 371.263">
                    <path
                      d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                      data-original="#000000"></path>
                  </svg>
                </button>
                
                <div
                  v-if="openNotifMenu"
                  class="drop-down w-[410px] max-h-[400px] overflow-auto bg-white rounded-md shadow absolute top-12 lg:mr-10 lg:right-12"
                >
                <div class="flex items-center justify-between my-4 px-4">
                  <p class="text-xs text-blue-500 cursor-pointer">Clear all</p>
                </div>
                <ul class="divide-y">
                  <li 
                  v-for="notification in notifications"
                  :key="notification.id"
                  class='py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer'>
                  <!-- <router-link :to="`/job/${notification.job_id}/apply`"> -->
                    <img src="https://readymadeui.com/profile_2.webp" class="w-12 h-12 rounded-full shrink-0" />
                    <div class="ml-6">
                      <h3 class="text-sm text-[#333] font-semibold">Your have a new message from </h3>
                      <p class="text-xs text-gray-700 mt-2">{{notification.data.message}}</p>
                      <p class="text-xs text-blue-500 leading-3 mt-2">{{notification.created_at}}</p>
                    </div>
                  <!-- </router-link> -->
                  </li>
                </ul>
              </div>
              </div>
              <div
                @click="openUserMenu = !openUserMenu"
                class="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')]"
              >
                <div
                  v-if="openUserMenu"
                  class="drop-down w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 lg:right-3"
                >
                  <ul>
                    <li class="px-3 py-3 text-sm font-medium hover:bg-slate-400">
                      <router-link :to="store.getters.isRole==='employer' ? `/employer/${store.getters.User.id}`: `/candidate/${store.getters.User.id}`" class="flex space-x-2 items-center">
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
                      <router-link :to="store.getters.isRole==='employer' ? `/employer/${store.getters.User.id}/jobs` : `/candidate/${store.getters.User.id}/applications`" class="flex space-x-2 items-center">
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
                        <span v-if="store.getters.isRole==='employer'">Posted Jobs</span>
                        <span v-else> Applied Jobs </span>
                      </router-link>
                    </li>
                    <li
                      @click="handleLogout"
                      class="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400"
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
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useRouter } from 'vue-router'
import axios from 'axios'

const store = useStore()
const route = useRouter()

const openUserMenu = ref(false)
const openNotifMenu = ref(false)
const notifications = ref()
const apiProgress = ref(true)

const toggleMenu = function(){
    if (openUserMenu.value ==true){
      openNotifMenu.value = false
    }
    else if(openNotifMenu.value == true){
      openUserMenu.value = false
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

onMounted(async () => {
  
  try {
    const res = await axios.get(`/api/user/${store.getters.User.id}/notifications`)
    console.log(res)
    notifications.value = res.data.notifications
    console.log(notifications.value)
    apiProgress.value = false
    // console.log(user.role)
  } catch (error) {
    console.log(error)
  }
})
</script>
