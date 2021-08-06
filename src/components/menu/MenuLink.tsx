import { UrlObject } from 'url'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { ComponentType } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useLinkComponent } from '../../designSystem/router/LinkComponentContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'

declare type Url = string | UrlObject

export type MenuLinkProps = {
  text: string
  icon: ComponentType<IconProps>
  strict?: boolean
  href: Url
}

const MenuLink: React.FC<MenuLinkProps> = ({
  text,
  icon: Icon,
  strict = false,
  ...props
}) => {
  const router = useRouter()
  const LinkComponent = useLinkComponent()
  const active = strict
    ? router.asPath === props.href
    : router.asPath.startsWith(props.href.toString())

  const { menu } = useTheme()

  return (
    <li>
      <LinkComponent {...props}>
        <a
          className={classNames(
            menu.link.base,
            menu.link.normal,
            active ? menu.link.active : menu.link.inactive
          )}
        >
          <Icon className={menu.link.icon.base} />
          <div className="flex-1">{text}</div>
        </a>
      </LinkComponent>
    </li>
  )
}

export { MenuLink }
