import type {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes
} from 'react'

import type { ButtonProps as ButtonPropsUI } from 'baseui/button'

type ButtonProps = ButtonPropsUI &
  ButtonHTMLAttributes<HTMLButtonElement> &
  RefAttributes<HTMLButtonElement>

type ButtonType = ForwardRefExoticComponent<ButtonProps>

export type { ButtonProps, ButtonType }
