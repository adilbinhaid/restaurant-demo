import { createRouter, createWebHistory } from 'vue-router'

import Contact from '../pages/Contact.vue'
import Home from '../pages/Home.vue'
import Menu from '../pages/Menu.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
