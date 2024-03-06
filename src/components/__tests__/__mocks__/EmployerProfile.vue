<template>
    <div>
      <AppHeader />
      <section>
        <div class="max-w-2xl mx-auto py-16">
          <div class="mt-3">
            <h2 class="text-center text-3xl text-gray-900">Edit your profile</h2>
          </div>
          <EmployerNavigation />
          <Form @submit="onSubmit" class="flex flex-col py-10 ml-1 lg:px-0 px-5">
            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 items-center">
              <!-- Avtar -->
              <div class="flex flex-col md:flex-row sm:col-span-2 items-center justify-center">
                <div class="h-36 w-full">
                  <img
                    class="w-32 h-32 rounded-full mb-4 shrink-0 object-cover"
                    :src="
                      userPic
                        ? userPic
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMy48opkiA5UkBbnwDGXkqV9uDcORBTDo1uiqfHxIo-w&s'
                    "
                    alt="Rounded profile_pic"
                  />
                </div>
                <div class="w-full mr-2">
                  <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input"
                    >Upload Company Logo</label
                  >
                  <Field
                    class="m-0 block min-w-0 flex-auto border-solid w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2.5"
                    aria-describedby="file_input_help"
                    id="file_input"
                    name="profile_pic"
                    @change="handleProfilePicChange"
                    type="file"
                    accept=".gif, .jpeg, .jpg, .png"
                  />
                  <!-- <p class="mt-1 text-sm text-gray-500" id="file_input_help">
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p> -->
                </div>
              </div>
  
              <!--  Name -->
              <div class="sm:col-span-2">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
                    >Company Name</label
                  >
  
                  <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                    <Field
                      name="name"
                      v-model="formData.name"
                      placeholder=""
                      class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                    />
                  </div>
                  <ErrorMessage name="name" class="text-red-500" />
                </div>
              </div>
  
              <!--  About -->
              <div class="sm:col-span-2">
                <div>
                  <label for="about" class="block mb-2 text-sm font-medium text-gray-900"
                    >About Company</label
                  >
  
                  <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                    <Field
                      name="description"
                      v-model="formData.description"
                      placeholder=""
                      as="textarea"
                      class="h-24 py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                    />
                  </div>
                  <ErrorMessage name="about" class="text-red-500" />
                </div>
              </div>
  
              <!--  Address -->
              <div class="sm:col-span-2">
                <div>
                  <label for="address" class="block mb-2 text-sm font-medium text-gray-900"
                    >Address</label
                  >
  
                  <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                    <Field
                      name="address"
                      v-model="formData.address"
                      placeholder=""
                      class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="formProgress"
              class="block bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              <ButtonSpinner v-if="formProgress" />
              Update
            </button>
          </Form>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { onMounted, reactive, ref } from 'vue'
  
  //import Multiselect from '@vueform/multiselect'
  
  import AppHeader from '@/components/AppHeader.vue'
  import EmployerNavigation from '@/components/EmployerNavigation.vue'
  import Spinner from '@/components/Spinner.vue'
  import ButtonSpinner from '@/components/ButtonSpinner.vue'
  import { Form, Field, ErrorMessage } from 'vee-validate'
  import { toast } from 'vue3-toastify'
  import 'vue3-toastify/dist/index.css'
  import { useForm } from 'vee-validate'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import axios from '@/api'
  
  const store = useStore()
  const router = useRouter()
  const userPic = ref(null)
  const route = useRoute()
  const apiProgress = ref(true)
  const formProgress = ref(false)
  
  //const skillOptions = ref(['Vue Js', 'Laravel', 'More to Come', 'Html', 'CSS'])
  
  const formData = reactive({
    profile_pic: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    name: '',
    description: '',
    address: ''
  })
  
  const handleProfilePicChange = (event) => {
    formData.profile_pic = event.target.files[0]
    console.log(event.target.files[0])
  }
  
  
  const onSubmit = async (values) => {
    formProgress.value = true
    try {
      console.log(values)
      const res = await axios.post(`/api/employer/profile/${store.getters.User.id}`, values, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
  
      await store.dispatch('setUserProfilePic', res.data.data.attributes.profile_pic)
  
      toast('Profile Update Successfully!', {
        type: 'success',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
  
      setTimeout(() => {
        router.push(`/employer/${store.getters.User.id}`)
      }, 2000)
  
      formProgress.value = false
    } catch (error) {
      if (error.response?.status === 400) {
        toast('Please check input fields', {
          type: 'error',
          autoClose: 1000,
          dangerouslyHTMLString: true
        })
      } else {
        toast('Please try again!', {
          type: 'error',
          autoClose: 1000,
          dangerouslyHTMLString: true
        })
      }
      formProgress.value = false
    }
  }
  </script>
  
  <style src="@vueform/multiselect/themes/default.css"></style>
  