import { useEffect, useState } from 'react'

export function useDebounce<T>(data: T, interval: number): T {
  const [liveData, setLiveData] = useState<T>(data)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handler = window.setTimeout(() => {
        setLiveData(data)
      }, interval)
      return () => {
        window.clearTimeout(handler)
      }
    }
    return undefined
  }, [data, interval])

  return liveData
}
