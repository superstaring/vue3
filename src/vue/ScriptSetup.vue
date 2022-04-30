<script setup lang="ts">
   // setup 在script中的使用
   import { ref, reactive } from 'vue';
   import ScriptSetupChild from './ScriptSetupChild.vue';
   const val = ref('Hello Word!');
   
   const age = ref('');
   const clickChild = (data: string) => {
      age.value = data;
   }

   const users = reactive({ name: 'vue', age: 2 });

   const count = ref(0);
   const clickCount = () => {
       count.value +=10;
   }
</script>

<template>
    <div>
       <p>script-setup</p>
       <p>val: {{val}}</p>
       <ScriptSetupChild :val="val" @clickChild="clickChild" />
       <p>{{age}}</p>
       <p>reactive: {{users.name}}-{{users.age}}</p>
       <p>count: {{count}}<button @click="clickCount">点击++</button></p>
    </div>
</template>

<style scoped>

</style>