import classNames from 'classnames'
import { ClassNameProps } from '../types'
import { useTheme } from '../../designSystem/theme/ThemeContext'

export const PaginationContainer: React.FC<ClassNameProps> = ({
  className,
  children,
}) => {
  const { section } = useTheme()

  return (
    <div className={classNames(section.pagination.container.base, className)}>
      {children}
    </div>
  )
}
