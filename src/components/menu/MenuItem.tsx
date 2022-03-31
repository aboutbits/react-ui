import { MenuItem as ReachMenuItem } from '@reach/menu-button'
import classNames from 'classnames'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

type MenuItemProps = ClassNameProps & {
  /**
   * Defines which action should be executed on clicking.
   **/
  onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className,
  onClick,
}) => {
  const { menu } = useTheme()

  return (
    <ReachMenuItem
      className={classNames(menu.menuItem.base, className)}
      onSelect={onClick}
    >
      {children}
    </ReachMenuItem>
  )
}

export { MenuItem }
