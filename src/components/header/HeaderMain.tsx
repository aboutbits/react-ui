import { HeaderArea, HeaderTitle } from '../header'
import React, { ReactNode } from 'react'

export type Props = {
  /**
   * Defines the title of the header.
   * */
  title: ReactNode
}

const HeaderMain: React.FC<Props> = ({ title }) => (
  <HeaderArea>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderArea>
)

export { HeaderMain }
