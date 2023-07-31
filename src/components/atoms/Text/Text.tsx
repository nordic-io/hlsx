import { forwardRef } from 'react'

import type { TextType } from './Text.types'

import { TYPOGRAPHY_VARIANTS } from './constants'

const Text: TextType = forwardRef(
  ({ children, variant = 'ParagraphMedium', ...props }, ref) => {
    const Component = TYPOGRAPHY_VARIANTS[variant]
    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text'

export { Text }
