import type { Theme } from 'baseui'
import type { FC, PropsWithChildren } from 'react'
import type { StandardEngine } from 'styletron-standard'

type StyleContextType = {
  theme: Theme
  toggleTheme: () => void
}

type StyleProviderProps = PropsWithChildren<{
  controlledTheme?: Theme
  styletronEngine?: StandardEngine
}>

type StylesProviderType = FC<StyleProviderProps>

export type { StyleContextType, StyleProviderProps, StylesProviderType }
