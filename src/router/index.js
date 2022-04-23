import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Discover from '../views/Discover.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover
  },
  {
    path: '/search/:text',
    name: 'search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
