import { act, renderHook } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react'
import type { FormikHelpers } from 'formik/dist/types'
import { useHandleFormikSubmission } from '../useHandleFormikSubmission'

describe('useHandleFormikSubmission', () => {
  const setupFormikHelpers = () => {
    const current = { isSubmitting: false }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mockedFormikHelpers: FormikHelpers<unknown> = {
      setSubmitting: (value) => {
        current.isSubmitting = value
      },
    }

    return {
      current,
      mockedFormikHelpers,
    }
  }

  const onMutate = () => new Promise((resolve) => setTimeout(resolve, 100))

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSuccess = () => {}

  const axiosError = {
    isAxiosError: true,
    response: { data: { message: 'Server Error' } },
  }

  const onDeleteWithErrorResponse = () =>
    new Promise((resolve, reject) => setTimeout(() => reject(axiosError), 100))

  const onDeleteWithUnexpectedError = () =>
    new Promise((resolve, reject) =>
      setTimeout(
        () =>
          reject({
            message: 'The request did not reach the server',
          }),
        100
      )
    )

  const onDeleteWithoutErrorResponse = () =>
    new Promise((resolve, reject) => setTimeout(() => reject(), 100))

  test('should return initial state on first render', () => {
    const { result } = renderHook(() =>
      useHandleFormikSubmission(onMutate, { onSuccess })
    )

    expect(result.current.apiErrorMessage).toBe(null)
    expect(result.current.onSubmit).toBeDefined()
  })

  test('should set is submitting during mutation', async () => {
    const { current, mockedFormikHelpers } = setupFormikHelpers()

    const { result } = renderHook(() =>
      useHandleFormikSubmission(onMutate, { onSuccess })
    )

    act(() => {
      result.current.onSubmit({}, mockedFormikHelpers)
    })

    expect(current.isSubmitting).toBe(true)
    await waitFor(() => expect(current.isSubmitting).toBeFalsy())
  })

  test('should call onSuccess on successful mutation', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onSuccess = jest.fn(() => {})
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useHandleFormikSubmission(onMutate, { onSuccess })
    )

    await act(() => result.current.onSubmit({}, mockedFormikHelpers))
    expect(onSuccess).toHaveBeenCalled()
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  test('should set apiErrorMessage on error', async () => {
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useHandleFormikSubmission(onDeleteWithErrorResponse, { onSuccess })
    )

    await act(() => result.current.onSubmit({}, mockedFormikHelpers))

    expect(result.current.apiErrorMessage).toBe('Server Error')
  })

  test('should call onError on error', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onError = jest.fn(() => {})
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useHandleFormikSubmission(onDeleteWithErrorResponse, { onError })
    )
    const values = {}

    await act(() => result.current.onSubmit(values, mockedFormikHelpers))
    expect(onError).toHaveBeenCalledWith(axiosError, values)
    expect(onError).toHaveBeenCalledTimes(1)
  })

  test('should reset apiErrorMessage before calling onDelete', async () => {
    const { current, mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useHandleFormikSubmission(onDeleteWithErrorResponse, { onSuccess })
    )

    await act(() => result.current.onSubmit({}, mockedFormikHelpers))

    expect(result.current.apiErrorMessage).toBe('Server Error')

    act(() => {
      result.current.onSubmit({}, mockedFormikHelpers)
    })

    expect(result.current.apiErrorMessage).toBe(null)
    await waitFor(() => expect(current.isSubmitting).toBeFalsy())
  })

  test('should set apiErrorMessage to fallbackErrorId on error without response', async () => {
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useHandleFormikSubmission(onDeleteWithoutErrorResponse, {
        onSuccess,
        apiFallbackErrorMessageId: 'error.server.failed',
      })
    )

    await act(() => result.current.onSubmit({}, mockedFormikHelpers))

    expect(result.current.apiErrorMessage).toBe('error.server.failed')
  })

  test('should set default error message on error without response', async () => {
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useHandleFormikSubmission(onDeleteWithoutErrorResponse, { onSuccess })
    )

    await act(() => result.current.onSubmit({}, mockedFormikHelpers))

    expect(result.current.apiErrorMessage).toBe('shared.error.api')
  })

  test("should set default error message if it's not an axios error", async () => {
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useHandleFormikSubmission(onDeleteWithUnexpectedError, { onSuccess })
    )

    await act(() => result.current.onSubmit({}, mockedFormikHelpers))

    expect(result.current.apiErrorMessage).toBe('shared.error.api')
  })
})
