import classNames from 'classnames'
import { SectionProps } from './Section'

// Keep backgroundColor: Benefit that you can just pass another tailwind bg-... class and it will work
// Remove backgroundColor: Less props and the user can change the background color by using className. A bit less explicit.

export const SectionContent: React.FC<SectionProps> = ({
  children,
  className,
  backgroundColor = 'bg-section-content',
}) => (
  <div
    className={classNames(
      `pt-5 pb-10 px-4 lg:px-5 ${backgroundColor}`,
      className
    )}
  >
    {children}
  </div>
)
