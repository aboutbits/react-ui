import classnames from 'classnames'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import { ClassNameProps } from '../types'

type Props = ClassNameProps

export const ErrorMessage: React.FC<Props> = ({ className, children }) => {
  if (!children) {
    return null
  }

  return (
    <div
      className={classnames(
        'border border-error-message bg-error-message p-3 xl:col-span-2',
        className
      )}
    >
      <div className="flex items-center space-x-3">
        <div className="flex flex-shrink-0 justify-center items-center w-6 h-6 rounded-full bg-error-message-icon">
          <IconWarning className="w-4 h-4 text-error-message-icon fill-current" />
        </div>
        <div className="text-error-message-content overflow-hidden text-xs break-words">
          {children}
        </div>
      </div>
    </div>
  )
}
