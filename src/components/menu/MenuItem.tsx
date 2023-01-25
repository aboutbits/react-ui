import { Menu as HeadlessMenu } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment, ReactNode } from 'react'
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
    <HeadlessMenu.Item as={Fragment}>
      {({ active }) => (
        <button
          className={classNames(
            menu.menuItem.base,
            active && menu.menuItem.active,
            className
          )}
          onClick={onClick}
          type="button"
          role="menuitem"
        >
          {children}
        </button>
      )}
    </HeadlessMenu.Item>
  )
}
