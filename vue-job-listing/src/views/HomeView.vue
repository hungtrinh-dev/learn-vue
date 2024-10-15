<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import JobTypeSection from '@/components/JobTypeSection.vue'
import ManageJobListings from '@/components/ManageJobListings.vue'
import useJobs from '@/composables/useJobs'

const { jobs, fetchJobListingInProgress } = useJobs()
</script>

<template>
  <HeroBanner />
  <JobTypeSection />
  <ManageJobListings
    :shouldVisibleShowMoreButton="true"
    :limit="3"
    :jobs="jobs"
    :fetchJobListingInProgress="fetchJobListingInProgress"
  />
</template>
