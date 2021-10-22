import classNames from 'classnames'
import { ClassNameProps } from '../types'
import { useTheme } from '../../framework'

export const PaginationContainer: React.FC<ClassNameProps> = ({
  className,
  children,
}) => {
  const { pagination } = useTheme()

  return (
    <div className={classNames(pagination.container.base, className)}>
      {children}
    </div>
  )
}
