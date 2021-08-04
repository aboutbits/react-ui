import { useIntl } from 'react-intl'
import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import { useRouter } from '../../designSystem/router/RouterContext'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderBackAction } from './actions/HeaderBackAction'
import { HeaderTitle } from './areas/HeaderTitle'
import { HeaderEditAction } from './actions/HeaderEditAction'

type Props = {
  /**
   * Define a header title.
   * */
  title: string
  /**
   * Define where the user is redirected to.
   * */
  editHref: string
  /**
   * Define the accessibility label for the edit icon.
   * */
  editLabel: string
}

const HeaderBackWithEdit: React.FC<Props> = ({
  title,
  editHref,
  editLabel,
}) => {
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
      <HeaderEditAction href={editHref} label={editLabel} />
    </HeaderArea>
  )
}

export { HeaderBackWithEdit }
