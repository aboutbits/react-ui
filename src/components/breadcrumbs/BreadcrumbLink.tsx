import classNames from 'classnames'
import { ReactElement } from 'react'
import { LinkComponentProps, useLinkComponent, useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export type BreadcrumbLinkProps = ClassNameProps &
  Pick<LinkComponentProps, 'href' | 'children'> & {
    linkProps?: Omit<LinkComponentProps, 'href' | 'children'> &
      Partial<Pick<LinkComponentProps, 'href'>>
  }

export function BreadcrumbLink({
  href,
  className,
  children,
  linkProps,
}: BreadcrumbLinkProps): ReactElement {
  const { breadcrumbs } = useTheme()
  const LinkComponent = useLinkComponent()

  return (
    <span className={classNames(breadcrumbs.breadcrumbLink.base, className)}>
      <LinkComponent
        href={href}
        className={breadcrumbs.breadcrumbLink.link}
        {...({
          ...linkProps,
          internal: linkProps?.internal ?? true,
        } as BreadcrumbLinkProps['linkProps'])}
      >
        {children}
      </LinkComponent>
    </span>
  )
}
