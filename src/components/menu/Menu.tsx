import { Menu as HeadlessMenu } from '@headlessui/react'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { autoUpdate, useFloating, flip, offset } from '@floating-ui/react'
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

export type MenuProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  'aria-label'?: string
  buttonChildren:
    | ReactNode
    | (({
        placement,
        open,
      }: {
        placement: MenuPlacement
        open: boolean
      }) => ReactNode)
  placement: MenuPlacement
}

/**
 * A dropdown menu that uses the `Menu` component of [HeadlessUI](https://headlessui.com/react/dialog) and the anchor positioning of [Floating UI](https://floating-ui.com).
Menu items are added as children using the [MenuItem](/docs/components-menu-menuitem--docs) component.
 */
export function Menu({
  children,
  className,
  buttonChildren,
  placement,
  ...props
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
            className={classNames(
              menu.menuButton.base,
              props.disabled && menu.menuButton.disabled,
              className,
            )}
            ref={refs.setReference}
            {...props}
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
