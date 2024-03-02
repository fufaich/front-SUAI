<script setup>

import S_guap from '@/components/icons/s_guap.vue'
import ChooseRoleForAuth from '@/components/ChooseRoleForAuth.vue'

</script>

<template>
  <div class="flex flex-col  items-center text-center h-screen w-full">

    <div class="flex flex-col items-center text-center">
      <s_guap class="w-20 h-20"/>
      <h1 class="text-3xl roboto-bold">Производственная практика. ГУАП</h1>
      <h2 class="text-lg">Здесь ВЫ можете найти практику на лето за пару кликов</h2>
    </div>
    <ChooseRoleForAuth/>

  </div>
</template>