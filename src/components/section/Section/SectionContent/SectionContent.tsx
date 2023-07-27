import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../../framework'
import { ClassNameProps } from '../../../types'
import { SectionContentLayout } from './types'

export type SectionContentProps = ClassNameProps & {
  layout?: SectionContentLayout
  children?: ReactNode
}

export function SectionContent({
  layout,
  children,
  className,
}: SectionContentProps) {
  const { section } = useTheme()
  const layoutStyle =
    typeof layout !== 'undefined' ? section.content.layout[layout] : ''

  return (
    <div className={classNames(section.content.base, layoutStyle, className)}>
      {children}
    </div>
  )
}
