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
                <img class="w-32 h-32 rounded-full mb-4 shrink-0 object-cover" :src="userPic ? userPic : 'https://i.pinimg.com/originals/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg'" alt="Rounded profile_pic" />
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
                />
                <p class="mt-1 text-sm text-gray-500" id="file_input_help">
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
                <button
                  type="button"
                  class="text-red-400 inline-flex items-center hover:text-white border border-red-400 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                >
                  <svg
                    class="w-5 h-5 mr-1 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Delete
                </button>
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
            class="block bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
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
import { Form, Field, ErrorMessage } from 'vee-validate'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'
const store = useStore()
const router = useRouter()
const userPic = ref(null)

useForm({
  initialValues: {
    name: 'Divyanshu Upreti',
    gender: 'male'
  }
})

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


onMounted(async () => {
  if (!store.getters.isLoggedIn) {
    router.push('/login')
  }
  try {
    const res = await axios.get(`/api/employer/profile/${store.getters.User.id}`)
    formData.profile_pic = res.data.data.attributes.profile_pic
    userPic.value = res.data.data.attributes.profile_pic
    formData.name = res.data.data.attributes.name
    formData.description = res.data.data.attributes.description
    formData.address = res.data.data.attributes.address
  } catch (error) {
    console.log(error)
  }
})

const onSubmit = async (values) => {
  try {
    console.log(values)
    await axios.post(`/api/employer/profile/update/${store.getters.User.id}`, values, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    toast('Profile Update Successfully!', {
      type: 'success',
      autoClose: 1000,
      dangerouslyHTMLString: true
    })

    setTimeout(() => {
      router.push(`/employer/${store.getters.User.id}`)
    }, 2000);
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
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
