import { Menu as HeadlessMenu, MenuButtonProps } from '@headlessui/react'
import classNames from 'classnames'
import { ReactNode } from 'react'
import {
  autoUpdate,
  useFloating,
  flip,
  offset,
  Placement,
} from '@floating-ui/react'
import { useTheme } from '../../framework'
import { remToPx } from '../util/remToPx'

export type MenuProps = {
  children?: ReactNode
  className?: string
  buttonProps?: Omit<MenuButtonProps<'button'>, 'children' | 'className'>
  buttonChildren:
    | ReactNode
    | (({
        placement,
        open,
      }: {
        placement: Extract<Placement, 'bottom' | 'top'>
        open: boolean
      }) => ReactNode)
}

/**
 * A dropdown menu that uses the `Menu` component of [HeadlessUI](https://headlessui.com/react/dialog).
Menu items are added as children using the [MenuItem](/docs/components-menu-menuitem--docs) component.
 */
export function Menu({
  children,
  className,
  buttonProps,
  buttonChildren,
}: MenuProps) {
  const { menu } = useTheme()

  const { refs, floatingStyles, placement } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: 'bottom',
    strategy: 'absolute',
    middleware: [offset(remToPx(1)), flip({ padding: remToPx(1) })],
  })

  return (
    <HeadlessMenu>
      {({ open }) => (
        <div className={menu.menuContainer}>
          <HeadlessMenu.Button
            {...buttonProps}
            className={classNames(menu.menuButton.base, className)}
            ref={refs.setReference}
          >
            {typeof buttonChildren === 'function'
              ? buttonChildren({
                  placement: placement === 'top' ? 'top' : 'bottom',
                  open,
                })
              : buttonChildren}
          </HeadlessMenu.Button>
          <HeadlessMenu.Items
            ref={refs.setFloating}
            className={menu.menuList.base}
            style={{ ...floatingStyles }}
          >
            {children}
          </HeadlessMenu.Items>
        </div>
      )}
    </HeadlessMenu>
  )
}
