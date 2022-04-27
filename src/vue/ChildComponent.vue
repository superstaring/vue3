<template>
    <div>
      <p>父传子方法：{{users.name}} - {{users.age}}</p>
      <button @click="clickChild">子传父方法-点击</button>
      <NextComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NextComponent from './NextComponent.vue';
export default defineComponent({
  name: 'ChildComponent',
  components: {
    NextComponent,
  },
  props: {
    users: Object,
  },
  setup(props, { emit }){
    const clickChild = function(){
      emit('clickChild', '改变值');
    }
    return {
      clickChild,
    }
  }
})
  
</script>

<style lang="scss" scoped>

</style>