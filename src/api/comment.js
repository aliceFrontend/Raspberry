import axios from '@/api/axios'

const getComment = slug => {
  return axios
    .get(`/artices.${slug}/comments`)
    .then(response => response.data.article)
}

export default {
  getComment
}
