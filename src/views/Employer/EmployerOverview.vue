<template>
  <div>
    <AppHeader />
    <section>
      <div>
        <div class="container mx-auto py-8">
          <div class="bg-white mt-3">
            <h2 class="text-center mt-12 text-3xl text-gray-900">Overview</h2>
          </div>
          <EmployerNavigation />
          <div v-if="!apiProgress" class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-white shadow-xl rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <img
                    :src="
                      userPic
                        ? userPic
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMy48opkiA5UkBbnwDGXkqV9uDcORBTDo1uiqfHxIo-w&s'
                    "
                    class="w-32 h-32 rounded-full mb-4 shrink-0"
                  />
                  <h1 class="text-xl font-bold">{{ employer.name }}</h1>
                  <!-- <p class="text-gray-700 text-sm">SASS</p> -->
                  <div class="flex space-x-1 justify-center items-center" v-if="employer.address">
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

                    <p class="text-gray-700 text-sm">{{ employer.address }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow-xl rounded-lg p-6">
                <h2 class="text-xl font-bold mb-4">About Company</h2>
                <p class="text-gray-700">
                  {{ employer.description }}
                </p>
              </div>
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
import EmployerNavigation from '@/components/EmployerNavigation.vue'
import Spinner from '@/components/Spinner.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from '@/api'

//const skills = ['VueJs', 'Laravel', 'HTML', 'CSS ', 'JS', 'C++']

const store = useStore()
const router = useRouter()
const employer = ref()
const apiProgress = ref(true)
const userPic = ref(null)
const route = useRoute()

onMounted(async () => {
  if (!store.getters.isLoggedIn) {
    router.push('/login')
  }
  try {
    const res = await axios.get(`/api/employer/profile/${route.params.id}`)
    employer.value = res.data.data.attributes
    userPic.value = res.data.data.attributes.profile_pic
    apiProgress.value = false
  } catch (error) {
    router.back()
    console.log(error)
    apiProgress.value = false

  }
})
</script>
