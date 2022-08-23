import { ReactElement } from 'react'
import { UseSearchQuery } from '../../types'
import { DialogContentArea } from '../areas/DialogContentArea'
import { Dialog, DialogProps } from '../Dialog'
import { DialogHeaderSearch } from '../DialogHeaderSearch'

type Props = DialogProps &
  Required<Pick<DialogProps, 'onDismiss'>> &
  UseSearchQuery & {
    /**
     * Define the accessibility label for the search icon.
     **/
    iconLabel: string
    /**
     * Accessibility label for the dialog.
     **/
    dialogLabel: string
  }

export function SelectDialog({
  title,
  dialogLabel,
  iconLabel,
  search,
  actions,
  children,
  ...props
}: Props): ReactElement {
  return (
    <Dialog {...props} title={dialogLabel}>
      <>
        <DialogHeaderSearch
          onDismiss={props.onDismiss}
          title={title}
          iconLabel={iconLabel}
          search={search}
          actions={actions}
        />
        <DialogContentArea>{children}</DialogContentArea>
      </>
    </Dialog>
  )
}
