<template>
  <router-link :to="`/job/${job.job_id}/apply`"> 
  <div
    class="cursor-pointer transition-[0.2s] px-4 py-5 rounded-lg hover:scale-[1.02] border border-gray-200 max-w-md"
  >
    <div>
      <img class="w-[60px]" :src="companyLogo ? companyLogo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMy48opkiA5UkBbnwDGXkqV9uDcORBTDo1uiqfHxIo-w&s'"/>
      <div
        class="bg-[color:var(--placeholder-color)] shadow-[-6px_0_0_0_var(--placeholder-color),6px_0_0_0_var(--placeholder-color)] w-1 h-1 ml-auto mr-2 p-0 rounded-[50%] border-0"
      ></div>
    </div>
    <div class="font-semibold text-sm mt-4">{{ job.attributes.title }}</div>
    <div class="text-[color:var(--subtitle-color)] text-[13px] leading-[1.6em] mt-3.5">
      {{ truncateDescription(job.attributes.description, 15) }}...
    </div>
    <div class="space-x-2">
      <span
        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
        >{{ job.attributes.category }}</span
      >
      <span
        class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
        >Min. {{ job.attributes.experience }} year</span
      >
    </div>
    <div class="mt-4">
      <router-link :to="`/job/${job.job_id}/apply`">
        <button
          type="button"
          :disabled="isEmployer()"
          :class="isEmployer() ? 'w-full text-white bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800' : 'w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-blue-800'"
        >
          Apply Now
        </button>
      </router-link>
    </div>
  </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const isEmployer = () => {
  // console.log(store.getters.isRole==='employer')
  return store.getters.isRole==='employer'
}
const { job } = defineProps({
  job: {
    type: Object,
    required: true
  }
});

const companyLogo = computed(()=>{
  return job.attributes.posted_by.data.attributes.profile_pic
})
const truncateDescription = (description, words) => {
  // Split the description into words
  const wordsArray = description.split(' ');

  // Take only the specified number of words
  const truncatedDescription = wordsArray.slice(0, words);

  // Join the words back into a string
  return truncatedDescription.join(' ');
};
</script>