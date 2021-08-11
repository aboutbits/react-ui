import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import classNames from 'classnames'
import { useMenuToggle } from '../header/areas/MenuContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

const MobileNavigationDialogCloseButton: React.FC<ClassNameProps> = ({
  className,
}) => {
  const menuToggle = useMenuToggle()
  const { navigation } = useTheme()
  return (
    <button
      className={classNames(
        navigation.mobile.dialog.closeButton.base,
        navigation.mobile.dialog.closeButton.normal,
        className
      )}
      onClick={menuToggle}
    >
      <IconClose
        className={navigation.mobile.dialog.closeButton.icon.base}
        width="24"
        height="24"
      />
    </button>
  )
}

export { MobileNavigationDialogCloseButton }
