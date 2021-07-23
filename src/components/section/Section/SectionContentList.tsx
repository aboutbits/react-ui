import classNames from 'classnames'
import { SectionProps } from './Section'

export const SectionContentList: React.FC<SectionProps> = ({
  children,
  className,
}) => (
  <div className={classNames('space-y-px bg-section-content-list', className)}>
    {children}
  </div>
)
