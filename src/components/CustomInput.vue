<template>
  <input
    type="text"
    class="bg-gray-200 rounded-xl px-4 py-2 hover:bg-gray-300 cursor-pointer  transition w-full"
    :placeholder= props.placeText

  >
</template>
<script setup>

const props = defineProps(
  {
    placeText: String
  }
)
console.log(props.placeText)
</script>