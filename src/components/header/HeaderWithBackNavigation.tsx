import { ReactElement, ReactNode } from 'react'
import { useRouter } from '../../framework'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderBackAction } from './actions/HeaderBackAction'
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
  const router = useRouter()

  return (
    <HeaderArea>
      <HeaderBackAction onClick={onBack || router.back} />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderArea>
  )
}
