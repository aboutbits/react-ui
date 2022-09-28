import { createContext } from 'react'

export interface TabsContextInterface {
  /**
   * Define the active tab by its name
   */
  activeName: string | undefined
  /**
   * If enabled and the tabs container has a vertical scrollbar (e.g. on small screens),
   * the tabs container will scroll to the active tab on the first render
   */
  scrollOnFirstRender: boolean
  /**
   * Define a handler function which will be called on tab change
   */
  onChange: ((name: string | undefined) => void) | undefined
}

export const TabsContext = createContext<TabsContextInterface>({
  activeName: undefined,
  scrollOnFirstRender: true,
  onChange: undefined,
})
