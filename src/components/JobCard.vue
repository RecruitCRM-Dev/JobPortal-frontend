<template>
  <div
    class="cursor-pointer transition-[0.2s] px-4 py-5 rounded-lg hover:scale-[1.02] border border-gray-200"
  >
    <div>
      <svg
        class="shadow-none w-[46px] p-2.5 rounded-lg"
        viewBox="0 -13 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style="background-color: #2e2882"
      >
        <g fill="#feb0a5">
          <path
            d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0"
          />
          <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
        </g>
        <path
          d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
          fill="#feb0a5"
        />
      </svg>
      <div
        class="bg-[color:var(--placeholder-color)] shadow-[-6px_0_0_0_var(--placeholder-color),6px_0_0_0_var(--placeholder-color)] w-1 h-1 ml-auto mr-2 p-0 rounded-[50%] border-0"
      ></div>
    </div>
    <div class="font-semibold text-sm mt-4">{{ job.attributes.title }}</div>
    <div class="text-[color:var(--subtitle-color)] text-[13px] leading-[1.6em] mt-3.5">
      {{ job.attributes.description }}
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
      <!-- <span
        class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
        >Rs. {{ job.salary }}</span
      > -->
    </div>
    <div class="mt-4">
      <router-link :to="`/job/${job.job_id}/apply`">
        <button
          type="button"
          class="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Apply Now
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true
  }
})
</script>