<script setup>
import { ref } from 'vue'
import { useSidebar } from '@/composables/useSidebar'
import { useStore } from 'vuex';
import DarkMode from './DarkMode.vue'
const dropdownOpen = ref(false)
const { isOpen } = useSidebar()

const store = useStore()
const toggleModal = () => {
  dropdownOpen.value = false;
  store.dispatch("common/setModalData", {
    active: true,
    imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: null,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id lacinia nisl, non eleifend metus.",
  })
};
</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b-2 border-indigo-600">
    <div class="flex items-center">
      <button class="text-gray-500 focus:outline-none lg:hidden" @click="isOpen = true">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
    </div>

    <div class="flex items-center">
      <DarkMode />
      <div class="relative">
        <button class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
          @click="dropdownOpen = !dropdownOpen">
          <img class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww"
            alt="Your avatar">
        </button>

        <div v-show="dropdownOpen" class="fixed inset-0 z-10 w-full h-full" @click="dropdownOpen = false" />

        <transition enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform" leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0">
          <div v-show="dropdownOpen"
            class="absolute right-0 z-20 w-48 py-2 mt-2 dark:bg-gray-100 bg-indigo-800 rounded-md shadow-xl">
            <a href="#" @click="toggleModal"
              class="block px-4 py-2 text-sm text-white dark:text-gray-700 hover:bg-indigo-600 dark:hover:text-white">Profile</a>
            <router-link to="/"
              class="block px-4 py-2 text-sm text-white dark:text-gray-700 hover:bg-indigo-600 dark:hover:text-white">
              Log out
            </router-link>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
