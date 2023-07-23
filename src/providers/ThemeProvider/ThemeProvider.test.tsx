import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ThemeProvider, useThemeContext } from './ThemeProvider'

import { DARK_THEME, LIGHT_THEME } from '@utils/constants'

describe('Providers/Theme', () => {
  it('should renders children correctly', () => {
    render(
      <ThemeProvider>
        <div>child component</div>
      </ThemeProvider>
    )

    const childComponent = screen.getByText('child component')
    expect(childComponent).toBeInTheDocument()
  })

  describe('Theme Change', () => {
    it('should change to a specific theme', async () => {
      const TestComponent = () => {
        const { theme, setTheme } = useThemeContext()

        return (
          <>
            <h1>{theme.name}</h1>
            <button onClick={() => setTheme(LIGHT_THEME)}>light</button>
            <button onClick={() => setTheme(DARK_THEME)}>dark</button>
          </>
        )
      }

      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      )

      await waitFor(async () => {
        const themeNow = screen.getByRole('heading')
        expect(themeNow).toHaveTextContent('light-theme')

        await userEvent.click(screen.getByRole('button', { name: 'dark' }))
        expect(themeNow).toHaveTextContent('dark-theme')

        await userEvent.click(screen.getByRole('button', { name: 'light' }))
        expect(themeNow).toHaveTextContent('light-theme')

        await userEvent.click(screen.getByRole('button', { name: 'light' }))
        expect(themeNow).toHaveTextContent('light-theme')
      })
    })

    it('should toggle theme to dark when starts at default light theme', async () => {
      const TestComponent = () => {
        const { theme, toggleTheme } = useThemeContext()

        return (
          <>
            <h1>{theme.name}</h1>
            <button onClick={toggleTheme}>toggle</button>
          </>
        )
      }

      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      )

      await waitFor(async () => {
        const themeNow = screen.getByRole('heading')
        expect(themeNow).toHaveTextContent('light-theme')

        await userEvent.click(screen.getByRole('button', { name: 'toggle' }))
        expect(themeNow).toHaveTextContent('dark-theme')

        await userEvent.click(screen.getByRole('button', { name: 'toggle' }))
        expect(themeNow).toHaveTextContent('light-theme')
      })
    })

    it('should toggle theme to light when starts with specific theme', async () => {
      const TestComponent = () => {
        const { theme, toggleTheme } = useThemeContext()

        return (
          <>
            <h1>{theme.name}</h1>
            <button onClick={toggleTheme}>toggle</button>
          </>
        )
      }

      render(
        <ThemeProvider startupTheme={DARK_THEME}>
          <TestComponent />
        </ThemeProvider>
      )

      await waitFor(async () => {
        const themeNow = screen.getByRole('heading')
        expect(themeNow).toHaveTextContent('dark-theme')

        await userEvent.click(screen.getByRole('button', { name: 'toggle' }))
        expect(themeNow).toHaveTextContent('light-theme')

        await userEvent.click(screen.getByRole('button', { name: 'toggle' }))
        expect(themeNow).toHaveTextContent('dark-theme')
      })
    })
  })
})
