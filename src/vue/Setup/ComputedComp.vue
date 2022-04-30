<template>
  <p>4.computed :</p>
  <p>plusOne:{{plusOne}}</p>
  <p>plusTwo:{{plusTwo}}  <button @click="click">点击</button></p>
</template>

<script setup>
import { ref, computed } from 'vue';

// computed
const count = ref(1);
const plusOne = computed(() => count.value + 1);

// computed 接受get和set函数的对象
const text = ref(0);
const plusTwo = computed({
  get: () => text.value + 1,
  set: val => {
    text.value = val - 1
  }
})

const click = () => {
  plusTwo.value = 10;
}
</script>

<style lang="scss" scoped>

</style>