import { vi } from 'vitest'

import { Theme } from 'baseui'

import { useStyles } from './useStyles'

vi.mock('baseui', async () => {
  const actual = (await vi.importActual('baseui')) as object
  return {
    ...actual,
    useStyletron: vi.fn(() => [
      () => {},
      {
        colors: {
          primaryA: 'blue',
          primaryB: 'green'
        }
      }
    ])
  }
})

describe('Helpers', () => {
  describe('useStyles', () => {
    it('should return the expected classes object based on the input styles function and theme', () => {
      const classes = useStyles((theme: Theme) => ({
        root: {
          backgroundColor: theme.colors.primaryA
        },
        button: {
          color: theme.colors.primaryB
        }
      }))

      expect(classes).toEqual({
        root: {
          backgroundColor: 'blue'
        },
        button: {
          color: 'green'
        }
      })
    })
  })
})
