<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

defineEmits(['toggle-modal'])
defineProps({
  isModalOpen: {
    type: Boolean,
    default: false,
  },
});
/* const store = useStore()

const isModalOpen = ref(false)

const comments = computed(() => {
  return store.getters["dashboard/comments"]
})

const toggleModal = () => {
  store.dispatch("common/setModalData", null)
}; */
</script>

<template>
  <Teleport to="body">
    <div :class="`modal ${!isModalOpen && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
      <div class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay" @click="$emit('toggle-modal')" />

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white dark:bg-gray-500 dark:text-gray-100 rounded shadow-lg max-h-screen min-w-prose modal-container md:max-w-xl">
        <div @click="$emit('toggle-modal')"
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
          <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            viewBox="0 0 18 18">
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
        </div>

        <div class="px-6 py-4 text-left modal-content">
          <slot />

          <!-- Footer -->
          <div class="flex justify-end pt-2">
            <!-- <button
                class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
                @click="open = false">
                Close
              </button> -->
            <button
              class="px-6 py-3 font-medium tracking-wide text-gray-800 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
              @click="$emit('toggle-modal')">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  transition: opacity 0.25s ease;
}
</style>
