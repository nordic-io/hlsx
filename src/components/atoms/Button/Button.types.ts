import {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes
} from 'react'

import type { ButtonProps as ButtonPropsUI } from 'baseui/button'

type ButtonProps = ButtonPropsUI & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonType = ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement>
>

export type { ButtonProps, ButtonType }
