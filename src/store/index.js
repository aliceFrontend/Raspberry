import Vue from 'vue'
import Vuex from 'vuex'
import post from '@/store/modules/post'
import auth from '@/store/modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    post,
    auth
  }
})
