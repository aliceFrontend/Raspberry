import axios from '@/api/axios'

const getComment = apiUrl => {
  return axios.get(apiUrl)
}

const createComment = (commentInput, slug) => {
  return axios
    .post(`articles/${slug}/comments`, {comment: commentInput})
    .then(response => response.data.comment)
}

export default {
  getComment,
  createComment
}
