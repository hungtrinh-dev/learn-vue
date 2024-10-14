<script setup>
import { onMounted, reactive, defineProps } from 'vue'
import JobListingCard from './JobListingCard.vue'
import axios from 'axios'
import PulseLoader from './PulseLoader.vue'

const { limit, shouldVisibleShowMoreButton } = defineProps({
  limit: Number,
  shouldVisibleShowMoreButton: {
    type: Boolean,
    default: false
  }
})

const state = reactive({
  jobs: [],
  fetchJobListingInProgress: false,
  fetchJobListingError: null
})

onMounted(async () => {
  state.fetchJobListingInProgress = true

  try {
    const apiResponse = await axios.get('https://670cfb81073307b4ee41daa8.mockapi.io/api/v1/jobs')
    state.jobs = apiResponse.data
  } catch (error) {
    console.error('Fetch listing error:', error)
    state.fetchJobListingError = error
  } finally {
    state.fetchJobListingInProgress = false
  }
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div v-if="state.fetchJobListingInProgress" class="text-center py-6 text-gray">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListingCard
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
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
