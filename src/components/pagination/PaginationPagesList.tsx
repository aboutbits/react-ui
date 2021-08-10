import classNames from 'classnames'
import { ClassNameProps } from '../types'
import { useTheme } from '../../designSystem/theme/ThemeContext'

export const PaginationPagesList: React.FC<ClassNameProps> = ({
  className,
  children,
}) => {
  const { section } = useTheme()

  return (
    <ul className={classNames(section.pagination.pagesList.base, className)}>
      {children}
    </ul>
  )
}

export const PaginationPagesListItem: React.FC = ({ children }) => (
  <li>{children}</li>
)
