import type {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes
} from 'react'

import { TYPOGRAPHY_VARIANTS } from './constants'

type TypographyVariants = keyof typeof TYPOGRAPHY_VARIANTS

type TextProps = ComponentProps<'p'> & {
  variant?: TypographyVariants
} & RefAttributes<HTMLParagraphElement>

type TextType = ForwardRefExoticComponent<TextProps>

export type { TextProps, TextType, TypographyVariants }
