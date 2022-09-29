import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionContentTitleProps = ClassNameProps & {
  children?: ReactNode
}

export function SectionContentTitle({
  children,
  className,
}: SectionContentTitleProps) {
  const { section } = useTheme()

  return (
    <span className={classNames(section.contentTitle.base, className)}>
      {children}
    </span>
  )
}
