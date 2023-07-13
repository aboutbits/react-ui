import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionContentProps = ClassNameProps & {
  layout?: SectionContentLayout | Layout
  children?: ReactNode
}

export enum SectionContentLayout {
  OneColumnGrid = 'ONE_COLUMN_GRID',
  TwoColumnGrid = 'TWO_COLUMN_GRID',
}

/**
 * @deprecated use SectionContentLayout instead
 */
export enum Layout {
  OneColumnGrid = 'ONE_COLUMN_GRID',
  TwoColumnGrid = 'TWO_COLUMN_GRID',
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
