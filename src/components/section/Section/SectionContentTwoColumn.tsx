import classNames from 'classnames'
import { SectionContent } from './SectionContent'
import { SectionProps } from './Section'

export const SectionContentTwoColumn: React.FC<SectionProps> = ({
  children,
  className = '',
  tone = 'gray-700',
}) => (
  <SectionContent
    className={classNames(
      `grid xl:grid-cols-2 xl:gap-x-5 gap-y-5 bg-${tone}`,
      className
    )}
  >
    {children}
  </SectionContent>
)
