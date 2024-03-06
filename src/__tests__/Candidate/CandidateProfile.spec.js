import { shallowMount } from "@vue/test-utils";
import CandidateProfile from "@/views/mocked/CandidateProfile.vue";
import { describe, it , expect, vi} from "vitest";
import UserNavigation from '@/components/UserNavigation.vue';
import { Form } from "vee-validate";
import { useStore } from "vuex";
//import axios from '../../api.js';
describe('CandidateProfile',() => {
  it('Candidate Update form', async() => {
    const wrapper = shallowMount(CandidateProfile);
    let text = 'Edit your profile'
    expect(wrapper.text()).toMatch(text)
    
    expect(wrapper.findComponent(UserNavigation).exists( )).toBeTruthy();

    const form =  wrapper.findComponent(Form)
    expect(form.exists()).toBe(true)
  })
})