import axios from 'axios'

const api = axios.create({
  baseURL: 'https://670cfb81073307b4ee41daa8.mockapi.io/api/v1',
  timeout: 8000
})

export default api
