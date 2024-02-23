<template>
  <Layout title="Welcome to Astrolus.">
    <main class="space-y-10 mb-40">
      <HeroSection />
      <Job />
      <NewsLetter />
      <Testimonials />
    </main>
  </Layout>
</template>

<script setup>
import NewsLetter from '../components/NewsLetter.vue'
import Job from '../components/Job.vue'
import HeroSection from '../components/HeroSection.vue'
import Testimonials from '../components/Testimonials.vue'
</script>
