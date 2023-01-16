import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionContentProps = ClassNameProps & {
  layout?: SectionContentLayout | Layout
  children?: ReactNode
}

export enum SectionContentLayout {
  oneColumnGrid = 'oneColumnGrid',
  twoColumnGrid = 'twoColumnGrid',
}

/**
 * @deprecated use SectionContentLayout instead
 */
export enum Layout {
  oneColumnGrid = 'oneColumnGrid',
  twoColumnGrid = 'twoColumnGrid',
}

export function SectionContent({
  layout,
  children,
  className,
}: SectionContentProps) {
  const { section } = useTheme()
  const layoutStyle =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof layout !== 'undefined' ? section.content.layout[layout] : ''

  return (
    <div className={classNames(section.content.base, layoutStyle, className)}>
      {children}
    </div>
  )
}
