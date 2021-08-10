import { ReactElement } from 'react'
import { FormattedMessage } from 'react-intl'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import IconKeyboardArrowLeft from '@aboutbits/react-material-icons/dist/IconKeyboardArrowLeft'
import { useTheme } from '../../designSystem/theme/ThemeContext'

export function PaginationPreviousContent(): ReactElement {
  const { section } = useTheme()

  return (
    <>
      <IconKeyboardArrowLeft
        className={section.pagination.prevNext.icon.base}
      />
      <span className={section.pagination.prevNext.text.base}>
        <FormattedMessage id="shared.pagination.prev" />
      </span>
    </>
  )
}

export function PaginationNextContent(): ReactElement {
  const { section } = useTheme()

  return (
    <>
      <span className={section.pagination.prevNext.text.base}>
        <FormattedMessage id="shared.pagination.next" />
      </span>
      <IconKeyboardArrowRight
        className={section.pagination.prevNext.icon.base}
      />
    </>
  )
}
