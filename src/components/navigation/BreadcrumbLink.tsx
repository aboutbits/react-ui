import classNames from 'classnames'
import { ReactElement } from 'react'
import { LinkComponentProps, useLinkComponent, useTheme } from '../../framework'

export function BreadcrumbLink({
  internal = true,
  className,
  children,
  ...props
}: LinkComponentProps): ReactElement {
  const { navigation } = useTheme()
  const LinkComponent = useLinkComponent()

  return (
    <span className={classNames(navigation.breadcrumbLink.base, className)}>
      <LinkComponent
        internal={internal}
        className={navigation.breadcrumbLink.link}
        {...props}
      >
        {children}
      </LinkComponent>
    </span>
  )
}
