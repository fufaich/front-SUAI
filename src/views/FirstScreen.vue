<script setup>

import S_guap from '@/components/icons/s_guap.vue'
import MyButton from '@/components/MyButton.vue'
</script>

<template>
  <div class="flex flex-col items-center text-center h-screen">
    <div class="flex flex-col items-center text-center">
      <s_guap class="w-20 h-20"/>
      <h1 class="text-3xl roboto-bold">Производственная практика. ГУАП</h1>
      <h2 class="text-lg">Здесь ВЫ можете найти практику на лето за пару кликов</h2>
    </div>
    <p class="mt-32">Выберите свою роль:</p>
    <div class="w-3/5 flex flex-col">
      <div class="rounded-2xl bg-gray-200 px-4 py-2 flex flex-row justify-between items-center ">
        <p>Судент / сотрудник ГУАП</p>
        <div class="w-8"/>
        <my-button>Выбрать через ЛК ГУАП</my-button>
      </div>
    </div>
    <div class="mt-4 w-3/5 flex flex-col">
      <div class="rounded-2xl bg-gray-200 px-4 py-2 flex flex-row justify-between items-center ">
        <p>Судент / сотрудник ГУАП</p>
        <div class="w-8"/>
        <my-button>Выбрать через ЛК ГУАП</my-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>