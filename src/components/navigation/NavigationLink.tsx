import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { ComponentType } from 'react'
import classNames from 'classnames'
import { useLinkComponent } from '../../designSystem/router/LinkComponentContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { useRouter } from '../../designSystem/router/RouterContext'

export type MenuLinkProps = {
  text: string
  icon: ComponentType<IconProps>
  strict?: boolean
  href: string
}

const NavigationLink: React.FC<MenuLinkProps> = ({
  text,
  icon: Icon,
  strict = false,
  ...props
}) => {
  const LinkComponent = useLinkComponent()
  const router = useRouter()

  const active = strict
    ? router.asPath === props.href
    : router.asPath.startsWith(props.href.toString())

  const { menu } = useTheme()

  return (
    <li>
      <LinkComponent
        className={classNames(
          menu.link.base,
          menu.link.normal,
          active ? menu.link.active : menu.link.inactive
        )}
        {...props}
      >
        <Icon className={menu.link.icon.base} />
        <div className="flex-1">{text}</div>
      </LinkComponent>
    </li>
  )
}

export { NavigationLink }
