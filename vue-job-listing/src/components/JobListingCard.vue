<script setup>
import { computed, defineProps, ref } from 'vue'

const { job } = defineProps({
  job: Object,
  limit: Number
})

const { title, location, salary, type, id } = job
console.log('🚀 ~ id:', id)

const DESCRIPTION_MAX_LENGTH = 90

const shouldShowFullDescriotion = ref(false)

const toggleShowFullDescription = () => {
  shouldShowFullDescriotion.value = !shouldShowFullDescriotion.value
}

const truncatedDescription = computed(() => {
  let desc = job.description || ''

  if (!shouldShowFullDescriotion.value) {
    desc = desc.substring(0, DESCRIPTION_MAX_LENGTH) + '...'
  }

  return desc
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ type }}</div>
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </div>

      <div class="mb-5">
        <p>{{ truncatedDescription }}</p>
        <div
          class="mb-2 text-green-600 cursor-pointer underline inline-block"
          @click="toggleShowFullDescription"
        >
          <span v-if="shouldShowFullDescriotion">Show less</span>
          <span v-else>Show more</span>
        </div>
      </div>

      <h3 class="text-green-500 mb-2">{{ salary }}/year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ location }}
        </div>
        <RouterLink
          :to="`/jobs/${id}`"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
