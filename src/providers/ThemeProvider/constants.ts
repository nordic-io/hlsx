import { LIGHT_THEME } from '@utils/constants'

import type { ThemeContextType } from './ThemeProvider.types'

const DEFAULT_VALUES: ThemeContextType = {
  theme: LIGHT_THEME,
  toggleTheme: () => undefined,
  setTheme: () => undefined
}

export { DEFAULT_VALUES }
