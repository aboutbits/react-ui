import { Dialog } from '@reach/dialog'
import classNames from 'classnames'
import { useMenuToggle, useMenuState } from '../header/areas/MenuContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'
import { MobileMenuDialogCloseButton } from './MobileMenuDialogCloseButton'

type MobileMenuProps = ClassNameProps & {
  /**
   * Define accessibility label for the dialog.
   * */
  dialogLabel: string
}

const MobileMenuDialog: React.FC<MobileMenuProps> = ({
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
        <MobileMenuDialogCloseButton />
      </div>
    </Dialog>
  )
}

export { MobileMenuDialog }
