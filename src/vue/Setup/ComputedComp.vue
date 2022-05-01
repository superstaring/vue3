<template>
  <div>
    <p>4.computed :</p>
    <p>plusTwo:{{plusTwo}}</p>
    <p>plusOne:{{plusOne}}</p>
  </div>
  <div>
    <p>5.watchEffect</p>
    <p>{{test}}</p>
  </div>
  <div>
    <p>6.watch</p>
    <p>state: {{state.count}}</p>
    <p>watchValue: {{watchValue}}</p>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, reactive, watch } from 'vue';

// computed
const text = ref(5);
const plusTwo = computed(() => text.value + 1);

// computed 接受get和set函数的对象
const count = ref(1);
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
});

plusOne.value = 1
console.log('count: ' + count.value) // 0

// watchEffect
// 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
const test = ref(0);
watchEffect(() => console.log('test: ' + test.value));
setTimeout(() => {
  test.value++;
}, 100)

// watch
// 侦听单一源: 侦听器数据源可以是一个具有返回值的 getter 函数，也可以直接是一个 ref：
// 侦听一个 getter
const state = reactive({count: 0});
watch(
  () => state.count,
  (count, prevCount) => {
    console.log('state:' + count);
  },
  {
   // 如果加了这个参数，值为true的话，就消除了惰性，watch会在创建后立即执行一次
   immediate: true,
   // 监听深度嵌套的对象属性
   deep: true,
  },
)

// 直接侦听一个 ref
const watchValue = ref(6);
watch(
  watchValue, 
  (count, prevCount) => {
    console.log('watch count: ' + count);
  },
  {
    immediate: true,
    deep: true,
  }
)
</script>

<style lang="scss" scoped>

</style>