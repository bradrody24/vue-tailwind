<script setup>
defineProps({
  tipText: {
    type: String,
    default: null,
  }
});
</script>
<template>
  <div
    class="relative before:content-[attr(data-tip)]
      before:absolute
      before:px-3 before:py-2
      before:left-1/2 before:top-2
      before:w-max before:max-w-xs
      before:-translate-x-1/2 before:-translate-y-full
      before:bg-indigo-700 before:text-white
      before:rouunded-md before:opacity-0
      before:transition-all
      after:absolute
      after:left-0 after:-top-3
      after:h-0 after:w-0
      after:translate-x-1/2
      
      after:border-l-transparent after:border-b-transparent after:border-r-transparent
      after:opacity-0 after:transition-all
      hover:before:opacity-70 hover:after:opacity-100"
    :data-tip="tipText">
  </div>
</template>