import { act, renderHook } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react'
import { useDeletion } from '../useDeletion'

describe('useDeletion', () => {
  const onDelete = () => new Promise((resolve) => setTimeout(resolve, 100))

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSuccess = () => {}

  const onDeleteError = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => reject('Server Error'), 100)
    )

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

  test('should set apiErrorMessage on error', async () => {
    const { result } = renderHook(() => useDeletion(onDeleteError, onSuccess))

    await act(() => result.current.onDelete())

    expect(result.current.apiErrorMessage).toBe('Server Error')
  })

  test('should reset apiErrorMessage before calling onDelete', async () => {
    const { result } = renderHook(() => useDeletion(onDeleteError, onSuccess))

    await act(() => result.current.onDelete())

    expect(result.current.apiErrorMessage).toBe('Server Error')

    act(() => {
      result.current.onDelete()
    })

    expect(result.current.apiErrorMessage).toBe(null)
    await waitFor(() => expect(result.current.isDeleting).toBeFalsy())
  })
})
