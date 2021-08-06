import { useIntl } from 'react-intl'
import { Dialog } from '@reach/dialog'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { useMenuToggle, useMenuState } from '../header/areas/MenuContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { Menu } from './Menu'

const MobileMenu: React.FC = () => {
  const intl = useIntl()
  const menuState = useMenuState()
  const menuToggle = useMenuToggle()

  const { menu } = useTheme()

  return (
    <Dialog
      isOpen={menuState}
      onDismiss={menuToggle}
      aria-label={intl.formatMessage({ id: 'app.nav.accessibility.main' })}
    >
      <div className={menu.mobile.base}>
        <Menu className={menu.mobile.menu.base}>
          <button className={menu.mobile.menu.button.base} onClick={menuToggle}>
            <IconClose
              className={menu.mobile.menu.button.icon.base}
              width="24"
              height="24"
            />
          </button>
        </Menu>
      </div>
    </Dialog>
  )
}

export { MobileMenu }
