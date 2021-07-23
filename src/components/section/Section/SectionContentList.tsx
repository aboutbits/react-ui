import classNames from 'classnames'
import { SectionProps } from './Section'

export const SectionContentList: React.FC<SectionProps> = ({
  children,
  backgroundColor = 'gray-300',
  className,
}) => (
  <div className={classNames(`space-y-px bg-${backgroundColor}`, className)}>
    {children}
  </div>
)
