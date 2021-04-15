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
    updatePosts({commit}) {
      commit('updatePosts')
    },
    createPost({commit}) {
      commit('createPost')
    },
    async fetchPosts(ctx) {
      let res = await fetch('http://localhost/api.blog.ru/posts')
      let posts = await res.json()

      ctx.commit('updatePosts', posts)
    }
    // Back-end
    // async addPost(newPost) {
    //   let formData = new FormData()

    //   formData.append('post_title', newPost.post_title)
    //   formData.append('post_text', newPost.post_text)
    //   formData.append('post_image', newPost.post_image)

    //   await fetch('http://localhost/api.blog.ru/posts', {
    //     method: 'POST',
    //     body: formData
    //   })
    // }
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  }
}
