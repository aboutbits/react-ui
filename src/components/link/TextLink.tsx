import React from 'react'
import classNames from 'classnames'
import { useTheme, useLinkComponent, LinkComponentProps } from '../../framework'

export const TextLink = React.forwardRef<HTMLAnchorElement, LinkComponentProps>(
  function TextLink({ children, className, internal = true, ...props }, ref) {
    const LinkComponent = useLinkComponent()
    const { link } = useTheme()
    return (
      <LinkComponent
        {...props}
        internal={internal}
        ref={ref}
        className={classNames(className, link.textLink.base)}
      >
        {children}
      </LinkComponent>
    )
  }
)
