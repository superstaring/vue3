<template>
  <button @click="click">点击</button>
  <component :is = "someCondition ? FooComp : BarComp" />
  <p>2.defineProps: {{props.name}}-{{props.age}}</p>
  <div>
    3.defineEmits:
    <button @click="clickFirst">emitsFirst</button>
    <button @click="clickSecond">emitsSecond</button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import FooComp from './FooComp.vue';
import BarComp from './BarComp.vue';

const someCondition = ref(false);
const click = () => {
   someCondition.value = !someCondition.value;
}

// defineProps
const props = defineProps({
  name: String,
  age: String,
})

// defineEmits
const emit = defineEmits(['clickFirst', 'clickSecond']);
const clickFirst = () => {
  const data = 5;
  emit('clickFirst', data);
}

const clickSecond = () => {
  emit('clickSecond');
}

</script>

<style lang="scss" scoped>

</style>