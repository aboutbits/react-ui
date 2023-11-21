import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { SectionFooterVariant } from './types'

export type SectionFooterAreaProps = ClassNameProps & {
  children?: ReactNode
  variant?: SectionFooterVariant
}

/**
 * The section footer is a component that should be placed at the bottom of a [SectionContainer](../?path=/docs/components-section-sectioncontainer--docs). It is used as a container for the section footer where, for example, the pagination can be placed.
 */
export function SectionFooterArea({
  className,
  children,
  variant = SectionFooterVariant.Solid,
}: SectionFooterAreaProps) {
  const { section } = useTheme()

  return (
    <div
      className={classNames(
        section.footerArea.base,
        section.footerArea[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}
