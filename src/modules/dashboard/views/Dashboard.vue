<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex';
import BaseTable from "@/modules/common/components/BaseTable.vue"
import BaseGrid from "@/modules/common/components/BaseGrid.vue"
import BasePagination from '@/modules/common/components/BasePagination.vue'
import BaseGridModal from "@/modules/common/components/BaseGridModal.vue"
import BaseCard from "@/modules/common/components/BaseCard.vue"

const store = useStore();
const active = ref(1)
const ROWS_PER_PAGE = 10
const activeTitle = ref(null)
const activeBody = ref(null)
const isModalOpen = ref(false)

const totalPosts = computed(() => {
  return store.getters['dashboard/posts']
})
const posts = computed(() => {
  return store.getters['dashboard/posts'].slice((active.value - 1) * ROWS_PER_PAGE, ROWS_PER_PAGE * active.value)
})
const comments = computed(() => {
  return store.getters["dashboard/comments"]
})

onMounted(async () => {
  try {
    await store.dispatch('dashboard/getPosts')
  } catch (err) {
    errorModal(err)
  }
})

const toggleModal = async ({ id, title, body }) => {
  activeTitle.value = title
  activeBody.value = body
  try {
    await store.dispatch("dashboard/getComments", id)
  } catch (err) {
    errorModal(err)
    return
  }
  isModalOpen.value = true
  /* store.dispatch("common/setModalData", {
    active: true,
    imageUrl,
    title,
    body,
  }) */
};

const errorModal = (error) => {
  store.dispatch("common/setModalData", {
    active: true,
    imageUrl: null,
    title: "Error Alert",
    body: error.message || "Failed to process request.",
  })
};

const updateTable = (payload) => {
  active.value = payload
};
const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div class="dark:bg-gray-900">
    <h3 class="text-3xl font-medium text-gray-700 dark:text-gray-100">
      Dashboard
    </h3>
    <div v-if="posts.length > 0" class="flex flex-col mt-4 dark:bg-gray-900">
      <!-- <div class="py-2 my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"> -->
      <div class="hidden lg:inline-block max-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <BaseTable :tableData="posts" @toggle-modal="toggleModal" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        <BaseGrid :tableData="posts" @toggle-modal="toggleModal" />
      </div>
      <BasePagination :numberOfRecords="totalPosts.length" @update_view="updateTable($event)" class="mt-4" />
      <!-- </div> -->
    </div>
    <h4 class="flex mt-8 text-lg justify-center" v-else>No records to show.</h4>
    <BaseGridModal :isModalOpen="isModalOpen" @toggle-modal="closeModal">
      <div class="flex items-center justify-between pb-3 mt-4">
        <p class="text-xl font-bold uppercase">
          {{ activeTitle }}
        </p>
      </div>

      <p class="my-4">
        {{ activeBody }}
      </p>
      <div v-show="comments.length > 0">
        <BaseCard :items="comments" title="Comments" />
      </div>
    </BaseGridModal>
  </div>
</template>
