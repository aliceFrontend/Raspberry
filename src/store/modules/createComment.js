import commentApi from '@/api/comment'

const state = {
  isSubmitting: false,
  validationErrors: null
}

export const mutationTypes = {
  createCommentStart: '[createComment] Create comment start',
  createCommentSuccess: '[createComment] Create comment success',
  createCommentFailure: '[createComment] Create comment failure'
}

export const actionTypes = {
  createComment: '[createComment] Create comment'
}

const mutations = {
  [mutationTypes.createCommentStart](state) {
    state.isSubmitting = true
  },
  [mutationTypes.createCommentSuccess](state) {
    state.isSubmitting = false
  },
  [mutationTypes.createCommentFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  [actionTypes.createComment](context, {commentInput}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.createCommentStart)
      commentApi
        .createComment(commentInput)
        .then(comment => {
          context.commit(mutationTypes.createCommentSuccess, comment)
          resolve(comment)
        })
        .catch(result => {
          context.commit(
            mutationTypes.createCommentFailure,
            result.response.data.errors
          )
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
