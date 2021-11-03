import classNames from 'classnames'
import { Dialog, DialogProps } from '@reach/dialog'
import { useInternationalization, useTheme } from '../../../framework'
import { DialogHeader, DialogHeaderProps } from '../../dialog'

type Props = Partial<Pick<DialogHeaderProps, 'title'>> &
  Pick<DialogHeaderProps, 'onDismiss'> &
  Pick<DialogProps, 'isOpen'> & {
    /**
     * Accessibility label for the dialog.
     **/
    dialogLabel: string
  }

const FilterDialog: React.FC<Props> = ({
  title,
  onDismiss,
  isOpen,
  children,
  dialogLabel,
}) => {
  const internationalization = useInternationalization()
  const { dialog } = useTheme()
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onDismiss}
      aria-label={dialogLabel}
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
