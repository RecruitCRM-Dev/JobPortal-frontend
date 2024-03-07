import { shallowMount } from "@vue/test-utils";
import CandidateProfile from "@/views/mocked/CandidateProfile.vue";
import { describe, it , expect} from "vitest";
import UserNavigation from '@/components/UserNavigation.vue';
import { Form } from "vee-validate";

//import axios from '../../api.js';
describe('CandidateProfile',() => {
  it('Candidate Update form', async() => {
    
  
    const wrapper = shallowMount(CandidateProfile);
    let text = 'Edit your profile'
    expect(wrapper.text()).toMatch(text)
    
    expect(wrapper.findComponent(UserNavigation).exists( )).toBeTruthy();

// Assuming label is wrapped in a <label> tag
  
 
const mockUserData = {
  profile_pic: 'https://example.com/profile-pic.jpg',
  name: 'John Doe',
  about: 'Lorem ipsum dolor sit amet.',
  address: '123 Main St, City',
  gender: 'Male',
  role: 'Software Developer',
  experience: '3',
  education: 'Bachelor\'s Degree',
  phone: '1234567890',
  skills: ['HTML5', 'Javascript'],
  resume: 'https://example.com/resume.pdf'
};
    const form =  wrapper.findComponent(Form)
    expect(form.exists()).toBe(true)
    
    // // await wrapper.find('[name="about"]').setValue('Lorem ipsum dolor sit amet')
    // // await wrapper.find('[name="gender"]').setValue('Male')
    // // await wrapper.find('[name="phone"]').setValue('1234567890')
    // // await wrapper.find('[name="role"]').setValue('Software Developer')
    // // await wrapper.find('[name="experience"]').setValue('1')
    // // await wrapper.find('[name="education"]').setValue('Bachelor')
    // // await wrapper.find('[name="address"]').setValue('123 Main St')
    // // await wrapper.find('[name="skills"]').setValue('HTML5')
    // // const fileInput = wrapper.find('[name="resume"]')
    // // await fileInput.trigger('change', {
    // //   target: { files: [new File([''], 'resume.pdf', { type: 'application/pdf' })] }
    // // })
    // // Mock axios.post method
    // const axiosPost = jest.spyOn(axios, 'post')
    // axiosPost.mockResolvedValueOnce({ data: { user: { profile_pic: 'path/to/profile_pic' } } })

    // // Submit form
    // await wrapper.find('form').trigger('submit.prevent')

    // // Check if axios.post is called with correct data
    // expect(axiosPost).toHaveBeenCalledWith(
    //   '/api/user/profile/123', // Adjust the route params as needed
    //   expect.objectContaining({
    //     name: 'John Doe',
    //     about: 'Lorem ipsum dolor sit amet',
    //     gender: 'Male',
    //     phone: '1234567890',
    //     role: 'Software Developer',
    //     experience: '1',
    //     education: 'Bachelor',
    //     address: '123 Main St',
    //     skills: ['HTML5'],
    //     resume: expect.any(File)
    //   }),
    //   expect.objectContaining({
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   })
    // )

    // // Wait for async update
    // await wrapper.vm.$nextTick()

    // // Check if profile update message is displayed
    // expect(wrapper.text()).toContain('Profile Update Successfully!')
  })
})