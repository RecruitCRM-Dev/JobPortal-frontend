<template>
  <div class="flex space-x-5 justify-center items-center p-5 m-3">
    <router-link
      to="/candidate/"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === '/candidate' }"
      >Overview</router-link
    >
    <router-link
      to="/candidate/update"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === '/candidate/update' }"
      >Profile Update</router-link
    >
    <router-link
      to="/candidate/applications"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === '/candidate/applications' }"
      >Applied Jobs</router-link
    >
  </div>
</template>
