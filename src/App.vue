<script setup>

import BottomSignature from '@/components/BottomSignature.vue'
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-2xl  flex flex-col h-screen items-center">
    <RouterView />
    <BottomSignature />
  </div>
<!--  <RouterView />-->
</template>

<style scoped>

</style>
