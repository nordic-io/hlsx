import { ButtonHTMLAttributes, FC, Ref } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonRef?: Ref<HTMLButtonElement>
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export type ButtonType = FC<ButtonProps>
