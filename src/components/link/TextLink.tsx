import classNames from 'classnames'
import { forwardRef } from 'react'
import { LinkComponentProps, useLinkComponent, useTheme } from '../../framework'

export const TextLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
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
  },
)
