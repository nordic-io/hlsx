import { forwardRef } from 'react'

import { Button as ButtonUI } from 'baseui/button'

import ButtonOverride from './Button.overrides'
import useButtonStyles from './Button.styles'

import type { ButtonType } from './Button.types'

const Button: ButtonType = forwardRef(({ children, style, ...props }, ref) => {
  const classes = useButtonStyles()

  return (
    <ButtonUI
      overrides={ButtonOverride}
      ref={ref}
      style={{
        ...classes.root,
        ...style
      }}
      {...props}
    >
      {children}
    </ButtonUI>
  )
})

Button.displayName = 'Button'

export { Button }
