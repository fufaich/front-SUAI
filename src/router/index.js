import { createRouter, createWebHistory } from 'vue-router'
import FirstScreen from '@/views/FirstScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstScreen
    }
  ]
})

export default router
