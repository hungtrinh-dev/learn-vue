<script setup>
import { defineProps } from 'vue'
import JobListingCard from './JobListingCard.vue'
import PulseLoader from './PulseLoader.vue'

const { limit, shouldVisibleShowMoreButton, jobs, fetchJobListingInProgress } = defineProps({
  limit: Number,
  shouldVisibleShowMoreButton: {
    type: Boolean,
    default: false
  },
  jobs: {
    type: Array,
    default: () => []
  },
  fetchJobListingInProgress: {
    type: Boolean,
    default: false
  },
  fetchJobListingError: {
    type: [String, null],
    default: null
  }
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div v-if="fetchJobListingInProgress" class="text-center py-6 text-gray">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListingCard
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
    <div class="m-auto max-w-lg my-10 px-6" v-if="shouldVisibleShowMoreButton">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs
      </RouterLink>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
