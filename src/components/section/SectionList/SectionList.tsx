import classNames from 'classnames'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import { SectionProps } from '../Section/Section'

export const SectionListEmpty: React.FC<SectionProps> = ({
  children,
  className,
  backgroundColor = 'gray-700',
}) => (
  <div
    className={classNames(
      'text-gray-100',
      `flex items-center justify-center py-4 px-4 lg:px-5 bg-${backgroundColor}`,
      className
    )}
  >
    {children}
  </div>
)

export const SectionListError: React.FC<SectionProps> = ({
  children,
  className,
  backgroundColor = 'gray-700',
}) => (
  <div
    className={classNames(
      'text-gray-100',
      `flex items-center justify-center py-4 px-4 lg:px-5 bg-${backgroundColor} space-x-4`,
      className
    )}
  >
    <div className="p-1.5 bg-critical-700 rounded-full">
      <IconWarning height={22} width={22} className="text-white fill-current" />
    </div>
    <span className="text-critical-700">{children}</span>
  </div>
)
