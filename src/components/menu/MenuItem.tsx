import { MenuItem as ReachMenuItem } from '@reach/menu-button'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export type MenuItemProps = ClassNameProps & {
  /**
   * Defines which action should be executed on clicking.
   **/
  onClick: () => void
  children?: ReactNode
}

export function MenuItem({ children, className, onClick }: MenuItemProps) {
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
