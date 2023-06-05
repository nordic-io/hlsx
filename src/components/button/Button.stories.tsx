import { Meta } from '@storybook/react'
import React from 'react'

import Button from './Button'
import type { ButtonProps } from './Button.types'

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
  title: 'Atoms/Button',
  component: Button,
}
export default meta

export const Sample = (args: ButtonProps) => <Button {...args}>Test</Button>
Sample.args = {
  type: 'button',
} as ButtonProps
