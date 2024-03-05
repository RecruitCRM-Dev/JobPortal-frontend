<template>
  <div>
    <AppHeader />
    <section>
      <div class="container mx-auto py-8">
        <div class="bg-white mt-3">
          <h2 class="text-center mt-12 text-3xl text-gray-900">Your Application Insights</h2>
        </div>
        <UserNavigation />

        <!-- all the jobs will be listed here -->

        <div class="max-w-4xl mx-auto">
          <main class="mx-auto sm:px-6 lg:px-8 flex">
            <div class="flex-1 w-full">
              <div class="py-10 w-full m-3 bg-white border-b border-gray-200">
                <div class="lg:flex items-baseline justify-between mt-5">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900">Insights</h1>
                </div>
              </div>
              <div v-if="!apiProgress">
                <div class="bg-white flex flex-col items-center rounded-md shadow-lg p-10 m-3">
                  <PieChart :labels="statusLabels" :series="statusSeries" class="w-full m-3" />
                  <div>On the basis of status</div>
                </div>
                <div class="bg-white flex flex-col items-center rounded-md shadow-lg p-10 m-3">
                  <BarChart
                    :labels="categoryLabels"
                    :series="categorySeries"
                    colors="#00E396"
                    class="w-full m-3"
                  />
                  <div>On the basis of job type</div>
                </div>
                <div class="bg-white flex flex-col items-center rounded-md shadow-lg p-10">
                  <BarChart
                    :labels="typeLabels"
                    :series="typeSeries"
                    colors="#775DD0"
                    class="w-full m-3"
                  />
                  <div>On the basis of categories</div>
                </div>
              </div>
              <div v-else class="flex justify-center items-center mt-20">
                <Spinner medium />
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
import Spinner from '@/components/Spinner.vue'
import axios from '@/api'
import UserNavigation from '@/components/UserNavigation.vue'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import BarChart from '@/components/chart/BarChart.vue'
import PieChart from '@/components/chart/PieChart.vue'
import { useRoute, useRouter } from 'vue-router'
// import { useRoute, useRouter } from 'vue-router'
const apiProgress = ref(true)
const store = useStore()
let statusLabels, statusSeries, categoryLabels, categorySeries, typeLabels, typeSeries
const router = useRouter()
const route = useRoute()

onMounted(async () => {
  try {
    const res = await axios.get(`/api/user/profile/${route.params.id}/insights`)

    const data = res.data
    // console.log('hi', data)

    statusLabels = Object.keys(data.status)
    statusSeries = Object.values(data.status)

    categoryLabels = Object.keys(data.category)

    typeLabels = Object.keys(data.type)

    categorySeries = [
      {
        name: store.getters.User.name,
        data: Object.values(data.category)
      }
    ]

    typeSeries = [
      {
        name: store.getters.User.name,
        data: Object.values(data.type)
      }
    ]
    apiProgress.value = false
  } catch (error) {
    router.back()
    console.log(error)
    apiProgress.value = false
  }
})
</script>
