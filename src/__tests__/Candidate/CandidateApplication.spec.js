import { shallowMount } from "@vue/test-utils";
import CandidateApplication from "@/views/mocked/CandidateApplication.vue";
import { describe, it , expect} from "vitest";
import AppHeader from '@/components/AppHeader.vue';
import UserNavigation from '@/components/UserNavigation.vue';
import { Menu } from "@headlessui/vue";
import Spinner from '@/components/Spinner.vue';
describe('Candidate Appliction',() => {
  it(' List Applications', ()=> {
    const wrapper = shallowMount(CandidateApplication);
    expect(wrapper.findComponent(AppHeader).exists()).toBeTruthy();
    const header = 'Your Applications';
    expect(wrapper.text()).toContain(header);
    expect(wrapper.findComponent(UserNavigation).exists()).toBeTruthy();
    expect(wrapper.text()).toContain('Applied Jobs');
    const input = wrapper.find('input[placeholder="Search here..."]');
    expect(input.exists()).toBeTruthy();
    expect(wrapper.findComponent(Menu).exists()).toBeTruthy();
    const button = wrapper.find('button[type="button"]');
    expect(button.exists()).toBeTruthy();
    expect(wrapper.findComponent(Spinner).exists()).toBeTruthy();
    
  })
})