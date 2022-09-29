import { useEffect, useRef } from 'react'

type Props = {
  active: boolean | null | undefined
}

export function useScrollToElementOnFirstRender<T extends Element>({
  active,
}: Props) {
  const elementRef = useRef<T>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    if (active && firstRender.current) {
      const tab = elementRef.current
      const tabList = tab?.parentElement

      if (tabList) {
        tabList.scrollLeft = tab.getBoundingClientRect().left
      }
    }
  }, [active])

  useEffect(() => {
    firstRender.current = false
  }, [])

  return { elementRef }
}
