import classNames from 'classnames'
import { ReactNode } from 'react'

export type SectionAppendixProps = {
  children: ReactNode
  className?: string
}

export function SectionAppendix({ children, className }: SectionAppendixProps) {
  return <div className={classNames('mt-4', className)}>{children}</div>
}
