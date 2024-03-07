import CandidateRegister from '@/views/Auth/CandidateRegister.vue'
import CandidateOverview from '@/views/Candidate/CandidateOverview.vue'
import CandidateProfile from '@/views/Candidate/CandidateProfile.vue'
import CandidateApplication from '@/views/Candidate/CandidateApplication.vue'
import CandidateInsights from '@/views/Candidate/CandidateInsights.vue'

export default [
  { path: '/candidate/register', name: 'candidate-register', component: CandidateRegister },
  { path: '/candidate/:id', name: 'profile-overview', component: CandidateOverview },
  { path: '/candidate/:id/update', name: 'candidate-update', component: CandidateProfile },
  {
    path: '/candidate/:id/applications',
    name: 'candidate-applications',
    component: CandidateApplication
  },
  { path: '/candidate/:id/insights', name: 'candidate-insights', component: CandidateInsights }
]
