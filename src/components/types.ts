export type ClassNameProps = {
  /**
   * Adjusting individual style with any CSS class.
   **/
  className?: string
}

export enum Mode {
  Light = 'LIGHT',
  Dark = 'DARK',
}

export enum Size {
  Sm = 'SM',
  Md = 'MD',
  Lg = 'LG',
}

export enum Tone {
  Primary = 'PRIMARY',
  Neutral = 'NEUTRAL',
  Warning = 'WARNING',
  Critical = 'CRITICAL',
  Success = 'SUCCESS',
  Informative = 'INFORMATIVE',
}

export type ModeProps = {
  /**
   * Defines the mode, either LIGHT or DARK
   */
  mode?: Mode
}

export type RequiredProps = {
  /**
   * Defines whether the input is required
   */
  required?: boolean
}

export type HideRequiredProps = {
  /**
   * Defines whether to hide that the input is required
   */
  hideRequired?: boolean
}

export type ShowRequiredProps = {
  /**
   * Defines whether the label should be shown as for a required input
   */
  showRequired?: boolean
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
