<template>
  <div class="bg-white dark:bg-gray-900">
    <router-view></router-view>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

onMounted(async () => {
  await axios.get('sanctum/csrf-cookie')
  await store.dispatch('tryLogIn')
})
</script>

<style>
html {
  font-family: Urbanist, sans-serif;
  scroll-behavior: smooth;
}

body {
  margin: 0;
}
</style>