import { ReactElement, ReactNode } from 'react'
import { HeaderArea, HeaderTitle, HeaderTitleProps } from '.'

export type HeaderProps = {
  /**
   * Defines the title of the header.
   **/
  title: ReactNode
} & Pick<HeaderTitleProps, 'noTruncate'>

export function Header({ title, noTruncate }: HeaderProps): ReactElement {
  return (
    <HeaderArea>
      <HeaderTitle noTruncate={noTruncate}>{title}</HeaderTitle>
    </HeaderArea>
  )
}
