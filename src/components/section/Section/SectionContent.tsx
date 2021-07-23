import classNames from 'classnames'
import { SectionProps } from './Section'

export const SectionContent: React.FC<SectionProps> = ({
  children,
  className,
}) => (
  <div
    className={classNames(
      'pt-5 pb-10 px-4 lg:px-5 bg-section-content',
      className
    )}
  >
    {children}
  </div>
)
