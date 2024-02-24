<template>
  <div class="bg-white dark:bg-gray-900">
    <router-view></router-view>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
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