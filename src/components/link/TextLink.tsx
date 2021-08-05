import React from 'react'
import classNames from 'classnames'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import {
  useLinkComponent,
  LinkComponentProps,
} from '../../designSystem/router/LinkComponentContext'

const HTMLTextLink = React.forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, className, ...props }, ref) => {
    const { textLink } = useTheme()
    return (
      <a className={classNames(className, textLink.base)} {...props} ref={ref}>
        {children}
      </a>
    )
  }
)

HTMLTextLink.displayName = 'HTMLTextLink'

const TextLink = React.forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, ...props }, ref) => {
    const LinkComponent = useLinkComponent()
    return (
      <LinkComponent {...props} ref={ref}>
        {children}
      </LinkComponent>
    )
  }
)

TextLink.displayName = 'TextLink'

export { TextLink, HTMLTextLink }
