import classNames from 'classnames'
import { ReactElement, ReactNode, useMemo } from 'react'
import { useTheme } from '../../framework'
import { TabsContext, TabsContextInterface } from './TabsContext'

export type NavigationTabsProps = Partial<TabsContextInterface> & {
  className?: string
  children: ReactNode
}

export function Tabs({
  activeName,
  scrollOnFirstRender = true,
  onChange,
  className,
  children,
}: NavigationTabsProps): ReactElement {
  const { tabs } = useTheme()

  const tabsContext = useMemo<TabsContextInterface>(
    () => ({
      activeName,
      scrollOnFirstRender,
      onChange,
    }),
    [activeName, scrollOnFirstRender, onChange],
  )

  return (
    <TabsContext.Provider value={tabsContext}>
      <div className={classNames(tabs.tabs.base, className)}>{children}</div>
    </TabsContext.Provider>
  )
}
