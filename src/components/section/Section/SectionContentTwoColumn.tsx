import classNames from 'classnames'
import { SectionContent } from './SectionContent'
import { SectionProps } from './Section'

type Props = SectionProps

export const SectionContentTwoColumn: React.FC<Props> = ({
  children,
  className,
}) => (
  <SectionContent
    className={classNames(`grid xl:grid-cols-2 xl:gap-x-5 gap-y-5`, className)}
  >
    {children}
  </SectionContent>
)
