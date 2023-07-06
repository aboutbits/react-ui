import { act, waitFor, renderHook } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import defaultMessages from '../../../framework/internationalization/defaultMessages.en'
import { useHandleSubmit } from '../useHandleSubmit'

const getPromiseState = async (
  promise: Promise<unknown>
): Promise<'pending' | 'resolved' | 'rejected'> => {
  const t = {}
  return await Promise.race([promise, t]).then(
    (v) => (v === t ? 'pending' : 'resolved'),
    () => 'rejected'
  )
}

describe('useHandleSubmit', () => {
  const onMutate = () => new Promise((resolve) => setTimeout(resolve, 500))

  const onSuccess = () => undefined

  const expectedErrorMessage = 'Server Error'
  const axiosError = {
    isAxiosError: true,
    response: { data: { message: expectedErrorMessage } },
  }

  const onDeleteWithErrorResponse = () =>
    new Promise((_resolve, reject) => setTimeout(() => reject(axiosError), 100))

  const onDeleteWithUnexpectedError = () =>
    new Promise((_resolve, reject) =>
      setTimeout(
        () =>
          reject({
            message: 'The request did not reach the server',
          }),
        100
      )
    )

  const onDeleteWithoutErrorResponse = () =>
    new Promise((_resolve, reject) => setTimeout(() => reject(), 100))

  test('should return initial state on first render', () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() => useHandleSubmit(form.current, onMutate))

    expect(result.current.apiErrorMessage).toBe(null)
    expect(result.current.triggerSubmit).toBeDefined()
  })

  test('should set is submitting during mutation', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithErrorResponse)
    )

    let submitPromise: Promise<void> | undefined

    await act(async () => {
      submitPromise = form.current.handleSubmit(result.current.triggerSubmit)()
    })

    expect(submitPromise && (await getPromiseState(submitPromise))).toBe(
      'pending'
    )

    await waitFor(async () => {
      expect(submitPromise && (await getPromiseState(submitPromise))).toBe(
        'resolved'
      )
    })
  })

  test('should call onSuccess on successful mutation', async () => {
    const onSuccess = jest.fn(() => undefined)
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleSubmit(form.current, onMutate, { onSuccess })
    )

    await act(() => result.current.triggerSubmit({}))
    expect(onSuccess).toHaveBeenCalled()
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  test('should set apiErrorMessage on error', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithErrorResponse, {
        onSuccess,
      })
    )

    await act(() => result.current.triggerSubmit({}))

    expect(result.current.apiErrorMessage).toBe(expectedErrorMessage)
  })

  test('should call onError on error', async () => {
    const onError = jest.fn(() => undefined)
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithErrorResponse, {
        onError,
      })
    )
    const values = {}

    await act(() => result.current.triggerSubmit(values))
    expect(onError).toHaveBeenCalledWith({
      error: axiosError,
      apiErrorMessage: result.current.apiErrorMessage,
      values,
      errorBody: { message: expectedErrorMessage },
    })
    expect(onError).toHaveBeenCalledTimes(1)
  })

  test('should reset apiErrorMessage before calling onDelete', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithErrorResponse, {
        onSuccess,
      })
    )

    await act(() => result.current.triggerSubmit({}))

    expect(result.current.apiErrorMessage).toBe(expectedErrorMessage)

    act(() => {
      result.current.triggerSubmit({})
    })

    expect(result.current.apiErrorMessage).toBe(null)
  })

  test('should set apiErrorMessage to fallbackErrorId on error without response', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithoutErrorResponse, {
        onSuccess,
        apiFallbackErrorMessage: 'Fallback error message',
      })
    )

    await act(() => result.current.triggerSubmit({}))

    expect(result.current.apiErrorMessage).toBe('Fallback error message')
  })

  test('should set default error message on error without response', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithoutErrorResponse, {
        onSuccess,
      })
    )

    await act(() => result.current.triggerSubmit({}))

    expect(result.current.apiErrorMessage).toBe(defaultMessages['error.api'])
  })

  test("should set default error message if it's not an axios error", async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithUnexpectedError, {
        onSuccess,
      })
    )

    await act(() => result.current.triggerSubmit({}))

    expect(result.current.apiErrorMessage).toBe(defaultMessages['error.api'])
  })
})
