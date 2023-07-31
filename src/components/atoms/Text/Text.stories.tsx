import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'
import type { TextProps, TextType } from './Text.types'

import { TYPOGRAPHY_VARIANTS } from './constants'

const meta: Meta<TextType> = {
  tags: ['autodocs'],
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      defaultValue: { summary: 'ParagraphMedium' },
      description:
        'Typography variant to display. Depending of the variant, the component will render a different HTML tag.',
      options: Object.keys(TYPOGRAPHY_VARIANTS)
    }
  }
}
export default meta

type Story = StoryObj<TextType>

export const Sample: Story = (args: TextProps) => (
  <Text {...args}>{args.variant}</Text>
)
Sample.args = {
  variant: 'ParagraphMedium'
} as TextProps

export const AllVariants: Story = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    {Object.keys(TYPOGRAPHY_VARIANTS).map(variant => (
      <Text key={variant} variant={variant as TextProps['variant']}>
        {variant}
      </Text>
    ))}
  </div>
)
AllVariants.argTypes = {
  variant: { table: { disable: true } }
}
