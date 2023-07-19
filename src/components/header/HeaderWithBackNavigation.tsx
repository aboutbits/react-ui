import { ReactElement, ReactNode } from 'react'
import {
  HeaderBackAction,
  HeaderBackActionProps,
} from './actions/HeaderBackAction'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderTitle } from './areas/HeaderTitle'

export type HeaderWithBackNavigationProps = {
  /**
   * Define a header title.
   **/
  title: ReactNode
  /**
   * Override default onBack action.
   **/
  onBack?: HeaderBackActionProps['onClick']
} & Pick<HeaderBackActionProps, 'icon' | 'fallbackUrl'>

export function HeaderWithBackNavigation({
  title,
  icon,
  fallbackUrl,
  onBack,
}: HeaderWithBackNavigationProps): ReactElement {
  return (
    <HeaderArea>
      <HeaderBackAction
        icon={icon}
        fallbackUrl={fallbackUrl}
        onClick={onBack}
      />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderArea>
  )
}
