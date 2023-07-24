import { render, screen } from '@testing-library/react'

import { Sample } from './Button.stories'
import type { ButtonType } from './Button.types'

const SampleComponent = Sample as ButtonType

describe('Atoms/Button', () => {
  it('should render correctly', () => {
    render(<SampleComponent {...Sample.args} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
