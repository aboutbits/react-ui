import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import classNames from 'classnames'
import { useMenuToggle } from '../header/areas/MenuContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

const MobileNavigationDialogCloseButton: React.FC<ClassNameProps> = ({
  className,
}) => {
  const menuToggle = useMenuToggle()
  const { menu } = useTheme()
  return (
    <button
      className={classNames(menu.mobile.closeButton.base, className)}
      onClick={menuToggle}
    >
      <IconClose
        className={menu.mobile.closeButton.icon.base}
        width="24"
        height="24"
      />
    </button>
  )
}

export { MobileNavigationDialogCloseButton }
