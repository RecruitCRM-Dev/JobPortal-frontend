<template>
  <div class="flex space-x-5 justify-center items-center p-5 m-3">
    <router-link
      to="/employer"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === '/employer' }"
      >Overview</router-link
    >
    <router-link
      to="/employer/update"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === '/employer/update' }"
      >Profile Update</router-link
    >
    <router-link
      :to="`/employer/${store.getters.User.id}/job/post`"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === `/employer/${store.getters.User.id}/job/post` }"
      >Post a Job</router-link
    >
    <router-link
      :to="`/employer/${store.getters.User.id}/jobs`"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === `/employer/${store.getters.User.id}/jobs` }"
      >Jobs Posted</router-link
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