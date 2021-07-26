import classNames from 'classnames'
import { ClassNameProps } from '../types'

const LoadingBar: React.FC<ClassNameProps> = ({ className }) => (
  <div
    className={classNames('rounded animate-pulse bg-loading-bar', className)}
  />
)

export { LoadingBar }
