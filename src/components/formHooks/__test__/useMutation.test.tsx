import { act, renderHook } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react'
import { FormikHelpers } from 'formik/dist/types'
import { useMutation } from '../useMutation'

describe('useMutation', () => {
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

  const onDeleteWithErrorResponse = () =>
    new Promise((resolve, reject) =>
      setTimeout(
        () => reject({ response: { data: { message: 'Server Error' } } }),
        100
      )
    )

  const onDeleteWithoutErrorResponse = () =>
    new Promise((resolve, reject) => setTimeout(() => reject(), 100))

  test('should return initial state on first render', () => {
    const { result } = renderHook(() => useMutation(onMutate, onSuccess))

    expect(result.current.apiErrorMessage).toBe(null)
    expect(result.current.onMutate).toBeDefined()
  })

  test('should set is submitting during mutation', async () => {
    const { current, mockedFormikHelpers } = setupFormikHelpers()

    const { result } = renderHook(() => useMutation(onMutate, onSuccess))

    act(() => {
      result.current.onMutate({}, mockedFormikHelpers)
    })

    expect(current.isSubmitting).toBe(true)
    await waitFor(() => expect(current.isSubmitting).toBeFalsy())
  })

  test('should call onSuccess on successful mutation', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onSuccess = jest.fn(() => {})
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() => useMutation(onMutate, onSuccess))

    await act(() => result.current.onMutate({}, mockedFormikHelpers))
    expect(onSuccess).toHaveBeenCalled()
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  test('should set apiErrorMessage on error', async () => {
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useMutation(onDeleteWithErrorResponse, onSuccess)
    )

    await act(() => result.current.onMutate({}, mockedFormikHelpers))

    expect(result.current.apiErrorMessage).toBe('Server Error')
  })

  test('should reset apiErrorMessage before calling onDelete', async () => {
    const { current, mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useMutation(onDeleteWithErrorResponse, onSuccess)
    )

    await act(() => result.current.onMutate({}, mockedFormikHelpers))

    expect(result.current.apiErrorMessage).toBe('Server Error')

    act(() => {
      result.current.onMutate({}, mockedFormikHelpers)
    })

    expect(result.current.apiErrorMessage).toBe(null)
    await waitFor(() => expect(current.isSubmitting).toBeFalsy())
  })

  test('should set apiErrorMessage to fallbackErrorId on error without response', async () => {
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useMutation(onDeleteWithoutErrorResponse, onSuccess, {
        apiFallbackErrorMessageId: 'error.server.failed',
      })
    )

    await act(() => result.current.onMutate({}, mockedFormikHelpers))

    expect(result.current.apiErrorMessage).toBe('error.server.failed')
  })

  test('should set default error message on error without response', async () => {
    const { mockedFormikHelpers } = setupFormikHelpers()
    const { result } = renderHook(() =>
      useMutation(onDeleteWithoutErrorResponse, onSuccess)
    )

    await act(() => result.current.onMutate({}, mockedFormikHelpers))

    expect(result.current.apiErrorMessage).toBe('shared.error.api')
  })
})
