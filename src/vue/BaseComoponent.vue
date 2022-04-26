<template>
    <div>
      <h2>VUE3</h2>
      <ChildComponent :users="users" @clickChild="clickChild" />
      <p>{{childValue}}</p>
      <VueXComp />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import ChildComponent from './ChildComponent.vue';
import VueXComp from './VueXComp';
export default defineComponent({
  name: 'BaseComponent',
  components: {
    ChildComponent,
    VueXComp,
  },
  setup(){
   const users = ref({name: 'vue3', age: 2});
   
   let childValue = ref('初始值');
   const clickChild = (data: string) => {
       childValue.value = data;
   }

   provide('temp', childValue)

   return {
      users,
      clickChild,
      childValue,
   }


  }
});
</script>

<style lang="scss" scoped>

</style>