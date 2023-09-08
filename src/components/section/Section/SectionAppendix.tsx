import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'

export type SectionAppendixProps = {
  children: ReactNode
  className?: string
}

/**
 * An appendix to be used inside a section. Commonly placed parallel to a [SectionContainer](../?path=/docs/components-section-sectioncontainer--docs).
 */
export function SectionAppendix({ children, className }: SectionAppendixProps) {
  const { section } = useTheme()
  return (
    <div className={classNames(section.appendix.base, className)}>
      {children}
    </div>
  )
}
