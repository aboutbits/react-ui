import React from 'react'
import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { useTheme } from '../../designSystem/theme/ThemeContext'

enum Variant {
  primary = 'primary',
  black = 'black',
  white = 'white',
}

type StyledLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  variant?: Variant
}

const TextLink = React.forwardRef<HTMLAnchorElement, StyledLinkProps>(
  ({ children, className, variant, ...props }, ref) => {
    const { textLink } = useTheme()
    const variantCSS = variant ? textLink.variant[variant] : ''
    return (
      <a
        className={classNames(className, variantCSS, textLink.base)}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

TextLink.displayName = 'TextLink'

const NextStyledLink: React.FC<StyledLinkProps & Pick<LinkProps, 'href'>> = ({
  children,
  href,
  ...props
}) => {
  return (
    <Link href={href} passHref>
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <TextLink {...props}>{children}</TextLink>
      }
    </Link>
  )
}

export { NextStyledLink, TextLink, Variant as StyledLinkVariant }
export type { StyledLinkProps }
