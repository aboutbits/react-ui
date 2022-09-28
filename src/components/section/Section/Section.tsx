import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionProps = ClassNameProps & {
  children?: ReactNode
}

export function Section({ className, children }: SectionProps) {
  const { section } = useTheme()
  return (
    <section className={classNames(className, section.section.base)}>
      {children}
    </section>
  )
}
