import commentApi from '@/api/comment'

const state = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  data: null
}

export const mutationTypes = {
  getCommentStart: '[comment] Get comment start',
  getCommentSuccess: '[comment] Get comment success',
  getCommentFailure: '[comment] Get comment failure',

  deleteCommentStart: '[comment] Delete comment start',
  deleteCommentSuccess: '[comment] Delete comment success',
  deleteCommentFailure: '[comment] Delete comment failure'
}

export const actionTypes = {
  getComment: '[comment] Get comment',
  deleteComment: '[comment] Delete comment'
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
  },

  [mutationTypes.deleteCommentStart]() {},
  [mutationTypes.deleteCommentSuccess]() {},
  [mutationTypes.deleteCommentFailure]() {}
}

const actions = {
  [actionTypes.getComment](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getCommentStart, slug)
      commentApi
        .getComment(slug)
        .then(comment => {
          context.commit(mutationTypes.getCommentSuccess, comment)
          resolve(comment)
        })
        .catch(() => {
          context.commit(mutationTypes.getCommentFailure)
        })
    })
  },
  [actionTypes.deleteComment](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.deleteCommentStart, slug)
      commentApi
        .deleteComment(slug)
        .then(() => {
          context.commit(mutationTypes.deleteCommentSuccess)
          resolve()
        })
        .catch(() => {
          context.commit(mutationTypes.deleteCommentFailure)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
