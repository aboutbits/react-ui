import IconKeyboardArrowRightOutlinedFilled from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRightOutlinedFilled'
import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'
import {
  LinkComponentProps,
  useLinkComponent,
  useTheme,
} from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionListItemProps = ClassNameProps & {
  actionsArea?: ReactNode
  withIcon?: boolean
  children?: ReactNode
}

export function SectionListItem({
  actionsArea,
  withIcon = false,
  className,
  children,
}: SectionListItemProps) {
  const { section } = useTheme()

  return (
    <SectionListItemBase
      baseArea={
        <div className={classNames(section.listItem.base)}>
          <div className={section.listItem.childrenWrapper}>{children}</div>
        </div>
      }
      actionsArea={actionsArea}
      withIcon={withIcon}
      className={className}
    />
  )
}

function SectionListItemIcon() {
  const { section } = useTheme()

  return (
    <IconKeyboardArrowRightOutlinedFilled
      aria-hidden
      width="24"
      height="24"
      className={section.listItem.icon}
    />
  )
}

export type SectionListItemButtonProps = ClassNameProps & {
  actionsArea?: ReactNode
  withIcon?: boolean
  children?: ReactNode
  onClick: () => void
}

export const SectionListItemButton = forwardRef<
  HTMLButtonElement,
  SectionListItemButtonProps
>(function SectionListItemButton(
  { actionsArea, children, onClick, className, withIcon = true, ...props },
  ref,
) {
  const { section } = useTheme()

  return (
    <SectionListItemBase
      baseArea={
        <button
          onClick={onClick}
          className={classNames(
            section.listItem.base,
            section.listItemButtonLink.base,
          )}
          ref={ref}
          {...props}
        >
          <div className={section.listItem.childrenWrapper}>{children}</div>
        </button>
      }
      actionsArea={actionsArea}
      withIcon={withIcon}
      className={className}
    />
  )
})

export type SectionListItemLinkProps = LinkComponentProps & {
  withIcon?: boolean
  actionsArea?: ReactNode
}

export const SectionListItemLink = forwardRef<
  HTMLAnchorElement,
  SectionListItemLinkProps
>(function SectionListItemLink(
  {
    actionsArea,
    withIcon = true,
    internal = true,
    className,
    children,
    ...props
  },
  ref,
) {
  const LinkComponent = useLinkComponent()
  const { section } = useTheme()

  return (
    <SectionListItemBase
      baseArea={
        <LinkComponent
          className={classNames(
            section.listItem.base,
            section.listItemButtonLink.base,
          )}
          internal={internal}
          ref={ref}
          {...props}
        >
          <div className={section.listItem.childrenWrapper}>{children}</div>
        </LinkComponent>
      }
      actionsArea={actionsArea}
      withIcon={withIcon}
      className={className}
    />
  )
})

type SectionListItemWithActionProps = ClassNameProps & {
  /**
   * The react node will be pushed to the right side of the section list item.
   */
  action: ReactNode
  children?: ReactNode
}

/**
 * @deprecated Use the `actionsArea` prop of `SectionListItem`, `SectionListItemButton` or `SectionListItemLink` instead.
 */
export function SectionListItemWithAction({
  action,
  ...props
}: SectionListItemWithActionProps) {
  return <SectionListItem {...props} actionsArea={action} />
}

function SectionListItemBase({
  baseArea,
  actionsArea,
  withIcon = false,
  className,
}: {
  baseArea: ReactNode
  actionsArea?: ReactNode
  withIcon?: boolean
  className?: string
}) {
  const { section } = useTheme()

  return (
    <div className={classNames(section.listItem.container, className)}>
      {baseArea}
      {((actionsArea !== undefined &&
        actionsArea !== null &&
        actionsArea !== false) ||
        withIcon) && (
        <div className={section.listItem.rightArea}>
          {actionsArea}
          {withIcon && <SectionListItemIcon />}
        </div>
      )}
    </div>
  )
}
