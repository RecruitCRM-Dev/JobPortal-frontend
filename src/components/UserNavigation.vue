<template>
  <div class="flex space-x-5 justify-center items-center p-5 m-3">
    <router-link
      :to="`/candidate/${store.getters.User.id}`"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === `/candidate/${store.getters.User.id}` }"
      >Overview</router-link
    >
    <router-link
      :to="`/candidate/${store.getters.User.id}/update`"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === `/candidate/${store.getters.User.id}/update` }"
      >Profile Update</router-link
    >
    <router-link
      :to="`/candidate/${store.getters.User.id}/applications`"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === `/candidate/${store.getters.User.id}/applications` }"
      >Applied Jobs</router-link
    >
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { onMounted } from 'vue'

const store = useStore()
const router = useRouter()

onMounted(async () => {
if (!store.getters.isLoggedIn) {
  router.push('/login')
}
})
</script>
