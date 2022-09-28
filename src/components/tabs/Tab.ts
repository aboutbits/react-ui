import classNames from 'classnames'
import { useCallback, useContext, useMemo } from 'react'
import { useTheme } from '../../framework'
import { useScrollToElementOnFirstRender } from '../utils/useScrollToElementOnFristRender'
import { TabsContext } from './TabsContext'

export type TabProps = {
  /**
   * Define the name of the tab.
   * This will be used to check if the tab is active, if activeName is specified in the tabs component.
   */
  name?: string
  /**
   * Define the active state of the tab.
   * If not set (default), it will be set by tabs context.
   */
  active?: boolean
}

export function useTab<T extends Element>({ name, active }: TabProps) {
  const { tabs } = useTheme()
  const tabsContext = useContext(TabsContext)

  const tabActive = active ?? tabsContext.activeName === name

  const className = useMemo(
    () =>
      classNames(tabs.tab.base, tabActive ? tabs.tab.active : tabs.tab.normal),
    [tabs, tabActive]
  )

  const { elementRef: ref } = useScrollToElementOnFirstRender<T>({
    active: tabsContext.scrollOnFirstRender ? tabActive : null,
  })

  const onClick = useCallback(() => {
    if (!tabActive) {
      tabsContext.onChange?.(name)
    }
  }, [tabActive, name, tabsContext])

  return {
    ref,
    className,
    active: tabActive,
    onClick,
  }
}
