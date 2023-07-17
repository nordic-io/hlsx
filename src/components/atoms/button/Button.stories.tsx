import React from 'react'

import { Meta } from '@storybook/react'

import Button from './Button'

import type { ButtonProps } from './Button.types'

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
  title: 'Atoms/Button',
  component: Button
}
export default meta

export const Sample = (args: ButtonProps) => <Button {...args}>Button</Button>

Sample.args = {
  onClick: () => null,
  type: 'button'
} as ButtonProps
