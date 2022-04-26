<template>
  <p>provide和inject方法：{{getTemp}}</p>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
export default defineComponent({
  name: 'NextComponent',
  setup(){
    const getTemp = inject('temp');
    return {
      getTemp,
    }
  }
})
</script>

<style>

</style>