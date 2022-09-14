import { ReactNode } from 'react'
import { SectionHeaderArea } from './SectionHeaderArea'
import { SectionHeaderTitle } from './SectionHeaderTitle'

export type SectionHeaderProps = {
  title: ReactNode
  className?: string
}

export function SectionHeader({ className, title }: SectionHeaderProps) {
  return (
    <SectionHeaderArea className={className}>
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
    </SectionHeaderArea>
  )
}
