import classNames from 'classnames'
import { UseSearchQuery } from '../../types'
import { HeaderCloseWithSearch } from '../../header/HeaderCloseWithSearch'
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
  actions,
}) => {
  const { dialog } = useTheme()

  return (
    <div
      className={classNames(
        dialog.select.header.base,
        dialog.select.header.normal
      )}
    >
      <HeaderCloseWithSearch
        title={title}
        search={search}
        actions={actions}
        labelIcon={iconLabel}
        onClose={onDismiss}
      />
    </div>
  )
}

export { SelectDialogHeader }
