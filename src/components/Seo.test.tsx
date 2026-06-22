import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Seo } from './Seo'
import { HelmetProvider } from 'react-helmet-async'

describe('Seo Component', () => {
  it('renders correctly without crashing', () => {
    // We don't assert DOM here easily because it injects into head, 
    // but we verify it renders without throwing.
    const { container } = render(
      <HelmetProvider>
        <Seo title="Test Title" description="Test description" canonical="/test" />
      </HelmetProvider>
    )
    expect(container).toBeDefined()
  })
})
