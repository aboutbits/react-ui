import { Dialog } from '@reach/dialog'
import classNames from 'classnames'
import { useMenuToggle, useMenuState } from '../header/areas/MenuContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'
import { MobileMenuCloseButton } from './MobileMenuCloseButton'

type MobileMenuProps = ClassNameProps & {
  /**
   * Define accessibility label for the dialog.
   * */
  dialogLabel: string
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  children,
  className,
  dialogLabel,
}) => {
  const menuState = useMenuState()
  const menuToggle = useMenuToggle()

  const { menu } = useTheme()

  return (
    <Dialog isOpen={menuState} onDismiss={menuToggle} aria-label={dialogLabel}>
      <div className={classNames(menu.mobile.base, className)}>
        {children}
        <MobileMenuCloseButton />
      </div>
    </Dialog>
  )
}

export { MobileMenu }
