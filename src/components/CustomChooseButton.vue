<script setup>
import MyButton from '@/components/MyButtonLight.vue'
const props = defineProps(
  {
    first: String,
    second: String,
    way:{type: String, default: '/test'}
  }
)

console.log(props);
</script>

<template>
  <div class="mt-4  flex flex-col w-[90%]">
    <div class="rounded-2xl bg-gray-200 px-4 py-2 flex flex-row justify-between items-center ">
      <p>{{props.first}}</p>
      <div class="w-8" />
      <router-link :to="props.way" class="w-[40%]">
        <my-button >{{props.second}}</my-button>
      </router-link>

    </div>
  </div>
</template>
