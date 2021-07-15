import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import { LoadingEdit } from '../LoadingEdit'

function renderLoadingEdit(): RenderResult {
  return render(
    <LoadingEdit numberOfItems={2} sectionHeader={<div>xyz</div>} />
  )
}

test('renders the loading edit', function () {
  const { queryByText } = renderLoadingEdit()

  expect(queryByText(/xyz/i)).toBeInTheDocument()
})
