<template>
    <div>
      <AppHeader />
      
      <section>
        <div class="max-w-2xl mx-auto py-16">
          <div class="mt-3">
            <h2 class="text-center text-3xl text-gray-900">Post a Job</h2>
          </div>
          <EmployeeNavigation />
          <Form @submit="onSubmit" class="flex flex-col py-10 ml-1" enctype="multipart/form-data">
            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 items-center">
                <h3 class="text-gray-900 inline-block float-right font-bold text-xl mb-3"><span class="text-indigo-500 inline-block float-left font-bold text-xl">1.&nbsp;</span>Your Company</h3>

                <!-- Avtar -->
              <div class="flex flex-col md:flex-row sm:col-span-2 items-center justify-center">
                <div class="h-36 w-full -mr-24">
                  <img
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                      class="w-32 h-32 rounded-full mb-4 shrink-0 object-cover"
                    />
                </div>
                <div class="w-full mr-2">
                  <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input"
                    >Company Logo</label
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
                  <!-- <button
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
                  </button> -->
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
                      name="about"
                      v-model="formData.about"
                      placeholder=""
                      as="textarea"
                      class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                    />
                  </div>
                  <ErrorMessage name="about" class="text-red-500" />
                </div>
              </div>
  
              <h3 class="text-gray-900 inline-block float-right font-bold text-xl mb-3"><span class="text-indigo-500 inline-block float-left font-bold text-xl">2.&nbsp;</span>The Role</h3>
 
              <!--  Job Title -->
              <div class="sm:col-span-2">
                <div>
                  <label for="job_title" class="block mb-2 text-sm font-medium text-gray-900"
                    >Job Title</label>
  
                  <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                    <Field
                      name="education"
                      v-model="formData.education"
                      placeholder=""
                      class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
              </div>
              <div class="w-full">
              <div>
                <label for="salary" class="block mb-2 text-sm font-medium text-gray-900"
                  >Salary</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="phone"
                    v-model="formData.phone"
                    placeholder=""
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="name" class="text-red-500" />
              </div>
            </div>
            <div class="w-full">
              <div>
                <label for="location" class="block mb-2 text-sm font-medium text-gray-900"
                  >Location</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="phone"
                    v-model="formData.phone"
                    placeholder=""
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  />
                </div>
                <ErrorMessage name="name" class="text-red-500" />
              </div>
            </div>
              
              <div class="sm:col-span-2">
                <div>
                  <label for="roles" class="block mb-2 text-sm font-medium text-gray-900"
                    >The Role</label
                  >
  
                  <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                    <Field
                      name="about"
                      v-model="formData.about"
                      placeholder=""
                      as="textarea"
                      class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                    />
                  </div>
                  <ErrorMessage name="about" class="text-red-500" />
                </div>
              </div>
              
              <div class="sm:col-span-2">
                <div>
                  <label for="things_to_do" class="block mb-2 text-sm font-medium text-gray-900"
                    >Things To Do</label
                  >
  
                  <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                    <Field
                      name="about"
                      v-model="formData.about"
                      placeholder=""
                      as="textarea"
                      class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                    />
                  </div>
                  <ErrorMessage name="about" class="text-red-500" />
                </div>
              </div>
            </div>
            <!-- Submit Button -->
            <button
              type="submit"
              class="block bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Post
            </button>
          </Form>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted, reactive, ref } from 'vue'
  
  import Multiselect from '@vueform/multiselect'
  
  import AppHeader from '@/components/AppHeader.vue'
  import EmployeeNavigation from '@/components/EmployeeNavigation.vue'
  import { Form, Field, ErrorMessage } from 'vee-validate'
  import { toast } from 'vue3-toastify'
  import 'vue3-toastify/dist/index.css'
  import { useForm } from 'vee-validate'
  import { useStore } from 'vuex'
  import axios from 'axios'
  
  const store = useStore()
  const userPic = ref(null)
  const apiProgress = ref(true)
  
  useForm({
    initialValues: {
      name: 'Divyanshu Upreti',
      gender: 'male'
    }
  })
  
  const skillOptions = ref([
    'HTML5',
    'Javascript',
    'Vue',
    'Laravel',
    'ReactJS',
    'Python',
    'Java',
    'Django'
  ])
  
  // console.log(user)
  
  const handleProfilePicChange = (event) => {
    formData.profile_pic = event.target.files[0]
    console.log(event.target.files[0])
  }
  
  const handleFileChange = (event) => {
    formData.resume = event.target.files[0]
  }
  
  const formData = reactive({
    profile_pic: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    name: '',
    about: '',
    address: '',
    gender: '',
    role: '',
    experience: '',
    education: '',
    phone: '',
    skills: [],
    resume: null
  })
  
  const onSubmit = async (values) => {
    try {
      console.log(values)
      await axios.post(`/api/user/profile/update/${store.getters.User.id}`, values, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
  
      toast('Profile Update Successfully!', {
        type: 'success',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
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
  
  onMounted(async () => {
    if (!store.getters.isLoggedIn) {
      router.push('/login')
    }
    try {
      const res = await axios.get(`/api/user/profile/${store.getters.User.id}`)
      formData.profile_pic = res.data.user.profile_pic
      userPic.value = res.data.user.profile_pic
      formData.name = res.data.user.name
      formData.about = res.data.user.about
      formData.gender = res.data.user.gender
      formData.role = res.data.user.role
      formData.experience = res.data.user.experience
      formData.education = res.data.user.education
      formData.phone = res.data.user.phone
      formData.address = res.data.user.address
      formData.skills = res.data.user.skills.split(',')
      formData.resume = res.data.user.resume
    } catch (error) {
      console.log(error)
    }
  })
  </script>
  
  <style src="@vueform/multiselect/themes/default.css"></style>
  