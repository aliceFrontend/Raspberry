import axios from '@/api/axios'

const getComment = apiUrl => {
  return axios.get(apiUrl)
}

// const createComment = apiUrl => {
//   return axios.comment('/comments', {apiUrl: this.apiUrl})
// }

// const createComment = apiUrl => {
//   return axios.post(apiUrl)
// }
const createComment = commentInput => {
  return axios
    .post('/comments', {comment: commentInput})
    .then(response => response.data.comment)
}
export default {
  getComment,
  createComment
}
