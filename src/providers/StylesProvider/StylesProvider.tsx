import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { BaseProvider, DarkTheme, LightTheme, type Theme } from 'baseui'

import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'

import { DEFAULT_CONTEXT_VALUES } from './constants'

import type {
  StyleContextType,
  StylesProviderType
} from './StylesProvider.types'

const engine = new Styletron()

const StylesContext = createContext<StyleContextType>(DEFAULT_CONTEXT_VALUES)

const useStylesProvider = () => useContext(StylesContext)

const StylesProvider: StylesProviderType = ({
  children,
  controlledTheme,
  styletronEngine = engine
}) => {
  const [theme, setTheme] = useState<Theme>(controlledTheme || LightTheme)

  const toggleTheme = () =>
    setTheme(current =>
      current.name.includes('light') ? DarkTheme : LightTheme
    )

  const values: StyleContextType = useMemo(
    () => ({ theme, toggleTheme }),
    [theme]
  )

  useEffect(() => {
    if (controlledTheme) setTheme(controlledTheme)
  }, [controlledTheme])

  return (
    <StylesContext.Provider value={values}>
      <StyletronProvider value={styletronEngine}>
        <BaseProvider theme={theme}>{children}</BaseProvider>
      </StyletronProvider>
    </StylesContext.Provider>
  )
}

export { StylesContext, StylesProvider, useStylesProvider }
