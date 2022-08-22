import { ReactNode } from 'react'
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

const HeaderBackWithoutAction: React.FC<Props> = ({ title, onBack }) => {
  const router = useRouter()

  return (
    <HeaderArea>
      <HeaderBackAction onClick={onBack || router.back} />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderArea>
  )
}

export { HeaderBackWithoutAction }
