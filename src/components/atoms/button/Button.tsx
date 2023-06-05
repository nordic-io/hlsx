import { Button as ButtonUI } from 'baseui/button'

import type { ButtonType } from './Button.types'

const Button: ButtonType = ({ children, ...props }) => {
  return <ButtonUI {...props}>{children}</ButtonUI>
}

export default Button
