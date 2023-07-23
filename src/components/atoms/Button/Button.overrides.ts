import type { Theme } from 'baseui'
import type { ButtonOverrides } from 'baseui/button'
import type { StyleObject } from 'styletron-react'

const ButtonOverrides: ButtonOverrides = {
  BaseButton: {
    style: ({ $theme }: { $theme: Theme }) =>
      ({
        borderRadius: $theme.borders.radius300
      }) as StyleObject
  }
}

export default ButtonOverrides
