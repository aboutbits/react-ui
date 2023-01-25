import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useCallback } from 'react'
import { act } from 'react-dom/test-utils'
import { useForm } from 'react-hook-form'
import { AutoSubmit, Form } from '../'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const MyForm = ({
  autoSubmitInterval = undefined,
  onSubmit,
}: {
  autoSubmitInterval?: number
  onSubmit
}) => {
  const form = useForm({
    defaultValues: {
      name: '',
    },
  })

  // The requestSubmit has to be mocked, since it is not implement in jsdom
  const formRef = useCallback(
    (formElement: HTMLFormElement | null) => {
      if (formElement) {
        formElement.requestSubmit = async () => {
          const values = form.getValues()
          onSubmit(values)
        }
      }
    },
    [form, onSubmit]
  )

  return (
    <Form form={form} ref={formRef}>
      <AutoSubmit interval={autoSubmitInterval} />
      <label htmlFor="name">First Name</label>
      <input id="name" {...form.register('name')} />
    </Form>
  )
}

describe('ReactHookFormAutoSubmit', () => {
  test('should not submit form on mount', async () => {
    const handleSubmit = jest.fn()
    render(<MyForm onSubmit={handleSubmit} />)

    await waitFor(() => {
      expect(handleSubmit).not.toHaveBeenCalled()
    })
  })

  test('should submit form once on quick data change', async () => {
    const handleSubmit = jest.fn()
    render(<MyForm onSubmit={handleSubmit} />)

    await act(async () => {
      const user = userEvent.setup()
      await user.type(screen.getByLabelText(/name/i), 'John')
      await sleep(100)
      await user.clear(screen.getByLabelText(/name/i))
      await user.type(screen.getByLabelText(/name/i), 'Jane')
    })

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'Jane',
      })
    })
  })

  test('should submit form twice on slow data change', async () => {
    const handleSubmit = jest.fn()
    render(<MyForm autoSubmitInterval={50} onSubmit={handleSubmit} />)

    const user = userEvent.setup()

    await act(async () => {
      await user.type(screen.getByLabelText(/name/i), 'John')
    })

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenNthCalledWith(1, {
        name: 'John',
      })
    })

    await act(async () => {
      await sleep(1000)
      await user.clear(screen.getByLabelText(/name/i))
      await user.type(screen.getByLabelText(/name/i), 'Jane')
    })

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(2)
      expect(handleSubmit).toHaveBeenNthCalledWith(2, {
        name: 'Jane',
      })
    })
  })

  test('should submit form on unmount if not yet submitted', async () => {
    const handleSubmit = jest.fn()
    const { unmount } = render(
      <MyForm autoSubmitInterval={1000} onSubmit={handleSubmit} />
    )

    await act(async () => {
      const user = userEvent.setup()
      await user.type(screen.getByLabelText(/name/i), 'John')
      unmount()
    })

    await waitFor(
      () => {
        expect(handleSubmit).toHaveBeenCalledTimes(1)
        expect(handleSubmit).toHaveBeenCalledWith({
          name: 'John',
        })
      },
      { timeout: 500 }
    )
  })
})
