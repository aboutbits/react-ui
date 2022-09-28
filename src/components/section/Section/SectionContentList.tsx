import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionContentListProps = ClassNameProps & {
  children?: ReactNode
}

export function SectionContentList({
  children,
  className,
}: SectionContentListProps) {
  const { section } = useTheme()

  return (
    <div className={classNames(section.contentList.base, className)}>
      {children}
    </div>
  )
}
