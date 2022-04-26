<template>
    <div>
      <p>Vuex-modules-mapState相关:</p>
      <p>{{commonValue}}-{{commonName}}</p>
      <p>state-moduleA:</p>
      <ul>
          <li v-for="item in moduleA.AValue" :key="item.id">{{item.name}}-{{item.age}}</li>
      </ul>
      <p>{{moduleA.AName}}</p>
      <p>getters:{{AGetters}}</p>
      <p>mutations:<button @click="clickAMuta({amount: 5})">mutations</button></p>
      <p>actions:<button @click="clickAActions">actions</button></p>
      <p>state-moduleB:</p>
      <ul>
          <li v-for="item in BValue" :key="item.id">{{item.name}}-{{item.age}}</li>
      </ul>
      <p>{{BName}}</p>
      <p>{{BObject.name}}-{{BObject.age}}</p>
      <p>getters:{{BGetters}}</p>
      <p>mutations:<button @click="AMutations({amount: 2})">mutations</button></p>
      <!-- 对象方式 -->
      <!-- <p>mutations:<button @click="clickBMuta({amount: 2})">mutations</button></p> -->
      <p>actions:<button @click="AActions">actions</button></p>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore, mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import useState from './useState';

export default defineComponent({
  name: 'VueXModulesMap',
  setup(){
   const store = useStore();
   
    // state
    const storeStateA = useState(['moduleA']);

    // state
    const storeStateFns = mapState('moduleB', ['BValue','BName','BObject']);

    const storeState = {}
    Object.keys(storeStateFns).forEach(fnnKey=>{
      const fn = storeStateFns[fnnKey].bind({$store:store})
      storeState[fnnKey]=computed(fn)
    })
    
   // getters
   const storeGetterA = useState(['AGetters'],true);

   const storeGetterModuleB = mapGetters('moduleB', ['BGetters']); 
    const storeGetterB = {}
    Object.keys(storeGetterModuleB).forEach(fnnKey=>{
      const fn = storeGetterModuleB[fnnKey].bind({$store:store})
      storeGetterB[fnnKey]=computed(fn)
    })

    // mutations
    const storeMutation = mapMutations({
        clickAMuta: 'AMutations',
        // clickBMuta: 'moduleB/AMutations',    // 对象方式
    });
    const storeMutationB = mapMutations('moduleB', ['AMutations']);  // modules名字


    // actions
    const storeActionA = mapActions({
        clickAActions: 'AActions'
    });
    const storeActionB = mapActions('moduleB', ['AActions']);    // modules名字

    return{ 
      ...storeStateA,
      ...storeState,
      ...storeGetterA,
      ...storeGetterB,
      ...storeMutation,
      ...storeMutationB,
      ...storeActionA,
      ...storeActionB,
      
    }

  }
})
</script>

<style lang="scss" scoped>

</style>