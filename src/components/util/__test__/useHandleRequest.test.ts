import { waitFor, act, renderHook } from '@testing-library/react'
import defaultMessages from '../../../framework/internationalization/defaultMessages.en'
import { useHandleRequest } from '../useHandleRequest'

describe('useHandleRequest', () => {
  const onRequest = () => new Promise((resolve) => setTimeout(resolve, 10))

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSuccess = () => {}

  const expectedErrorMessage = 'Server Error'

  const onRequestWithErrorResponse = () =>
    new Promise((_resolve, reject) =>
      setTimeout(
        () =>
          reject({
            isAxiosError: true,
            response: { data: { message: expectedErrorMessage } },
          }),
        10
      )
    )

  const onRequestWithoutErrorResponse = () =>
    new Promise((_resolve, reject) => setTimeout(() => reject(), 10))

  test('should return initial state on first render', () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequest, { onSuccess })
    )

    expect(result.current.apiErrorMessage).toBe(null)
    expect(result.current.triggerRequest).toBeDefined()
    expect(result.current.isRequesting).toBeFalsy()
  })

  test('should set is requesting while waiting for response', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequest, { onSuccess })
    )

    act(() => {
      result.current.triggerRequest()
    })

    await waitFor(() => expect(result.current.isRequesting).toBeFalsy())
  })

  test('should call onSuccess on successful request', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onSuccess = jest.fn(() => {})
    const { result } = renderHook(() =>
      useHandleRequest(onRequest, { onSuccess })
    )

    await act(() => result.current.triggerRequest())
    expect(onSuccess).toHaveBeenCalled()
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  test('should set apiErrorMessage on error with response', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithErrorResponse, { onSuccess })
    )

    await act(() => result.current.triggerRequest())

    expect(result.current.apiErrorMessage).toBe(expectedErrorMessage)
  })

  test('should reset apiErrorMessage before calling onRequest', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithErrorResponse, { onSuccess })
    )

    await act(() => result.current.triggerRequest())

    expect(result.current.apiErrorMessage).toBe('Server Error')

    act(() => {
      result.current.triggerRequest()
    })

    expect(result.current.apiErrorMessage).toBe(null)
    await waitFor(() => expect(result.current.isRequesting).toBeFalsy())
  })

  test('should set apiErrorMessage to fallbackErrorId on error without response', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithoutErrorResponse, {
        onSuccess,
        apiFallbackErrorMessage: 'Fallback error message',
      })
    )

    await act(() => result.current.triggerRequest())

    expect(result.current.apiErrorMessage).toBe('Fallback error message')
  })

  test('should set default error message on error without response', async () => {
    const { result } = renderHook(() =>
      useHandleRequest(onRequestWithoutErrorResponse, { onSuccess })
    )

    await act(() => result.current.triggerRequest())

    expect(result.current.apiErrorMessage).toBe(defaultMessages['error.api'])
  })
})
