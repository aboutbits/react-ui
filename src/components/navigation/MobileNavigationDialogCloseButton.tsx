import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import classNames from 'classnames'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { useNavigationToggle } from './NavigationContext'

const MobileNavigationDialogCloseButton: React.FC<ClassNameProps> = ({
  className,
}) => {
  const menuToggle = useNavigationToggle()
  const { navigation } = useTheme()
  return (
    <button
      className={classNames(navigation.mobileDialogCloseButton.base, className)}
      onClick={menuToggle}
    >
      <IconClose
        className={navigation.mobileDialogCloseButton.icon.base}
        width="24"
        height="24"
      />
    </button>
  )
}

export { MobileNavigationDialogCloseButton }
