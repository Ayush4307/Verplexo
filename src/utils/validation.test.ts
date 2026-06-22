import { describe, it, expect } from 'vitest'
import { validateContactForm, hasErrors, sanitize } from './validation'

describe('validation utilities', () => {
  describe('sanitize', () => {
    it('removes HTML tags from input', () => {
      expect(sanitize('<script>alert("xss")</script>Hello')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;Hello')
      expect(sanitize('<b>Bold</b> text')).toBe('&lt;b&gt;Bold&lt;/b&gt; text')
    })
  })

  describe('hasErrors', () => {
    it('returns true if object has keys', () => {
      expect(hasErrors({ firstName: 'Required' })).toBe(true)
    })
    it('returns false if object is empty', () => {
      expect(hasErrors({})).toBe(false)
    })
  })

  describe('validateContactForm', () => {
    it('returns errors for empty fields', () => {
      const data = { firstName: '', lastName: '', email: '', message: '' }
      const errors = validateContactForm(data)
      expect(errors.firstName).toBe('First name is required.')
      expect(errors.lastName).toBe('Last name is required.')
      expect(errors.email).toBe('Email is required.')
      expect(errors.message).toBe('Project details are required.')
    })

    it('returns error for invalid email', () => {
      const data = { firstName: 'John', lastName: 'Doe', email: 'not-an-email', message: 'Hello there!' }
      const errors = validateContactForm(data)
      expect(errors.email).toBe('Please enter a valid email address.')
    })

    it('returns no errors for valid data', () => {
      const data = { firstName: 'John', lastName: 'Doe', email: 'john@example.com', message: 'Hello there!' }
      const errors = validateContactForm(data)
      expect(hasErrors(errors)).toBe(false)
    })
  })
})
