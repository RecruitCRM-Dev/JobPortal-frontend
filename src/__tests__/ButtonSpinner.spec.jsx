import { render, screen } from '@testing-library/vue'
import ButtonSpinnerTest from '@/components/ButtonSpinner.vue' 
import { describe, it, expect } from 'vitest'

describe('ButtonSpinner', () => {
  it('renders the animated spinner SVG', () => {
    render(ButtonSpinnerTest)

    // Find the SVG element by its role
    const svgElement = screen.getByTestId('spinner');

    // Assert that the SVG element exists
    expect(svgElement).toBeTruthy();
  })
})
