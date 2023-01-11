import classNames from 'classnames'
import { ReactElement } from 'react'
import { LinkComponentProps, useLinkComponent, useTheme } from '../../framework'

export function BreadcrumbLink({
  internal = true,
  className,
  children,
  ...props
}: LinkComponentProps): ReactElement {
  const { breadcrumbs } = useTheme()
  const LinkComponent = useLinkComponent()

  return (
    <span className={classNames(breadcrumbs.breadcrumbLink.base, className)}>
      <LinkComponent
        internal={internal}
        className={breadcrumbs.breadcrumbLink.link}
        {...props}
      >
        {children}
      </LinkComponent>
    </span>
  )
}
