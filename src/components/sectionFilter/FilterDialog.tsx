import { Dialog } from '@reach/dialog'
import classnames from 'classnames'
import { useInternationalization, useTheme } from '../../framework'
import { DialogHeader, DialogHeaderProps } from '../dialog'
import { ClassNameProps } from '../types'

export type FilterDialogProps = Partial<Pick<DialogHeaderProps, 'title'>> &
  Pick<DialogHeaderProps, 'onDismiss'> & {
    /**
     * Accessibility label for the dialog.
     **/
    dialogLabel?: string
  } & ClassNameProps

const FilterDialog: React.FC<FilterDialogProps> = ({
  title,
  onDismiss,
  children,
  dialogLabel,
  className,
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
      className={classnames(dialog.select.base, className)}
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
