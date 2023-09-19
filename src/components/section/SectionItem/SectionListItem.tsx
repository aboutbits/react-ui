import classNames from 'classnames'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import IconArrowForwardIos from '@aboutbits/react-material-icons/dist/IconArrowForwardIos'
import { ReactNode, forwardRef } from 'react'
import {
  LinkComponentProps,
  useLinkComponent,
  useTheme,
} from '../../../framework'
import { ClassNameProps } from '../../types'
import { SectionListItemVariant } from '../types'

export type SectionListItemProps = ClassNameProps & {
  children?: ReactNode
}

export function SectionListItem({ className, children }: SectionListItemProps) {
  const { section } = useTheme()

  return (
    <div className={classNames(section.listItem.base, className)}>
      {children}
    </div>
  )
}

export type SectionListItemButtonProps = ClassNameProps & {
  /**
   * On click handler for the button.
   */
  onClick: () => void
  children?: ReactNode
  variant?: SectionListItemVariant
  badge?: ReactNode
}

export const SectionListItemButton = forwardRef<
  HTMLButtonElement,
  SectionListItemButtonProps
>(function SectionListItemButton(
  {
    children,
    onClick,
    className,
    variant = SectionListItemVariant.Compact,
    badge,
    ...props
  },
  ref,
) {
  const { section } = useTheme()

  const Icon =
    variant === SectionListItemVariant.Compact
      ? IconKeyboardArrowRight
      : IconArrowForwardIos

  return (
    <button
      onClick={onClick}
      className={classNames(
        section.listItem.base,
        section.listItem.variant[variant],
        section.listItemButton.base,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <div className={section.listItem.rightAlignedContainer.base}>
        {badge}
        <Icon width="24" height="24" className={section.listItem.icon} />
      </div>
    </button>
  )
})

export type SectionListItemLinkProps = LinkComponentProps & {
  variant?: SectionListItemVariant
  badge?: ReactNode
}

export const SectionListItemLink = forwardRef<
  HTMLAnchorElement,
  SectionListItemLinkProps
>(function SectionListItemLink(
  {
    variant = SectionListItemVariant.Compact,
    badge,
    children,
    className,
    internal = true,
    ...props
  },
  ref,
) {
  const LinkComponent = useLinkComponent()
  const { section } = useTheme()

  const Icon =
    variant === SectionListItemVariant.Compact
      ? IconKeyboardArrowRight
      : IconArrowForwardIos

  return (
    <LinkComponent
      className={classNames(
        section.listItem.base,
        section.listItem.variant[variant],
        section.listItemLink.base,
        className,
      )}
      internal={internal}
      ref={ref}
      {...props}
    >
      {children}
      <div className={section.listItem.rightAlignedContainer.base}>
        {badge}
        <Icon width="24" height="24" className={section.listItem.icon} />
      </div>
    </LinkComponent>
  )
})

type SectionListItemWithActionProps = ClassNameProps & {
  /**
   * The react node will be pushed to the right side of the section list item.
   */
  action: ReactNode
  children?: ReactNode
}

export function SectionListItemWithAction({
  children,
  action,
  className,
}: SectionListItemWithActionProps) {
  const { section } = useTheme()

  return (
    <SectionListItem
      className={classNames(section.listItemWithAction.base, className)}
    >
      {children}
      <div className={section.listItemWithAction.action.base}>{action}</div>
    </SectionListItem>
  )
}
