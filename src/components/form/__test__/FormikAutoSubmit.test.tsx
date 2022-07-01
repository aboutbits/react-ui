import { render, screen, waitFor } from '@testing-library/react'
import { Field, Form, Formik } from 'formik'
import userEvent from '@testing-library/user-event'
import * as Yup from 'yup'
import { act } from 'react-dom/test-utils'
import { FormikAutoSubmit } from '../FormikAutoSubmit'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const MyForm = ({
  autoSubmitInterval = undefined,
  onSubmit,
}: {
  autoSubmitInterval?: number
  onSubmit
}) => {
  const handleSubmit = async (values) => {
    await sleep(100)
    onSubmit(values)
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2),
  })

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <FormikAutoSubmit interval={autoSubmitInterval} />
        <label htmlFor="name">First Name</label>
        <Field id="name" name="name" />
      </Form>
    </Formik>
  )
}

describe('FormikAutoSubmit', () => {
  test('should not submit form on mount', async () => {
    const handleSubmit = jest.fn()
    render(<MyForm onSubmit={handleSubmit} />)

    await waitFor(() => {
      expect(handleSubmit).not.toBeCalled()
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

    await act(async () => {
      const user = userEvent.setup()
      await user.type(screen.getByLabelText(/name/i), 'John')
      await sleep(100)
      await user.clear(screen.getByLabelText(/name/i))
      await user.type(screen.getByLabelText(/name/i), 'Jane')
    })

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(2)
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'John',
      })
      expect(handleSubmit).toHaveBeenCalledWith({
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
