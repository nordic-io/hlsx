import { FC, PropsWithChildren } from 'react'

import { Theme } from 'baseui'

export type StyleContextType = {
  theme: Theme
  toggleTheme: () => void
}

export type StylesWrapperType = FC<
  PropsWithChildren & {
    controlledTheme?: Theme
  }
>
