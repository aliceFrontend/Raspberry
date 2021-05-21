import commentApi from '@/api/comment'

const state = {
  data: null,
  isLoading: false,
  error: null
}

export const mutationTypes = {
  getCommentStart: '[comment] Get comment start',
  getCommentSuccess: '[comment] Get comment success',
  getCommentFailure: '[comment] Get comment failure'
}

export const actionTypes = {
  getComment: '[comment] Get comment'
}

const mutations = {
  [mutationTypes.getCommentStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getCommentSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getCommentFailure](state) {
    state.isLoading = false
  }
}

const actions = {
  [actionTypes.getComment](context, {apiUrl}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getCommentStart)
      commentApi
        .getComment(apiUrl)
        .then(response => {
          context.commit(mutationTypes.getCommentSuccess, response.data)
          resolve(response.data)
        })
        .catch(() => {
          context.commit(mutationTypes.getCommentFailure)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
