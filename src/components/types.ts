export type ClassNameProps = {
  /**
   * Adjusting individual style with any CSS class.
   * */
  className?: string
}

export type UseSearchQuery = {
  /**
   * Defines the passed value for the search input.
   * */
  search: string
  /**
   * Defines two functions:
   * `search`: returns the typed input as callback
   * `clear`: clears the search field
   * */
  actions: { search: (query: string) => void; clear: () => void }
}
