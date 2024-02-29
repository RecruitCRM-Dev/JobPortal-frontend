<template>
<!-- component --> 
<AppHeader />
<div class="pt-20 pl-6 flex">
    <h1 class="font-bold text-2xl">
        Applicants
    </h1>
</div>
<section class="container mx-auto p-6">
  <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div class="w-full overflow-x-auto">
      <p v-if="applicants.length == 0" class="text-center my-10 text-gray-500">
                No applicants yet!                
        </p>
      <table v-else class="w-full">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Email</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Date</th>
          </tr>
        </thead>
        
        <tbody class="bg-white">
          
          <tr 
          v-for="applicant in applicants"
            :key="applicant"
          class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>

                <router-link
                to="/candidate"
                class="text-black"
                :class="{ 'border-b-4 border-indigo-300': $route.path === '/candidate' }">
                  <p class="font-semibold text-black">{{applicant.user.name}}</p>
                </router-link>

                  <!-- <p class="font-semibold text-black">{{applicant.user.name}}</p> -->
                  <p class="text-xs text-gray-600">{{applicant.user.role}}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">{{applicant.user.email}}</td>
            <td class="px-4 py-3 text-xs border">
                <select value="status" class="bg-transparent" v-model="applicant.status" @change="updateStatus(applicant)">
                    <option value="Just_Applied">Applied</option>
                    <option value="ResumeViewed">Resume Viewed</option>
                    <option value="Underconsideration">Under Consideration</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Selected">Selected</option>
                </select>
            </td>
            <td class="px-4 py-3 text-sm border">{{formatDate(applicant.created_at)}}</td>
          </tr>
          <!--  -->
        </tbody>
      </table>
    </div>
  </div>
</section>
</template>
<script setup>
    import AppHeader from '@/components/AppHeader.vue'
    import { onMounted, ref } from 'vue'
    import axios from 'axios'
    import { useStore } from 'vuex'
    import { useRoute } from 'vue-router'
    import { toast } from 'vue3-toastify'

    import { useRouter } from 'vue-router'
    const store = useStore()
    const router = useRouter()
    const applicants = ref([])
    const apiProgress = ref(true)
    const route = useRoute()

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Adjust formatting as needed
    };
    const updateStatus = async (applicant) => {
      try {
      
        await axios.put(`/api/employer/${store.getters.User.id}/job/${applicant.job_id}`, { userId:applicant.user.id,status: applicant.status })
        toast('Status updated successfully!', {
          type: 'success',
          autoClose: 1000,
          dangerouslyHTMLString: true
        })
        console.log('Updated status')
      } catch (error) {
        console.error('Error updating status:', error)
      }
    }
    onMounted(async () => {
      if (!store.getters.isLoggedIn) {
        router.push('/login')
      }
      try {
        const res = await axios.get(`/api/employer/${store.getters.User.id}/job/${route.params.job_id}`)
        // console.log(res)
        applicants.value = res.data.users
        console.log(applicants.value)
        apiProgress.value = false
        // console.log(user.role)
      } catch (error) {
        console.log(error)
      }
    })
</script>