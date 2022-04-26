<template>
    <div>
      <p>Vuex - moduless相关:</p>
      <p>moduleA: </p>
      <ul>
          <li v-for="item in AState.AValue" :key="item.id">{{item.name}} - {{item.age}}</li>
      </ul>
      <p>{{AState.AName}} </p>
      <p><button @click="clickMutaions">mutations</button></p>
      <p><button @click="clickActions">ations</button></p>

      <p>moduleB: </p>
      <ul>
          <li v-for="item in BState.BValue" :key="item.id">{{item.name}} - {{item.age}}</li>
      </ul>
      <p>{{BState.BName}} </p>
      <p><button @click="clickBMut">mutations</button></p>
      <p><button @click="clickBActions">ations</button></p>
    </div>
</template>

<script  lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from 'vuex';

export default defineComponent({
  name: 'VueXModules',
  setup(){
    const store = useStore();

    // moduleA
    const AState = computed(()=> store.state.moduleA);

    // mutations
    const clickMutaions = () => {
      console.log('点击mutations');
      store.commit('AMutations', { amount: 3 });
    }

    // actions
    const clickActions = () => {
      console.log('点击actions');
      store.dispatch('AActions');
    }

    // moduleB
    const BState = computed(() => store.state.moduleB);

    // mutations
    const clickBMut = () => {
      store.commit('moduleB/AMutations', { amount: 10 });
    }

    // actions 
    const clickBActions = () => {
        store.dispatch('moduleB/AActions');
    }
    return{
      AState,
      clickMutaions,
      clickActions,
      BState,
      clickBMut,
      clickBActions,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>