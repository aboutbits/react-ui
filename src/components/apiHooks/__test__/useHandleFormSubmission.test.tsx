import { act, waitFor, renderHook } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import defaultMessages from '../../../framework/internationalization/defaultMessages.en'
import { useHandleFormSubmission } from '../useHandleFormSubmission'

const getPromiseState = async (
  promise: Promise<unknown>
): Promise<'pending' | 'resolved' | 'rejected'> => {
  const t = {}
  return await Promise.race([promise, t]).then(
    (v) => (v === t ? 'pending' : 'resolved'),
    () => 'rejected'
  )
}

describe('useHandleFormSubmission', () => {
  const onMutate = () =>
    new Promise((resolve) => setTimeout(() => resolve({ foo: 'bar' }), 500))

  const onSuccess = () => undefined

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
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleFormSubmission(form.current, onMutate)
    )

    expect(result.current.apiErrorMessage).toBe(null)
    expect(result.current.onSubmit).toBeDefined()
  })

  test('should set is submitting during mutation', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleFormSubmission(form.current, onDeleteWithErrorResponse)
    )

    // eslint-disable-next-line
    // @ts-ignore
    let submitPromise: Promise<void> = null

    await act(async () => {
      submitPromise = form.current.handleSubmit(result.current.onSubmit)()
    })

    expect(await getPromiseState(submitPromise)).toBe('pending')

    await waitFor(async () => {
      expect(await getPromiseState(submitPromise)).toBe('resolved')
    })
  })

  test('should call onSuccess on successful mutation', async () => {
    const onSuccess = jest.fn(() => undefined)
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleFormSubmission(form.current, onMutate, { onSuccess })
    )

    await act(() => result.current.onSubmit({}))
    expect(onSuccess).toHaveBeenCalled()
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  test('should set apiErrorMessage on error', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleFormSubmission(form.current, onDeleteWithErrorResponse, {
        onSuccess,
      })
    )

    await act(() => result.current.onSubmit({}))

    expect(result.current.apiErrorMessage).toBe('Server Error')
  })

  test('should call onError on error', async () => {
    const onError = jest.fn(() => undefined)
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleFormSubmission(form.current, onDeleteWithErrorResponse, {
        onError,
      })
    )
    const values = {}

    await act(() => result.current.onSubmit(values))
    expect(onError).toHaveBeenCalledWith(axiosError, values)
    expect(onError).toHaveBeenCalledTimes(1)
  })

  test('should reset apiErrorMessage before calling onDelete', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleFormSubmission(form.current, onDeleteWithErrorResponse, {
        onSuccess,
      })
    )

    await act(() => result.current.onSubmit({}))

    expect(result.current.apiErrorMessage).toBe('Server Error')

    act(() => {
      result.current.onSubmit({})
    })

    expect(result.current.apiErrorMessage).toBe(null)
  })

  test('should set apiErrorMessage to fallbackErrorId on error without response', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleFormSubmission(form.current, onDeleteWithoutErrorResponse, {
        onSuccess,
        apiFallbackErrorMessage: 'Fallback error message',
      })
    )

    await act(() => result.current.onSubmit({}))

    expect(result.current.apiErrorMessage).toBe('Fallback error message')
  })

  test('should set default error message on error without response', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleFormSubmission(form.current, onDeleteWithoutErrorResponse, {
        onSuccess,
      })
    )

    await act(() => result.current.onSubmit({}))

    expect(result.current.apiErrorMessage).toBe(defaultMessages['error.api'])
  })

  test("should set default error message if it's not an axios error", async () => {
    const { result: form } = renderHook(() => useForm())

    const { result } = renderHook(() =>
      useHandleFormSubmission(form.current, onDeleteWithUnexpectedError, {
        onSuccess,
      })
    )

    await act(() => result.current.onSubmit({}))

    expect(result.current.apiErrorMessage).toBe(defaultMessages['error.api'])
  })

  test('onSubmit should return the response on success', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result: hookResult } = renderHook(() =>
      useHandleFormSubmission(form.current, onMutate, {
        onSuccess,
      })
    )

    const onSubmitResult = await act(() => hookResult.current.onSubmit({}))

    expect(onSubmitResult).toEqual({ foo: 'bar' })
  })

  test('onSubmit should return nothing on error', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result: hookResult } = renderHook(() =>
      useHandleFormSubmission(form.current, onDeleteWithErrorResponse, {
        onSuccess,
      })
    )

    const onSubmitResult = await act(() => hookResult.current.onSubmit({}))

    expect(onSubmitResult).toEqual(undefined)
  })

  test('onSubmit should throw on error if option is set', async () => {
    const { result: form } = renderHook(() => useForm())

    const { result: hookResult } = renderHook(() =>
      useHandleFormSubmission(form.current, onDeleteWithErrorResponse, {
        throwOnError: true,
      })
    )

    let error = null

    try {
      await act(() => hookResult.current.onSubmit({}))
    } catch (e) {
      error = e
    }

    expect(error).toEqual(axiosError)
  })
})
