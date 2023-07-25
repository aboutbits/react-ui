import { ReactElement, ReactNode } from 'react'
import {
  HeaderBackAction,
  HeaderBackActionOnClickOrFallbackUrlProps,
  HeaderBackActionProps,
} from './actions/HeaderBackAction'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderTitle } from './areas/HeaderTitle'

export type HeaderWithBackNavigationProps = {
  /**
   * Define a header title.
   **/
  title: ReactNode
} & Pick<HeaderBackActionProps, 'icon'> &
  (
    | {
        /**
         * Override default onBack action.
         **/
        onBack: Exclude<HeaderBackActionProps['onClick'], undefined>
        fallbackUrl?: never
      }
    | {
        /**
         * Define a fallback url if it's not possible to go back in browser history
         */
        fallbackUrl: Exclude<HeaderBackActionProps['fallbackUrl'], undefined>
        onBack?: never
      }
  )

export function HeaderWithBackNavigation({
  title,
  icon,
  onBack,
  fallbackUrl,
}: HeaderWithBackNavigationProps): ReactElement {
  const onClickOrFallbackUrlProps = {
    onClick: onBack,
    fallbackUrl: fallbackUrl,
  } as HeaderBackActionOnClickOrFallbackUrlProps

  return (
    <HeaderArea>
      <HeaderBackAction icon={icon} {...onClickOrFallbackUrlProps} />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderArea>
  )
}
