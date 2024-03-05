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
