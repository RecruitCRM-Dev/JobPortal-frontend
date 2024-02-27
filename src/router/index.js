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
import PostJobVue from '@/views/Employer/PostJob.vue'
import JobApplicantsVue from '@/views/Employer/JobApplicants.vue'
import EmployeeOverview from '@/views/Employee/EmployeeOverview.vue'
import EmployeeProfile from '@/views/Employee/EmployeeProfile.vue'
import EmployeeJobPosts from '@/views/Employee/EmployeeJobPosts.vue'

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
    },
    {
      path: '/employee',
      name: 'Employee-profile-overview',
      component: EmployeeOverview
    },
    {
      path: '/employee/update',
      name: 'employee-update',
      component: EmployeeProfile
    },
    {
      path: '/employee/jobs',
      name: 'employee-jobs',
      component: EmployeeJobPosts
    },
    {
      path: '/employer/job/post',
      name: 'job-post',
      component: PostJobVue
    },
    {
      path:'/job/applicants',
      name:'job-applicants',
      component: JobApplicantsVue
    }
  ]
})

export default router
