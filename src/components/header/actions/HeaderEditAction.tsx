import Link from 'next/link'
import IconEdit from '@aboutbits/react-material-icons/dist/IconEdit'
import classNames from 'classnames'
import { HeaderRightArea } from '../areas/HeaderRightArea'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

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
  return (
    <HeaderRightArea>
      <Link href={href}>
        <a>
          <IconEdit
            className={classNames(
              header.editAction.base,
              header.editAction.normal
            )}
            title={label}
          />
        </a>
      </Link>
    </HeaderRightArea>
  )
}

export { HeaderEditAction }
