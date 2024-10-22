<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <ListingForm
        :handleCreateNewJobListing="handleCreateNewJobListing"
        :createNewListingInProgress="createNewListingInProgress"
      />
    </div>
  </section>
</template>

<script setup>
import JobAPI from '@/api/jobAPI'
import ListingForm from '@/components/ListingForm.vue'
import router from '@/router'
import { reactive } from 'vue'

const state = reactive({
  createNewListingInProgress: false,
  createNewListingError: null
})

const handleCreateNewJobListing = async (newListing) => {
  state.createNewListingInProgress = true
  try {
    const response = await JobAPI.createNewJobListing(newListing)
    router.push(`/jobs/${response.data.id}`)
  } catch (error) {
    console.error('Error fetching job', error)
    state.createNewListingError = error
  } finally {
    state.createNewListingInProgress = false
  }
}
</script>

<style lang="scss" scoped></style>
