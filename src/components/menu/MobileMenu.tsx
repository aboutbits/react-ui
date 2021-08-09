import { useIntl } from 'react-intl'
import { Dialog } from '@reach/dialog'
import { useMenuToggle, useMenuState } from '../header/areas/MenuContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { MobileMenuCloseButton } from './MobileMenuCloseButton'

const MobileMenu: React.FC = ({ children }) => {
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
        {children}
        <MobileMenuCloseButton />
      </div>
    </Dialog>
  )
}

export { MobileMenu }
