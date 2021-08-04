import { useIntl } from 'react-intl'
import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import { useRouter } from '../../designSystem/router/RouterContext'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderBackAction } from './actions/HeaderBackAction'
import { HeaderTitle } from './areas/HeaderTitle'

type Props = {
  /**
   * Define a header title.
   * */
  title: string
}

const HeaderBackWithoutAction: React.FC<Props> = ({ title }) => {
  const intl = useIntl()
  const router = useRouter()

  return (
    <HeaderArea
      navigation={
        <HeaderBackAction
          icon={IconArrowBack}
          label={intl.formatMessage({ id: 'shared.button.goBack' })}
          onClick={() => router.back()}
        />
      }
    >
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderArea>
  )
}

export { HeaderBackWithoutAction }
