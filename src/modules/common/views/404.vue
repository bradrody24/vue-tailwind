<template>
  <div class="h-screen place-content-center bg-white dark:bg-gray-700 px-4">
    <div class="text-center">
      <h1 class="text-9xl font-black text-gray-200 dark:text-gray-900">404</h1>
      <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">Oooops!</p>
      <p class="mt-4 text-gray-500 dark:text-gray-100">We can't find that page.</p>
      <router-link to="/dashboard"
        class="mt-6 inline-block rounded bg-indigo-800 dark:bg-indigo-300 px-5 py-3 text-sm font-medium text-white dark:text-gray-900 hover:bg-indigo-700 dark:hover:bg-indigo-400 focus:outline-none focus:ring">
        Go Back to Dashboard
      </router-link>
    </div>
  </div>
</template>