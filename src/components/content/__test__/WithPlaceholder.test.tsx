import { queryByText, render } from '@testing-library/react'
import { ReactNode } from 'react'
import { WithPlaceholder } from '../WithPlaceholder/WithPlaceholder'

const expectTextContent = (
  children: ReactNode,
  text: number | string,
  placeholder?: number | string,
) => {
  const { container } = render(
    <WithPlaceholder placeholder={placeholder}>{children}</WithPlaceholder>,
  )
  expect(queryByText(container, text)).toHaveTextContent(text.toString())
}

const expectNotTextContent = (
  children: ReactNode,
  text: number | string,
  placeholder?: number | string,
) => {
  const { container } = render(
    <WithPlaceholder placeholder={placeholder}>{children}</WithPlaceholder>,
  )
  expect(queryByText(container, text)).toBeNull()
}

const placeholder = '/'

const expectPlaceholder = (children: ReactNode) => {
  expectTextContent(children, placeholder, placeholder)
}

const expectNotPlaceholder = (children: ReactNode) => {
  expectNotTextContent(children, placeholder, placeholder)
}

describe('WithPlaceholder', () => {
  it('should render the placeholder if NaN is passed', () => {
    expectPlaceholder(NaN)
  })
  it('should render the placeholder if undefined is passed', () => {
    expectPlaceholder(undefined)
  })
  it('should render the placeholder if null is passed', () => {
    expectPlaceholder(null)
  })
  it('should render the placeholder if an empty string is passed', () => {
    expectPlaceholder('')
  })
  it('should render 0 if 0 is passed', () => {
    const value = 0
    expectTextContent(value, value)
  })
  it('should render 1 if 1 is passed', () => {
    const value = 1
    expectTextContent(value, value)
  })
  it('should render -1 if -1 is passed', () => {
    const value = -1
    expectTextContent(value, value)
  })
  it('should render the given string if the string is not empty', () => {
    const value = 'test'
    expectTextContent(value, value)
  })
  it('should render the given div containing a string', () => {
    const value = 'test'
    expectTextContent(<div>{value}</div>, value)
  })
  it('should render the given div containing 0', () => {
    const value = 0
    expectTextContent(<div>{value}</div>, value)
  })
  it('should render the given div even if it contains NaN', () => {
    const value = NaN
    expectTextContent(<div>{value}</div>, value)
  })
  it('should render the given div even if it contains undefined', () => {
    const value = undefined
    expectNotPlaceholder(<div>{value}</div>)
  })
  it('should render the given div even if it contains null', () => {
    const value = null
    expectNotPlaceholder(<div>{value}</div>)
  })
  it('should render the given div even if it contains an empty string', () => {
    const value = ''
    expectNotPlaceholder(<div>{value}</div>)
  })
})
