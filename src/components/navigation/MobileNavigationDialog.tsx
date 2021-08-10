import { Dialog } from '@reach/dialog'
import classNames from 'classnames'
import { useIntl } from 'react-intl'
import { useMenuToggle, useMenuState } from '../header/areas/MenuContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'
import { MobileNavigationDialogCloseButton } from './MobileNavigationDialogCloseButton'

type MobileNavigationDialogProps = ClassNameProps & {
  /**
   * Define accessibility label for the dialog.
   * */
  dialogLabel?: string
}

const MobileNavigationDialog: React.FC<MobileNavigationDialogProps> = ({
  children,
  className,
  dialogLabel,
}) => {
  const intl = useIntl()
  const menuState = useMenuState()
  const menuToggle = useMenuToggle()

  const { menu } = useTheme()

  return (
    <Dialog
      isOpen={menuState}
      onDismiss={menuToggle}
      aria-label={
        dialogLabel || intl.formatMessage({ id: 'app.nav.accessibility.main' })
      }
    >
      <div className={classNames(menu.mobile.base, className)}>
        {children}
        <MobileNavigationDialogCloseButton />
      </div>
    </Dialog>
  )
}

export { MobileNavigationDialog }
