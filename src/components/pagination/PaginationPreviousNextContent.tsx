import { ReactElement } from 'react'
import { FormattedMessage } from 'react-intl'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import IconKeyboardArrowLeft from '@aboutbits/react-material-icons/dist/IconKeyboardArrowLeft'
import { useTheme } from '../../designSystem/theme/ThemeContext'

export function PaginationPreviousContent(): ReactElement {
  const { pagination } = useTheme()

  return (
    <>
      <IconKeyboardArrowLeft className={pagination.prevNext.icon.base} />
      <span className={pagination.prevNext.text.base}>
        <FormattedMessage id="shared.pagination.prev" />
      </span>
    </>
  )
}

export function PaginationNextContent(): ReactElement {
  const { pagination } = useTheme()

  return (
    <>
      <span className={pagination.prevNext.text.base}>
        <FormattedMessage id="shared.pagination.next" />
      </span>
      <IconKeyboardArrowRight className={pagination.prevNext.icon.base} />
    </>
  )
}
