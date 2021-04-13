// const mysql = require('mysql')
export default {
  state: {
    posts: [
      {
        id: 1,
        image: 'thumb_article8',
        data: 'Maret 15, 2021',
        title: 'Tentang membuat design responsive',
        subtitle:
          'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive '
      },
      {
        id: 2,
        image: 'thumb_article1',
        data: 'Maret 15, 2021',
        title: 'Tentang membuat design responsive',
        subtitle:
          'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'
      },
      {
        id: 3,
        image: 'thumb_article3',
        data: 'Maret 15, 2021',
        title: 'Tentang membuat design responsive',
        subtitle:
          'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'
      },
      {
        id: 4,
        image: 'thumb_article7',
        data: 'Maret 15, 2021',
        title: 'Tentang membuat design responsive',
        subtitle:
          'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'
      },
      {
        id: 5,
        image: 'thumb_article8',
        data: 'Maret 15, 2021',
        title: 'Tentang membuat design responsive',
        subtitle:
          'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive '
      },
      {
        id: 6,
        image: 'thumb_article1',
        data: 'Maret 15, 2021',
        title: 'Tentang membuat design responsive',
        subtitle:
          'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'
      },
      {
        id: 7,
        image: 'thumb_article3',
        data: 'Maret 15, 2021',
        title: 'Tentang membuat design responsive',
        subtitle:
          'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'
      },
      {
        id: 8,
        image: 'thumb_article7',
        data: 'Maret 15, 2021',
        title: 'Tentang membuat design responsive',
        subtitle:
          'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'
      },
      {
        id: 9,
        image: 'thumb_article3',
        data: 'Maret 15, 2021',
        title: 'Tentang membuat design responsive',
        subtitle:
          'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'
      }
    ]
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    }
  },
  // actions: {
  //   async fetchPost(commit, dispatch) {}
  // },
  getters: {
    allPosts(state) {
      return state.posts
    }
  }
}
