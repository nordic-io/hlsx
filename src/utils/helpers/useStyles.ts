import type { CSSProperties } from 'react'

import { useStyletron, type Theme } from 'baseui'
const useStyles = <T extends Record<string, CSSProperties>>(
  styles: (theme: Theme) => T
) => {
  const [, theme] = useStyletron()
  const classes = styles(theme)
  return {
    ...classes
  }
}

export { useStyles }
