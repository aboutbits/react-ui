import React from 'react'
import classNames from 'classnames'
import { useTheme } from '../../framework/theme/ThemeContext'
import {
  useLinkComponent,
  LinkComponentProps,
} from '../../framework/router/LinkComponentContext'

const HtmlTextLink = React.forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, className, ...props }, ref) => {
    const { textLink } = useTheme()
    return (
      <a className={classNames(className, textLink.base)} {...props} ref={ref}>
        {children}
      </a>
    )
  }
)

HtmlTextLink.displayName = 'HtmlTextLink'

const TextLink = React.forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, className, ...props }, ref) => {
    const LinkComponent = useLinkComponent()
    const { textLink } = useTheme()
    return (
      <LinkComponent
        {...props}
        ref={ref}
        className={classNames(className, textLink.base)}
      >
        {children}
      </LinkComponent>
    )
  }
)

TextLink.displayName = 'TextLink'

export { TextLink, HtmlTextLink }
