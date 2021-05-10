import Vue from 'vue'
import VueRouter from 'vue-router'

import GlobalFeed from '@/views/GlobalFeed'

import Register from '@/views/Register'
import Login from '@/views/Login'

import NotFound from '@/views/NotFound'

import Article from '@/views/Article'
import CreateArticle from '@/views/CreateArticle'
import Form from '@/components/Form'
import Settings from '@/views/Settings'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: GlobalFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: GlobalFeed
  },
  {
    path: '/article/new',
    name: 'createArticle',
    component: CreateArticle
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: Article
  },
  {
    path: '/article/:slug/edit',
    name: 'editArticle',
    component: Form
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: GlobalFeed
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: GlobalFeed
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
  // {
  //   path: '/addPost',
  //   name: 'addPost',
  //   component: Form
  // },
  // {
  //   path: '/editPost',
  //   name: 'editPost',
  //   component: Form
  // },
  // {
  //   path: '/post',
  //   name: 'post',
  //   component: Post
  // },
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
