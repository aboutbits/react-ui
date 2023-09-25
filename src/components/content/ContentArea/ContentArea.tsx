import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type ContentAreaProps = ClassNameProps & {
  children?: ReactNode
}

/**
 * This component makes sure that there is enough space between multiple sections and actions on a page.
 */
export function ContentArea({ className, children }: ContentAreaProps) {
  const { content } = useTheme()
  return (
    <div className={classNames(content.area.base, className)}>{children}</div>
  )
}
