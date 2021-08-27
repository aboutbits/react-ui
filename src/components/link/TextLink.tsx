import React from 'react'
import classNames from 'classnames'
import { useTheme, useLinkComponent, LinkComponentProps } from '../../framework'

const TextLink = React.forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, className, internal = true, ...props }, ref) => {
    const LinkComponent = useLinkComponent()
    const { textLink } = useTheme()
    return (
      <LinkComponent
        {...props}
        internal={internal}
        ref={ref}
        className={classNames(className, textLink.base)}
      >
        {children}
      </LinkComponent>
    )
  }
)

TextLink.displayName = 'TextLink'

export { TextLink }
