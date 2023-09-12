import { Menu as HeadlessMenu } from '@headlessui/react'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { autoUpdate, useFloating, flip, offset } from '@floating-ui/react'
import { useTheme } from '../../framework'
import { remToPx } from '../util/remToPx'

export enum Placement {
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

const placementUnionToPlacementEnum = (placement: `${Placement}`) => {
  const matchedEnumKey = Object.entries(Placement).find(
    ([_key, value]) => value === placement,
  )?.[0] as keyof typeof Placement
  return Placement[matchedEnumKey]
}

export type MenuProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  buttonChildren:
    | ReactNode
    | (({
        placement,
        open,
      }: {
        placement: Placement
        open: boolean
      }) => ReactNode)
  placement: Placement
}

/**
 * A dropdown menu that uses the `Menu` component of [HeadlessUI](https://headlessui.com/react/dialog) and the anchor positioning of [Floating UI](https://floating-ui.com).
Menu items are added as children using the [MenuItem](/docs/components-menu-menuitem--docs) component.
 */
export function Menu({
  children,
  className,
  disabled,
  buttonChildren,
  placement,
}: MenuProps) {
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
    <HeadlessMenu>
      {({ open }) => (
        <div className={menu.menuContainer}>
          <HeadlessMenu.Button
            disabled={disabled}
            className={classNames(menu.menuButton.base, className)}
            ref={refs.setReference}
          >
            {typeof buttonChildren === 'function'
              ? buttonChildren({
                  placement: placementUnionToPlacementEnum(finalPlacement),
                  open,
                })
              : buttonChildren}
          </HeadlessMenu.Button>
          <HeadlessMenu.Items
            ref={refs.setFloating}
            className={menu.menuList.base}
            style={floatingStyles}
          >
            {children}
          </HeadlessMenu.Items>
        </div>
      )}
    </HeadlessMenu>
  )
}
