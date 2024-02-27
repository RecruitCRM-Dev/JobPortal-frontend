<template>
  <div class="flex space-x-5 justify-center items-center p-5 m-3">
    <router-link
      to="/employee"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === '/employee' }"
      >Overview</router-link
    >
    <router-link
      to="/employee/update"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === '/employee/update' }"
      >Profile Update</router-link
    >
    <router-link
      to="/employee/jobpost"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === '/employee/jobpost' }"
      >Post a Job</router-link
    >
    <router-link
      to="/employee/jobs"
      class="text-black"
      :class="{ 'border-b-4 border-indigo-300': $route.path === '/employee/jobs' }"
      >Jobs Posted</router-link
    >
  </div>
</template>
