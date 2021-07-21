import classNames from 'classnames'
import { SectionProps } from './Section'

export const SectionContent: React.FC<SectionProps> = ({
  children,
  className,
  tone = 'gray-700',
}) => (
  <div className={classNames(`pt-5 pb-10 px-4 lg:px-5 bg-${tone}`, className)}>
    {children}
  </div>
)
