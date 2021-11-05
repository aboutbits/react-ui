import classNames from 'classnames'
import { Dialog } from '@reach/dialog'
import { useInternationalization, useTheme } from '../../framework'
import { DialogHeader, DialogHeaderProps } from '../dialog'

export type FilterDialogProps = Partial<Pick<DialogHeaderProps, 'title'>> &
  Pick<DialogHeaderProps, 'onDismiss'> & {
    /**
     * Accessibility label for the dialog.
     **/
    dialogLabel?: string
  }

const FilterDialog: React.FC<FilterDialogProps> = ({
  title,
  onDismiss,
  children,
  dialogLabel,
}) => {
  const internationalization = useInternationalization()
  const { dialog } = useTheme()
  return (
    <Dialog
      onDismiss={onDismiss}
      aria-label={
        dialogLabel ||
        title ||
        internationalization.translate('shared.filter.label')
      }
      className={classNames(dialog.select.base, dialog.select.normal)}
    >
      <DialogHeader
        onDismiss={onDismiss}
        title={title || internationalization.translate('shared.filter.label')}
      />
      {children}
    </Dialog>
  )
}

export { FilterDialog }
