/**
 * Contact form validation utilities.
 * Pure functions — no dependencies, no side effects.
 */

export type ValidationErrors = {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const SCRIPT_TAG_REGEX = /<script[\s>]|javascript:|on\w+\s*=/i
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5000

/** Strip HTML tags from a string to prevent stored XSS */
export function sanitize(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

/** Returns true if input contains suspicious script patterns */
function containsScript(input: string): boolean {
  return SCRIPT_TAG_REGEX.test(input)
}

/** Validate the full contact form. Returns an empty object if valid. */
export function validateContactForm(data: {
  firstName: string
  lastName: string
  email: string
  message: string
}): ValidationErrors {
  const errors: ValidationErrors = {}

  // First name
  const firstName = data.firstName.trim()
  if (!firstName) {
    errors.firstName = 'First name is required.'
  } else if (firstName.length > MAX_NAME_LENGTH) {
    errors.firstName = `First name must be under ${MAX_NAME_LENGTH} characters.`
  } else if (containsScript(firstName)) {
    errors.firstName = 'Invalid characters detected.'
  }

  // Last name
  const lastName = data.lastName.trim()
  if (!lastName) {
    errors.lastName = 'Last name is required.'
  } else if (lastName.length > MAX_NAME_LENGTH) {
    errors.lastName = `Last name must be under ${MAX_NAME_LENGTH} characters.`
  } else if (containsScript(lastName)) {
    errors.lastName = 'Invalid characters detected.'
  }

  // Email
  const email = data.email.trim()
  if (!email) {
    errors.email = 'Email is required.'
  } else if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = 'Email address is too long.'
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  // Message
  const message = data.message.trim()
  if (!message) {
    errors.message = 'Project details are required.'
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be under ${MAX_MESSAGE_LENGTH} characters.`
  } else if (containsScript(message)) {
    errors.message = 'Invalid content detected.'
  }

  return errors
}

/** Check if a validation result has any errors */
export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0
}
