import api from './api'

const queryJobListings = (queryParams) => {
  const params = {
    ...queryParams
  }

  return api.get('/jobs', {
    params: {
      ...params
    }
  })
}

const getJobListingById = (id) => {
  return api.get(`/jobs/${id}`)
}

const createNewJobListing = (listing) => {
  return api.post('/jobs', listing)
}

const JobAPI = {
  queryJobListings,
  getJobListingById,
  createNewJobListing
}

export default JobAPI
