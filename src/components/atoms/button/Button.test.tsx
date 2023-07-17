import React from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Sample } from './Button.stories'

describe('Atoms/Button', () => {
  it('should render correctly', () => {
    render(<Sample {...Sample.args} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
