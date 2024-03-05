import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobList from '../views/JobList.vue'
import JobApplication from '@/views/JobApplication.vue'
import CommonLogin from '@/views/Auth/CommonLogin.vue'
import ForgotPasswod from '../views/Auth/ForgotPasswod.vue'
import UpdatePassword from '@/views/Auth/UpdatePassword.vue'
import NotFound from '@/components/NotFound.vue'

import candidateRoutes from './candidateRoutes'
import employerRoutes from './employerRoutes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...candidateRoutes,
    ...employerRoutes,
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobList
    },
    {
      path: '/job/:id/apply',
      name: 'apply',
      component: JobApplication
    },
    {
      path: '/login',
      name: 'login',
      component: CommonLogin
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPasswod
    },
    {
      path: '/resetpassword',
      name: 'update-password',
      component: UpdatePassword
    },
    {
      path: '/:pathName(.*)*',
      name: 'notfound',
      component: NotFound
    },
    
  ]
})

export default router
