import { describe, it, expect } from 'vitest'
import { fadeIn, slideInFromLeft, staggerContainer, scaleUp } from './motion'
import type { Variants } from 'framer-motion'

// Helper to safely read a property from a Framer Motion Variants hidden state.
// We use `Record<string, unknown>` instead of `any` to stay type-safe while
// accessing dynamic property names that the Variants union type doesn't expose directly.
function getHiddenProp(variants: Variants, key: string): unknown {
  const hidden = variants.hidden
  if (typeof hidden === 'object' && hidden !== null && !('custom' in hidden)) {
    return (hidden as Record<string, unknown>)[key]
  }
  return undefined
}

describe('motion variants', () => {
  it('fadeIn variant has expected shape', () => {
    expect(fadeIn).toHaveProperty('hidden')
    expect(fadeIn).toHaveProperty('visible')
    expect(fadeIn.hidden).toEqual({ opacity: 0, y: 20 })
  })

  it('slideInFromLeft variant has expected shape', () => {
    expect(slideInFromLeft).toHaveProperty('hidden')
    expect(slideInFromLeft).toHaveProperty('visible')
    expect(getHiddenProp(slideInFromLeft, 'x')).toBe(-50)
  })

  it('staggerContainer creates static stagger', () => {
    const variant = staggerContainer
    expect(variant.hidden).toEqual({ opacity: 0 })
    const visible = variant.visible as Record<string, unknown>
    const transition = visible?.transition as Record<string, unknown> | undefined
    expect(transition?.staggerChildren).toBe(0.15)
  })

  it('scaleUp variant has expected shape', () => {
    expect(scaleUp).toHaveProperty('hidden')
    expect(scaleUp).toHaveProperty('visible')
    expect(getHiddenProp(scaleUp, 'scale')).toBe(0.95)
  })
})
