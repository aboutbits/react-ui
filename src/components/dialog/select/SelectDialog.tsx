import classNames from 'classnames'
import { Dialog } from '@reach/dialog'
import { useTheme } from '../../../framework/theme/ThemeContext'
import { UseSearchQuery } from '../../types'
import { SelectDialogHeader } from './SelectDialogHeader'

type Props = {
  /**
   * Defines which action should be executed on dismissing.
   * */
  onDismiss: (event?: React.SyntheticEvent<Element, Event> | undefined) => void
  /**
   * Defines the title of the header.
   * */
  title: string
  /**
   * Define the accessibility label for the search icon.
   * */
  iconLabel: string
  /**
   * Defines if the dialog is open.
   * */
  isOpen: boolean
  /**
   * Accessibility label for the dialog.
   * */
  dialogLabel: string
} & UseSearchQuery

const SelectDialog: React.FC<Props> = ({
  title,
  iconLabel,
  search,
  onDismiss,
  actions,
  isOpen,
  children,
  dialogLabel,
}) => {
  const { dialog } = useTheme()
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onDismiss}
      aria-label={dialogLabel}
      className={classNames(dialog.select.base, dialog.select.normal)}
    >
      <SelectDialogHeader
        onDismiss={onDismiss}
        title={title}
        iconLabel={iconLabel}
        search={search}
        actions={actions}
      />
      {children}
    </Dialog>
  )
}

export { SelectDialog }
