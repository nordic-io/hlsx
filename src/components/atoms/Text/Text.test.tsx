import { render, screen } from '@testing-library/react'

import { Sample } from './Text.stories'
import type { TextType } from './Text.types'

const SampleComponent = Sample as TextType

describe('Atoms/Text', () => {
  it('should renders elements correctly', () => {
    render(<SampleComponent {...Sample.args} />)

    expect(screen.getByText('ParagraphMedium')).toBeInTheDocument()
  })
})
