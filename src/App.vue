<template>
  <div class="bg-white dark:bg-gray-900">
    <router-view></router-view>
  </div>
</template>

<script setup>
// import axios from 'axios';
// import { onMounted } from 'vue'
// import { useStore } from 'vuex'
// const store = useStore()

// // onMounted(async () => {
// //   // window.scrollTo(0, 0);
// //   // await store.dispatch('tryLogIn')
// // })
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