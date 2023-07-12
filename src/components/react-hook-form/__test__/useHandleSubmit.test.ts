import { act, waitFor, renderHook } from '@testing-library/react'
import { vi } from 'vitest'
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
  const submitAction = () => new Promise((resolve) => setTimeout(resolve, 10))

  const onSuccess = () => undefined

  const expectedErrorMessage = 'Server Error'
  const axiosError = {
    isAxiosError: true,
    response: { data: { message: expectedErrorMessage } },
  }

  const onDeleteWithErrorResponse = () =>
    new Promise((_resolve, reject) => setTimeout(() => reject(axiosError), 10))

  const onDeleteWithUnexpectedError = () =>
    new Promise((_resolve, reject) =>
      setTimeout(
        () =>
          reject({
            message: 'The request did not reach the server',
          }),
        10
      )
    )

  const onDeleteWithoutErrorResponse = () =>
    new Promise((_resolve, reject) => setTimeout(() => reject(), 10))

  test('should return initial state on first render', () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleSubmit(form.current, submitAction)
    )

    expect(result.current.apiErrorMessage).toBe(null)
    expect(result.current.triggerSubmit).toBeDefined()
  })

  test('should set is submitting during submission', async () => {
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

  test('should call onSuccess on successful submission', async () => {
    const { result: form } = renderHook(() => useForm())

    const onSuccess = vi.fn(() => undefined)
    const { result } = renderHook(() =>
      useHandleSubmit(form.current, submitAction, { onSuccess })
    )

    await act(() => result.current.triggerSubmit({}))
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

  test('should call onError and not onSuccess on error', async () => {
    const { result: form } = renderHook(() => useForm())

    const onSuccess = vi.fn(() => undefined)
    const onError = vi.fn(() => undefined)
    const { result } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithErrorResponse, {
        onSuccess,
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
    expect(onSuccess).not.toHaveBeenCalled()
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

  test('onSubmit should return the response on success', async () => {
    const { result: form } = renderHook(() => useForm())

    const response = { foo: 'bar' }
    const { result: hookResult } = renderHook(() =>
      useHandleSubmit(form.current, () => Promise.resolve(response), {
        onSuccess,
      })
    )

    const onSubmitResult = await act(() => hookResult.current.triggerSubmit({}))

    expect(onSubmitResult).toEqual(response)
  })

  test('onSubmit should return nothing on error', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result: hookResult } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithErrorResponse, {
        onSuccess,
      })
    )

    const onSubmitResult = await act(() => hookResult.current.triggerSubmit({}))

    expect(onSubmitResult).toEqual(undefined)
  })

  test('onSubmit should throw on error if option is set', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result: hookResult } = renderHook(() =>
      useHandleSubmit(form.current, onDeleteWithErrorResponse, {
        throwOnError: true,
      })
    )

    let error = null

    try {
      await act(() => hookResult.current.triggerSubmit({}))
    } catch (e) {
      error = e
    }

    expect(error).toEqual(axiosError)
  })
})
