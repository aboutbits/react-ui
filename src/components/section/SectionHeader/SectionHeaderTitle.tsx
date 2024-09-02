import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionHeaderTitleProps = ClassNameProps & {
  children?: ReactNode
}

export function SectionHeaderTitle({
  children,
  className,
}: SectionHeaderTitleProps) {
  const { section } = useTheme()

  return (
    <h2 className={classNames(section.headerTitle.base, className)}>
      {children}
    </h2>
  )
}
