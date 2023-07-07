export type ClassNameProps = {
  /**
   * Adjusting individual style with any CSS class.
   **/
  className?: string
}

export enum Mode {
  light = 'light',
  dark = 'dark',
}

export enum Size {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export enum Tone {
  primary = 'primary',
  neutral = 'neutral',
  warning = 'warning',
  critical = 'critical',
  success = 'success',
  informative = 'informative',
}

export type ModeProps = {
  /**
   * Defines the mode, either light or dark
   */
  mode?: Mode
}

export type RequiredProps<T extends boolean = boolean> = {
  /**
   * Defines whether the input is required
   */
  required?: T
}

export type ShowRequiredProps<T extends boolean = boolean> = {
  /**
   * Defines whether to show that the input is required
   */
  showRequired?: T
}

export type UseSearchQuery = {
  /**
   * Defines the passed value for the search input.
   **/
  search: string
  /**
   * Defines two functions:
   * `search`: returns the typed input as callback
   * `clear`: clears the search field
   **/
  actions: { search: (query: string) => void; clear: () => void }
}

export type IconProps = React.SVGProps<SVGSVGElement>
