<template>
  <div>
    <AppHeader />
    <section>
      <div class="container mx-auto py-8">
        <div class="bg-white mt-3">
          <h2 class="text-center mt-12 text-3xl text-gray-900">Your Applications</h2>
        </div>
        <UserNavigation />

        <!-- all the jobs will be listed here -->

        <div class="max-w-4xl mx-auto">
          <main class="mx-auto sm:px-6 lg:px-8 flex">
            <div class="flex-1 w-full">
              <div class="sticky top-0 z-10 py-10 w-full m-3 bg-white border-b border-gray-200">
                <div class="lg:flex items-baseline justify-between">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900">Insights</h1>
                </div>
              </div>
              <div class="bg-white flex flex-col items-center rounded-md shadow-lg p-10 m-3">
                <PieChart :labels="labels" :series="series" class="w-full m-3" />
                <div>On the basis of status</div>
              </div>
              <div class="bg-white flex flex-col items-center rounded-md shadow-lg p-10 m-3">
                <BarChart :labels="labels" :series="_series" colors="#00E396" class="w-full m-3" />
                <div>On the basis of job type</div>
              </div>
              <div class="bg-white flex flex-col items-center rounded-md shadow-lg p-10">
                <BarChart :labels="labels" :series="_series" colors="#775DD0" class="w-full m-3" />
                <div>On the basis of categories</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import UserNavigation from '@/components/UserNavigation.vue'
import { onMounted, ref } from 'vue'
import BarChart from '@/components/chart/BarChart.vue'
import PieChart from '@/components/chart/PieChart.vue'

const labels = ref(['Just Applied', 'Resume Viewed', 'Under Consideration', 'Selected', 'Rejected'])
const series = ref([35, 41, 36, 26, 45])

const _series = ref([
  {
    name: 'Divyanshu',
    data: [35, 41, 36, 26, 45]
  }
])

onMounted(async () => {
  //   if (!store.getters.isLoggedIn) {
  //     router.push('/login')
  //   }
  //   try {
  //     const res = await axios.get(`/api/myJobs?user_id=${store.getters.User.id}`)
  //     // console.log()
  //     jobApplications.value = res.data.job_applications
  //     console.log(res.data.job_applications)
  //     apiProgress.value = false
  //   } catch (error) {
  //     console.log(error)
  //   }
})
</script>
