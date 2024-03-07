// import { render, screen } from '@testing-library/vue'
// import HeroSectionTest from '@/components/HeroSection.vue'
// import { describe, it, expect } from 'vitest'

// describe('HeroSection', () => {
//   it('renders the main title', () => {
//     render(HeroSectionTest)

//     const titleElement = screen.getByText('Where opportunities meet aspirations.')
//     expect(titleElement).toBeTruthy()
//   })

//   it('renders the "See All Jobs" button', () => {
//     render(HeroSectionTest)

//     const buttonElement = screen.getByRole('link', { name: 'See All Jobs' })
//     expect(buttonElement).toBeTruthy()
//   })

//   it('renders the client logo', () => {
//     render(HeroSectionTest)

//     // Find the Microsoft logo by its alt text
//     const cleintLogo = screen.getByTestId('clientLogo')

//     // Assert that the Microsoft logo exists
//     expect (cleintLogo).toBeTruthy()
//     })
// })

import { render, screen } from '@testing-library/vue'
import JobSearchTest from '@/components/JobSearch.vue'
import { describe, it, expect } from 'vitest'

describe('JobSearchForm', () => {
  it('renders the job search form', () => {
    render(JobSearchTest)

    // Find the job search form by data-testid
    const jobSearchForm = screen.getByTestId('job-search-form')

    // Assert that the job search form exists
    expect(jobSearchForm).toBeTruthy()
  })
})