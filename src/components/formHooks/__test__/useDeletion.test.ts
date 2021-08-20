import { act, renderHook } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react'
import { useDeletion } from '../useDeletion'

describe('useDeletion', () => {
  const onDelete = () => new Promise((resolve) => setTimeout(resolve, 100))

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
    const { result } = renderHook(() => useDeletion(onDelete, onSuccess))

    expect(result.current.apiErrorMessage).toBe(null)
    expect(result.current.onDelete).toBeDefined()
    expect(result.current.isDeleting).toBeFalsy()
  })

  test('should set is deleting state during deletion', async () => {
    const { result } = renderHook(() => useDeletion(onDelete, onSuccess))

    act(() => {
      result.current.onDelete()
    })

    await waitFor(() => expect(result.current.isDeleting).toBeFalsy())
  })

  test('should call onSuccess on successful deletion', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onSuccess = jest.fn(() => {})
    const { result } = renderHook(() => useDeletion(onDelete, onSuccess))

    await act(() => result.current.onDelete())
    expect(onSuccess).toHaveBeenCalled()
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  test('should set apiErrorMessage on error with response', async () => {
    const { result } = renderHook(() =>
      useDeletion(onDeleteWithErrorResponse, onSuccess)
    )

    await act(() => result.current.onDelete())

    expect(result.current.apiErrorMessage).toBe('Server Error')
  })

  test('should reset apiErrorMessage before calling onDelete', async () => {
    const { result } = renderHook(() =>
      useDeletion(onDeleteWithErrorResponse, onSuccess)
    )

    await act(() => result.current.onDelete())

    expect(result.current.apiErrorMessage).toBe('Server Error')

    act(() => {
      result.current.onDelete()
    })

    expect(result.current.apiErrorMessage).toBe(null)
    await waitFor(() => expect(result.current.isDeleting).toBeFalsy())
  })

  test('should set apiErrorMessage to fallbackErrorId on error without response', async () => {
    const { result } = renderHook(() =>
      useDeletion(onDeleteWithoutErrorResponse, onSuccess, {
        apiFallbackErrorMessageId: 'error.server.failed',
      })
    )

    await act(() => result.current.onDelete())

    expect(result.current.apiErrorMessage).toBe('error.server.failed')
  })

  test('should set default error message on error without response', async () => {
    const { result } = renderHook(() =>
      useDeletion(onDeleteWithoutErrorResponse, onSuccess)
    )

    await act(() => result.current.onDelete())

    expect(result.current.apiErrorMessage).toBe('shared.error.api')
  })
})
