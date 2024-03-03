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
              <div
                v-if="!apiProgress"
                class="bg-white flex flex-col items-center rounded-md shadow-lg p-10 m-3"
              >
                <PieChart :labels="statusLabels" :series="statusSeries" class="w-full m-3" />
                <div>On the basis of status</div>
              </div>
              <div
                v-if="!apiProgress"
                class="bg-white flex flex-col items-center rounded-md shadow-lg p-10 m-3"
              >
                <BarChart
                  :labels="categoryLabels"
                  :series="categorySeries"
                  colors="#00E396"
                  class="w-full m-3"
                />
                <div>On the basis of job type</div>
              </div>
              <div
                v-if="!apiProgress"
                class="bg-white flex flex-col items-center rounded-md shadow-lg p-10"
              >
                <BarChart
                  :labels="typeLabels"
                  :series="typeSeries"
                  colors="#775DD0"
                  class="w-full m-3"
                />
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
import axios from '@/api'
import UserNavigation from '@/components/UserNavigation.vue'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import BarChart from '@/components/chart/BarChart.vue'
import PieChart from '@/components/chart/PieChart.vue'
// import { useRoute, useRouter } from 'vue-router'
const apiProgress = ref(true)
const store = useStore()
let statusLabels, statusSeries, categoryLabels, categorySeries, typeLabels, typeSeries

onMounted(async () => {
  try {
    const res = await axios.get(`/api/user/profile/${store.getters.User.id}/insights`)

    const data = res.data

    statusLabels = Object.keys(data.status)
    statusSeries = Object.values(data.status)

    categoryLabels = Object.keys(data.category)

    typeLabels = Object.keys(data.type)

    categorySeries = [
      {
        name: 'Divyanshu',
        data: Object.values(data.category)
      }
    ]

    typeSeries = [
      {
        name: 'Divyanshu',
        data: Object.values(data.type)
      }
    ]
    apiProgress.value = false
  } catch (error) {
    console.log(error)
  }
})
</script>
