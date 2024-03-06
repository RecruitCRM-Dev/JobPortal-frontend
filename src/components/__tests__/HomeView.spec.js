import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/JobApplication.vue'
import { describe, it, expect } from 'vitest'
import AppLayout from '@/layouts/AppLayout.vue'

describe('HomeView rendering', () => {
  it('display landing page', async () => {
    const wrapper = shallowMount(HomeView)

    await expect(wrapper.findComponent(AppLayout).exists()).toBeTruthy()
  })
})
