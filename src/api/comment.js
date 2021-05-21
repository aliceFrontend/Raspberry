import axios from '@/api/axios'

const getComment = apiUrl => {
  return axios.get(apiUrl)
}

export default {
  getComment
}
