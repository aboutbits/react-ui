import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  useFloating,
} from '@floating-ui/react'
import {
  Menu as HeadlessMenu,
  MenuButton as HeadlessMenuButton,
  MenuItems as HeadlessMenuItems,
} from '@headlessui/react'
import classNames from 'classnames'
import { Fragment, ReactElement, ReactNode, ReactPortal } from 'react'
import { useTheme } from '../../framework'
import { remToPx } from '../util/remToPx'

export enum MenuPlacement {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
  TopStart = 'top-start',
  RightStart = 'right-start',
  BottomStart = 'bottom-start',
  LeftStart = 'left-start',
  TopEnd = 'top-end',
  RightEnd = 'right-end',
  BottomEnd = 'bottom-end',
  LeftEnd = 'left-end',
}

const placementUnionToPlacementEnum = (placement: `${MenuPlacement}`) => {
  const matchedEnumKey = Object.entries(MenuPlacement).find(
    ([_key, value]) => value === placement,
  )?.[0] as keyof typeof MenuPlacement
  return MenuPlacement[matchedEnumKey]
}

type ButtonComponent = ReactElement | ReactPortal

export type MenuProps = {
  className?: string
  children?: ReactNode
  button:
    | ButtonComponent
    | (({
        placement,
        open,
      }: {
        placement: MenuPlacement
        open: boolean
      }) => ButtonComponent)
  placement: MenuPlacement
}

/**
 * A dropdown menu that uses the `Menu` component of [HeadlessUI](https://headlessui.com/react/dialog) and the anchor positioning of [Floating UI](https://floating-ui.com).
 Menu items are added as children using the [MenuItem](/docs/components-menu-menuitem--docs) component.
 */
export function Menu({ className, children, button, placement }: MenuProps) {
  const { menu } = useTheme()

  const {
    refs,
    floatingStyles,
    placement: finalPlacement,
  } = useFloating({
    whileElementsMounted: autoUpdate,
    placement,
    strategy: 'absolute',
    middleware: [offset(remToPx(1)), flip({ padding: remToPx(1) })],
  })

  return (
    <HeadlessMenu as="div" className={classNames(menu.container, className)}>
      {({ open }) => (
        <>
          <HeadlessMenuButton as={Fragment} ref={refs.setReference}>
            {typeof button === 'function'
              ? button({
                  placement: placementUnionToPlacementEnum(finalPlacement),
                  open,
                })
              : button}
          </HeadlessMenuButton>
          {open && (
            <FloatingPortal>
              <HeadlessMenuItems
                ref={refs.setFloating}
                className={menu.list.base}
                style={floatingStyles}
                modal={false}
              >
                {children}
              </HeadlessMenuItems>
            </FloatingPortal>
          )}
        </>
      )}
    </HeadlessMenu>
  )
}
