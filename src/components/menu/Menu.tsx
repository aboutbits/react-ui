import IconArrowDropUp from '@aboutbits/react-material-icons/dist/IconArrowDropUp'
import { Menu as HeadlessMenu } from '@headlessui/react'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { MenuDirection } from './types'

export type MenuProps = ClassNameProps & {
  /**
   * Defines the accessibility label for the menu.
   **/
  menuLabel: string
  /**
   * Defines the content to the left of the arrow button.
   **/
  menuButtonContent: ReactNode
  /**
   * Defines the id attribute for the menu button.
   **/
  menuButtonId?: string
  children?: ReactNode
  direction: MenuDirection
}

export function Menu({
  menuLabel,
  className,
  menuButtonContent,
  children,
  menuButtonId,
  direction,
}: MenuProps) {
  const { menu } = useTheme()

  const items = (
    <HeadlessMenu.Items
      className={classNames(
        menu.menuList.base,
        menu.menuList.direction[direction],
      )}
    >
      {children}
    </HeadlessMenu.Items>
  )
  return (
    <HeadlessMenu>
      {({ open }) => (
        <div className={menu.menuContainer}>
          {direction === MenuDirection.Up && items}
          <HeadlessMenu.Button
            id={menuButtonId}
            aria-label={menuLabel}
            className={classNames(menu.menuButton.base, className)}
          >
            {menuButtonContent}
            <span aria-hidden>
              <IconArrowDropUp
                className={classNames(
                  menu.menuButton.icon.base,
                  menu.menuButton.icon.direction[direction].state[
                    open ? 'open' : 'closed'
                  ],
                )}
              />
            </span>
          </HeadlessMenu.Button>
          {direction === MenuDirection.Down && items}
        </div>
      )}
    </HeadlessMenu>
  )
}
