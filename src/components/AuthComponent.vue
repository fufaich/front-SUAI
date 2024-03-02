<template>
  <div class="flex flex-col gap-2">
    <h1 class="roboto-bold text-2xl ">Вход</h1>
    <ul class="flex gap-2 flex-row">
      <li class="grow-[2]">
        <customInput placeText="Логин" />
      </li>
      <li class="grow-[1]">
        <customInput placeText="Пароль" />
      </li>
      <li class="grow-[1]">
        <MyButtonDark>Войти</MyButtonDark>
      </li>
    </ul>
  </div>
</template>
<script>
import CustomInput from '@/components/CustomInput.vue'
import MyButtonDark from '@/components/MyButtonDark.vue'

export default {
  name: 'authComponent',
  components: { MyButtonDark, CustomInput }
}
</script>