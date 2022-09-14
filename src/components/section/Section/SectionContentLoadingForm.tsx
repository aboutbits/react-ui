import { ReactElement } from 'react'
import { LoadingInput } from '../../loading'
import { SectionContent, SectionContentProps } from './SectionContent'

export type SectionContentLoadingFormProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
} & SectionContentProps

export function SectionContentLoadingForm({
  numberOfItems,
  ...props
}: SectionContentLoadingFormProps): ReactElement {
  return (
    <SectionContent {...props}>
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <LoadingInput key={index} />
        ))}
    </SectionContent>
  )
}
