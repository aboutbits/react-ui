import { Dialog } from '@reach/dialog'
import classNames from 'classnames'
import { useMenuToggle, useMenuState } from '../header/areas/MenuContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'
import { MobileNavigationDialogCloseButton } from './MobileNavigationDialogCloseButton'

type MobileNavigationDialogProps = ClassNameProps & {
  /**
   * Define accessibility label for the dialog.
   * */
  dialogLabel: string
}

const MobileNavigationDialog: React.FC<MobileNavigationDialogProps> = ({
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
        <MobileNavigationDialogCloseButton />
      </div>
    </Dialog>
  )
}

export { MobileNavigationDialog }
