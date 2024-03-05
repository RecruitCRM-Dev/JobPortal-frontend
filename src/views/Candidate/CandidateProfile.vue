<template>
  <div>
    <AppHeader />
    <section>
      <div class="max-w-2xl mx-auto py-16">
        <div class="mt-3">
          <h2 class="text-center text-3xl text-gray-900">Edit your profile</h2>
        </div>
        <UserNavigation />
        <Form
          v-if="!apiProgress"
          @submit="onSubmit"
          class="flex flex-col py-10 ml-1"
          enctype="multipart/form-data"
        >
          <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 items-center">
            <!-- Avtar -->
            <div class="flex flex-col md:flex-row sm:col-span-2 items-center justify-center">
              <div class="h-36 w-full -mr-24">
                <img
                  :src="
                    userPic
                      ? userPic
                      : 'https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png'
                  "
                  class="w-32 h-32 rounded-full mb-4 shrink-0 object-cover"
                />
              </div>
              <div class="w-full mr-2">
                <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input"
                  >Upload avatar</label
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
              </div>
            </div>

            <!--  Name -->
            <div class="sm:col-span-2">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
                  >Full Name</label
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
                  >About</label
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

            <!-- Gender -->
            <div class="w-full">
              <div>
                <label for="gender" class="block mb-2 text-sm font-medium text-gray-900"
                  >Gender identity</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    id="gender"
                    v-model="formData.gender"
                    name="gender"
                    as="select"
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </Field>
                </div>
              </div>
            </div>

            <!-- Contact Number -->
            <div class="w-full">
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900"
                  >Contact Number</label
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

            <!-- Role -->
            <div>
              <label for="role" class="block mb-2 text-sm font-medium text-gray-900"
                >Select Your primary role</label
              >
              <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                <Field
                  id="role"
                  name="role"
                  as="select"
                  v-model="formData.role"
                  class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                >
                  <option value="Software Developer">Software Developer</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Sales">Sales</option>
                  <option value="HR">HR</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                </Field>
              </div>
            </div>

            <!-- Years of experience -->
            <div>
              <label for="experience" class="block mb-2 text-sm font-medium text-gray-900"
                >Years of experience</label
              >
              <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                <Field
                  id="experience"
                  name="experience"
                  v-model="formData.experience"
                  as="select"
                  class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                >
                  <option value="0" selected>Fresher</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </Field>
              </div>
            </div>

            <!--  Education -->
            <div class="sm:col-span-2">
              <div>
                <label for="education" class="block mb-2 text-sm font-medium text-gray-900"
                  >Education</label
                >

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

            <!-- Skills -->
            <div class="sm:col-span-2">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
                  >Skills</label
                >

                <div class="flex items-center border-2 py-2 px-3 w-full rounded-lg">
                  <Field
                    name="skills"
                    v-model="formData.skills"
                    class="py-0.5 pl-2 outline-none border-none w-full ring-0 border-transparent focus:border-transparent focus:ring-0"
                  >
                    <Multiselect
                      mode="tags"
                      v-model="formData.skills"
                      placeholder="Choose your stack"
                      :close-on-select="false"
                      :min-chars="1"
                      :delay="0"
                      :options="skillOptions"
                    />
                  </Field>
                </div>
              </div>
            </div>

            <!-- Resume -->
            <div class="w-full sm:col-span-2">
              <label for="resume" class="block mb-2 text-sm font-medium text-gray-900"
                >Resume</label
              >
              <Field
                class="m-0 block min-w-0 flex-auto border-solid w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2.5"
                type="file"
                name="resume"
                v-model="formData.resume"
                @change="handleFileChange"
                accept=".pdf"
              />
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
        <div v-else class="flex justify-center items-center mt-20">
          <Spinner medium />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'

import Multiselect from '@vueform/multiselect'

import AppHeader from '@/components/AppHeader.vue'
import ButtonSpinner from '@/components/ButtonSpinner.vue'
import UserNavigation from '@/components/UserNavigation.vue'
import Spinner from '@/components/Spinner.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useForm } from 'vee-validate'
import { useStore } from 'vuex'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const userPic = ref(null)
const apiProgress = ref(true)
const formProgress = ref(false)
const router = useRouter()
const route = useRoute()

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
  formProgress.value = true
  try {
    const res = await axios.post(`/api/user/profile/${route.params.id}`, values, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    await store.dispatch('setUserProfilePic', res.data.user.profile_pic)
    formProgress.value = false

    toast('Profile Update Successfully!', {
      type: 'success',
      autoClose: 1000,
      dangerouslyHTMLString: true
    })

    setTimeout(() => {
      router.push(`/candidate/${route.params.id}`)
    }, 2000)
  } catch (error) {
    if (error.response?.status === 400) {
      toast('Please check input fields', {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    } else if (error.response?.status === 401) {
      toast(error.response.data.error, {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
      setTimeout(() => {
        router.back()
      }, 2000)
    } else {
      toast('Please try again after some time', {
        type: 'error',
        autoClose: 1000,
        dangerouslyHTMLString: true
      })
    }
    formProgress.value = false
  }
}

onMounted(async () => {
  if (!store.getters.isLoggedIn) {
    router.push('/login')
  }
  if (route.params.id != store.getters.User.id) {
    router.back()
  }
  try {
    const res = await axios.get(`/api/user/profile/${route.params.id}`)
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
    if (res.data.user?.skills) {
      formData.skills = res.data.user.skills.split(',')
    }
    formData.resume = res.data.user.resume
    apiProgress.value = false
  } catch (error) {
    console.log(error)
    apiProgress.value = false
  }
})
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
