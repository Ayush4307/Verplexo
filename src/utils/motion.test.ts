import { describe, it, expect } from 'vitest'
import { fadeIn, slideInFromLeft, staggerContainer, scaleUp } from './motion'

describe('motion variants', () => {
  it('fadeIn variant has expected shape', () => {
    expect(fadeIn).toHaveProperty('hidden')
    expect(fadeIn).toHaveProperty('visible')
    expect(fadeIn.hidden).toEqual({ opacity: 0, y: 20 })
  })

  it('slideInFromLeft variant has expected shape', () => {
    expect(slideInFromLeft).toHaveProperty('hidden')
    expect(slideInFromLeft).toHaveProperty('visible')
    expect((slideInFromLeft.hidden as any).x).toBe(-50)
  })

  it('staggerContainer creates static stagger', () => {
    const variant = staggerContainer
    expect(variant.hidden).toEqual({ opacity: 0 })
    expect((variant.visible as any).transition?.staggerChildren).toBe(0.15)
  })

  it('scaleUp variant has expected shape', () => {
    expect(scaleUp).toHaveProperty('hidden')
    expect(scaleUp).toHaveProperty('visible')
    expect(scaleUp.hidden.scale).toBe(0.95)
  })
})
