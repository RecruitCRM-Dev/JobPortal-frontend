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
        <tr v-for="(applicant, index) in applicants" :key="index" class="text-gray-700">
          <td class="flex gap-3 whitespace-nowrap p-5 text-sm text-gray-700">
            <div class="relative h-10 w-10">
              <img
                class="h-full w-full rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span
                class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white font-semibold"
              ></span>
            </div>
            <div class="text-sm">
              <div class="font-medium text-gray-700">{{ applicant.name }}</div>
              <div class="text-gray-400">{{ applicant.email }}</div>
            </div>
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
            <div v-else>
              <button
                class="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                @click="updateStatus(applicant), toggleSelect(index)"
              >
                submit
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

const selectedItem = ref(null)

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

const applicants = ref([
  {
    id: 1,
    name: 'John Doe',
    role: 'Developer',
    email: 'john.doe@example.com',
    status: 'Just_Applied',
    created_at: '2024-03-01T12:30:00Z'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Designer',
    email: 'jane.smith@example.com',
    status: 'Rejected',
    created_at: '2024-02-28T15:45:00Z'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    role: 'Manager',
    email: 'bob.johnson@example.com',
    status: 'Selected',
    created_at: '2024-02-27T09:15:00Z'
  }
])

const toggleSelect = (index) => {
  selectedItem.value = selectedItem.value === index ? null : index
}

const updateStatus = async (applicant) => {
  try {
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