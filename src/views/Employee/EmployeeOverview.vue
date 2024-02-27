<template>
  <div>
    <AppHeader />
    <section>
      <div>
        <div class="container mx-auto py-8">
          <div class="bg-white mt-3">
            <h2 class="text-center mt-12 text-3xl text-gray-900">What jobseeker will see</h2>
          </div>
          <EmployeeNavigation />
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-white shadow-xl rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    class="w-32 h-32 rounded-full mb-4 shrink-0"
                  />
                  <h1 class="text-xl font-bold">RecruitCRM</h1>
                  <p class="text-gray-700 text-sm">SASS</p>
                  <div class="flex space-x-1 justify-center items-center">
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

                    <p class="text-gray-700 text-sm">India</p>
                  </div>

                  <!-- Social Icons bar -->
                  <ul class="flex gap-1.5 justify-center mt-5">
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                      >
                        <svg
                          class="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                      >
                        <svg
                          class="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                      >
                        <svg
                          class="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                      >
                        <svg
                          class="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>

                  <!-- <div class="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      class="text-indigo-400 inline-flex items-center hover:text-white border border-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                      >Contact</a
                    >
                    <a
                      href="#"
                      class="text-indigo-400 inline-flex items-center hover:text-white border border-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                      >Resume</a
                    >
                  </div> -->
                </div>
              </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow-xl rounded-lg p-6">
                <h2 class="text-xl font-bold mb-4">About Company</h2>
                <p class="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                  tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit
                  egestas suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat.
                  Nulla vulputate pharetra tellus, in luctus risus rhoncus id.
                </p>

                <!-- <hr class="my-6 border-t border-gray-300" />

                <div class="flex flex-col">
                  <h1 class="text-xl font-bold mb-2">Skills</h1>

                  TODO print all the skills here 
                  <div class="flex flex-wrap gap-3">
                    <div
                      v-for="skill in skills"
                      :key="skill"
                      class="text-indigo-400 inline-flex items-center hover:text-white border border-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                    >
                      {{ skill }}
                    </div>
                  </div>
                </div>

                <hr class="my-6 border-t border-gray-300" />

                <h2 class="text-xl font-bold mt-6 mb-4">Education</h2>
                <div class="mb-6">
                  <p class="mt-2">We will write here the education field.</p>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import EmployeeNavigation from '@/components/EmployeeNavigation.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

//const skills = ['VueJs', 'Laravel', 'HTML', 'CSS ', 'JS', 'C++']

const store = useStore()
const router = useRouter()
onMounted(async () => {
  if (!store.getters.isLoggedIn) {
    router.push('/login')
  }
})
</script>
