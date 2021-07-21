import classNames from 'classnames'
import { SectionProps } from './Section'

export const SectionContentList: React.FC<SectionProps> = ({
  children,
  tone = 'gray-300',
  className = '',
}) => (
  <div className={classNames(`space-y-px bg-${tone}`, className)}>
    {children}
  </div>
)
