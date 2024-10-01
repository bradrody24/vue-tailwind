<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BaseLoader from './modules/common/components/BaseLoader.vue'
import BaseModal from './modules/common/components/BaseModal.vue'

const store = useStore()
const { currentRoute } = useRouter()
const isLayout = "default"
const layout = computed(
  () => `${currentRoute.value.meta.layout || isLayout}-layout`,
)
const isLoading = computed(() => {
  return store.getters['layout/loader']
})
const modalData = computed(() => {
  return store.getters['common/modalData']
})
const toggleModal = () => {
  store.dispatch("common/setModalData", null)
};
</script>
<template>
  <div class="dark:bg-gray-900">
    <component :is="layout">

      <BaseLoader :isLoading="isLoading" />
      <BaseModal :modalData="modalData" @toggle-modal="toggleModal" />
      <router-view />

    </component>
  </div>
</template>
