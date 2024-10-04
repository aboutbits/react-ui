import IconKeyboardArrowLeftOutlinedFilled from '@aboutbits/react-material-icons/dist/IconKeyboardArrowLeftOutlinedFilled'
import IconKeyboardArrowRightOutlinedFilled from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRightOutlinedFilled'
import { ReactElement } from 'react'
import { useInternationalization, useTheme } from '../../framework'

export function PaginationPreviousContent(): ReactElement {
  const { pagination } = useTheme()
  const { messages } = useInternationalization()

  return (
    <>
      <IconKeyboardArrowLeftOutlinedFilled
        className={pagination.prevNext.icon.base}
      />
      <span className={pagination.prevNext.text.base}>
        {messages['pagination.prev']}
      </span>
    </>
  )
}

export function PaginationNextContent(): ReactElement {
  const { pagination } = useTheme()
  const { messages } = useInternationalization()

  return (
    <>
      <span className={pagination.prevNext.text.base}>
        {messages['pagination.next']}
      </span>
      <IconKeyboardArrowRightOutlinedFilled
        className={pagination.prevNext.icon.base}
      />
    </>
  )
}
