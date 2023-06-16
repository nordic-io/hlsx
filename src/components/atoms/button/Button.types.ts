import { FC, Ref } from 'react'

import { ButtonProps as ButtonPropsUI } from 'baseui/button'

export type ButtonProps = ButtonPropsUI & {
  Ref?: Ref<HTMLButtonElement>
}

export type ButtonType = FC<ButtonProps>
