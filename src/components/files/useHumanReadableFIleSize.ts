import { useCallback } from 'react'

const UNITS = [
  'byte',
  'kilobyte',
  'megabyte',
  'gigabyte',
  'terabyte',
  'petabyte',
] as const

function useFormattedBytes() {
  return useCallback((value: number, unit: (typeof UNITS)[number]) => {
    const formattedValue = value.toFixed(1)
    switch (unit) {
      case 'byte':
        return `${formattedValue} B`
      case 'kilobyte':
        return `${formattedValue} KB`
      case 'megabyte':
        return `${formattedValue} MB`
      case 'gigabyte':
        return `${formattedValue} GB`
      case 'terabyte':
        return `${formattedValue} TB`
      case 'petabyte':
        return `${formattedValue} PB`
    }
  }, [])
}

const BYTES_PER_KB = 1_000

export function useHumanReadableFileSize() {
  const formatBytes = useFormattedBytes()

  return useCallback(
    (bytes: number) => {
      if (bytes < 0) {
        return undefined
      }

      let unitIndex = 0
      while (bytes >= Number(BYTES_PER_KB) && unitIndex < UNITS.length - 1) {
        bytes /= BYTES_PER_KB
        unitIndex++
      }

      const unit = UNITS[unitIndex]
      return unit ? formatBytes(bytes, unit) : undefined
    },
    [formatBytes],
  )
}
