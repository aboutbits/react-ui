import classNames from 'classnames'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import React, { ReactNode } from 'react'
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
    <div className={classNames(className, section.listItem.base)}>
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
}

export const SectionListItemButton = React.forwardRef<
  HTMLButtonElement,
  SectionListItemButtonProps
>(function SectionListItemButton(
  { children, onClick, className, ...props },
  ref,
) {
  const { section } = useTheme()

  return (
    <button
      onClick={onClick}
      className={classNames(
        section.listItemButton.base,
        section.listItem.base,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <IconKeyboardArrowRight
        width="24"
        height="24"
        className={section.listItemButton.icon}
      />
    </button>
  )
})

export type SectionListItemLinkProps = LinkComponentProps

export const SectionListItemLink = React.forwardRef<
  HTMLAnchorElement,
  SectionListItemLinkProps
>(function SectionListItemLink(
  { children, className, internal = true, ...props },
  ref,
) {
  const LinkComponent = useLinkComponent()
  const { section } = useTheme()

  return (
    <LinkComponent
      className={classNames(
        section.listItemLink.base,
        section.listItem.base,
        className,
      )}
      internal={internal}
      ref={ref}
      {...props}
    >
      {children}
      <IconKeyboardArrowRight
        width="24"
        height="24"
        className={section.listItemButton.icon}
      />
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
