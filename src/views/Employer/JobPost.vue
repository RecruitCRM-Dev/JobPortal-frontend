<template>
    <div class="h-screen md:flex">
      <div class="flex flex-col md:px-0 md:w-1/2 lg:px-15 overflow-y-auto p-12">
        <div class="flex flex-col md:px-24">
          <h1 class="text-gray-800 font-extrabold text-4xl tracking-tighter mb-3">Post a job on JobBoard</h1>
          <p class="text-sm flex-wrap font-normal text-gray-600 mb-7">Find the best talent from around the world on the<br/>most exclusive job board on the internet.</p>
        </div>
        <div class="flex flex-col items-left md:px-24">
            <Form class="flex flex-col ml-1">
          
          <div class="flex flex-col">
          <div class="mb-3">
          <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>           
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </div>
          </div>
          <div class="flex flex-col md:flex-row sm:col-span-2 items-center justify-center">
              <div class="h-36 w-full -mr-24">
                <img class="h-full rounded-full"  alt="Rounded avatar" />
              </div>
              <div class="w-full mr-2">
                <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input"
                  >Upload avatar</label
                >
                <input
                  class="m-0 block min-w-0 flex-auto border-solid w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2.5"
                  aria-describedby="file_input_help"
                  id="file_input"
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
          <div class="flex flex-col">
          <!-- Full Name -->
          <div class="mb-3">
          <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>           
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Role</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </div>
          <div>           
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsibilities</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </div>
          </div>
      </div>
      </div>

          
          <!-- Register -->
          <button
            type="submit"
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Register
          </button>
          <p class="text-sm text-gray-400">
            Already logged in?
            <span class="text-indigo-500 text-sm"><a href="/candidate/login">Login</a></span>
          </p>
        </Form>
        </div>
    </div>
      <div class="overflow-hidden md:flex w-1/2 justify-around items-center hidden">
        <img src="../../assets/register-img.jpg" alt="" class="object-cover w-full h-full" />
      </div>
    </div>
  </template>
  <script>

</script>