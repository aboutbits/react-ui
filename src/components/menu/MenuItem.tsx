import { Menu as HeadlessMenu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import classNames from 'classnames'
import { ClassNameProps, Tone } from '../types'
import { useLinkComponent, useTheme } from '../../framework'

export type MenuItemProps = ClassNameProps & {
  children: ReactNode
  disabled?: boolean
  tone?: Tone.Neutral | Tone.Critical
  onClick?: () => void
  href?: string
}

const ROLE = 'menuitem'

/**
 * This component is used to add an item to the [Menu](/docs/components-menu-menu--docs).
 *
 * It leverages on the `Menu` component of [HeadlessUI](https://headlessui.com/react/menu).
 */
export function MenuItem({
  className,
  onClick,
  href,
  children,
  disabled,
  tone = Tone.Neutral,
}: MenuItemProps) {
  const LinkComponent = useLinkComponent()
  const {
    menu: { item: theme },
  } = useTheme()

  return (
    <HeadlessMenu.Item as={Fragment}>
      {({ active }) =>
        href === undefined ? (
          <button
            className={classNames(
              theme.base,
              active && theme.active.tone[tone],
              disabled ? theme.tone.disabled : theme.tone[tone],
              className,
            )}
            disabled={disabled}
            onClick={onClick}
            role={ROLE}
          >
            {children}
          </button>
        ) : (
          <LinkComponent
            className={classNames(
              theme.base,
              active && theme.active.tone[tone],
              disabled ? theme.tone.disabled : theme.tone[tone],
              className,
            )}
            disabled={disabled}
            role={ROLE}
            href={href}
          >
            {children}
          </LinkComponent>
        )
      }
    </HeadlessMenu.Item>
  )
}
