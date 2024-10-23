import { ReactNode } from 'react'
import { SectionHeaderArea } from './SectionHeaderArea'
import { SectionHeaderRow, SectionHeaderRowLayout } from './SectionHeaderRow'
import { SectionHeaderTitle } from './SectionHeaderTitle'

export type SectionHeaderProps = {
  title: ReactNode
  className?: string
  rightArea?: ReactNode
}

export function SectionHeader({
  className,
  title,
  rightArea,
}: SectionHeaderProps) {
  return (
    <SectionHeaderArea className={className}>
      <SectionHeaderRow layout={SectionHeaderRowLayout.SpaceBetween}>
        <SectionHeaderTitle>{title}</SectionHeaderTitle>
        <div>{rightArea}</div>
      </SectionHeaderRow>
    </SectionHeaderArea>
  )
}
