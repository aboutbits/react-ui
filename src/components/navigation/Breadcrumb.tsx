import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { LinkComponentProps, useLinkComponent, useTheme } from '../../framework'
import { LoadingBar } from '../loading'

function Link({
  internal = true,
  className,
  children,
  ...props
}: LinkComponentProps): ReactElement {
  const { navigation } = useTheme()
  const LinkComponent = useLinkComponent()

  return (
    <span>
      <LinkComponent
        internal={internal}
        className={classNames(navigation.breadcrumbLink.base, className)}
        {...props}
      >
        {children}
      </LinkComponent>
    </span>
  )
}

function Text({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}): ReactElement {
  const { navigation } = useTheme()

  return (
    <span className={classNames(navigation.breadcrumbText.base, className)}>
      {children}
    </span>
  )
}

function Loading({
  className,
  loadingBarClassName,
}: {
  className?: string
  loadingBarClassName?: string
}): ReactElement {
  const { navigation } = useTheme()

  return (
    <div className={classNames(navigation.breadcrumbLoading.base, className)}>
      <LoadingBar
        className={classNames(
          navigation.breadcrumbLoading.loadingBar,
          loadingBarClassName
        )}
      />
    </div>
  )
}

export const Breadcrumb = {
  Link,
  Text,
  Loading,
}
