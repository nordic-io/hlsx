import { render, screen } from '@testing-library/react'

import { Sample } from './Button.stories'

describe('Atoms/Button', () => {
  it('should render correctly', () => {
    render(<Sample {...Sample.args} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
