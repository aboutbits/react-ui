import classNames from 'classnames'
import { ReactElement } from 'react'
import { LinkComponentProps, useLinkComponent } from '../../framework'
import { TabProps, useTab } from './Tab'

export type TabLinkProps = LinkComponentProps & TabProps

export function TabLink({
  name,
  active,
  className,
  internal = true,
  children,
  ...props
}: TabLinkProps): ReactElement {
  const LinkComponent = useLinkComponent()
  const {
    ref,
    onClick,
    className: tabClassName,
  } = useTab<HTMLAnchorElement>({ name, active })

  return (
    <LinkComponent
      onClick={onClick}
      {...props}
      ref={ref}
      className={classNames(tabClassName, className)}
      internal={internal}
    >
      {children}
    </LinkComponent>
  )
}
