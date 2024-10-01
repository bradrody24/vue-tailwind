<script setup>
import { ref } from 'vue'
import BaseTooltip from "@/modules/common/components/BaseTooltip.vue"
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
  <div v-for="(item, index) in tableData" :key="index"
    class="bg-white space-y-3 p-4 shadow dark:bg-gray-700 dark:text-gray-100 border-t-2 border-indigo-600 dark:border-indigo-300">
    <div class="text-sm text-gray-700">
      <div class="flex justify-between">
        <div class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{{
    item.id }}
        </div>
        <button @click="toggleRead(item.id)" class="text-indigo-600 dark:text-indigo-300">
          <BaseTooltip tipText="Read more" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
      </div>
      <div
        :class="`mt-2 text-sm dark:text-indigo-300 text-indigo-600 font-bold uppercase ${(readMore && lastId && item.id == lastId) ? '' : 'truncate'}`">
        <a href="#" @click="$emit('toggle-modal', { id: item.id, title: item.title, body: item.body })">
          {{ item.title }}
        </a>
      </div>
      <div
        :class="`my-2 text-sm dark:text-gray-100 text-gray-900 ${(readMore && lastId && item.id == lastId) ? '' : 'truncate'}`">
        {{ item.body }}
      </div>
    </div>
  </div>
</template>