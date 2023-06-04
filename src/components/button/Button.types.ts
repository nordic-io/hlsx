import { ButtonHTMLAttributes, FC, Ref } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonRef?: Ref<HTMLButtonElement>
}

export type ButtonType = FC<ButtonProps>
