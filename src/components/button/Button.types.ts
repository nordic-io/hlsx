import { FC } from 'react'

import { ButtonProps as ButtonPropsUI } from 'baseui/button'

export type ButtonProps = ButtonPropsUI
// export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   buttonRef?: Ref<HTMLButtonElement>
// }

export type ButtonType = FC<ButtonProps>
