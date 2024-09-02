import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'
import {
  LinkComponentProps,
  useLinkComponent,
  useTheme,
} from '../../../framework'
import { ClassNameProps } from '../../types'

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

function SectionListItemIcon() {
  const { section } = useTheme()

  return (
    <IconKeyboardArrowRight
      width="24"
      height="24"
      className={section.listItemButtonLink.icon}
    />
  )
}

export type SectionListItemButtonProps = ClassNameProps & {
  /**
   * On click handler for the button.
   */
  onClick: () => void
  children?: ReactNode
  withIcon?: boolean
}

export const SectionListItemButton = forwardRef<
  HTMLButtonElement,
  SectionListItemButtonProps
>(function SectionListItemButton(
  { children, onClick, className, withIcon = true, ...props },
  ref,
) {
  const { section } = useTheme()

  return (
    <button
      onClick={onClick}
      className={classNames(
        section.listItem.base,
        section.listItemButtonLink.base,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      {withIcon && <SectionListItemIcon />}
    </button>
  )
})

export type SectionListItemLinkProps = LinkComponentProps & {
  withIcon?: boolean
}

export const SectionListItemLink = forwardRef<
  HTMLAnchorElement,
  SectionListItemLinkProps
>(function SectionListItemLink(
  { children, className, internal = true, withIcon = true, ...props },
  ref,
) {
  const LinkComponent = useLinkComponent()
  const { section } = useTheme()

  return (
    <LinkComponent
      className={classNames(
        section.listItem.base,
        section.listItemButtonLink.base,
        className,
      )}
      internal={internal}
      ref={ref}
      {...props}
    >
      {children}
      {withIcon && <SectionListItemIcon />}
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
