<template>
   <p>setup 详细使用</p>
   <div>
      <p>1.动态组件is使用：</p>
      <IsComp :name="name" :age="age" @clickFirst="clickFirst" @clickSecond="clickSecond" ref="child" /> 
   </div>
   <p>{{count}}</p>
   <ComputedComp />
</template>

<script setup>
import { ref } from 'vue';
import IsComp from './IsComp';
import ComputedComp from './ComputedComp';

// defineProps
const name = ref('vue');
const age = ref(3);

// defineEmits
const count = ref(0);
const clickFirst = (data) => {
   count.value += data;
}

const clickSecond = () => {
   count.value --;
}

</script>

<style lang="scss" scoped>

</style>