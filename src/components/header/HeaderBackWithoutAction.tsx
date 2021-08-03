import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderBackAction } from './actions/HeaderBackAction'
import { HeaderTitle } from './areas/HeaderTitle'

const HeaderBackWithoutAction: React.FC<{ title: string }> = ({ title }) => {
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
