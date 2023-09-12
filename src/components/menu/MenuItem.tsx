import { Menu as HeadlessMenu } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment, ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export type MenuItemProps = ClassNameProps & {
  children?: ReactNode
} & Pick<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'onClick'
  >

/**
 * This component is used to add an item to the [Menu](/docs/components-menu-menu--docs).
 *
 * It leverages on the `Menu` component of [HeadlessUI](https://headlessui.com/react/menu).
 */
export function MenuItem({ children, className, onClick }: MenuItemProps) {
  const { menu } = useTheme()

  return (
    <HeadlessMenu.Item as={Fragment}>
      {({ active }) => (
        <button
          className={classNames(
            menu.menuItem.base,
            active && menu.menuItem.active,
            className,
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
