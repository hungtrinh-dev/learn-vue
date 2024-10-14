<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import JobTypeSection from '@/components/JobTypeSection.vue'
import ManageJobListings from '@/components/ManageJobListings.vue'
</script>

<template>
  <HeroBanner />
  <JobTypeSection />
  <ManageJobListings :shouldVisibleShowMoreButton="true" :limit="3" />
</template>
