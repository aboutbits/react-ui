import React from 'react'
import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'

enum Variant {
  primary = 'primary',
  black = 'black',
  white = 'white',
}

const variantStyles: Record<Variant, { variantClass: string }> = {
  [Variant.primary]: { variantClass: 'text-primary-700' },
  [Variant.black]: { variantClass: 'text-black' },
  [Variant.white]: { variantClass: 'text-white' },
}

type StyledLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  variant?: Variant
}

const TextLink = React.forwardRef<HTMLAnchorElement, StyledLinkProps>(
  ({ children, className, variant, ...props }, ref) => {
    const variantCSS = variant ? variantStyles[variant] : { variantClass: '' }
    return (
      <a
        className={classNames(
          className,
          variantCSS.variantClass,
          'text-xs underline hover:opacity-60 active:opacity-60'
        )}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

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
