import type { Preview } from '@storybook/react'
import React from 'react'

import { StylesWrapper } from '../src/utils'

const preview: Preview = {
  decorators: [
    Story => (
      <StylesWrapper>
        <Story />
      </StylesWrapper>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
}

export default preview
