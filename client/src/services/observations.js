import axios from 'axios'
const baseURL = 'http://localhost:3001/api/observations'

const getAll = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const create = formData => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data; boundary={form._boundary}'
    }
  }
  const request = axios.post(baseURL, formData, config)
  return request.then(response => {
    return response.data
  })
}

export default {
  getAll,
  create
}
