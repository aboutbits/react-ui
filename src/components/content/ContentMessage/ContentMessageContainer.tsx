import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type ContentMessageContainerProps = ClassNameProps & {
  children?: ReactNode
}

export function ContentMessageContainer({
  className,
  children,
}: ContentMessageContainerProps) {
  const { content } = useTheme()

  return (
    <div className={classNames(content.message.base, className)}>
      {children}
    </div>
  )
}
