import React, { ReactElement, ReactNode } from 'react'
import { HeaderArea, HeaderTitle } from '../header'

export type HeaderMainProps = {
  /**
   * Defines the title of the header.
   * */
  title: ReactNode
}

export function HeaderMain({ title }: HeaderMainProps): ReactElement {
  return (
    <HeaderArea>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderArea>
  )
}
