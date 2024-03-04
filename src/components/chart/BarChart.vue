<template>
  <div>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['labels', 'series', 'colors'])
const series = props.series

const chartOptions = ref({
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: props.labels
  },
  yaxis: {
    title: {
      text: 'Applications'
    }
  },
  fill: {
    opacity: 1,
    colors: [props.colors]
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + ' applications'
      }
    }
  }
})
</script>
