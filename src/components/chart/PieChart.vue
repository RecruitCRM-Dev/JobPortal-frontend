<template>
  <div class="bg-black-900">
    <apexchart type="pie" width="500" :options="chartOptions" :series="series">hi</apexchart>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps(['labels', 'series'])

const series = props.series
const labels = props.labels

const chartOptions = reactive({
  chart: {
    width: 300,
    type: 'pie'
  },
  labels: labels,
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 400,
      options: {
        chart: {
          width: 280
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
})
</script>
