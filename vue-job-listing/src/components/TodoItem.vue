<template>
  <Draggable v-if="item">
    <div
      class="cursor-move my-2 mx-4 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 hover:border-2 border-primary"
    >
      <div
        v-if="item.loading"
        class="flex space-x-2 bg-gray-50 text-gray-900 dark:text-gray-200 dark:bg-gray-900 px-4 py-2 rounded-t-lg"
      >
        <span>Processing...</span>
      </div>
      <div class="p-4 space-y-2">
        <div class="rounded-lg bg-primary p-2 w-max h-max inline-block box-content">
          {{ emoji }}
        </div>
        <p>{{ item.data }}</p>
      </div>
    </div>
  </Draggable>
</template>

<script setup>
import { ref } from 'vue'
import { getRandomEmoji } from '@/utils/helpers'
import { Draggable } from 'vue3-smooth-dnd'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emoji = ref(getRandomEmoji())
const item = ref(props.item)
</script>
