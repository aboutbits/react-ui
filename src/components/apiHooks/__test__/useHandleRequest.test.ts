import { act, renderHook, waitFor } from '@testing-library/react'
import defaultMessages from '../../../framework/internationalization/defaultMessages.en'
import { useHandleRequest } from '../useHandleRequest'

describe('useHandleRequest', () => {
  const onRequest = () => new Promise((resolve) => setTimeout(resolve, 100))

  const onRequestWithResponse = () =>
    new Promise((resolve) => setTimeout(() => resolve({ foo: 'bar' }), 100))

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSuccess = () => {}

  const onRequestWithErrorResponse = () =>
    new Promise((resolve, reject) =>
      setTimeout(
        () =>
          reject({
            isAxiosError: true,
            response: { data: { message: 'Server Error' } },
          }),
        100
      )
    )

  const onRequestWithoutErrorResponse = () =>
    new Promise((resolve, reject) => setTimeout(() => reject(), 100))

  const onRequestWithParametersWithSuccess = (id: number) =>
    new Promise((resolve) => setTimeout(() => resolve({ id }), 100))

  const onRequestWithParametersWithErrorResponse = (id: number) =>
    new Promise((resolve, reject) =>
      setTimeout(
        () =>
          reject({
            isAxiosError: true,
            response: { data: { message: `Server Error for ${id}` } },
          }),
        100
      )
    )

  test('should return initial state on first render', () => {
    const { result } = renderHook(() => useHandleRequest(onRequest, onSuccess))

    expect(result.current.apiErrorMessage).toBe(null)
    expect(result.current.onRequest).toBeDefined()
    expect(result.current.isRequesting).toBeFalsy()
  })

  test('should set is requesting while waiting for response', async () => {
    const { result } = renderHook(() => useHandleRequest(onRequest, onSuccess))

    act(() => {
      result.current.onRequest()
    })

    await waitFor(() => expect(result.current.isRequesting).toBeFalsy())
  })

  test('should call onSuccess on successful request', async () => {
    const onSuccess = jest.fn()
    const { result } = renderHook(() => useHandleRequest(onRequest, onSuccess))

    await act(() => result.current.onRequest())
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  test('should call onSuccess with response data on successful request', async () => {
    const onSuccess = jest.fn()

    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithResponse, onSuccess)
    )

    await act(() => result.current.onRequest())

    expect(onSuccess).toHaveBeenCalledTimes(1)
    expect(onSuccess).toHaveBeenNthCalledWith(1, { foo: 'bar' })
  })

  test('should set apiErrorMessage on error with response', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithErrorResponse, onSuccess)
    )

    await act(() => result.current.onRequest())

    expect(result.current.apiErrorMessage).toBe('Server Error')
  })

  test('should reset apiErrorMessage before calling onRequest', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithErrorResponse, onSuccess)
    )

    await act(() => result.current.onRequest())

    expect(result.current.apiErrorMessage).toBe('Server Error')

    act(() => {
      result.current.onRequest()
    })

    expect(result.current.apiErrorMessage).toBe(null)
    await waitFor(() => expect(result.current.isRequesting).toBeFalsy())
  })

  test('should set apiErrorMessage to fallbackErrorId on error without response', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithoutErrorResponse, onSuccess, {
        apiFallbackErrorMessage: 'Fallback error message',
      })
    )

    await act(() => result.current.onRequest())

    expect(result.current.apiErrorMessage).toBe('Fallback error message')
  })

  test('should set default error message on error without response', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithoutErrorResponse, onSuccess)
    )

    await act(() => result.current.onRequest())

    expect(result.current.apiErrorMessage).toBe(defaultMessages['error.api'])
  })

  test('should work with parameters and without success callback on success', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithParametersWithSuccess)
    )

    const onRequestResult = await act(() => result.current.onRequest(1))

    expect(onRequestResult).toStrictEqual({ id: 1 })
    expect(result.current.apiErrorMessage).toBeNull()
  })

  test('should work with parameters and without success on error', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithParametersWithErrorResponse)
    )

    const onRequestResult = await act(() => result.current.onRequest(1))

    expect(onRequestResult).toBeUndefined()
    expect(result.current.apiErrorMessage).toBe('Server Error for 1')
  })

  test('onRequest should throw on error if option is set', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithErrorResponse, undefined, {
        throwOnError: true,
      })
    )

    let error = null

    try {
      await act(() => result.current.onRequest())
    } catch (e) {
      error = e
    }

    expect(error).toEqual({
      isAxiosError: true,
      response: { data: { message: 'Server Error' } },
    })
  })
})
