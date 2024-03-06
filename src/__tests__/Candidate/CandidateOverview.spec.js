import { shallowMount } from '@vue/test-utils'
import CandidateOverview from '@/__tests__/__mocks__/CandidateOverview.vue'
import { describe, it, expect } from 'vitest'
import UserNavigation from '@/components/UserNavigation.vue'
import { Form } from 'vee-validate'

//import axios from '../../api.js';
describe('CandidateOverview', () => {
  it('Candidate Overview', async () => {
    const wrapper = shallowMount(CandidateOverview)
    let text = 'Candidate Overview'
    expect(wrapper.text()).toMatch(text)

    expect(wrapper.findComponent(UserNavigation).exists()).toBeTruthy()
  })
})
