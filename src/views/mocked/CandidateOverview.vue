<template>
  <div>
    <AppHeader />
    <section>
      <div>
        <div class="container mx-auto py-8">
          <div class="bg-white mt-3">
            <h2
              v-if="store.getters.User.id == $route.params.id"
              class="text-center mt-12 text-3xl text-gray-900"
            >
              What recruiters will see
            </h2>
            <h2 v-else class="text-center mt-12 text-3xl text-gray-900 mb-10">
              Candidate Overview
            </h2>
          </div>
          <UserNavigation />
          <div v-if="!apiProgress" class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-white shadow-xl rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <img
                    :src="
                      user.profile_pic
                        ? user.profile_pic
                        : 'https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png'
                    "
                    class="w-32 h-32 rounded-full mb-4 shrink-0 object-cover"
                  />
                  <h1 class="text-xl font-bold">{{ user.name }}</h1>
                  <p v-if="user.role" class="text-gray-700 text-sm">{{ user.role }}</p>
                  <div class="items-center">
                    <p class="text-gray-700 text-sm text-center" v-if="user.address">
                      {{ user.address }}
                    </p>
                  </div>

                  <div class="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      v-if="user.phone"
                      :href="`tel:${user.phone}`"
                      class="text-indigo-400 inline-flex items-center hover:text-white border border-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                      >Contact</a
                    >
                    <a
                      v-if="user.resume"
                      :href="user.resume"
                      target="_blank"
                      class="text-indigo-400 inline-flex items-center hover:text-white border border-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                      >Resume</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow-xl rounded-lg p-6">
                <h2 class="text-xl font-bold mb-4">About Me</h2>
                <p class="text-gray-700">
                  {{ user.about }}
                </p>

                <hr class="my-6 border-t border-gray-300" />

                <div class="flex flex-col">
                  <h1 class="text-xl font-bold mb-2">Skills</h1>

                  <!-- TODO print all the skills here   -->
                  <div class="flex flex-wrap gap-3" v-if="user.skills">
                    <div
                      v-for="skill in user.skills?.split(',')"
                      :key="skill"
                      class="text-indigo-400 inline-flex items-center hover:text-white border border-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2 text-center cursor-pointer"
                    >
                      {{ skill }}
                    </div>
                  </div>
                </div>

                <hr class="my-6 border-t border-gray-300" />

                <h2 class="text-xl font-bold mt-6 mb-4">Education</h2>
                <div class="mb-6">
                  <p class="mt-2">{{ user.education }}</p>
                </div>
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
import UserNavigation from '@/components/UserNavigation.vue'
import Spinner from '@/components/Spinner.vue'
import router from '@/router'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const store = useStore()
const user = ref()
const apiProgress = ref(true)

onMounted(async () => {
  // if (!store.getters.isLoggedIn) {
  //   router.push('/login')
  // }
  try {
    const res = await axios.get(`/api/user/profile/${route.params.id}`)
    // console.log()
    user.value = res.data.user
    apiProgress.value = false
    // console.log(user.role)
  } catch (error) {
    router.back()
    console.log(error)
    apiProgress.value = false
  }
})
</script>
