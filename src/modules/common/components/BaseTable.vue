<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';
defineEmits(['toggle-modal'])
defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
});
const readMore = ref(false)
const lastId = ref(null)
const toggleRead = (id) => {
  if (id != lastId.value) {
    readMore.value = false
  }
  readMore.value = !readMore.value
  lastId.value = id
}
</script>

<template>
  <table class="min-w-full">
    <thead class="dark:bg-gray-500 dark:text-gray-100 text-gray-600 bg-gray-100">
      <tr>
        <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left uppercase border-b-2 border-gray-200">
          ID
        </th>
        <th
          class="px-5 py-3 text-xs font-semibold tracking-wider text-left uppercase border-b-2 border-gray-200  max-w-96">
          Title
        </th>
        <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left uppercase border-b-2 border-gray-200">
          Body
        </th>
        <th class="px-6 py-3 border-b border-gray-200">
          <!-- <button @click="toggleRead">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </button> -->
        </th>

      </tr>
    </thead>

    <tbody class=" bg-white dark:bg-gray-700 dark:text-gray-100">
      <tr v-for="(item, index) in tableData" :key="index">
        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
          <div class="flex items-center">
            <div class="ml-1">
              <div
                class="mt-2 text-sm inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                {{ item.id }}
              </div>
            </div>
          </div>
        </td>

        <td
          :class="`px-6 py-4 border-b border-gray-200 max-w-96 ${(readMore && lastId && item.id == lastId) ? '' : 'truncate'}`">
          <a href="#" class="text-xs dark:text-indigo-300 text-indigo-600 font-bold uppercase"
            @click="$emit('toggle-modal', { id: item.id, title: item.title, body: item.body })">
            <span>{{ item.title }}</span>
          </a>
        </td>

        <td class="px-6 py-4 border-b border-gray-200 text-wrap max-w-prose">
          <div>
            <div :class="`text-xs ${(readMore && lastId && item.id == lastId) ? '' : 'truncate'}`">{{
        item.body }}</div>
          </div>
        </td>

        <td class="px-6 py-4 text-xs text-right border-b border-gray-200 whitespace-nowrap">
          <button @click="toggleRead(item.id)" class="dark:text-indigo-300 text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </button>
        </td>

      </tr>
    </tbody>
  </table>
</template>