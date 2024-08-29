import { RefObject, useEffect, useRef, useState } from 'react'

export type UseFileDropZoneProps<InputElement extends HTMLInputElement> = {
  disabled?: boolean
  inputRef: RefObject<InputElement>
}

export function useFileDropZone<
  Element extends HTMLElement,
  InputElement extends HTMLInputElement = HTMLInputElement,
>({ disabled, inputRef }: UseFileDropZoneProps<InputElement>) {
  const dropZoneRef = useRef<Element>(null)

  const enterTarget = useRef<EventTarget | null>(null)
  const [isFileHovering, setIsFileHovering] = useState(false)

  useEffect(() => {
    const element = dropZoneRef.current

    if (!element || disabled) {
      return
    }

    const handleDragEnter = (event: DragEvent) => {
      event.preventDefault()
      event.stopPropagation()

      enterTarget.current = event.target
      setIsFileHovering(true)
    }

    const handleDragLeave = (event: DragEvent) => {
      event.preventDefault()
      event.stopPropagation()

      if (enterTarget.current === event.target) {
        setIsFileHovering(false)
        enterTarget.current = null
      }
    }

    const handleDragOver = (event: DragEvent) => {
      event.preventDefault()
      event.stopPropagation()
    }

    const handleDrop = (event: DragEvent) => {
      event.preventDefault()
      event.stopPropagation()

      setIsFileHovering(false)
      enterTarget.current = null

      if (
        inputRef.current &&
        event.dataTransfer?.files &&
        event.dataTransfer.files.length > 0
      ) {
        inputRef.current.files = event.dataTransfer.files

        const changeEvent = new Event('change', { bubbles: true })
        inputRef.current.dispatchEvent(changeEvent)
      }
    }

    element.addEventListener('dragenter', handleDragEnter)
    element.addEventListener('dragleave', handleDragLeave)
    element.addEventListener('dragover', handleDragOver)
    element.addEventListener('drop', handleDrop)

    return () => {
      element.removeEventListener('dragenter', handleDragEnter)
      element.removeEventListener('dragleave', handleDragLeave)
      element.removeEventListener('dragover', handleDragOver)
      element.removeEventListener('drop', handleDrop)
    }
  }, [disabled, inputRef])

  return {
    dropZoneRef,
    isFileHovering,
  }
}
