import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import FeaturesTest from '@/components/Features.vue'

describe('FeaturesTest', () => {
  it('renders the title "Why us?"', async () => {
    render(FeaturesTest)

    const titleElement = screen.getByText('Why us?')
    expect(titleElement).to.exist;
  })

  // it('renders the four feature sections', async () => {
  //   render(FeaturesTest)

  //   const featureTitles = screen.getAllByRole('heading', { level: 2 })
  //   expect(featureTitles).toHaveLength(4)

  //   const featureDescriptions = screen.getAllByRole('definition')
  //   expect(featureDescriptions).toHaveLength(4)
  // })

  // it('renders the feature icons', async () => {
  //   render(FeaturesTest)

  //   const magnifyingGlassIcon = screen.getByTestId('magnifying-glass-icon')
  //   expect(magnifyingGlassIcon).toBeInTheDocument()

  //   const userCircleIcon = screen.getByTestId('user-circle-icon')
  //   expect(userCircleIcon).toBeInTheDocument()

  //   const documentTextIcon = screen.getByTestId('document-text-icon')
  //   expect(documentTextIcon).toBeInTheDocument()

  //   const presentationChartLineIcon = screen.getByTestId('presentation-chart-line-icon')
  //   expect(presentationChartLineIcon).toBeInTheDocument()
  // })

})
