import type { ButtonProps as ButtonPropsUI } from 'baseui/button'
import type {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes
} from 'react'

type ButtonProps = ButtonPropsUI & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonType = ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement>
>

export type { ButtonProps, ButtonType }
