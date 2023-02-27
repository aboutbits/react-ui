import { ReactElement } from 'react'
import { LoadingInput, LoadingInputProps } from '../../loading'
import { SectionContent, SectionContentProps } from './SectionContent'

export type SectionContentLoadingFormProps = {
  /**
   * Defines the number of items in the section.
   **/
  numberOfItems: number
  loadingInputProps?: LoadingInputProps
} & SectionContentProps

export function SectionContentLoadingForm({
  numberOfItems,
  loadingInputProps,
  ...props
}: SectionContentLoadingFormProps): ReactElement {
  return (
    <SectionContent {...props}>
      {Array(numberOfItems)
        .fill(null)
        .map((_, index) => (
          <LoadingInput key={index} {...loadingInputProps} />
        ))}
    </SectionContent>
  )
}
