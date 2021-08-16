import IconEdit from '@aboutbits/react-material-icons/dist/IconEdit'
import classNames from 'classnames'
import { HeaderRightArea } from '../areas/HeaderRightArea'
import { useTheme } from '../../../framework/theme/ThemeContext'
import { useLinkComponent } from '../../../framework/router/LinkComponentContext'

type Props = {
  /**
   * Define where the user is redirected to.
   * */
  href: string
  /**
   * Define the accessibility label for the icon.
   * */
  label: string
}

const HeaderEditAction: React.FC<Props> = ({ href, label }) => {
  const { header } = useTheme()
  const LinkComponent = useLinkComponent()
  return (
    <HeaderRightArea>
      <LinkComponent href={href}>
        <IconEdit
          className={classNames(
            header.editAction.base,
            header.editAction.normal
          )}
          title={label}
        />
      </LinkComponent>
    </HeaderRightArea>
  )
}

export { HeaderEditAction }
