<template>
    <div>
      <p>Vuex相关:</p>
      <ul>
        <li v-for="item in commonValue" :key="item.id">{{item.name}}-{{item.age}}</li>
      </ul>
      <p>{{commonName}}</p>
      <p><button>getters:</button> {{gettersValue}}</p>
      <p><button @click="clickMutations">mutations</button></p>
      <p><button @click="clickActions">actions</button></p>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'VueX',
  setup(){
    const store = useStore();

    const commonValue = computed(() => store.state.commonValue);
    const commonName = computed(() => store.state.commonName);

    const gettersValue = computed(()=> store.getters.getComValue);

    // mutations
    const clickMutations = function (){
      console.log('点击mutations');
      store.commit('setMethodMuta', { amount: 3 });
    }

    // actions
    const clickActions = function(){
      console.log('点击actions');
      store.dispatch('setCountAct');
    }

    return {
      commonValue,
      commonName,
      gettersValue,
      clickMutations,
      clickActions,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>