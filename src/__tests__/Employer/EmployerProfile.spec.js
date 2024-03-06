import { shallowMount } from '@vue/test-utils'
import EmployerProfile from '@/views/mocked/EmployerProfile.vue'
import { describe, it, expect, vi } from 'vitest'
import EmployerNavigation from '@/components/EmployerNavigation.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useStore } from 'vuex'
//import axios from '../../api.js';

// Mock the axios module
const mockPost = vi.fn();
const mockAxios = { post: mockPost };

describe('EmployerProfile', () => {
  it('Employer Update form', async () => {
    const wrapper = shallowMount(EmployerProfile)
    let text = 'Edit your profile'
    expect(wrapper.text()).toMatch(text)

    expect(wrapper.findComponent(EmployerNavigation).exists()).toBeTruthy()

    const form = wrapper.findComponent(Form)
    expect(form.exists()).toBe(true)
  })
  it('renders all form fields', async () => {
    const wrapper = shallowMount(EmployerProfile)

    // Check if all form fields exist
    const formFields = wrapper.findAllComponents(Field)
    // Check if all form fields are visible
    formFields.forEach((field) => {
      expect(field.isVisible()).toBe(true)
    })
    // Check if the error messages are present for each field
  })
})
