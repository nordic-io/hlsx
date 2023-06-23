import { Button as ButtonUI } from 'baseui/button'

import type { ButtonType } from './Button.types'

const Button: ButtonType = ({ children, Ref, ...props }) => {
  return (
    <ButtonUI ref={Ref} {...props}>
      {children}
    </ButtonUI>
  )
}

export default Button
