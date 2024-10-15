<script setup>
import ManageJobListings from '@/components/ManageJobListings.vue'
import useJobs from '@/composables/useJobs'
import { ref } from 'vue'
const searchValue = ref('')

const { jobs, fetchJobListingInProgress } = useJobs(searchValue)
</script>
<template>
  <section class="bg-green-50 py-4">
    <div class="container mx-auto px-4">
      <div class="relative">
        <input
          type="text"
          v-model="searchValue"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Filter jobs..."
        />
      </div>
    </div>
  </section>
  <ManageJobListings :jobs="jobs" :fetchJobListingInProgress="fetchJobListingInProgress" />
</template>

<style lang="scss" scoped></style>
