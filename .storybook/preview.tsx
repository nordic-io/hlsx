import { StylesProvider } from '../src/providers'

import type { Preview } from '@storybook/react'

import { DarkTheme, LightTheme } from 'baseui'

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.parameters.theme || context.globals.theme

      switch (theme) {
        case 'side-by-side': {
          return (
            <div
              style={{
                display: 'flex',
                height: '96vh',
                width: '96vw'
              }}
            >
              <div
                style={{
                  alignItems: 'center',
                  backgroundColor: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '50%'
                }}
              >
                <StylesProvider controlledTheme={LightTheme}>
                  <Story />
                </StylesProvider>
              </div>
              <div
                style={{
                  alignItems: 'center',
                  backgroundColor: '#333',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '50%'
                }}
              >
                <StylesProvider controlledTheme={DarkTheme}>
                  <Story />
                </StylesProvider>
              </div>
            </div>
          )
        }
        default: {
          return (
            <StylesProvider
              controlledTheme={theme === 'dark' ? DarkTheme : LightTheme}
            >
              <Story />
            </StylesProvider>
          )
        }
      }
    }
  ],
  globalTypes: {
    theme: {
      name: 'theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'light' },
          { value: 'dark', icon: 'circle', title: 'dark' },
          { value: 'side-by-side', icon: 'sidebar', title: 'side by side' }
        ],
        showName: true
      }
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'centered'
  }
}

export default preview
