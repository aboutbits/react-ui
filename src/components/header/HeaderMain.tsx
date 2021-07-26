import { HeaderArea, HeaderTitle } from '../header'

const HeaderMain: React.FC<{ title: string }> = ({ title }) => (
  <HeaderArea>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderArea>
)

export { HeaderMain }
