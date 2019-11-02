import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/advanced',
    name: 'advanced',
    component: () => import('../views/Advanced.vue')
  },
  {
    path: '/dailyquestion',
    name: 'dailyquestion',
    component: () => import('../views/DailyQuestion.vue')
  },
  {
    path: '/Article',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/wisdom',
    name: 'wisdom',
    component: () => import('../views/Wisdom.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
