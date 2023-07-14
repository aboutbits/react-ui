import { ReactElement } from 'react'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import IconKeyboardArrowLeft from '@aboutbits/react-material-icons/dist/IconKeyboardArrowLeft'
import { useTheme, useInternationalization } from '../../framework'

export function PaginationPreviousContent(): ReactElement {
  const { pagination } = useTheme()
  const { messages } = useInternationalization()

  return (
    <>
      <IconKeyboardArrowLeft className={pagination.prevNext.icon.base} />
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
      <IconKeyboardArrowRight className={pagination.prevNext.icon.base} />
    </>
  )
}
