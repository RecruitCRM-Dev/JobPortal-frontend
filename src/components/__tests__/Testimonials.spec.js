// import { shallowMount } from '@vue/test-utils';
// import Testimonials from '@/components/Testimonials.vue';
// import Container from '@/components/Container.vue'
// import { describe,it, expect } from 'vitest';
// describe('Testimonials', () => {
//   it('renders testimonials with correct content',async () => {
//     // Mount the Testimonials component
//     const wrapper = await shallowMount(Testimonials);

//     // Check if the component exists
//     expect(wrapper.exists()).toBe(true);

//     // Check if the component contains the expected HTML structure
//     expect(wrapper.find('#testimonials').exists()).toBe(true);
//     expect(wrapper.findComponent(Container).exists()).toBe(true);

//     // // Check if the component contains the expected text content
//     // expect(wrapper.text()).toMatch('What our customers are saying about us');
//     // expect(wrapper.text()).toContain('Lorem ipsum dolor sit');
//     // expect(wrapper.text()).toContain('Accusantium illum cupiditate harum');

//     // // Check if the component contains the expected author names
//     // expect(wrapper.text()).toContain('Leroy Jenkins');

//     // // Optionally, you can also check for specific HTML elements and attributes
//     //  expect(wrapper.find('p').exists()).toBe(true);
//     // // expect(wrapper.find('svg').exists()).toBe(true);
//     // // expect(wrapper.find('span').exists()).toBe(true);
//   });
// });

import { render, screen } from '@testing-library/vue'
import Testimonials from '@/components/Testimonials.vue'
import { describe, it, expect } from 'vitest'

describe('Testimonials', () => {
  it('renders testimonial content', () => {
    render(Testimonials)

    // Find elements by text content
    const headingElement = screen.getByText(/What our customers are saying about us/i)
    const testimonialElements = screen.getAllByRole('article')

    // Assert that elements exist
    expect(headingElement).toBeTruthy()
    expect(testimonialElements).toHaveLength(2) // Assuming there are two testimonials
  })
})
