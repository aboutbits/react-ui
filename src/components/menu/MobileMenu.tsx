import { useIntl } from 'react-intl'
import { Dialog } from '@reach/dialog'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { useMenuToggle, useMenuState } from '../header/areas/MenuContext'
import { Menu } from './Menu'

const MobileMenu: React.FC = () => {
  const intl = useIntl()
  const menuState = useMenuState()
  const menuToggle = useMenuToggle()

  return (
    <Dialog
      isOpen={menuState}
      onDismiss={menuToggle}
      aria-label={intl.formatMessage({ id: 'app.nav.accessibility.main' })}
    >
      <div className="flex flex-row items-stretch min-h-screen">
        <Menu className="relative mr-14 w-full max-w-sm">
          <button
            className="absolute right-0 p-4 hover:opacity-60 active:opacity-60"
            onClick={menuToggle}
          >
            <IconClose
              className="text-white fill-current"
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
