import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobList from '../views/JobList.vue'
import CandidateLoginVue from '@/views/Auth/CandidateLogin.vue'
import CandidateRegisterVue from '@/views/Auth/CandidateRegister.vue'
import EmployerLoginVue from '@/views/Auth/EmployerLogin.vue'
import EmployerRegisterVue from '@/views/Auth/EmployerRegister.vue'
import JobApplication from '@/views/JobApplication.vue'
import CandidateOverviewVue from '@/views/Candidate/CandidateOverview.vue'
import CandidateProfileVue from '@/views/Candidate/CandidateProfile.vue'
import CandidateApplicationVue from '@/views/Candidate/CandidateApplication.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/candidate/login',
      name: 'login',
      component: CandidateLoginVue
    },
    {
      path: '/candidate/register',
      name: 'candidate-register',
      component: CandidateRegisterVue
    },
    {
      path: '/employer/login',
      name: 'employer-login',
      component: EmployerLoginVue
    },
    {
      path: '/employer/register',
      name: 'employer-register',
      component: EmployerRegisterVue
    },
    {
      path: '/candidate',
      name: 'profile-overview',
      component: CandidateOverviewVue
    },
    {
      path: '/candidate/update',
      name: 'candidate-update',
      component: CandidateProfileVue
    },
    {
      path: '/candidate/applications',
      name: 'candidate-applications',
      component: CandidateApplicationVue
    }
  ]
})

export default router
