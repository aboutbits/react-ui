import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { useMenuToggle } from '../header/areas/MenuContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'

const MobileMenuCloseButton: React.FC = () => {
  const menuToggle = useMenuToggle()
  const { menu } = useTheme()
  return (
    <button className={menu.mobile.closeButton.base} onClick={menuToggle}>
      <IconClose
        className={menu.mobile.closeButton.icon.base}
        width="24"
        height="24"
      />
    </button>
  )
}

export { MobileMenuCloseButton }
