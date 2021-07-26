import classNames from 'classnames'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps

export const SectionContent: React.FC<Props> = ({ children, className }) => (
  <div
    className={classNames(
      'pt-5 pb-10 px-4 lg:px-5 bg-section-content',
      className
    )}
  >
    {children}
  </div>
)
