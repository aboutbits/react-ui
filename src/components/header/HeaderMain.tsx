import { HeaderArea, HeaderTitle } from '../header'

type Props = {
  /**
   * Defines the title of the header.
   * */
  title: string
}

const HeaderMain: React.FC<Props> = ({ title }) => (
  <HeaderArea>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderArea>
)

export { HeaderMain }
