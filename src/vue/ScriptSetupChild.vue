<template>
    <div>
        <p>ScriptSetupChild 子组件</p>
        <p>父传子：{{props.val}}</p>
        <p><button @click="$emit('clickChild', '子值参数')">子传父</button></p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  val: String,
})
</script>

<style lang="scss" scoped>

</style>