import React, { ReactNode } from 'react'
import { HeaderArea, HeaderTitle } from '../header'

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
