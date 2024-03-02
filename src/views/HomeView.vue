<template>
  <AppLayout>
    <main class="space-y-10 mb-40">
      <HeroSection />
      <Job />
      <NewsLetter />
      <Testimonials />
    </main>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import NewsLetter from '../components/NewsLetter.vue'
import Job from '../components/Job.vue'
import HeroSection from '../components/HeroSection.vue'
import Testimonials from '../components/Testimonials.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>
