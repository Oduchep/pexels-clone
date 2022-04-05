import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Discover from '../views/Discover.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
