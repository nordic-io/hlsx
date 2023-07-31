import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { BaseProvider } from 'baseui'

import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'

import { DARK_THEME, LIGHT_THEME } from '@utils/constants'

import type { ThemeContextType, ThemeProviderType } from './ThemeProvider.types'

import { DEFAULT_VALUES } from './constants'

const engine = new Styletron()

const ThemeContext = createContext<ThemeContextType>(DEFAULT_VALUES)

const useThemeContext = () => useContext(ThemeContext)

const ThemeProvider: ThemeProviderType = ({
  children,
  startupTheme = DEFAULT_VALUES.theme,
  styletronEngine = engine
}) => {
  const [theme, setTheme] = useState(startupTheme)

  const toggleTheme = () => {
    setTheme(current =>
      current.name.includes('light') ? DARK_THEME : LIGHT_THEME
    )
  }

  const values: ThemeContextType = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme]
  )

  useEffect(() => {
    if (startupTheme === theme) return
    setTheme(startupTheme)
  }, [startupTheme])

  return (
    <ThemeContext.Provider value={values}>
      <StyletronProvider value={styletronEngine}>
        <BaseProvider theme={theme}>{children}</BaseProvider>
      </StyletronProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider, useThemeContext }
