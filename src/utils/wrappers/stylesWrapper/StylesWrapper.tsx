import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { BaseProvider, DarkTheme, LightTheme, Theme } from 'baseui'

import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'

import { StyleContextType, StylesWrapperType } from './StylesWrapper.types'

const engine = new Styletron()

export const StylesContext = createContext<StyleContextType>({
  theme: LightTheme,
  toggleTheme: () => undefined
})

export const useStyles = () => useContext(StylesContext)

export const StylesWrapper: StylesWrapperType = ({
  children,
  controlledTheme
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
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>{children}</BaseProvider>
      </StyletronProvider>
    </StylesContext.Provider>
  )
}
