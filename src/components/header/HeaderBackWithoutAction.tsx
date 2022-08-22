import { ReactElement, ReactNode } from 'react'
import { useRouter } from '../../framework'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderBackAction } from './actions/HeaderBackAction'
import { HeaderTitle } from './areas/HeaderTitle'

type Props = {
  /**
   * Define a header title.
   **/
  title: ReactNode

  /**
   * Override default onBack action.
   **/
  onBack?: () => void
}

export function HeaderBackWithoutAction({
  title,
  onBack,
}: Props): ReactElement {
  const router = useRouter()

  return (
    <HeaderArea>
      <HeaderBackAction onClick={onBack || router.back} />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderArea>
  )
}
