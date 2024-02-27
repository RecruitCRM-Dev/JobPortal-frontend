<template>
    <div class="h-screen md:flex">
      <div class="flex md:w-1/2 h-screen justify-center py-10 overflow-y-auto">
        <Form  class="flex flex-col py-10 ml-1">
          <h1 class="text-gray-800 font-extrabold text-3xl mb-3">Post a job on JobBoard</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Find the best talent from around the world on the <br>most exclusive job board on the internet.</p>
          <div class="flex flex-col">
            <h3 class="text-gray-900 inline-block float-right font-bold text-xl mb-1"><span class="text-indigo-500 inline-block float-left font-bold text-xl">1.&nbsp;</span>Your Company</h3>

            <div class="mb-3">
                <label for="company_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name</label>
                <input type="text" id="company_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-gray-300 focus:ring-0" required />
            </div>
  
            <div class="mb-3">
                <label for="about" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About Company</label>
                <textarea id="about" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-gray-300 focus:ring-0"></textarea>
            </div>
            <hr class="my-5">
            <h3 class="text-gray-900 inline-block float-right font-bold text-xl mb-1"><span class="text-indigo-500 inline-block float-left font-bold text-xl">2.&nbsp;</span>The Role</h3>

            <div class="mb-3">
                <label for="job_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                <input type="text" id="job_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-gray-300 focus:ring-0" required />
            </div>
            <div class="mb-3">
                <label for="salary" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                <input type="text" id="salary" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-gray-300 focus:ring-0" required />
            </div>
            <div class="mb-3">
                <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                <input type="text" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-gray-300 focus:ring-0" required />
            </div>
            <div class="mb-3">
                <label for="roles" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">The Roles</label>
                <textarea id="roles" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-gray-300 focus:ring-0"></textarea>
            </div>
            <div class="mb-3">
                <label for="things_to_do" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Things to do</label>
                <textarea id="things_to_do" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-gray-300 focus:ring-0"></textarea>
            </div>
            <hr class="my-5">

        </div>
  
          <button
            type="submit"
            class="block bg-indigo-600 mt-1 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Post
          </button>
          
        </Form>
      </div>
      <div class="overflow-hidden md:flex w-1/2  flex-col justify-center items-center hidden bg-gradient-to-b from-deep-purple-accent-400 to-indigo-800 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        
<div class="min-h-screen justify-center bg-gradient-to-r from-sky-200 to-red-100 py-20">

        <div class="min-w-4xl justify-center mx-auto flex flex-col gap-10 px-5">
          
            <div class="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-5">
                <div class="w-full md:w-[500px] flex justify-center md:justify-end">
                    <div class="shadow-lg w-[120px] h-[120px] bg-white   rounded-xl p-4 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 text-blue-950">
                            <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                    <h1 class="font-bold text-xl">Implement the best solution. </h1>
                    <p>Lorem ipsum dolor sit amet facere nemo enim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.</p>                        
                </div>
            </div>
            <div class="flex flex-col md:flex-row bg-white md:bg-transparent   rounded-xl  gap-5">
                <div class="w-full md:w-[750px] flex justify-center md:justify-end">
                    <div class="w-[120px]   shadow-lg h-[120px] bg-white  md: rounded-xl p-4 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 text-blue-950">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class=" bg-white   shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                    <h1 class="font-bold text-xl">Sort out possible solutions </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam neque cum  sunt  similique omnis adipisci tempore placeat ad.</p>                        
                </div>
            </div>
            <div class="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-5">
                <div class="w-full md:w-[500px] flex justify-center md:justify-end">
                    <div class="shadow-lg w-[120px] h-[120px] bg-white   rounded-xl p-4 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 text-blue-950">
                            <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                    <h1 class="font-bold text-xl">Implement the best solution. </h1>
                    <p>Lorem ipsum dolor sit amet facere nemo enim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.</p>                        
                </div>
            </div>
            
        </div>
    </div>
    </div>
    </div>
  </template>