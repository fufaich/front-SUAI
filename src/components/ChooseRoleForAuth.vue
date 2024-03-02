<script>
import CustomChooseButton from '@/components/CustomChooseButton.vue'

export default {
  name: 'ChooseRoleForAuth',
  components: { CustomChooseButton }
}

const test = "test";
console.log(test);
</script>

<template>
  <div class="flex flex-col items-center text-center w-3/4 mt-32">
    <h1 class="roboto-regular">ВЫБЕРИТЕ РОЛЬ</h1>

      <customChooseButton first="Студент/Сотрудник ГУАП" second="Вход" way="/authSUAI"  class="max-w-3xl"/>
      <customChooseButton first="Партнер" second="Вход/Регистрация" way="/authPartner" class="max-w-3xl"/>

  </div>
</template>
