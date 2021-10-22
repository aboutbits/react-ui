import classNames from 'classnames'
import { ClassNameProps } from '../types'
import { useTheme } from '../../framework'

export const PaginationPagesList: React.FC<ClassNameProps> = ({
  className,
  children,
}) => {
  const { pagination } = useTheme()

  return (
    <ul className={classNames(pagination.pagesList.base, className)}>
      {children}
    </ul>
  )
}

export const PaginationPagesListItem: React.FC = ({ children }) => (
  <li>{children}</li>
)
