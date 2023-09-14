import { Menu as HeadlessMenu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { ClassNameProps, Size, Tone } from '../types'
import { Button, ButtonLink, ButtonVariant } from '../button'

export type MenuItemProps = ClassNameProps & {
  children: ReactNode
  disabled?: boolean
} & (
    | {
        onClick: () => void
        href?: never
      }
    | {
        onClick?: never
        href: string
      }
  )

const sharedProps = {
  variant: ButtonVariant.Transparent,
  size: Size.Sm,
  tone: Tone.Neutral,
  role: 'menuitem',
}

/**
 * This component is used to add an item to the [Menu](/docs/components-menu-menu--docs).
 *
 * It leverages on the `Menu` component of [HeadlessUI](https://headlessui.com/react/menu).
 */
export function MenuItem({
  className,
  disabled,
  onClick,
  href,
  children,
}: MenuItemProps) {
  return (
    <HeadlessMenu.Item as={Fragment}>
      {() => {
        return href === undefined ? (
          <Button
            className={className}
            disabled={disabled}
            {...sharedProps}
            onClick={onClick}
          >
            {children}
          </Button>
        ) : (
          <ButtonLink
            className={className}
            disabled={disabled}
            {...sharedProps}
            href={href}
          >
            {children}
          </ButtonLink>
        )
      }}
    </HeadlessMenu.Item>
  )
}
