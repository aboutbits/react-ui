import { Dialog } from '@reach/dialog'
import classNames from 'classnames'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { useNavigationToggle, useNavigationState } from './NavigationContext'
import { MobileNavigationDialogCloseButton } from './MobileNavigationDialogCloseButton'

type MobileNavigationDialogProps = {
  /**
   * Define accessibility label for the dialog.
   * */
  dialogLabel: string
}

const MobileNavigationDialog: React.FC<MobileNavigationDialogProps> = ({
  children,
  dialogLabel,
}) => {
  const menuState = useNavigationState()
  const menuToggle = useNavigationToggle()

  const { navigation } = useTheme()

  return (
    <Dialog isOpen={menuState} onDismiss={menuToggle} aria-label={dialogLabel}>
      <div
        className={classNames(
          navigation.mobile.dialog.base,
          navigation.mobile.dialog.normal
        )}
      >
        {children}
        <MobileNavigationDialogCloseButton />
      </div>
    </Dialog>
  )
}

export { MobileNavigationDialog }
