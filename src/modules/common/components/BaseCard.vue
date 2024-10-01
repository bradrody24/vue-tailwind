<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: null,
  }
});
</script>
<template>
  <div>
    <div class="mt-8 text-sm">{{ title }}</div>
    <article v-for="(item, index) in items" :key="index"
      class="ml-4 my-5 overflow-hidden transition hover:shadow-lg border-l-2 border-indigo-600 dark:border-indigo-300">
      <div class="bg-white text-gray-500 dark:bg-gray-700 dark:text-white p-4 sm:p-6">
        <div class="mb-8 text-sm">
          <p class="mt-2 line-clamp-3 text-sm/relaxed ">
            {{ item.body }}
          </p>
        </div>
        <div class="flex items-center">
          <img class="w-10 h-10 mr-4 rounded-full" src="https://via.placeholder.com/50" alt="Avatar of Author">
          <div>
            <p class="text-sm/relaxed leading-none">
              {{ item.name }}
            </p>
            <p class="text-xs">
              {{ item.email }}
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
