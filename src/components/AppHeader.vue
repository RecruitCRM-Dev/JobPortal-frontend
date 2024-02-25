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
              <div aria-hidden="true" class="flex space-x-1">
                <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                <div class="h-6 w-2 bg-primary"></div>
              </div>
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
                    <span>Jobs</span>
                  </router-link>
                </li>
              </ul>
            </div>

            <div v-if="!isLoggedIn" class="mt-12 lg:mt-0">
              <router-link
                to="/candidate/register"
                class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-sm font-semibold text-white">Candidate Signup</span>
              </router-link>
            </div>
            <div v-if="!isLoggedIn" class="mt-12 lg:mt-0">
              <router-link
                to="/employer/register"
                class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-sm font-semibold text-white">Employer Signup</span>
              </router-link>
            </div>
            <div v-else class="mt-5 lg:mt-0">
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
                      <router-link to="/candidate" class="flex space-x-2 items-center">
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
                    <li
                      class="px-3 py-3 text-sm font-medium hover:bg-slate-400"
                    >
                    <router-link to="/candidate/applications" class="flex space-x-2 items-center">
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
                      <span> Applied Jobs </span>
                    </router-link>
                    </li>
                    <li
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
import { ref } from 'vue'
import Container from './Container.vue'

const isLoggedIn = ref(true)
const openUserMenu = ref(false)
</script>
