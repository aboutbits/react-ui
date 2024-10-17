import { ReactNode } from 'react'
import { SectionHeaderArea } from './SectionHeaderArea'
import { SectionHeaderTitle } from './SectionHeaderTitle'
import { SectionHeaderRow, SectionHeaderRowLayout } from './SectionHeaderRow'

export type SectionHeaderProps = {
  title: ReactNode
  className?: string
  right?: ReactNode
}

export function SectionHeader({ className, title, right }: SectionHeaderProps) {
  return (
    <SectionHeaderArea className={className}>
      <SectionHeaderRow layout={SectionHeaderRowLayout.SpaceBetween}>
        <SectionHeaderTitle>{title}</SectionHeaderTitle>
        {right}
      </SectionHeaderRow>
    </SectionHeaderArea>
  )
}
