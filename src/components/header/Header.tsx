import { ReactElement, ReactNode } from 'react'
import { HeaderArea, HeaderTitle } from '.'

export type HeaderProps = {
  /**
   * Defines the title of the header.
   **/
  title: ReactNode
}

export function Header({ title }: HeaderProps): ReactElement {
  return (
    <HeaderArea>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderArea>
  )
}
