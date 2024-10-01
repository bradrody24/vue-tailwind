<script setup>
import { ref } from 'vue'
const emit = defineEmits(['update_view'])
defineProps({
  numberOfRecords: {
    type: Number,
    default: null,
  },
});
const activePage = ref(1)
const ROWS_PER_PAGE = 10

const updateView = (isNext) => {
  isNext ? activePage.value++ : activePage.value--
  emit('update_view', activePage.value)
}
</script>

<template>
  <div
    class="flex flex-col items-start px-5 py-5 bg-indigo-900 border-t xs:flex-row xs:justify-between dark:bg-indigo-300 dark:text-gray-900 text-white shadow">
    <span class="text-xs xs:text-sm">Showing {{ ((activePage - 1) * ROWS_PER_PAGE)
      + 1 }} to {{
      activePage * ROWS_PER_PAGE }} of {{ numberOfRecords }} Entries</span>
    <div class="inline-flex mt-2 xs:mt-0">
      <button :disabled="activePage == 1"
        class="mr-1 disabled:opacity-50 disabled:bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
        @click="updateView(false)">
        Prev
      </button>
      <button :disabled="(activePage * ROWS_PER_PAGE) >= numberOfRecords"
        class="disabled:opacity-50 disabled:bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
        @click="updateView(true)">
        Next
      </button>
    </div>
  </div>
</template>
