import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import Post from '@/views/Post'
import Form from '@/components/Form'
import Settings from '@/views/Settings'

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
    component: Form
  },
  {
    path: '/editPost',
    name: 'editPost',
    component: Form
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  // {
  //   path: '/admin',
  //   // name: 'DraftAdmin',
  //   // component: DraftAdmin
  //   redirect: '/http://localhost/blog.ru/#'
  // },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
