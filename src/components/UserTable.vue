<template>
  <div class="p-5 h-screen">
    <table class="w-full">
      <thead class="bg-slate-100">
        <tr>
          <th class="w-80 p-5 text-sm font-semibold tracking-wide text-left">Profile</th>
          <th class="p-5 text-sm font-semibold tracking-wide text-left">Status</th>
          <th class="p-5 text-sm font-semibold tracking-wide">Update</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr v-for="(applicant, index) in props.applicants" :key="index" class="text-gray-700">
          <td>
            <router-link class="flex gap-3 whitespace-nowrap p-5 text-sm text-gray-700" :to="`/candidate/${applicant.user.id}`">
              <div class="relative h-10 w-10">
                <img
                  class="h-full w-full rounded-full object-cover object-center"
                  :src="applicant.user.profile_pic ? applicant.user.profile_pic : 'https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png'"
                  alt="Applicant Profile Image"
                />
              </div>
              <div class="text-sm">
                <div class="font-medium text-gray-700">{{ applicant.user.name }}</div>
                <div class="text-gray-400">{{ applicant.user.email }}</div>
              </div>
            </router-link>
          </td>
          <td class="whitespace-nowrap p-5 text-sm text-gray-700">
            <span
              v-if="selectedItem !== index"
              class="p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50"
              :class="getStatusColorClass(applicant.status)"
              >{{ getStatusLabel(applicant.status) }}</span
            >
            <select
              v-if="selectedItem === index"
              v-model="applicant.status"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Just_Applied" :selected="applicant.status === 'Just_Applied'">
                Just Applied
              </option>
              <option value="ResumeViewed" :selected="applicant.status === 'ResumeViewed'">
                Resume Viewed
              </option>
              <option
                value="Underconsideration"
                :selected="applicant.status === 'Underconsideration'"
              >
                Under Consideration
              </option>
              <option value="Rejected" :selected="applicant.status === 'Rejected'">Rejected</option>
              <option value="Selected" :selected="applicant.status === 'Selected'">Selected</option>
            </select>
          </td>
          <td class="whitespace-nowrap p-5 text-sm text-gray-700 flex justify-center items-center">
            <div
              v-if="selectedItem !== index"
              @click="toggleSelect(index)"
              class="h-10 w-10 cursor-pointer relative flex justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 text-gray-700"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <div v-else class="space-x-2">
              <button
                class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                @click="toggleSelect(index)"
              >
                Cancel
              </button>
              <button
                class="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                @click="updateStatus(applicant), toggleSelect(index)"
              >
                Submit
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { toast } from 'vue3-toastify'
import { useStore } from 'vuex'
import axios from '@/api'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()

const selectedItem = ref(null)

const props = defineProps(['applicants'])

//TODO: use computed for the label of the status

const getStatusColorClass = (status) => {
  switch (status) {
    case 'Selected':
      return 'text-green-800 bg-green-200'
    case 'Rejected':
      return 'text-red-800 bg-red-200'
    case 'ResumeViewed':
      return 'text-yellow-800 bg-yellow-200'
    case 'Just_Applied':
      return 'text-pink-800 bg-pink-200'
    case 'Underconsideration':
      return 'text-indigo-800 bg-indigo-200'
    default:
      return 'default-class'
  }
}

const getStatusLabel = computed(() => {
  return (status) => {
    switch (status) {
      case 'Selected':
        return 'Selected'
      case 'Rejected':
        return 'Rejected'
      case 'ResumeViewed':
        return 'Resume Viewed'
      case 'Just_Applied':
        return 'Just Applied'
      case 'Underconsideration':
        return 'Under Consideration'
      default:
        return 'Unknown Status'
    }
  }
})

const toggleSelect = (index) => {
  selectedItem.value = selectedItem.value === index ? null : index
}

const updateStatus = async (applicant) => {
  try {
    console.log(applicant)
    const res = await axios.put(
      `/api/employer/${store.getters.User.id}/jobs/${route.params.job_id}`,
      {
        userId: applicant.user_id,
        status: applicant.status
      }
    )
    console.log(res)
    toast('Status updated successfully!', {
      type: 'success',
      autoClose: 1000,
      dangerouslyHTMLString: true
    })
    console.log(applicant, 'Updated status')
  } catch (error) {
    console.error('Error updating status:', error)
  }
}
</script>
