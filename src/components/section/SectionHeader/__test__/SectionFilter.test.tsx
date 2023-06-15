import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useCallback } from 'react'
import { act } from 'react-dom/test-utils'
import { ReactUIProvider, defaultTheme } from '../../../../framework'
import { Option } from '../../../formNew/primitive'
import { InputFormField } from '../../../react-hook-form/InputFormField'
import { SelectFormField } from '../../../react-hook-form/SelectFormField'
import { SectionFilter } from '../SectionFilter'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

type FormValues = {
  name: string
  color: string
}

const emptyDefaultValues: FormValues = {
  name: '',
  color: '',
}

const MyForm = ({
  autoSubmitInterval = undefined,
  onSubmit,
  defaultValues,
}: {
  autoSubmitInterval?: number
  onSubmit
  defaultValues: FormValues
}) => {
  // The requestSubmit has to be mocked, since it is not implement in jsdom
  const formRef = useCallback((formElement: HTMLFormElement | null) => {
    if (formElement) {
      formElement.requestSubmit = async () => {
        const event = new Event('submit', {
          bubbles: true,
          cancelable: true,
        })
        formElement.dispatchEvent(event)
      }
    }
  }, [])

  return (
    <ReactUIProvider theme={defaultTheme}>
      <SectionFilter
        defaultValues={defaultValues}
        onSubmit={(data) => {
          onSubmit(data)
        }}
        autoSubmitInterval={autoSubmitInterval}
        ref={formRef}
      >
        <InputFormField name="name" id="name" label="name" />
        <SelectFormField name="color" id="color" label="color">
          <Option value=""></Option>
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
        </SelectFormField>
      </SectionFilter>
    </ReactUIProvider>
  )
}

describe('SectionFilter', () => {
  test('should not submit form on mount', async () => {
    const handleSubmit = jest.fn()
    render(
      <MyForm onSubmit={handleSubmit} defaultValues={emptyDefaultValues} />
    )

    await waitFor(async () => {
      await sleep(250) // Wait for possible auto submit to be triggered
      expect(handleSubmit).not.toHaveBeenCalled()
    })
  })

  test('should submit form only once on data change and receiving new default values', async () => {
    const handleSubmit = jest.fn()
    const { rerender } = render(
      <MyForm onSubmit={handleSubmit} defaultValues={emptyDefaultValues} />
    )

    await act(async () => {
      const user = userEvent.setup()
      await user.type(screen.getByLabelText('name'), 'John')
      await sleep(250) // Wait for auto submit to be triggered
    })

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'John',
        color: '',
      })
    })

    rerender(
      <MyForm
        onSubmit={handleSubmit}
        defaultValues={{
          name: 'John',
          color: '',
        }}
      />
    )

    await waitFor(async () => {
      await sleep(250) // Wait for possible auto submit to be triggered
      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
  })

  test('should change field values when default values change', async () => {
    const handleSubmit = jest.fn()
    const { rerender } = render(
      <MyForm onSubmit={handleSubmit} defaultValues={emptyDefaultValues} />
    )

    expect(screen.getByLabelText('name')).toHaveValue('')
    expect(screen.getByLabelText('color')).toHaveValue('')

    rerender(
      <MyForm
        onSubmit={handleSubmit}
        defaultValues={{ name: 'Jane', color: 'green' }}
      />
    )

    expect(screen.getByLabelText('name')).toHaveValue('Jane')
    expect(screen.getByLabelText('color')).toHaveValue('green')

    await waitFor(async () => {
      await sleep(250) // Wait for possible auto submit to be triggered
      expect(handleSubmit).not.toHaveBeenCalled()
    })
  })

  test('should only change non-dirty field values when default values change', async () => {
    const handleSubmit = jest.fn()
    const { rerender } = render(
      <MyForm onSubmit={handleSubmit} defaultValues={emptyDefaultValues} />
    )

    expect(screen.getByLabelText('name')).toHaveValue('')
    expect(screen.getByLabelText('color')).toHaveValue('')

    await act(async () => {
      const user = userEvent.setup()
      await user.type(screen.getByLabelText('name'), 'John')
    })

    rerender(
      <MyForm
        onSubmit={handleSubmit}
        defaultValues={{ name: 'Jane', color: 'green' }}
      />
    )

    expect(screen.getByLabelText('name')).toHaveValue('John')
    expect(screen.getByLabelText('color')).toHaveValue('green')
  })

  test('should submit after value change after rerender', async () => {
    const handleSubmit = jest.fn()
    const { rerender } = render(
      <MyForm onSubmit={handleSubmit} defaultValues={emptyDefaultValues} />
    )

    expect(screen.getByLabelText('name')).toHaveValue('')
    expect(screen.getByLabelText('color')).toHaveValue('')

    rerender(
      <MyForm
        onSubmit={handleSubmit}
        defaultValues={{ name: 'Jane', color: 'green' }}
      />
    )

    await act(async () => {
      const user = userEvent.setup()
      await user.clear(screen.getByLabelText('name'))
      await user.type(screen.getByLabelText('name'), 'John')
    })

    expect(screen.getByLabelText('name')).toHaveValue('John')
    expect(screen.getByLabelText('color')).toHaveValue('green')

    await waitFor(async () => {
      await sleep(250) // Wait for auto submit to be triggered
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'John',
        color: 'green',
      })
    })
  })
})
