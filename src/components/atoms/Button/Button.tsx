import { forwardRef } from 'react'

import { Button as ButtonUI } from 'baseui/button'

import type { ButtonType } from './Button.types'

import ButtonOverrides from './Button.overrides'

const Button: ButtonType = forwardRef(({ children, ...props }, ref) => {
  return (
    <ButtonUI overrides={ButtonOverrides} ref={ref} {...props}>
      {children}
    </ButtonUI>
  )
})

Button.displayName = 'Button'

export { Button }
