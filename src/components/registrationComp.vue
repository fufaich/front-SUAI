<template>
  <div class="flex flex-col gap-2">
    <h1 class="roboto-bold text-2xl ">Регистрация</h1>
    <ul class="flex gap-2 flex-col">
      <li class="flex gap-2 flex-row">
        <custom-input place-text="ФИО" class="grow-0" />
        <custom-input place-text="Почта" class="grow" />
      </li>
      <li>
        <div class="flex flex-row gap-2">
          <div class="flex flex-row gap-2 bg-gray-100 rounded-xl grow px-4 py-2">
            <p class="pr-4 text-gray-400">Роль</p>
            <div
              :class="(selected === 1)? selectedClass : unselectedClass"
              @click="changeSelected(1)">
              Студент
            </div>
            <div
              :class="(selected === 2)? selectedClass : unselectedClass"
              @click="changeSelected(2)">
              Сотрудник
            </div>
          </div>
          <my-button-dark>Отправить</my-button-dark>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import CustomInput from '@/components/CustomInput.vue'
import MyButtonDark from '@/components/MyButtonDark.vue'
import { ref } from 'vue'
const selected = ref(0)
const unselectedClass = 'bg-gray-200 rounded-md py-0 px-2 grow text-center hover:bg-gray-300 cursor-pointer transition max-w-[45%] py-2'
const selectedClass = 'bg-gray-400 rounded-md py-0 px-2 grow text-center hover:bg-gray-500 cursor-pointer transition max-w-[45%] py-2'

const changeSelected = (num) => {
  selected.value = num
}

</script>