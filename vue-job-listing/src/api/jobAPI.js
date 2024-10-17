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

const JobAPI = {
  queryJobListings,
  getJobListingById
}

export default JobAPI
