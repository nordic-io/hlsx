import type { Theme } from 'baseui'
import type { FC, PropsWithChildren } from 'react'
import type { StandardEngine } from 'styletron-standard'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

type ThemeProviderProps = PropsWithChildren<{
  startupTheme?: Theme
  styletronEngine?: StandardEngine
}>

type ThemeProviderType = FC<ThemeProviderProps>

export type { ThemeContextType, ThemeProviderProps, ThemeProviderType }
