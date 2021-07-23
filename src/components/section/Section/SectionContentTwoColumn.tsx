import classNames from 'classnames'
import { SectionContent } from './SectionContent'
import { SectionProps } from './Section'

export const SectionContentTwoColumn: React.FC<SectionProps> = ({
  children,
  className,
  backgroundColor = 'gray-700',
}) => (
  <SectionContent
    backgroundColor={backgroundColor}
    className={classNames(`grid xl:grid-cols-2 xl:gap-x-5 gap-y-5`, className)}
  >
    {children}
  </SectionContent>
)
