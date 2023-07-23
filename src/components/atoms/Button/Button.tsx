import { forwardRef } from 'react'

import { Button as ButtonUI } from 'baseui/button'

import ButtonOverrides from './Button.overrides'

import type { ButtonType } from './Button.types'

const Button: ButtonType = forwardRef(({ children, style, ...props }, ref) => {
  return (
    <ButtonUI
      overrides={ButtonOverrides}
      ref={ref}
      style={{
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
