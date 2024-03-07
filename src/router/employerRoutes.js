import EmployerRegister from '@/views/Auth/EmployerRegister.vue'
import JobPost from '@/views/Employer/JobPost.vue'
import JobApplicants from '@/views/Employer/JobApplicants.vue'
import EmployerOverview from '@/views/Employer/EmployerOverview.vue'
import EmployerProfile from '@/views/Employer/EmployerProfile.vue'
import EmployerJobPosts from '@/views/Employer/EmployerJobPosts.vue'

export default [
  { path: '/employer/register', name: 'employer-register', component: EmployerRegister },
  { path: '/employer/:id', name: 'employee-profile-overview', component: EmployerOverview },
  { path: '/employer/:id/update', name: 'employee-update', component: EmployerProfile },
  { path: '/employer/:id/jobs', name: 'employee-jobs', component: EmployerJobPosts },
  { path: '/employer/:id/job/post', name: 'job-post', component: JobPost },
  {
    path: '/employer/:employer_id/job/:job_id/applicants',
    name: 'job-applicants',
    component: JobApplicants
  }
]
