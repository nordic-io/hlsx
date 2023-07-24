import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import type { ButtonProps, ButtonType } from './Button.types'

const meta: Meta<ButtonType> = {
  tags: ['autodocs'],
  title: 'Atoms/Button',
  component: Button
}
export default meta

type Story = StoryObj<ButtonType>

export const Sample: Story = (args: ButtonProps) => (
  <Button {...args}>Button</Button>
)
Sample.args = {
  type: 'submit'
} as ButtonProps
