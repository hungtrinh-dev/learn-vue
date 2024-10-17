import { onMounted, reactive, toRefs, watch } from 'vue'
import { debounce } from 'lodash'
import JobAPI from '@/api/jobAPI'

const QUERY_DEBOUNCE_TIMEOUT = 300

const useJobs = (searchTermRef) => {
  const state = reactive({
    jobs: [],
    fetchJobListingInProgress: false,
    fetchJobListingError: null
  })

  const queryJobListings = async () => {
    state.fetchJobListingInProgress = true

    const queryParamsMaybe = {
      ...(searchTermRef && !!searchTermRef.value && { filter: `${searchTermRef.value}` })
    }

    try {
      const apiResponse = await JobAPI.queryJobListings(queryParamsMaybe)
      state.jobs = apiResponse.data
    } catch (error) {
      console.error('Fetch listing error:', error)
      state.fetchJobListingError = error
    } finally {
      state.fetchJobListingInProgress = false
    }
  }

  const debounceQueryJobListings = debounce(queryJobListings, QUERY_DEBOUNCE_TIMEOUT)

  watch(searchTermRef, debounceQueryJobListings)
  onMounted(queryJobListings)

  return toRefs(state)
}

export default useJobs
