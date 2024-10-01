<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore()
const email = ref('rodrivera@gmail.com')
const password = ref('@#!@#asdf1231!_!@#')

const login = () => {
  store.dispatch('layout/setLoader', true)
  setTimeout(() => {
    store.dispatch('layout/setLoader', false)
    router.push('/dashboard')
  }, 2000)
}
</script>

<template>
  <div
    class="flex items-center justify-center h-screen px-6 bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
    <div class="w-full max-w-sm p-6 bg-white dark:bg-gray-700 rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700 dark:text-gray-300">Vue Tailwind</span>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700 dark:text-gray-300 pl-2">Email</span>
          <input v-model="email" type="email"
            class="dark:bg-gray-900 bg-gray-100 block w-full mt-1 p-2 border-gray-600 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500">
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700 dark:text-gray-300 pl-2">Password</span>
          <input v-model="password" type="password"
            class="dark:bg-gray-900 bg-gray-100 block w-full mt-1 p-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500">
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox"
                class="text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500">
              <span class="mx-2 text-sm text-gray-600 dark:text-gray-200">Remember me</span>
            </label>
          </div>

          <div>
            <a class="block text-sm text-indigo-700 dark:text-indigo-300 fontme hover:underline" href="#">Forgot your
              password?</a>
          </div>
        </div>

        <div class="mt-6">
          <button type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white dark:text-gray-200 bg-indigo-600 dark:bg-indigo-400 rounded-md focus:outline-none hover:bg-indigo-500 dark:hover:bg-indigo-500">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
