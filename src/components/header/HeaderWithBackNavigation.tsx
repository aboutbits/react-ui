import { ReactElement, ReactNode } from 'react'
import { HeaderBackAction } from './actions/HeaderBackAction'
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
  onBack?: () => void
}

export function HeaderWithBackNavigation({
  title,
  onBack,
}: HeaderWithBackNavigationProps): ReactElement {
  return (
    <HeaderArea>
      <HeaderBackAction onClick={onBack} />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderArea>
  )
}
