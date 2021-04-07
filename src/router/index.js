import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import AddPost from '@/views/AddPost'
// import Post from '@/views/Post'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: AddPost
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
  // {
  //   path: '/post/:id',
  //   name: 'post',
  //   component: Post
  // }
]

const router = new VueRouter({
  routes
})

export default router
