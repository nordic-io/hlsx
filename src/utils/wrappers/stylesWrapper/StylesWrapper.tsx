import { createContext, useContext } from 'react'

import { BaseProvider, LightTheme } from 'baseui'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'

import { StylesWrapperType } from './StylesWrapper.types'

const engine = new Styletron()

export const StylesContext = createContext({})

export const useStyles = () => useContext(StylesContext)

export const StylesWrapper: StylesWrapperType = ({ children }) => (
  <StylesContext.Provider value={{}}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>{children}</BaseProvider>
    </StyletronProvider>
  </StylesContext.Provider>
)
