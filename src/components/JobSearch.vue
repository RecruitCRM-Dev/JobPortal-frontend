<template>
    <div class="pt-20 w-full">
          <form class="grid lg:grid-cols-10 items-center mx-auto w-full">
            <!-- First Field: Search -->
            <div class="flex lg:col-span-3">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                  class="bg-gray-50 rounded-l-md h-14 border-l-0 border-t-0 border-b-0 border-r-1 focus:outline-none border-gray-200 text-gray-900 text-sm block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow"
                  placeholder="Enter job name..."
                  required
                />
              </div>
            </div>

            <!-- Second Field: Location -->
            <div class="flex lg:col-span-2">
              <label for="location" class="sr-only">Location</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-blue-700"
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
                </div>
                <input
                  type="text"
                  id="location"
                  class="bg-gray-50 h-14 border-l-0 border-t-0 border-b-0 border-r-1 focus:outline-none border-gray-200 text-gray-900 text-sm block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow"
                  placeholder="Location"
                  required
                />
              </div>
            </div>

            <!-- Third Field: Job Type -->
            <div class="flex lg:col-span-2">
              <label for="job-type" class="sr-only">Job Type</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-blue-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="job-type"
                  class="bg-gray-50 h-14 border-l-0 border-t-0 border-b-0 border-r-1 focus:outline-none border-gray-200 text-gray-900 text-sm block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow"
                  placeholder="Job Type"
                  required
                />
              </div>
            </div>

            <!-- Fourth Field: Salary Range -->
            <div class="flex lg:col-span-2">
              <label for="salary" class="sr-only">Salary</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-blue-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="salary"
                  class="bg-gray-50 h-14 border-l-0 border-t-0 border-b-0 border-r-1 focus:outline-none border-gray-200 text-gray-900 text-sm block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow"
                  placeholder="Salary Range"
                  required
                />
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="h-14 text-sm font-medium rounded-r-md text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span class="font-bold">Find Job</span>
            </button>
          </form>
        </div>
</template>

<script setup>
</script>