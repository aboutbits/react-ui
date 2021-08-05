import classNames from 'classnames'
import { Dialog } from '@reach/dialog'
import { useIntl } from 'react-intl'
import { UseSearchQuery } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

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
} & UseSearchQuery

const SelectDialogHeader: React.FC<Props> = ({
  title,
  iconLabel,
  search,
  onDismiss,
  searchActions,
}) => {
  const { dialog } = useTheme()
  const intl = useIntl()
  return (
    <Dialog
      //isOpen={isOpen}
      onDismiss={onDismiss}
      aria-label={intl.formatMessage({
        id: 'shared.organization.select.dialog.title',
      })}
      className={classNames(dialog.select.base, dialog.select.normal)}
    >
      <SelectDialogHeader
        onDismiss={onDismiss}
        title={title}
        iconLabel={iconLabel}
        search={search}
        searchActions={searchActions}
      />
    </Dialog>
  )
}

export { SelectDialogHeader }
