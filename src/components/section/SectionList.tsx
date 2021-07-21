import classNames from 'classnames'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'

export const SectionListEmpty: React.FC = ({ children }) => (
  <div
    className={classNames(
      'text-gray-100',
      'flex items-center justify-center py-4 px-4 lg:px-5 bg-gray-700'
    )}
  >
    {children}
  </div>
)

export const SectionListError: React.FC = ({ children }) => (
  <div
    className={classNames(
      'text-gray-100',
      'flex items-center justify-center py-4 px-4 lg:px-5 bg-gray-700 space-x-4'
    )}
  >
    <div className="p-1.5 bg-red-400 rounded-full">
      <IconWarning height={22} width={22} className="text-white fill-current" />
    </div>
    <span className="text-red-400">{children}</span>
  </div>
)
