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
      <table class="w-full">
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
                  <p class="font-semibold text-black">Sufyan</p>
                  <p class="text-xs text-gray-600">Developer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">sufyan@example.com</td>
            <td class="px-4 py-3 text-xs border">
                <select value="status" class="bg-transparent">
                    <option value="applied">Applied</option>
                    <option value="resume_viewed">Resume Viewed</option>
                    <option value="under_consideration">Under Consideration</option>
                    <option value="rejected">Rejected</option>
                    <option value="selected">Selected</option>
                </select>
            </td>
            <td class="px-4 py-3 text-sm border">6/4/2000</td>
          </tr>
          <!-- <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Stevens</p>
                  <p class="text-xs text-gray-600">Programmer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-md font-semibold border">steves@example.com</td>
            <td class="px-4 py-3 text-xs border">
                <select value="status" class="bg-transparent">
                    <option value="applied">Applied</option>
                    <option value="resume_viewed">Resume Viewed</option>
                    <option value="under_consideration">Under Consideration</option>
                    <option value="rejected">Rejected</option>
                    <option value="selected">Selected</option>
                </select>
            </td>
            <td class="px-4 py-3 text-sm border">6/10/2020</td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold">Nora</p>
                  <p class="text-xs text-gray-600">Designer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-md font-semibold border">nora@example.com</td>
            <td class="px-4 py-3 text-xs border">
                <select value="status" class="bg-transparent">
                    <option value="applied">Applied</option>
                    <option value="resume_viewed">Resume Viewed</option>
                    <option value="under_consideration">Under Consideration</option>
                    <option value="rejected">Rejected</option>
                    <option value="selected">Selected</option>
                </select>
            </td>
            <td class="px-4 py-3 text-sm border">6/10/2020</td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold">Ali</p>
                  <p class="text-xs text-gray-600">Programmer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 border text-md font-semibold">ali@example.com</td>
            <td class="px-4 py-3 border text-xs">
                <select value="status" class="bg-transparent">
                    <option value="applied">Applied</option>
                            <option value="resume_viewed">Resume Viewed</option>
                            <option value="under_consideration">Under Consideration</option>
                            <option value="rejected">Rejected</option>
                            <option value="selected">Selected</option>
                    </select>
            </td>
            <td class="px-4 py-3 border text-sm">6/10/2020</td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold">Khalid</p>
                  <p class="text-xs text-gray-600">Designer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 border text-md font-semibold">khalid@example.com</td>
            <td class="px-4 py-3 border text-xs">
                <select value="status" class="bg-transparent">
                    <option value="applied">Applied</option>
                    <option value="resume_viewed">Resume Viewed</option>
                    <option value="under_consideration">Under Consideration</option>
                    <option value="rejected">Rejected</option>
                    <option value="selected">Selected</option>
                </select>
            </td>
            <td class="px-4 py-3 border text-sm">6/10/2020</td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold">Nasser</p>
                  <p class="text-xs text-gray-600">Pen Tester</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 border text-md font-semibold">pen@example.com</td>
            <td class="px-4 py-3 border text-xs">
                <select value="status" class="bg-transparent">
                    <option value="applied">Applied</option>
                    <option value="resume_viewed">Resume Viewed</option>
                    <option value="under_consideration">Under Consideration</option>
                    <option value="rejected">Rejected</option>
                    <option value="selected">Selected</option>
                </select>
            </td>
            <td class="px-4 py-3 border text-sm">6/10/2020</td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold">Mohammed</p>
                  <p class="text-xs text-gray-600">Web Designer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 border text-md font-semibold">mohammed@example.com</td>
            <td class="px-4 py-3 border text-xs">
                <select value="status" class="bg-transparent">
                    <option value="applied">Applied</option>
                    <option value="resume_viewed">Resume Viewed</option>
                    <option value="under_consideration">Under Consideration</option>
                    <option value="rejected">Rejected</option>
                    <option value="selected">Selected</option>
    
                </select>
            </td>
            <td class="px-4 py-3 border text-sm">6/10/2020</td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold">Saad</p>
                  <p class="text-xs text-gray-600">Data</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 border text-md font-semibold">saad@example.com</td>
            <td class="px-4 py-3 border text-xs">
                <select value="status" class="bg-transparent">
                            <option value="applied">Applied</option>
                            <option value="resume_viewed">Resume Viewed</option>
                            <option value="under_consideration">Under Consideration</option>
                            <option value="rejected">Rejected</option>
                            <option value="selected">Selected</option>
                        </select>
                </td>
            <td class="px-4 py-3 border text-sm">6/10/2020</td>
          </tr>
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold">Sami</p>
                  <p class="text-xs text-gray-600">Developer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 border text-md font-semibold">sami@example.com</td>
            <td class="px-4 py-3 border text-xs">
                <select value="status" class="bg-transparent">
                            <option value="applied">Applied</option>
                            <option value="resume_viewed">Resume Viewed</option>
                            <option value="under_consideration">Under Consideration</option>
                            <option value="rejected">Rejected</option>
                            <option value="selected">Selected</option>
                        </select>
            </td>
            <td class="px-4 py-3 border text-sm">6/10/2020</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</section>
</template>
<script setup>
    import AppHeader from '@/components/AppHeader.vue'
</script>