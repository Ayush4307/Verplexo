import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, useTheme } from './ThemeContext'

function TestComponent() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

describe('ThemeContext', () => {
  it('provides light theme by default (when no localStorage)', () => {
    window.localStorage.clear()
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light')
  })

  it('toggles theme and saves to localStorage', () => {
    window.localStorage.clear()
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    const button = screen.getByText('Toggle')
    
    // Switch to dark
    fireEvent.click(button)
    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark')
    expect(window.localStorage.getItem('verplexo-theme')).toBe('dark')
    
    // Switch back to light
    fireEvent.click(button)
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light')
    expect(window.localStorage.getItem('verplexo-theme')).toBe('light')
  })
})
