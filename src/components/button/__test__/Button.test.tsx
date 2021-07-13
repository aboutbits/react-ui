import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import { Button, Variant } from '../Button'

function renderButton(): RenderResult {
  return render(<Button variant={Variant.primary}>xyz</Button>)
}

test('renders the button', function () {
  const { queryByText } = renderButton()

  expect(queryByText(/xyz/i)).toBeInTheDocument()
})
