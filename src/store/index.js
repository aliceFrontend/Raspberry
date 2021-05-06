import Vue from 'vue'
import Vuex from 'vuex'
// import post from '@/store/modules/post'
import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popularTags'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    // post,
    auth,
    feed,
    popularTags
  }
})
