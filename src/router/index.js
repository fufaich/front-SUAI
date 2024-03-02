import { createRouter, createWebHistory } from 'vue-router'
import FirstScreen from '@/views/FirstScreen.vue'
import SuaiAuthScreen from '@/views/SuaiAuthScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstScreen
    },
    {
      path: '/authSUAI',
      name: 'SuaiAuthScreen',

      component: SuaiAuthScreen
    }
  ]
})

export default router
