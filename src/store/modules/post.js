export default {
  state: {
    posts: []
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    }
  },
  actions: {
    async fetchPosts(ctx) {
      let res = await fetch('http://localhost/api.blog.ru/posts')
      let posts = await res.json()

      ctx.commit('updatePosts', posts)
    }
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  }
}
