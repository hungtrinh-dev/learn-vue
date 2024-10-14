<script setup>
import { defineProps } from 'vue'
defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100'
  }
})
</script>

<template>
  <div>
    <div :class="`${bg} p-6 rounded-lg shadow-md`">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
