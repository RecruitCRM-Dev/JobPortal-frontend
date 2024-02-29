import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobList from '../views/JobList.vue'
import CommonLogin from '@/views/Auth/CommonLogin.vue'
import CandidateRegisterVue from '@/views/Auth/CandidateRegister.vue'
import EmployerLoginVue from '@/views/Auth/CommonLogin.vue'
import EmployerRegisterVue from '@/views/Auth/EmployerRegister.vue'
import JobApplication from '@/views/JobApplication.vue'
import CandidateOverviewVue from '@/views/Candidate/CandidateOverview.vue'
import CandidateProfileVue from '@/views/Candidate/CandidateProfile.vue'
import CandidateApplicationVue from '@/views/Candidate/CandidateApplication.vue'
import JobPostVue from '@/views/Employer/JobPost.vue'
import JobApplicantsVue from '@/views/Employer/JobApplicants.vue'
import EmployerOverview from '@/views/Employer/EmployerOverview.vue'
import EmployerProfile from '@/views/Employer/EmployerProfile.vue'
import EmployerJobPosts from '@/views/Employer/EmployerJobPosts.vue'

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
      path: '/login',
      name: 'login',
      component: CommonLogin
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
      path: '/candidate/:id',
      name: 'profile-overview',
      component: CandidateOverviewVue
    },
    {
      path: '/candidate/:id/update',
      name: 'candidate-update',
      component: CandidateProfileVue
    },
    {
      path: '/candidate/:id/applications',
      name: 'candidate-applications',
      component: CandidateApplicationVue
    },
    {
      path: '/employer/:id',
      name: 'Employee-profile-overview',
      component: EmployerOverview
    },
    {
      path: '/employer/:id/update',
      name: 'employee-update',
      component: EmployerProfile
    },
    {
      path: '/employer/:id/jobs',
      name: 'employee-jobs',
      component: EmployerJobPosts
    },
    {
      path: '/employer/:id/job/post',
      name: 'job-post',
      component: JobPostVue
    },
    {
      path:'/employer/:employer_id/job/:job_id/applicants',
      name:'job-applicants',
      component: JobApplicantsVue
    }
  ]
})

export default router
